import { Component } from 'react';
import { Stats } from './Feedback.styled';

export class Feedback extends Component {
  getPosPercentage = () => {
    const { good, neutral, bad } = this.props.stats;
    if (good) {
      const posPercentage = ((good / (good + bad + neutral)) * 100).toFixed(1);

      return posPercentage;
    }
    return 0;
  };
  render() {
    const { good, neutral, bad } = this.props.stats;
    const displayRows = [
      { name: 'good', st: good },
      { name: 'neutral', st: neutral },
      { name: 'bad', st: bad },
      { name: 'total', st: bad + good + neutral },
      { name: 'positive percentage', st: `${this.getPosPercentage()}%` },
    ];
    return (
      <Stats>
        {displayRows.map(el => (
          <li key={el.name}>
            <p>
              {el.name}: {el.st}
            </p>
          </li>
        ))}
      </Stats>
    );
  }
}
export default Feedback;
