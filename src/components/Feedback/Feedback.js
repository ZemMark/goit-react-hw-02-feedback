import { Stats } from './Feedback.styled';

export function Feedback({ stats }) {
  const getPosPercentage = () => {
    const { good, neutral, bad } = stats;
    if (good) {
      const posPercentage = ((good / (good + bad + neutral)) * 100).toFixed(1);

      return posPercentage;
    }
    return 0;
  };
  const { good, neutral, bad } = stats;
  const displayRows = [
    { name: 'good', st: good },
    { name: 'neutral', st: neutral },
    { name: 'bad', st: bad },
    { name: 'total', st: bad + good + neutral },
    { name: 'positive percentage', st: `${getPosPercentage()}%` },
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
export default Feedback;
