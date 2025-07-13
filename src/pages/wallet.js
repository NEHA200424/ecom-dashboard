import React, { useEffect, useState } from 'react';
import {
  Box, Typography, Grid, Card, CardContent,
  Button, CircularProgress, Chip, LinearProgress
} from '@mui/material';
import { useRouter } from 'next/router';
import { Bar } from 'react-chartjs-2';
import { AccountBalanceWallet, ArrowBack } from '@mui/icons-material';
import {
  Chart as ChartJS, CategoryScale, LinearScale, BarElement,
  Tooltip, Legend, Title
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend, Title);

const COLORS = ['#FFB200', '#EB5B00', '#D91656'];

export default function WalletPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [balance, setBalance] = useState(0);
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      // Simulated fetch
      setBalance(76450);
      setTransactions([
        { id: 1, label: 'Amazon Purchase', amount: -1240, status: 'Completed' },
        { id: 2, label: 'Myntra Refund', amount: +540, status: 'Refunded' },
        { id: 3, label: 'Flipkart Recharge', amount: -399, status: 'Pending' },
      ]);
      setLoading(false);
    }, 1200);
  }, []);

  const chartData = {
    labels: ['Amazon', 'Flipkart', 'Myntra'],
    datasets: [{
      label: 'Spending',
      data: [1240, 399, 800],
      backgroundColor: COLORS
    }]
  };

  const budgetUsed = 82;

  if (loading) {
    return (
      <Box sx={{ p: 4, textAlign: 'center' }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box sx={{ p: 3 }}>
      {/* Header */}
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
        <Typography variant="h4">💳 My Wallet</Typography>
        <Button startIcon={<ArrowBack />} variant="outlined" color="warning" onClick={() => router.push('/')}>
          Go to Dashboard
        </Button>
      </Box>

      <Grid container spacing={3}>
        {/* Wallet Balance */}
        <Grid item xs={12} md={6}>
          <Card sx={{
            p: 3, boxShadow: 3, background: 'linear-gradient(to right, #FFB200, #EB5B00)',
            color: '#fff', height: '100%'
          }}>
            <CardContent>
              <Typography variant="h6">Current Balance</Typography>
              <Typography variant="h3" fontWeight="bold">₹{balance.toLocaleString()}</Typography>
              <Typography mt={1}>Updated: just now</Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Budget Progress */}
        <Grid item xs={12} md={6}>
          <Card sx={{ p: 8, boxShadow: 2 }}>
            <Typography variant="h6" gutterBottom>💡 Monthly Budget Usage</Typography>
            <Typography>₹{(balance * 0.82).toFixed(0)} / ₹{balance}</Typography>
            <LinearProgress
              variant="determinate"
              value={budgetUsed}
              sx={{ mt: 1, height: 10, borderRadius: 5, bgcolor: '#ffe6b3', '& .MuiLinearProgress-bar': { bgcolor: '#D91656' } }}
            />
          </Card>
        </Grid>

        {/* Spending Chart */}
        <Grid item xs={12} md={6}>
          <Card sx={{ p: 2, boxShadow: 2 }}>
            <Typography variant="h6" gutterBottom>Spending Breakdown</Typography>
            <Bar data={chartData} options={{ responsive: true, plugins: { legend: { display: false } } }} />
          </Card>
        </Grid>

        {/* Recent Transactions */}
        <Grid item xs={12} md={6}>
          <Card sx={{ p: 14.5, boxShadow: 2 }}>
            <Typography variant="h6" gutterBottom>Recent Transactions</Typography>
            {transactions.map(txn => (
              <Box
                key={txn.id}
                sx={{
                  display: 'flex', justifyContent: 'space-between',
                  alignItems: 'center', py: 1.5, borderBottom: '1px solid #eee'
                }}
              >
                <Typography>{txn.label}</Typography>
                <Box display="flex" alignItems="center" gap={2}>
                  <Typography color={txn.amount < 0 ? 'error' : 'success.main'}>
                    ₹{txn.amount}
                  </Typography>
                  <Chip
                    label={txn.status}
                    size="small"
                    sx={{
                      bgcolor:
                        txn.status === 'Completed' ? '#C6F6D5' :
                        txn.status === 'Refunded' ? '#FFF4D2' : '#FDDCDC',
                      color: '#000',
                      fontWeight: 500
                    }}
                  />
                </Box>
              </Box>
            ))}
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}


