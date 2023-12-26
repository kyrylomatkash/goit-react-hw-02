import React, { useState } from 'react';
import Statistics from './feedback-component/FeedbackStatistics';
import FeedbackOptions from './feedback-component/FeedbackOptions';
import Section from './feedback-component/FeedbackSection';
import Notification from './feedback-component/FeedbackNotification';
import { Container, CssBaseline, Typography } from '@mui/material';

const App = () => {
  const initialFeedbackState = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  const [state, setState] = useState(initialFeedbackState);

  const handleFeedback = option => {
    setState(prevState => ({ ...prevState, [option]: prevState[option] + 1 }));
  };

  const handleClearStatistics = () => {
    setState(initialFeedbackState);
  };

  const { good, neutral, bad } = state;
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

export default App;
