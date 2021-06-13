import React from 'react';
import { Tabs, Tab, AppBar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    navbar: {
        background: '#ddbea9'
    },
    toolbarButtons: {
        marginLeft: 'auto',
        marginTop: '4.5px',
        marginRight: '43px'
    },
    textcolor: {
        color: '#3E1409'
    }
}));

function Navigation() {
    const classes = useStyles();
    // const { logout } = useAuth0();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    // const handleLogout = async () => {
    //     await logout({
    //         returnTo: window.location.origin
    //     });

    //     localStorage.removeItem('auth0.user');
    // };

    return (
        <div>
            <AppBar className={classes.navbar} elevation={9} style={{ margin: 0 }}>
                <Tabs className={classes.textcolor} value={value} onChange={handleChange}>
                    <Tab label="Home" component={Link} to={'/home'} />
                    <Tab label="About" component={Link} to={'/about'} />
                    <Tab label="Contact" component={Link} to={'/contact'} />
                    <span className={classes.toolbarButtons}>
                        {/* <Button color="inherit" onClick={() => handleLogout()}>
                            Log Out
						</Button> */}
                    </span>
                </Tabs>
            </AppBar>
        </div>
    );
}

export default Navigation;







































// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
// import MenuItem from '@material-ui/core/MenuItem';
// import Menu from '@material-ui/core/Menu';
// // import { withRouter } from 'react-router';

// const useStyles = makeStyles((theme) => ({
//     root: {
//         flexGrow: 1,
//     },
//     menuButton: {
//         marginRight: theme.spacing(2),
//     },
//     title: {
//         flexGrow: 1,
//     },
// }));

// const Navigation = props => {
//     const classes = useStyles();

//     const [anchorEl, setAnchorEl] = React.useState(null);
//     const open = Boolean(anchorEl);


//     const handleMenu = (event) => {
//         setAnchorEl(event.currentTarget);
//     };

//     const handleMenuClick = (pageSection) => {
//         setAnchorEl(null);
//     };

//     return (
//         <div className={classes.root}>

//             <AppBar position="static" >
//                 <Toolbar >

//                     <Typography variant="h6" className={classes.title} >
//                         Stein-Green Therapy Assoc.
//           </Typography>
//                     <div>
//                         <IconButton
//                             edge="start"
//                             className={classes.menuButton}
//                             color="inherit"
//                             aria-label="menu"
//                             onClick={handleMenu}
//                         >
//                             <MenuIcon />
//                         </IconButton>
//                         <Menu
//                             id="menu-appbar"
//                             anchorEl={anchorEl}
//                             anchorOrigin={{
//                                 vertical: 'top',
//                                 horizontal: 'right',
//                             }}
//                             keepMounted
//                             transformOrigin={{
//                                 vertical: 'top',
//                                 horizontal: 'right',
//                             }}
//                             open={open}
//                             onClose={() => handleMenuClick(null)}
//                         >
//                             <MenuItem onClick={handleMenuClick}>Home</MenuItem>
//                             <MenuItem onClick={handleMenuClick}>About Us</MenuItem>
//                             <MenuItem onClick={handleMenuClick}>Meet With Us</MenuItem>
//                             <MenuItem onClick={handleMenuClick}>Contact</MenuItem>
//                         </Menu>
//                     </div>
//                 </Toolbar>
//             </AppBar>
//         </div>
//     );
// }


// export default Navigation;































// import React from "react";
// import { makeStyles } from '@material-ui/core/styles';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';
// import { Menu } from '@material-ui/icons';

// const useStyles = makeStyles((theme) => ({
//     root: {
//         flexGrow: 1,
//     },
//     menuButton: {
//         marginRight: theme.spacing(2),
//     },
//     title: {
//         flexGrow: 1,
//     },
// }));


// function Navigation() {
//     const classes = useStyles();

//     return (
//         <div>
//             <AppBar position="static">
//                 <Toolbar>
//                     <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
//                         <Menu />
//                     </IconButton>
//                     <Typography variant="h6" className={classes.title}>
//                         Therapy and Counseling
//                     </Typography>

//                     <Button color="inherit">Home</Button>
//                     <Button color="inherit">About Us</Button>
//                     <Button color="inherit">Set Up Consultation</Button>
//                     <Button color="inherit">Contact</Button>
//                 </Toolbar>
//             </AppBar>
//         </div>
//     )
// }

// export default Navigation;