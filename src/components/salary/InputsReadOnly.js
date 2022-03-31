import React from "react";
import { formatCurrency, formatPercent } from "../helpers/formatters";

export default function InputsReadOnly(props) {
  const { label, color = "black", value, percentage } = props;

  const formattedPercentage =
    percentage > 0 ? `(${formatPercent(percentage)})` : "";
  const formattedValue = `${formatCurrency(value)} ${formattedPercentage}`;

  return (
    <>
      <label style={{ width: "24%", display: "inline-block" }}>
        {label}
        <input
          type="text"
          style={{ color: color, fontWeight: "bold" }}
          value={formattedValue}
          readOnly
        />
      </label>
    </>
  );
}
