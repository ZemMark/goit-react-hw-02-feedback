import { Buttons } from './Feedback.styled';
export function FeedbackOptions({ options, clickFn }) {
  return (
    <Buttons>
      {options.map(el => (
        <button key={el} onClick={() => clickFn(el)}>
          {el}
        </button>
      ))}
    </Buttons>
  );
}
