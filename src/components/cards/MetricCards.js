import React from 'react';
import { Grid, Card, CardContent, Typography, Box, useTheme } from '@mui/material';
import { TrendingUp } from '@mui/icons-material';
import FormattedNumber from '../../utils/FormattedNumber';

const metrics = [
  { title: 'Revenue', value: '52,000', growth: '8.5%' },
  { title: 'Orders', value: '1,230', growth: '12.1%' },
  { title: 'Customers', value: '830', growth: '5.3%' },
];

export default function MetricCards() {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  return (
    <Grid container spacing={2}>
      {metrics.map((m, index) => {
        const numericValue = parseInt(m.value.replace(/[^0-9]/g, '')) || 0;

        return (
          <Grid item xs={12} sm={4} key={index}>
            <Card
              sx={{
                backgroundColor: isDark ? 'background.paper' : '#f5f5f5',
                color: isDark ? 'text.primary' : 'text.secondary',
              }}
            >
              <CardContent>
                <Typography variant="body2" color="text.secondary">{m.title}</Typography>
                <FormattedNumber value={numericValue} />

                <Box sx={{ display: 'flex', alignItems: 'center', color: 'success.main', mt: 1 }}>
                  <TrendingUp fontSize="small" sx={{ mr: 0.5 }} />
                  <Typography variant="body2" color="success.main">
                    {m.growth} Growth
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
}



