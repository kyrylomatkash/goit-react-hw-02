// Імпорт
import React, { useState } from 'react';
import {
  Typography,
  Button,
  Dialog,
  DialogTitle,
  DialogActions,
} from '@mui/material';
import {
  StyledStatistics,
  StatisticItem,
  ClearButton,
} from './feedbackstatisticsstyles';

const FeedbackStatistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
  onClearStatistics,
}) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);

  const handleClearStatistics = () => {
    onClearStatistics();
    handleCloseModal();
  };

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
        onClick={handleOpenModal}
      >
        Clear Statistics
      </ClearButton>

      <Dialog open={isModalOpen} onClose={handleCloseModal}>
        <DialogTitle>
          Are you sure you want to clear the statistics?
        </DialogTitle>
        <DialogActions>
          <Button onClick={handleCloseModal} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClearStatistics} color="secondary">
            Clear
          </Button>
        </DialogActions>
      </Dialog>
    </StyledStatistics>
  );
};
// Експорт
export default FeedbackStatistics;
