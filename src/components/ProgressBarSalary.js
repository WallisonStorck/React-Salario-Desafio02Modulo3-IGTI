import React, { Component } from "react";
import css from "./ProgressBar.module.css";

export default class ProgressBarSalary extends Component {
  render() {
    const { percentDiscountINSS, percentDiscountIRPF, percentNetSalary } =
      this.props;

    return (
      <>
        <div className={css.progressBarContainer}>
          <div
            style={{ width: `${percentDiscountINSS}%` }}
            className={`${css.progressBarINSS} ${css.progressBar}`}
          ></div>
          <div
            style={{ width: `${percentDiscountIRPF}%` }}
            className={`${css.progressBarIRPF} ${css.progressBar}`}
          ></div>
          <div
            style={{ width: `${percentNetSalary}%` }}
            className={`${css.progressBarNetSalary} ${css.progressBar}`}
          ></div>
        </div>
      </>
    );
  }
}
