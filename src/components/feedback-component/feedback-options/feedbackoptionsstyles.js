import { ButtonGroup, Button } from '@mui/material';
import { styled } from '@mui/system';

export const StyledButtonGroup = styled(ButtonGroup)({
  margin: '20px',
  display: 'flex',
  justifyContent: 'center',
});

export const StyledButton = styled(Button)(({ feedbackType }) => ({
  backgroundColor: getButtonColor(feedbackType),
  color: '#fff',
  '&:hover': {
    backgroundColor: getHoverColor(feedbackType),
  },
}));

// Switch кольорів кнопок
const getButtonColor = feedbackType => {
  switch (feedbackType) {
    case 'good':
      return '#4CAF50';
    case 'neutral':
      return '#FFC107';
    case 'bad':
      return '#FF5722';
    default:
      return '#2196f3';
  }
};

// Switch ховеру кнопок
const getHoverColor = feedbackType => {
  switch (feedbackType) {
    case 'good':
      return '#45A049';
    case 'neutral':
      return '#FFB300';
    case 'bad':
      return '#E64A19';
    default:
      return '#1565c0';
  }
};
