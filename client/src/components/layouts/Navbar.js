import React from 'react';
import { AppBar, Toolbar, Typography, Tabs, Tab } from '@material-ui/core';

const Navbar = () => {
  return (
    <AppBar position='static'>
      <Toolbar variant='dense'>
        <Typography variant='h5'>HealthLog</Typography>
        <Tabs fullWidth={true}>
          <Tab label='Home' />
          <Tab label='Days' />
          <Tab label='Meals' />
          <Tab label='Data' />
        </Tabs>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
