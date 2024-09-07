// BackdropComponent.jsx
import React from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { useTheme } from '@mui/material/styles';

export default function BackdropComponent({ open }) {
  const theme = useTheme(); // Lấy theme của MUI

  return (
    <Backdrop
      sx={{
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
      }}
      open={open}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
}
