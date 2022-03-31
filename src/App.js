import React, { Component } from "react";
import InputFullSalary from "./components/salary/InputFullSalary";
import InputsReadOnly from "./components/salary/InputsReadOnly";
import { calculateSalaryFrom } from "./components/helpers/salary";
import ProgressBarSalary from "./components/ProgressBarSalary";

const COLOR_INSS = "#e67e22";
const COLOR_IRPF = "#c0392b";
const COLOR_NET_SALARY = "#16a085";
const minimalSalary = 1212;

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      fullSalary: minimalSalary,
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
          <InputsReadOnly label={"Base INSS:"} value={baseINSS} />
          <InputsReadOnly
            label={"Desconto INSS:"}
            color={COLOR_INSS}
            value={discountINSS}
            percentage={percentDiscountINSS}
          />
          <InputsReadOnly label={"Base IRPF:"} value={baseIRPF} />
          <InputsReadOnly
            label={"Desconto IRPF:"}
            color={COLOR_IRPF}
            value={discountIRPF}
            percentage={percentDiscountIRPF}
          />
        </div>

        <div className="row">
          <InputsReadOnly
            label={"Salario Liquido:"}
            color={COLOR_NET_SALARY}
            value={netSalary}
            percentage={percentNetSalary}
          />
        </div>

        <div className="row">
          <ProgressBarSalary
            percentDiscountINSS={percentDiscountINSS}
            percentDiscountIRPF={percentDiscountIRPF}
            percentNetSalary={percentNetSalary}
          />
        </div>
      </div>
    );
  }
}
