import { Buttons } from './Feedback.styled';
export function FeedbackOptions({ options, clickFn }) {
  return (
    <Buttons>
      {options.map(el => (
        <button key={el} id={el} onClick={clickFn}>
          {el}
        </button>
      ))}
    </Buttons>
  );
}
