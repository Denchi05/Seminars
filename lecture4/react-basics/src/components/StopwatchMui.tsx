import { useEffect, useMemo, useState } from "react";
import {
  Box,
  Button,
  Container,
  Divider,
  List,
  ListItem,
  ListItemText,
  Paper,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";

type Speed = 0.5 | 1 | 2;

const pad2 = (n: number) => String(n).padStart(2, "0");

const formatTime = (totalSeconds: number) => {
  const m = Math.floor(totalSeconds / 60);
  const s = totalSeconds % 60;
  return `${pad2(m)}:${pad2(s)}`;
};

export const StopwatchMui = () => {
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(false);
  const [speed, setSpeed] = useState<Speed>(1);
  const [laps, setLaps] = useState<number[]>([]);

  const tickMs = useMemo(() => 1000 / speed, [speed]); 

  useEffect(() => {
    if (!running) return;

    const id = window.setInterval(() => {
      setSeconds((s) => s + 1);
    }, tickMs);

    return () => window.clearInterval(id); 
  }, [running, tickMs]);

  const onStartStop = () => setRunning((r) => !r);

  const onReset = () => {
    setRunning(false);
    setSeconds(0);
    setLaps([]);
    setSpeed(1);
  };

  const onLap = () => {
    if (!running) return;
    setLaps((prev) => [...prev, seconds]);
  };

  const onSpeedChange = (_: unknown, value: Speed | null) => {
    if (value) setSpeed(value); 
  };

  return (
    <Container maxWidth="sm" sx={{ py: 4 }}>
      <Paper elevation={3} sx={{ p: 3, borderRadius: 3 }}>
        <Stack spacing={2}>
          <Typography variant="h4">Секундомер</Typography>

          <Box>
            <Typography variant="h2" sx={{ fontVariantNumeric: "tabular-nums" }}>
              {formatTime(seconds)}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Скорость: x{speed} {running ? "• работает" : "• остановлен"}
            </Typography>
          </Box>

          <ToggleButtonGroup
            value={speed}
            exclusive
            onChange={onSpeedChange}
            aria-label="speed"
            size="small"
          >
            <ToggleButton value={0.5}>x0.5</ToggleButton>
            <ToggleButton value={1}>x1</ToggleButton>
            <ToggleButton value={2}>x2</ToggleButton>
          </ToggleButtonGroup>

          <Stack direction="row" spacing={1}>
            <Button variant="contained" onClick={onStartStop}>
              {running ? "Стоп" : "Старт"}
            </Button>

            <Button variant="outlined" onClick={onLap} disabled={!running}>
              Круг
            </Button>

            <Button variant="text" color="error" onClick={onReset}>
              Сброс
            </Button>
          </Stack>

          <Divider />

          <Typography variant="h6">Круги</Typography>

          {laps.length === 0 ? (
            <Typography color="text.secondary">Пока нет кругов</Typography>
          ) : (
            <List dense>
              {laps.map((sec, idx) => (
                <ListItem key={`${sec}-${idx}`} divider>
                  <ListItemText
                    primary={`Круг ${idx + 1}`}
                    secondary={formatTime(sec)}
                  />
                </ListItem>
              ))}
            </List>
          )}
        </Stack>
      </Paper>
    </Container>
  );
};
