import React from 'react'; // ✅ Keep ONLY this one
import { Box, Typography, Grid, Card, Switch, FormControlLabel, Button } from '@mui/material';
import { ArrowBack } from '@mui/icons-material';
import { useRouter } from 'next/router';

export default function SettingsPage() {
  const router = useRouter();

  return (
    <Box sx={{ p: 3 }}>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
        <Typography variant="h4">⚙️ Settings</Typography>
        <Button startIcon={<ArrowBack />} variant="outlined" color="warning" onClick={() => router.push('/')}>
          Go to Dashboard
        </Button>
      </Box>

      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Card sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>Preferences</Typography>
            <FormControlLabel control={<Switch defaultChecked />} label="Enable Notifications" />
            <FormControlLabel control={<Switch />} label="Auto-Sync Data" />
            <FormControlLabel control={<Switch defaultChecked />} label="Dark Mode" />
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}


