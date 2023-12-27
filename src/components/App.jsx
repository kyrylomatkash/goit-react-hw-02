// Імпорт
import React, { useState } from 'react';
import Statistics from './feedback-component/FeedbackStatistics';
import FeedbackOptions from './feedback-component/FeedbackOptions';
import Section from './feedback-component/FeedbackSection';
import Notification from './feedback-component/FeedbackNotification';
import { Container, CssBaseline, Typography } from '@mui/material';

// Основна функція застосунку
const App = () => {
  const state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  const [feedbackState, setFeedbackState] = useState(state);

  const handleFeedback = option => {
    setFeedbackState(prevFeedbackState => ({
      ...prevFeedbackState,
      [option]: prevFeedbackState[option] + 1,
    }));
  };

  const handleClearStatistics = () => {
    setFeedbackState(state);
  };

  const { good, neutral, bad } = feedbackState;
  const total = good + neutral + bad;

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div>
        <Typography variant="h4" align="center" gutterBottom>
          Feedback App
        </Typography>
        <Section title="Leave feedback">
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={handleFeedback}
          />
        </Section>

        <Section title="Statistics">
          {total > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={(good / total) * 100}
              onClearStatistics={handleClearStatistics}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
    </Container>
  );
};

// Експорт
export default App;
