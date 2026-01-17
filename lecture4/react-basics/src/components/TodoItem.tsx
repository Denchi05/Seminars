type TodoItemProps = {
  text: string;
  done: boolean;
  onToggle: () => void;
  onDelete: () => void;
};

export const TodoItem = ({ text, done, onToggle, onDelete }: TodoItemProps) => {
  return (
    <li style={{ display: "flex", gap: 8, alignItems: "center" }}>
      <span style={{ textDecoration: done ? "line-through" : "none" }}>{text}</span>

      <button type="button" onClick={onToggle}>
        {done ? "Не выполнено" : "Выполнено"}
      </button>

      <button type="button" onClick={onDelete}>
        Удалить
      </button>
    </li>
  );
};
