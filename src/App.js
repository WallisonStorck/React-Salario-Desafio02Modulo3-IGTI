import React, { Component } from "react";
import InputFullSalary from "./components/salary/InputFullSalary";
import InputsReadOnly from "./components/salary/InputsReadOnly";
import { calculateSalaryFrom, round } from "./components/helpers/salary";
import ProgressBarSalary from "./components/ProgressBarSalary";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      fullSalary: 1212,
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

    const { baseINSS, discountINSS, baseIRPF, discountIRPF, netSalary } =
      calculateSalaryFrom(newValue);

    this.setState({
      inssBase: baseINSS,
      inssDiscount: discountINSS,
      irpfBase: baseIRPF,
      irpfDiscount: discountIRPF,
      netSalary,
    });
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

    const percentDiscountINSS = round((inssDiscount * 100) / fullSalary) + "%";
    const percentDiscountIRPF = round((irpfDiscount * 100) / fullSalary) + "%";
    const percentNetSalary = round((netSalary * 100) / fullSalary) + "%";

    return (
      <div style={{ margin: "30px" }}>
        <h1 style={{ textAlign: "center" }}>React Salário</h1>

        <InputFullSalary
          currentValue={fullSalary}
          onChangeSalary={this.handleChangeInputFullSalary}
        />

        <InputsReadOnly
          inssBase={inssBase}
          inssDiscount={inssDiscount}
          irpfBase={irpfBase}
          irpfDiscount={irpfDiscount}
          netSalary={netSalary}
          percentDiscountINSS={percentDiscountINSS}
          percentDiscountIRPF={percentDiscountIRPF}
          percentNetSalary={percentNetSalary}
        />

        <ProgressBarSalary
          percentDiscountINSS={percentDiscountINSS}
          percentDiscountIRPF={percentDiscountIRPF}
          percentNetSalary={percentNetSalary}
        />
      </div>
    );
  }
}
