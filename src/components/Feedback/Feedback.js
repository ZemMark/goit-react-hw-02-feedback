import React, { Component } from 'react';
import { Buttons, Stats } from './Feedback.styled';
export class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    positive: null,
  };
  onFeedbackClick = e => {
    let stateToChange = e.target.name;
    this.setState(
      prevState => ({
        [stateToChange]: prevState[stateToChange] + 1,
      }),
      () => this.countTotalFeedbacks()
    );
  };
  countTotalFeedbacks = () => {
    const { good, bad, neutral } = this.state;
    const totalFeedbacks = good + bad + neutral;
    this.setState(prevState => ({ total: totalFeedbacks }));

    this.setState(prevState => ({
      positive: this.getPositivePercentage(totalFeedbacks).toFixed(2),
    }));
  };
  getPositivePercentage = total => {
    if (total > 0) return (this.state.good / this.state.total) * 100;
  };
  render() {
    const positive = this.getPositivePercentage(this.state.total);
    return (
      <div>
        <Buttons>
          <li>
            <button name="good" type="button" onClick={this.onFeedbackClick}>
              good
            </button>
          </li>
          <li>
            <button name="neutral" type="button" onClick={this.onFeedbackClick}>
              neutral
            </button>
          </li>
          <li>
            <button name="bad" type="button" onClick={this.onFeedbackClick}>
              bad
            </button>
          </li>
        </Buttons>
        <Stats>
          <li>
            <p>Good: </p>
            <span>{this.state.good}</span>
          </li>
          <li>
            <p>Neutral: </p>
            <span>{this.state.neutral}</span>
          </li>
          <li>
            <p>Bad: </p>
            <span>{this.state.bad}</span>
          </li>
          <li>
            <p>Total: </p>
            <span>{this.state.total}</span>
          </li>
          <li>
            <p>Positive percentege: </p>
            <span>{positive}</span>
          </li>
        </Stats>
      </div>
    );
  }
}
