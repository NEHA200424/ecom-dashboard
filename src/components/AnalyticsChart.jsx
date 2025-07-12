import React from 'react';
import { Typography, Box } from '@mui/material'; // Import Box instead of Card, CardContent
import { Line } from 'react-chartjs-2';

function AnalyticsChartAlternative1({ data, options }) {
  return (
    // Box is a powerful component for layout and styling with the sx prop
 <Box
    sx={{
      mt: 2, // Added: margin-top: 16px
      mb: 2, // Added: margin-bottom: 16px
      p: 2,
      borderRadius: 2,
      boxShadow: 2,
      backgroundColor: 'background.paper'
    }}
  >
      <Typography variant="h6" gutterBottom>
        Analytics
      </Typography>
      <div style={{ height: '300px' }}>
        <Line options={options} data={data} />
      </div>
    </Box>
  );
}

export default AnalyticsChartAlternative1;
 