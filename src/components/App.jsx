// Імпорт компонентів
import React, { Component } from 'react';
import Statistics from './feedback-component/feedback-statistic/FeedbackStatistics';
import FeedbackOptions from './feedback-component/feedback-options/FeedbackOptions';
import Section from './feedback-component/feedback-section/FeedbackSection';
import Notification from './feedback-component/feedback-notification/FeedbackNotification';
import { Container, CssBaseline, Typography } from '@mui/material';

// Основний клас застосунку
class App extends Component {
  constructor() {
    super();
    this.state = {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  }

  handleFeedback = option => {
    this.setState(prevState => ({
      ...prevState,
      [option]: prevState[option] + 1,
    }));
  };

  handleClearStatistics = () => {
    this.setState({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    const options = Object.keys(this.state);

    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div>
          <Typography variant="h4" align="center" gutterBottom>
            Feedback App
          </Typography>
          <Section title="Leave feedback">
            <FeedbackOptions
              options={options}
              onLeaveFeedback={this.handleFeedback}
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
                onClearStatistics={this.handleClearStatistics}
              />
            ) : (
              <Notification message="There is no feedback" />
            )}
          </Section>
        </div>
      </Container>
    );
  }
}

// Експорт
export default App;
