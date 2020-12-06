import React from 'react'
import { AppBar, Toolbar, Typography, IconButton, Badge } from '@material-ui/core';
import icon from '../../assets/icon.svg'
import { ShoppingCart } from '@material-ui/icons';
import useStyles from './style.js';

const NavBar = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static" color="inherit">
                <Toolbar>
                    <Typography variant="h6" className={classes.title} color="inherit">
                        <div className={classes.home}>
                            <img src={ icon } alt="Webshop icon" height="25px" className={classes.image}/>
                            <div>Beauty Basket</div>
                        </div>
                    </Typography>
                    <IconButton aria-label="Show items in shopping cart" color="inherit">
                        <Badge badgeContent={4} color="secondary">
                            <ShoppingCart />
                        </Badge>
                   </IconButton>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default NavBar
