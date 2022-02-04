import React, { Component } from "react";
import { formatCurrency } from "../helpers/formatters";
import css from "./Inputs.module.css";

export default class InputsReadOnly extends Component {
  render() {
    const {
      inssBase,
      inssDiscount,
      irpfBase,
      irpfDiscount,
      netSalary,
      percentDiscountINSS,
      percentDiscountIRPF,
      percentNetSalary,
    } = this.props;

    console.log(formatCurrency(inssBase));

    return (
      <>
        <div className={css.inputsDiscounts}>
          <label className={css.inputsReadOnly}>
            Base INSS:
            <input type="text" value={formatCurrency(inssBase)} readOnly />
          </label>

          <label className={css.inputsReadOnly}>
            Desconto INSS:
            <input
              style={{ color: "#e67e22" }}
              type="text"
              value={`${formatCurrency(inssDiscount)} (${percentDiscountINSS})`}
              readOnly
            />
          </label>

          <label className={css.inputsReadOnly}>
            Base IRPF:
            <input type="text" value={formatCurrency(irpfBase)} readOnly />
          </label>

          <label className={css.inputsReadOnly}>
            Desconto IRPF:
            <input
              style={{ color: "#c0392b" }}
              type="text"
              value={`${formatCurrency(irpfDiscount)} (${percentDiscountIRPF})`}
              readOnly
            />
          </label>
        </div>

        <label className={css.inputsReadOnly}>
          Salário liquido:
          <input
            style={{ color: " #16a085" }}
            type="text"
            value={`${formatCurrency(netSalary)} (${percentNetSalary})`}
            readOnly
          />
        </label>
      </>
    );
  }
}
