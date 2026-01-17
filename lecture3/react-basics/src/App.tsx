import "./App.css";

import { EnergyFormula } from "./components/EnergyFormula";
import { PythagorasFormula } from "./components/PythagorasFormula";
import { CylinderVolumeFormula } from "./components/CylinderVolumeFormula";
import { QuadraticFormula } from "./components/QuadraticFormula";
import { SquareOfSumFormula } from "./components/SquareOfSumFormula";
import { WaterFormula } from "./components/WaterFormula";
import { LogarithmFormula } from "./components/LogarithmFormula";
import { CurrencyBonus } from "./components/CurrencyBonus";

export default function App() {
  return (
    <div style={{ maxWidth: 900, margin: "0 auto", padding: 24 }}>
      <h1>Формулы для верстки</h1>

      <ol style={{ lineHeight: 1.8 }}>
        <EnergyFormula />
        <PythagorasFormula />
        <CylinderVolumeFormula />
        <QuadraticFormula />
        <SquareOfSumFormula />
        <WaterFormula />
        <LogarithmFormula />
        <CurrencyBonus />
      </ol>
    </div>
  );
}
