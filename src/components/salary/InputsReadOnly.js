import React, { Component } from "react";

export default class InputsReadOnly extends Component {
  render() {
    return (
      <>
        <label>
          Base INSS:
          <input type="number" name="inssBase" readOnly />
        </label>

        <label>
          Desconto INSS:
          <input type="number" name="inssDiscount" readOnly />
        </label>

        <label>
          Base IRPF:
          <input type="number" name="irpfBase" readOnly />
        </label>

        <label>
          Desconto IRPF:
          <input type="number" name="irpfDiscount" readOnly />
        </label>

        <label>
          Salário liquido:
          <input type="number" name="netSalary" readOnly />
        </label>
      </>
    );
  }
}
