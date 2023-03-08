import React, { useState } from 'react';
import { Menu as MenuIcon, Search, ArrowDropDownOutlined } from '@mui/icons-material';
import FlexBetween from 'components/FlexBetween';
import Dialog from '@mui/material/Dialog';
import { Formik } from 'formik';
import * as yup from 'yup';

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
} from '@mui/material';

import { useGetAuthMutation } from 'state/api';

function SimpleDialog(props) {
  const [getAuth, response] = useGetAuthMutation();

  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleFormSubmit = async (values, actions) => {
    await getAuth(values).unwrap();
    handleClose();
    actions.setTouched({});
  };

  console.log(response?.data);

  return (
    <Dialog onClose={handleClose} open={open}>
      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={checkoutSchema[initialValues]}>
        {({ values, errors, touched, handleBlur, handleChange, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <Box m="30px 0">
              {/* CONTACT INFO */}
              <Box sx={{ display: 'flex', flexDirection: 'column', p: 2 }}>
                <Typography sx={{ mb: '15px' }} fontSize="18px">
                  Please log in to the account
                </Typography>
                <TextField
                  type="text"
                  label="Login"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.email}
                  name="name"
                  error={!!touched.email && !!errors.email}
                  helperText={touched.email && errors.email}
                  sx={{ gridColumn: 'span 4', marginBottom: '15px' }}
                />
                <TextField
                  type="password"
                  label="Password"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.phoneNumber}
                  name="password"
                  error={!!touched.phoneNumber && !!errors.phoneNumber}
                  helperText={touched.phoneNumber && errors.phoneNumber}
                  sx={{ gridColumn: 'span 4' }}
                />
              </Box>
            </Box>
            <Box display="flex" justifyContent="space-between" gap="50px">
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
          </form>
        )}
      </Formik>
    </Dialog>
  );
}

const NavBar = ({ isSidebarOpen, setIsSidebarOpen, user }) => {
  const theme = useTheme();
  // const [anchorEl, setAnchorEl] = useState(null);
  // const isOpen = Boolean(anchorEl);
  // const handleClick = (event) => setAnchorEl(event.currentTarget);
  // const handleClose = () => setAnchorEl(null);

  const [open, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(user.name);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };

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
            <SimpleDialog selectedValue={selectedValue} open={open} onClose={handleClose} />
          </FlexBetween>
        </FlexBetween>
      </Toolbar>
    </AppBar>
  );
};

const initialValues = {
  name: '',
  password: '',
};

const checkoutSchema = [
  yup.object().shape({
    name: yup.string().required('required'),
    password: yup.string().required('required'),
  }),
];

export default NavBar;
