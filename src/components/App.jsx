import React, { Component } from 'react';
import {FeedbackOptions} from './Feedback/FeedbackOptions'
import { Feedback } from './Feedback'
export class App extends Component{
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  handleBtnClick = (el) => {
    this.setState((prevState)=>({...prevState, [el]: prevState[el]+1}))
  }
  countTotalFeedback = () => {
    
  }
  render() {
    const { good, neutral, bad } = this.state, total = good + neutral + bad;
    
    return (
      <div>
        <h1>Feedback options</h1>
        <FeedbackOptions options={['good', 'neutral', 'bad']} clickFn={this.handleBtnClick} />
        <h2>Statistics</h2>
        {total?<Feedback stats={ this.state} />:"thre is nothing here"}
      </div>
    );
  }
};
