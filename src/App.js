import React, { Component } from "react";
import InputFullSalary from "./components/salary/InputFullSalary";
import InputsReadOnly from "./components/salary/InputsReadOnly";
import { calculateSalaryFrom } from "./components/helpers/salary";
import ProgressBarSalary from "./components/ProgressBarSalary";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      fullSalary: 1212,
    };
  }

  handleChangeInputFullSalary = (newValue) => {
    this.setState({
      fullSalary: newValue,
    });
  };

  render() {
    const { fullSalary } = this.state;

    const salaryObject = calculateSalaryFrom(fullSalary);
    const {
      baseINSS,
      discountINSS,
      percentDiscountINSS,
      baseIRPF,
      discountIRPF,
      percentDiscountIRPF,
      netSalary,
      percentNetSalary,
    } = salaryObject;

    return (
      // <div style={{ margin: "30px" }}>
      <div className="container">
        <h1 style={{ textAlign: "center" }}>React Salário</h1>

        <div className="row">
          <InputFullSalary
            currentValue={fullSalary}
            onChangeSalary={this.handleChangeInputFullSalary}
          />
        </div>

        <div
          className="row"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <InputsReadOnly
            label={"Base INSS:"}
            color={"black"}
            value={baseINSS}
          />
          <InputsReadOnly
            label={"Desconto INSS:"}
            color={"#e67e22"}
            value={discountINSS}
            percentage={percentDiscountINSS}
          />
          <InputsReadOnly
            label={"Base IRPF:"}
            color={"black"}
            value={baseIRPF}
          />
          <InputsReadOnly
            label={"Desconto IRPF:"}
            color={"#c0392b"}
            value={discountIRPF}
            percentage={percentDiscountIRPF}
          />
        </div>

        <div className="row">
          <InputsReadOnly
            label={"Salario Liquido:"}
            color={"#16a085"}
            value={netSalary}
            percentage={percentNetSalary}
          />
        </div>

        <ProgressBarSalary
          percentDiscountINSS={percentDiscountINSS}
          percentDiscountIRPF={percentDiscountIRPF}
          percentNetSalary={percentNetSalary}
        />
      </div>
    );
  }
}
