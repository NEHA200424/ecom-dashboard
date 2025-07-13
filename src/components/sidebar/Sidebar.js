import React from 'react';
import { useRouter } from 'next/router';
import {
  Box,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider
} from '@mui/material';
import {
  Dashboard as DashboardIcon,
  Analytics as AnalyticsIcon,
  AccountBalanceWallet as WalletIcon,
  Person as AccountIcon,
  Settings as SettingsIcon,
  Security as SecurityIcon,
  HelpCenter as HelpIcon,
  DarkMode as DarkModeIcon
} from '@mui/icons-material';

const Sidebar = () => {
  const router = useRouter();

  const menuItems = [
    { text: 'Dashboard', icon: <DashboardIcon />, path: '/' },
    { text: 'Analytics', icon: <AnalyticsIcon />, path: '/analytics' },
    { text: 'My Wallet', icon: <WalletIcon />, path: '/wallet' },
    { text: 'Account', icon: <AccountIcon />, path: '/account' },
    { text: 'Settings', icon: <SettingsIcon />, path: '/settings' },
    { text: 'Security', icon: <SecurityIcon />, path: '/security' },
    { text: 'Help Center', icon: <HelpIcon />, path: '/help' },
    { text: 'Dark Mode', icon: <DarkModeIcon />, path: '/dark-mode' },
  ];

  return (
    <Box
      sx={{
        width: 240,
        bgcolor: '#1E1E2D',
        color: '#fff',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <Box sx={{ py: 3, textAlign: 'center', fontSize: 22, fontWeight: 'bold' }}>
        Finance Dashboard
      </Box>
      <Divider sx={{ bgcolor: '#333' }} />
      <List>
        {menuItems.map(({ text, icon, path }) => (
          <ListItemButton
            key={text}
            selected={router.pathname === path}
            onClick={() => router.push(path)}
            sx={{
              bgcolor: router.pathname === path ? '#2D2D42' : 'inherit',
              color: 'inherit'
            }}
          >
            <ListItemIcon sx={{ color: 'inherit' }}>{icon}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItemButton>
        ))}
      </List>
    </Box>
  );
};

export default Sidebar;


