// src/components/cards/CardSection.js
import React from 'react';
import { Card, CardContent, Typography, Grid, Box, useTheme } from '@mui/material';
import { CreditCard, ShoppingCart, AccountBalance, Savings } from '@mui/icons-material';

const cards = [
  { title: 'Credit Cards', value: '3 Active', icon: <CreditCard fontSize="large" />, color: '#1976d2' },
  { title: 'Purchases', value: '₹8,000', icon: <ShoppingCart fontSize="large" />, color: '#388e3c' },
  { title: 'Bank Accounts', value: '2 Linked', icon: <AccountBalance fontSize="large" />, color: '#f57c00' },
  { title: 'Savings', value: '₹45,000', icon: <Savings fontSize="large" />, color: '#7b1fa2' },
];

export default function CardSection() {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  return (
    <Grid container spacing={3}>
      {cards.map((card, idx) => (
        <Grid item xs={12} sm={6} key={idx}>
          <Card
            sx={{
              backgroundColor: theme.palette.background.paper,
              display: 'flex',
              alignItems: 'center',
              height: '120px',
              borderRadius: 3,
              boxShadow: 3,
              p: 2,
            }}
          >
            <Box sx={{ mr: 2, color: card.color }}>
              {card.icon}
            </Box>
            <Box>
              <Typography variant="body2" fontWeight={500}>{card.title}</Typography>
              <Typography variant="h6" fontWeight="bold">{card.value}</Typography>
            </Box>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}









