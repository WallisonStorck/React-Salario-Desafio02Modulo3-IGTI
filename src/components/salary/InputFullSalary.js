import React from "react";

export default function InputFullSalary(props) {
  const handleChangeInput = (event) => {
    const { onChangeSalary } = props;
    const newValue = +event.target.value;
    onChangeSalary(newValue);
  };

  const { currentValue } = props;

  return (
    <>
      <label>
        Salário Bruto
        <input
          autoFocus
          type="number"
          value={currentValue}
          step="10"
          onChange={handleChangeInput}
        />
      </label>
    </>
  );
}
