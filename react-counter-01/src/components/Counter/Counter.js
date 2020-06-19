//rcc - atalho vscode
import React, { Component } from 'react';
import css from './counter.module.css';
import IncrementButton from './IncrementButton';
import DecrementButton from './DecrementButton';
import Value from './Value';
import Steps from './Steps';

export default class Counter extends Component {
  constructor() {
    //é obrigatório colocar o 'super();'
    super();
    this.state = {
      currentCounter: 2,
      steps: 0,
    };
  }

  handleButtonClick = (clicktType) => {
    const { currentCounter, steps } = this.state;
    this.setState({
      currentCounter:
        clicktType === '+' ? currentCounter + 1 : currentCounter - 1,
      steps: steps + 1,
    });
  };

  render() {
    const { currentCounter, steps } = this.state;
    return (
      <div className={css.counterContainer}>
        <DecrementButton onDecrement={this.handleButtonClick} />
        <Value value={currentCounter} />
        <IncrementButton onIncrement={this.handleButtonClick} />
        <Steps currentSteps={steps} />
      </div>
    );
  }
}
