import React from 'react';
import { Typography, Box, Card, CardContent } from '@mui/material';

const HelpPage = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>Help Center</Typography>
      <Card sx={{ backgroundColor: 'background.paper', boxShadow: 2 }}>
        <CardContent>
          <Typography>FAQs, Contact Support, Troubleshooting guides coming soon.</Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default HelpPage;
