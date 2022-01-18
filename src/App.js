import React, { Component } from "react";
import InputFullSalary from "./components/salary/InputFullSalary";
import InputsReadOnly from "./components/salary/InputsReadOnly";
import { calculateSalaryFrom } from "./components/helpers/salary";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      fullSalary: 0,
      inssBase: 0,
      inssDiscount: 0,
      irpfBase: 0,
      irpfDiscount: 0,
      netSalary: 0,
    };
  }

  handleChangeInputFullSalary = (newValue) => {
    this.setState({
      fullSalary: newValue,
    });

    console.log(calculateSalaryFrom(newValue));
    // VALORES CHEGANDO...
  };

  render() {
    const {
      fullSalary,
      inssBase,
      inssDiscount,
      irpfBase,
      irpfDiscount,
      netSalary,
    } = this.state;

    return (
      <>
        <h1>React Salário</h1>

        <InputFullSalary
          fullSalary={fullSalary}
          onChangeSalary={this.handleChangeInputFullSalary}
        />

        <InputsReadOnly
          inssBase={inssBase}
          inssDiscount={inssDiscount}
          irpfBase={irpfBase}
          irpfDiscount={irpfDiscount}
          netSalary={netSalary}
        />
      </>
    );
  }
}
