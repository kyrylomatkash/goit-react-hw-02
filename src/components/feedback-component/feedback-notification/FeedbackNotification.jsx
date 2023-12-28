// Імпорт
import { Typography } from '@mui/material';

const Notification = ({ message }) => (
  <Typography variant="body2" color="textSecondary" align="center">
    {message}
  </Typography>
);
// Експорт
export default Notification;
