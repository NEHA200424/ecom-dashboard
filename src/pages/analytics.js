// src/pages/analytics.js
import React, { useEffect, useState } from 'react';
import {
  Box, Typography, Grid, Card, FormControl,
  InputLabel, Select, MenuItem, CircularProgress
} from '@mui/material';
import { Bar, Line, Doughnut } from 'react-chartjs-2';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import HomeIcon from '@mui/icons-material/Home';
import { Button, Stack } from '@mui/material';


// ✅ Dynamically import the Leaflet map with SSR disabled
const LeafletMap = dynamic(() => import('../components/LeafletMap'), { ssr: false });

import {
  Chart as ChartJS,
  CategoryScale, LinearScale, BarElement,
  LineElement, PointElement, ArcElement,
  Tooltip, Legend, Title
} from 'chart.js';

ChartJS.register(
  CategoryScale, LinearScale, BarElement,
  LineElement, PointElement, ArcElement,
  Tooltip, Legend, Title
);

const COLORS = ['#FFB200', '#EB5B00', '#D91656'];

export default function AnalyticsPage() {
  const router = useRouter();
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState('all');
  const [platform, setPlatform] = useState('all');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://dummyjson.com/products?limit=100')
      .then(res => res.json())
      .then(data => {
        setProducts(data.products);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <Box sx={{ p: 4, textAlign: 'center' }}>
        <CircularProgress />
      </Box>
    );
  }

  const categories = [...new Set(products.map(p => p.category))];
  const filtered = products.filter(p =>
    (category === 'all' || p.category === category)
  );

  const platformCount = {
    Amazon: filtered.filter((_, i) => i % 3 === 0).length,
    Myntra: filtered.filter((_, i) => i % 3 === 1).length,
    Flipkart: filtered.filter((_, i) => i % 3 === 2).length
  };

  const barData = {
    labels: categories,
    datasets: [{
      label: platform === 'all' ? 'All Platforms' : platform,
      data: categories.map(c => filtered.filter(p => p.category === c).length),
      backgroundColor: COLORS
    }]
  };

  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
  const lineData = {
    labels: months,
    datasets: [{
      label: 'Monthly Sales',
      data: months.map((_, i) => Math.round((filtered.length / months.length) * (i + 1))),
      borderColor: COLORS[0],
      backgroundColor: `${COLORS[0]}33`,
      fill: true
    }]
  };

  const doughnutData = {
    labels: ['Amazon', 'Myntra', 'Flipkart'],
    datasets: [{
      data: [platformCount.Amazon, platformCount.Myntra, platformCount.Flipkart],
      backgroundColor: COLORS,
      hoverOffset: 4
    }]
  };

  return (
     <Box sx={{ p: 3 }}>
      <Stack direction="row" spacing={2} sx={{ mb: 3 }}>
        <Button
          variant="outlined"
          startIcon={<ArrowBackIcon />}
          onClick={() => router.back()}
        >
          Go Back
        </Button>
        <Button
          variant="contained"
          startIcon={<HomeIcon />}
          onClick={() => router.push('/')}
        >
          Go to Dashboard
        </Button>
      </Stack>
    <Typography variant="h4" gutterBottom>Sales Analytics</Typography>
      <Grid container spacing={3} sx={{ mb: 3 }}>
        <Grid item xs={12} sm={6} md={3}>
          <FormControl fullWidth>
            <InputLabel>Category</InputLabel>
            <Select value={category} onChange={e => setCategory(e.target.value)}>
              <MenuItem value="all">All</MenuItem>
              {categories.map(c => <MenuItem key={c} value={c}>{c}</MenuItem>)}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <FormControl fullWidth>
            <InputLabel>Platform</InputLabel>
            <Select value={platform} onChange={e => setPlatform(e.target.value)}>
              <MenuItem value="all">All</MenuItem>
              <MenuItem value="Amazon">Amazon</MenuItem>
              <MenuItem value="Myntra">Myntra</MenuItem>
              <MenuItem value="Flipkart">Flipkart</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>

      <Grid container spacing={3}>
        {/* Bar Chart */}
        <Grid item xs={12} md={6}>
          <Card sx={{ p: 2, boxShadow: 2 }}>
            <Typography variant="h6" gutterBottom>Products by Category</Typography>
            <Bar data={barData} options={{ responsive: true, plugins: { legend: { display: false } } }} />
          </Card>
        </Grid>

        {/* Line Chart */}
        <Grid item xs={12} md={6}>
          <Card sx={{ p: 2, boxShadow: 2 }}>
            <Typography variant="h6" gutterBottom>Sales Over Time</Typography>
            <Line data={lineData} options={{ responsive: true }} />
          </Card>
        </Grid>

        {/* Doughnut */}
        <Grid item xs={12} md={6}>
  <Card sx={{ p: 2, boxShadow: 2 }}>
    <Typography variant="h6" align="center" gutterBottom>Platform Share</Typography>
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 400 }}>
      <Box sx={{ width: 250, height: 250 }}>
        <Doughnut data={doughnutData} options={{ responsive: true }} />
      </Box>
    </Box>
  </Card>
</Grid>

        {/* Leaflet Map */}
        <Grid item xs={12} md={6}>
          <Card sx={{ p: 2, boxShadow: 2 }}>
            <Typography variant="h6" gutterBottom>Region-wise Sales</Typography>
            <Box sx={{ height: 400 }}>
              <LeafletMap />
            </Box>
          </Card>
        </Grid>
      </Grid>
    </Box>
  )};
