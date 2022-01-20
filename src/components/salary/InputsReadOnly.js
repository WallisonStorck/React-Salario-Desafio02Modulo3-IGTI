import React, { Component } from "react";

export default class InputsReadOnly extends Component {
  render() {
    const { inssBase, inssDiscount, irpfBase, irpfDiscount, netSalary } =
      this.props;

    return (
      <>
        <label>
          Base INSS:
          <input type="number" name="inssBase" value={inssBase} readOnly />
        </label>

        <label>
          Desconto INSS:
          <input
            type="number"
            name="inssDiscount"
            value={inssDiscount}
            readOnly
          />
        </label>

        <label>
          Base IRPF:
          <input type="number" name="irpfBase" value={irpfBase} readOnly />
        </label>

        <label>
          Desconto IRPF:
          <input
            type="number"
            name="irpfDiscount"
            value={irpfDiscount}
            readOnly
          />
        </label>

        <label>
          Salário liquido:
          <input type="number" name="netSalary" value={netSalary} readOnly />
        </label>
      </>
    );
  }
}
