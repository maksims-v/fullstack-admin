import React, { useState, useEffect } from 'react';
import { Menu as MenuIcon, Search, ArrowDropDownOutlined } from '@mui/icons-material';
import FlexBetween from 'components/FlexBetween';
import Dialog from '@mui/material/Dialog';

import {
  AppBar,
  Toolbar,
  useTheme,
  IconButton,
  InputBase,
  Typography,
  Button,
  Menu,
  MenuItem,
  Box,
  TextField,
  Input,
} from '@mui/material';

import { useGetAuthMutation } from 'state/api';

const NavBar = ({ isSidebarOpen, setIsSidebarOpen, user }) => {
  const theme = useTheme();
  const [getAuth, response] = useGetAuthMutation();
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    localStorage.setItem('currentUser', JSON.stringify(response?.data?._id));
  }, [response?.data?._id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await getAuth().unwrap();
    handleClose();
  };

  // const [anchorEl, setAnchorEl] = useState(null);
  // const isOpen = Boolean(anchorEl);
  // const handleClick = (event) => setAnchorEl(event.currentTarget);
  // const handleClose = () => setAnchorEl(null);

  return (
    <AppBar
      sx={{
        position: 'static',
        background: 'none',
        boxShadow: 'none',
      }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <FlexBetween>
          <IconButton onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
            <MenuIcon sx={{ color: theme.palette.secondary[300] }} />
          </IconButton>
          <FlexBetween
            backgroundColor={theme.palette.primary[100]}
            borderRadius="9px"
            gap="3rem"
            p="0.1rem 1.5rem">
            <InputBase placeholder="Search..." />
            <IconButton>
              <Search />
            </IconButton>
          </FlexBetween>
        </FlexBetween>
        <FlexBetween gap="1.5rem">
          <FlexBetween>
            <Button
              onClick={handleClickOpen}
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                textTransform: 'none',
                gap: '1rem',
              }}>
              <Box textAlign="left">
                <Typography
                  fontWeight="bold"
                  fontSize="0.85rem"
                  sx={{ color: theme.palette.secondary[100] }}>
                  {user.name}
                </Typography>
                <Typography fontSize="0.75rem" sx={{ color: theme.palette.secondary[200] }}>
                  {user.occupation}
                </Typography>
              </Box>
              <ArrowDropDownOutlined
                sx={{ color: theme.palette.secondary[300], fontSize: '25px' }}
              />
            </Button>
            {/* <Menu
              anchorEl={anchorEl}
              open={isOpen}
              onClose={handleClose}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
              <MenuItem onClick={handleClose}>Log Out</MenuItem>
            </Menu> */}
            <Dialog onClose={handleClose} open={open}>
              <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{ display: 'flex', flexDirection: 'column', p: 1, alignItems: 'center' }}
                gap="8px">
                <Box sx={{ display: 'flex', flexDirection: 'column', p: '16px 16px 8px 16px' }}>
                  <Typography sx={{ mb: '15px' }} fontSize="18px">
                    Please log in to the account
                  </Typography>
                </Box>
                <TextField
                  id="outlined-basic"
                  label="Name"
                  variant="outlined"
                  sx={{ width: '80%' }}
                />
                <TextField
                  id="outlined-basic"
                  label="Password"
                  variant="outlined"
                  type="password"
                  sx={{ width: '80%' }}
                />
                <Box color="red" textAlign="center" pb="8px">
                  {response.error?.data}
                </Box>
                <Box display="flex" justifyContent="space-between">
                  <Button
                    fullWidth
                    type="submit"
                    color="primary"
                    variant="contained"
                    sx={{
                      boxShadow: 'none',
                      color: 'white',
                      borderRadius: 0,
                      padding: '15px 40px',
                    }}>
                    Log In
                  </Button>
                </Box>
              </Box>
            </Dialog>
          </FlexBetween>
        </FlexBetween>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
