// Імпорт
import React from 'react';
import { StyledButtonGroup, StyledButton } from './feedbackoptionsstyles';
// Функція фідбеку для кнопок
const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <StyledButtonGroup>
    {options.map(option => (
      <StyledButton
        key={option}
        onClick={() => onLeaveFeedback(option)}
        feedbackType={option}
      >
        {option}
      </StyledButton>
    ))}
  </StyledButtonGroup>
);
// Експорт
export default FeedbackOptions;
