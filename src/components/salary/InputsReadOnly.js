import React, { Component } from "react";
import css from "./Inputs.module.css";

export default class InputsReadOnly extends Component {
  render() {
    const { inssBase, inssDiscount, irpfBase, irpfDiscount, netSalary } =
      this.props;

    return (
      <>
        <div className={css.inputsDiscounts}>
          <label className={css.inputsReadOnly}>
            Base INSS:
            <input type="text" value={`R$ ${inssBase}`} readOnly />
          </label>

          <label className={css.inputsReadOnly}>
            Desconto INSS:
            <input
              type="text"
              value={`R$ ${inssDiscount.toFixed(2)}`}
              readOnly
            />
          </label>

          <label className={css.inputsReadOnly}>
            Base IRPF:
            <input type="text" value={`R$ ${irpfBase.toFixed(2)}`} readOnly />
          </label>

          <label className={css.inputsReadOnly}>
            Desconto IRPF:
            <input
              type="text"
              value={`R$ ${irpfDiscount.toFixed(2)}`}
              readOnly
            />
          </label>
        </div>

        <label className={css.inputsReadOnly}>
          Salário liquido:
          <input type="text" value={`R$ ${netSalary.toFixed(2)}`} readOnly />
        </label>
      </>
    );
  }
}
