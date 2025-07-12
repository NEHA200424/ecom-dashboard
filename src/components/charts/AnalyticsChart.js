import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export default function AnalyticsChart({ amazon, myntra, flipkart }) {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
    datasets: [
      {
        label: 'Amazon Sales',
        data: amazon?.data?.map(d => d.dailySales) || [],
        borderColor: 'rgb(255,99,132)',
        backgroundColor: 'rgba(255,99,132,0.5)',
        tension: 0.4,
      },
      {
        label: 'Myntra Sales',
        data: myntra?.data?.map(d => d.dailyOrders) || [],
        borderColor: 'rgb(53,162,235)',
        backgroundColor: 'rgba(53,162,235,0.5)',
        tension: 0.4,
      },
      {
        label: 'Flipkart Sales',
        data: flipkart?.data?.map((_, i) => i * 100) || [],
        borderColor: 'rgb(75,192,192)',
        backgroundColor: 'rgba(75,192,192,0.5)',
        tension: 0.4,
      },
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: isDark ? '#fff' : '#333',
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: isDark ? '#ccc' : '#333',
        },
        grid: {
          color: isDark ? '#444' : '#e0e0e0',
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
          callback: value => `${value / 1000}K`,
          color: isDark ? '#ccc' : '#333',
        },
        grid: {
          color: isDark ? '#444' : '#e0e0e0',
        },
      },
    },
  };

  return (
    <Box
    sx={{
      mt: 4,  // Top margin (e.g., 32px if your theme spacing is 8px)
      mb: 4,  // Bottom margin (e.g., 32px)
      p: 2,   // Padding inside the box
      borderRadius: 2,
      boxShadow: 2,
      backgroundColor: 'background.paper',
    }}
  >
      <Typography variant="h6" gutterBottom>
        Sales Analytics
      </Typography>
      <Box sx={{ height: 300 }}>
        <Line data={data} options={options} />
      </Box>
    </Box>
  );
}

