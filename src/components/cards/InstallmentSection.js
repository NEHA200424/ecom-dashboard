// src/components/InstallmentSection.js
import { Box, Typography, LinearProgress, useTheme } from '@mui/material';

const data = [
  { name: 'Loan A', paid: 3000, total: 5000 },
  { name: 'Loan B', paid: 1500, total: 2000 },
  { name: 'Loan C', paid: 8000, total: 10000 },
];

const InstallmentSection = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        p: 3,
        backgroundColor: theme.palette.background.paper,
        borderRadius: 3,
        boxShadow: 3,
        marginTop: 2,
      }}
    >
      <Typography variant="h6" gutterBottom>Installments</Typography>
      {data.map((item, i) => {
        const percent = (item.paid / item.total) * 100;
        return (
          <Box key={i} mb={3} mt={2}>
            <Typography variant="body2" mb={1}>
              {item.name} ({Math.round(percent)}%)
            </Typography>
            <LinearProgress
              variant="determinate"
              value={percent}
              sx={{
                height: 10,
                borderRadius: 5,
                backgroundColor: theme.palette.mode === 'dark' ? '#333' : '#eee',
                '& .MuiLinearProgress-bar': {
                  backgroundColor: theme.palette.primary.main,
                },
              }}
            />
            <Typography variant="caption" display="block" mt={1}>
              {item.paid.toLocaleString('en-IN')} / {item.total.toLocaleString('en-IN')}
            </Typography>
          </Box>
        );
      })}
    </Box>
  );
};

export default InstallmentSection;





