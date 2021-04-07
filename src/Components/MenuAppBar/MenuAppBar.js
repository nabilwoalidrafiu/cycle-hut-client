import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import {withRouter} from "react-router-dom";
import Button from '@material-ui/core/Button';
import { Grid, Paper } from '@material-ui/core';
import { UserContext } from '../../App';

const useStyles = makeStyles((theme) => ({
 
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    cursor:"pointer",
      [theme.breakpoints.down('xs')] : {
        flexGrow: 1
      }
    },
    headerOption:{
        display: 'flex',
        flex: 1,
        justify: 'space-evenly'
    }
}));

const MenuAppBar = (props) => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const {history} = props;
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'));
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClick = (pageURL) => {
      history.push(pageURL);
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
        <Grid container spacing={3}>
        <Grid item xs={4} sm={4}>
            <Typography  onClick={() => handleMenuClick('/home')} variant="h6" className={classes.title}>
            Cycle Hut
          </Typography>
            
          </Grid>
          <Grid item xs={8} sm={8} container direction="row" justify="flex-end">
            <div>
                {isMobile ? (
                    <>
                    <IconButton
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleMenu}
                    color="inherit"
                  >
                    <MenuIcon />
                  </IconButton>
                  <Menu
                    id="menu-appbar"
                    anchorEl={anchorEl}
                    anchorOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    open={open}
                    onClose={() => setAnchorEl(null)}
                  >
                    <MenuItem onClick={() => handleMenuClick('/home')}>Home</MenuItem>
                    <MenuItem onClick={() => handleMenuClick('/order')}>Order</MenuItem>
                    <MenuItem onClick={() => handleMenuClick('/admin')}>Admin</MenuItem>
                    <MenuItem onClick={() => handleMenuClick('/deals')}>Deals</MenuItem>
                    {loggedInUser.email ?<MenuItem >{loggedInUser.displayName}</MenuItem> : 
                    <MenuItem onClick={() => handleMenuClick('/login')}>Login</MenuItem>}
                  </Menu>
                  </>
                ) : (
                      <div className={classes.headerOption}>
                          <Button color="inherit" onClick={() => handleMenuClick('/home')} >Home</Button>
                          <Button color="inherit" onClick={() => handleMenuClick('/order')} >Order</Button>
                          <Button color="inherit" onClick={() => handleMenuClick('/admin')} >Admin</Button>
                          <Button color="inherit" onClick={() => handleMenuClick('/deals')} >Deals</Button>
                          {loggedInUser.email ?<Button color="inherit">{loggedInUser.displayName}</Button> : <Button onClick={() => handleMenuClick('/login')} variant="contained">Login</Button>}
                      </div>
                    
                   
                ) }
              
            </div>
            </Grid>
            </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}
export default withRouter(MenuAppBar)