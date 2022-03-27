import React, { Component } from "react";
import { formatCurrency } from "../helpers/formatters";

export default class InputsReadOnly extends Component {
  render() {
    const { label, color, value, percentage } = this.props;

    const formattedPercentage = percentage > 0 ? `(${percentage})%` : "";
    const formattedValue = `${formatCurrency(value)} ${formattedPercentage}`;

    return (
      <>
        <label style={{ width: "24%", display: "inline-block" }}>
          {label}
          <input
            type="text"
            style={{ color: color }}
            value={formattedValue}
            readOnly
          />
        </label>
      </>
    );
  }
}
