// Імпорт бібліотек
import React, { Component } from 'react';
import {
  Typography,
  Button,
  Dialog,
  DialogTitle,
  DialogActions,
} from '@mui/material';
// Імпорт стилів
import {
  StyledStatistics,
  StatisticItem,
  ClearButton,
} from './feedbackstatisticsstyles';
// Основний класс компоненту
class FeedbackStatistics extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
    };
  }

  handleOpenModal = () => {
    this.setState({ isModalOpen: true });
  };

  handleCloseModal = () => {
    this.setState({ isModalOpen: false });
  };

  handleClearStatistics = () => {
    this.props.onClearStatistics();
    this.handleCloseModal();
  };
  // Рендер
  render() {
    const { good, neutral, bad, total, positivePercentage } = this.props;
    const { isModalOpen } = this.state;

    return (
      <StyledStatistics>
        <Typography variant="h6">Statistics:</Typography>
        <StatisticItem>Good: {good}</StatisticItem>
        <StatisticItem>Neutral: {neutral}</StatisticItem>
        <StatisticItem>Bad: {bad}</StatisticItem>
        <StatisticItem>Total: {total}</StatisticItem>
        <StatisticItem>
          Positive Feedback: {total === 0 ? 0 : Math.round(positivePercentage)}%
        </StatisticItem>
        <ClearButton
          variant="contained"
          color="secondary"
          onClick={this.handleOpenModal}
        >
          Clear Statistics
        </ClearButton>

        <Dialog open={isModalOpen} onClose={this.handleCloseModal}>
          <DialogTitle>
            Are you sure you want to clear the statistics?
          </DialogTitle>
          <DialogActions>
            <Button onClick={this.handleCloseModal} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleClearStatistics} color="secondary">
              Clear
            </Button>
          </DialogActions>
        </Dialog>
      </StyledStatistics>
    );
  }
}
// Експорт
export default FeedbackStatistics;
