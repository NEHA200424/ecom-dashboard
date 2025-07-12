// src/dashboard.jsx
import React, { useState, useEffect } from 'react';
import {
  Grid,
  Card,
  CardContent,
  Typography,
  CircularProgress,
  Tabs,
  Tab,
  Box,
  useTheme
} from '@mui/material';
import axios from 'axios';
import AnalyticsChart from '../components/charts/AnalyticsChart';
import FormattedNumber from '../utils/FormattedNumber';

const Dashboard = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [tabValue, setTabValue] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/platforms/all');
        setData(response.data.data);
      } catch (err) {
        setError(err.message);
        console.error('Error fetching data:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" mt={4}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box display="flex" justifyContent="center" mt={4}>
        <Typography color="error">Error: {error}</Typography>
      </Box>
    );
  }

  if (!data) {
    return (
      <Box display="flex" justifyContent="center" mt={4}>
        <Typography>No data available</Typography>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        p: { xs: 2, sm: 3 },
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
        minHeight: '100vh'
      }}
    >
      <Tabs
        value={tabValue}
        onChange={(e, newValue) => setTabValue(newValue)}
        sx={{ mb: 3, borderBottom: `1px solid ${theme.palette.divider}` }}
        textColor="inherit"
        indicatorColor="primary"
      >
        <Tab label="Summary" />
        <Tab label="Amazon" />
        <Tab label="Myntra" />
        <Tab label="Flipkart" />
      </Tabs>

      {tabValue === 0 && (
        <>
          <AnalyticsChart
            amazon={data.amazon}
            myntra={data.myntra}
          flipkart={data.flipkart}
          />
          <Grid container spacing={3} sx={{ mt: 2 }}>
            <Grid item xs={12} sm={6}>
              <Card
                sx={{
                  backgroundColor: isDark ? 'background.paper' : '#f5f5f5',
                  height: '100%'
                }}
              >
                <CardContent>
                  <Typography variant="h6">Total Products</Typography>
                  <Typography variant="h4">
                    <FormattedNumber value={data.combinedStats?.totalProducts || 0} />
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Card
                sx={{
                  backgroundColor: isDark ? 'background.paper' : '#f5f5f5',
                  height: '100%'
                }}
              >
                <CardContent>
                  <Typography variant="h6">Avg. Rating</Typography>
                  <Typography variant="h4">
                    <FormattedNumber value={data.combinedStats?.averageRating || 0} /> / 5
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </>
      )}

      {tabValue === 1 && <PlatformData platform={data.amazon} />}
      {tabValue === 2 && <PlatformData platform={data.myntra} />}
      {tabValue === 3 && <PlatformData platform={data.flipkart} />}
    </Box>
  );
};

const PlatformData = ({ platform }) => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  return (
    <Grid container spacing={3} sx={{ mt: 2 }}>
      {platform?.data?.map((item) => (
        <Grid item xs={12} sm={6} md={4} key={item.productId}>
          <Card
            sx={{
              backgroundColor: isDark ? 'background.paper' : '#f5f5f5',
              height: '100%'
            }}
          >
            <CardContent>
              <Typography variant="h6" gutterBottom>
                {item.title}
              </Typography>
              <Typography>Price: ₹<FormattedNumber value={item.price} /></Typography>
              <Typography>Rating: <FormattedNumber value={item.rating} /></Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Dashboard;


