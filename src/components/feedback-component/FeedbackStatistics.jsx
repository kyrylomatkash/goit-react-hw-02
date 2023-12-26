// Імпорт
import { Typography } from '@mui/material';
import styled from 'styled-components';
// Стилізовані компоненти
const StyledStatistics = styled.div`
  margin: 20px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const StatisticItem = styled.p`
  margin: 8px 0;
`;
// Фунція відображення статистики
const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <StyledStatistics>
    <Typography variant="h6">Statistics:</Typography>
    <StatisticItem>Good: {good}</StatisticItem>
    <StatisticItem>Neutral: {neutral}</StatisticItem>
    <StatisticItem>Bad: {bad}</StatisticItem>
    <StatisticItem>Total: {total}</StatisticItem>
    <StatisticItem>
      Positive Feedback: {total === 0 ? 0 : Math.round(positivePercentage)}%
    </StatisticItem>
  </StyledStatistics>
);
// Експорт
export default Statistics;
