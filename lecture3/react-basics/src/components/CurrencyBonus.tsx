import currency from "currency.js";
import React from "react";

export const CurrencyBonus = () => {
  const onChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const num = Number(e.currentTarget.value) || 0;
    const rnd = Math.random(); // 0..1
    const sum = currency(num).add(rnd).value;
    console.log(sum);
  };

  return (
    <li>
      Бонус (currency.js):{" "}
      <input
        type="number"
        step="0.01"
        placeholder="Введите число"
        onChange={onChange}
      />
    </li>
  );
};
