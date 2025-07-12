import React from 'react';
import { Box, List, ListItemButton, ListItemIcon, ListItemText, Divider } from '@mui/material';
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
  const menuItems = [
    { text: 'Dashboard', icon: <DashboardIcon />, active: true },
    { text: 'Analytics', icon: <AnalyticsIcon />, active: false },
    { text: 'My Wallet', icon: <WalletIcon />, active: false },
    { text: 'Account', icon: <AccountIcon />, active: false },
    { text: 'Settings', icon: <SettingsIcon />, active: false },
    { text: 'Security', icon: <SecurityIcon />, active: false },
    { text: 'Help Center', icon: <HelpIcon />, active: false },
    { text: 'Dark Mode', icon: <DarkModeIcon />, active: false },
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
      <Box sx={{ py: 3, textAlign: 'center', fontSize: 24, fontWeight: 'bold' }}>
        Finance Dashboard
      </Box>
      <Divider sx={{ bgcolor: '#333' }} />
      <List>
        {menuItems.map(({ text, icon, active }, idx) => (
          <ListItemButton
            key={idx}
            selected={active}
            sx={{ bgcolor: active ? '#2D2D42' : 'inherit', color: 'inherit' }}
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
