import React, { Component } from "react";

export default class InputFullSalary extends Component {
  handleChangeInput = (event) => {
    const { onChangeSalary } = this.props;
    const newValue = +event.target.value;
    onChangeSalary(newValue);
  };

  render() {
    const { currentValue } = this.props;

    return (
      <>
        <label>
          Salário Bruto
          <input
            autoFocus
            type="number"
            value={currentValue}
            step="10"
            onChange={this.handleChangeInput}
          />
        </label>
      </>
    );
  }
}
