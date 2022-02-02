import React, { Component } from "react";
import css from "./ProgressBar.module.css";

export default class ProgressBarSalary extends Component {
  render() {
    return (
      <>
        <h5>ProgressBarSalary.js</h5>
        <div className={css.progressBarContainer}>
          <div className={`${css.progressBarINSS} ${css.progressBar}`}></div>
          <div className={`${css.progressBarIRPF} ${css.progressBar}`}></div>
          <div
            className={`${css.progressBarNetSalary} ${css.progressBar}`}
          ></div>
        </div>
      </>
    );
  }
}
