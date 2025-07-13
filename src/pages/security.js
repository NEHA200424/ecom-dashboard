import React from 'react';
import { Typography, Box, Card, CardContent } from '@mui/material';

const SecurityPage = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>Security</Typography>
      <Card sx={{ backgroundColor: 'background.paper', boxShadow: 2 }}>
        <CardContent>
          <Typography>2FA, login activity, password change options (coming soon)</Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default SecurityPage;
