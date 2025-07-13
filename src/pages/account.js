import React from 'react';
import { Box, Typography, Grid, Card, Avatar, Button, Divider } from '@mui/material';
import { ArrowBack } from '@mui/icons-material';
import { useRouter } from 'next/router';

export default function AccountPage() {
  const router = useRouter();

  return (
    <Box sx={{ p: 3 }}>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
        <Typography variant="h4">👤 My Account</Typography>
        <Button startIcon={<ArrowBack />} variant="outlined" color="warning" onClick={() => router.push('/')}>Go to Dashboard</Button>
      </Box>

      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Card sx={{ p: 3, textAlign: 'center' }}>
            <Avatar src="/avatar.png" sx={{ width: 100, height: 100, mx: 'auto', mb: 2 }} />
            <Typography variant="h6">Neha Vinod Varma</Typography>
            <Typography variant="body2" color="text.secondary">AI/ML Engineer</Typography>
          </Card>
        </Grid>

        <Grid item xs={12} md={8}>
          <Card sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>Account Details</Typography>
            <Divider sx={{ mb: 2 }} />
            <Typography><strong>Email:</strong> vneha5097@gmail.com</Typography>
            <Typography><strong>Username:</strong> NEHA200424</Typography>
            <Typography><strong>Member Since:</strong> Jan 2025</Typography>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
