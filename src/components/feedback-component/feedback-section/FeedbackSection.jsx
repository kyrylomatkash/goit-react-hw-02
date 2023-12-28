// Імпорт
import { Typography } from '@mui/material';
const Section = ({ title, children }) => (
  <div>
    <Typography variant="h5" align="center" gutterBottom>
      {title}
    </Typography>
    {children}
  </div>
);
// Експорт
export default Section;
