import React, { Component } from "react";

export default class InputFullSalary extends Component {
  handleChangeInput = (event) => {
    const { onChangeSalary } = this.props;
    const newValue = event.target.value;
    onChangeSalary(newValue);
  };

  render() {
    const { fullSalary } = this.props;

    return (
      <>
        <label>
          Salário Bruto
          <input
            type="number"
            value={fullSalary}
            onChange={this.handleChangeInput}
          />
        </label>
      </>
    );
  }
}
