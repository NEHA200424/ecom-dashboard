import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { Box } from '@mui/material';

import MetricCards from '../components/cards/MetricCards';
import TransactionTable from '../components/tables/TransactionTable';
import CardSection from '../components/cards/CardSection';
import InstallmentSection from '../components/cards/InstallmentSection';
import FormattedNumber from '../utils/FormattedNumber'; // ✅ You can use this if needed

const Sidebar = dynamic(() => import('../components/sidebar/Sidebar'), { ssr: false });
const Navbar = dynamic(() => import('../components/navbar/Navbar'), { ssr: false });
const AnalyticsChart = dynamic(() => import('../components/charts/AnalyticsChart'), { ssr: false });

export default function Home() {
  const [data, setData] = useState(null);
  
  useEffect(() => {
    async function fetchData() {
      const res = await fetch('/api/platforms/all');
      const json = await res.json();
      setData(json.data);
    }
    fetchData();
  }, []);

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', bgcolor: theme => theme.palette.background.default }}>
      <Sidebar />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Navbar />
        <MetricCards />
        {data && <AnalyticsChart amazon={data.amazon} myntra={data.myntra} flipkart={data.flipkart} />}
        <Box sx={{ display: 'flex', gap: 3, flexWrap: 'wrap' }}>
          <Box flex={2}><TransactionTable /></Box>
          <Box flex={1}>
            <CardSection />
            <InstallmentSection />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

