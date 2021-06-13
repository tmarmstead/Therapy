import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Collapse, Button } from '@material-ui/core';
import LandingAnimation from '../LandingAnimation';
import HomePage from '../../Pages/Home';

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#cb997e'

    },

    startBtn: {
        fontSize: '40px',
        fontFamily: 'Comfortaa',
    }

}));

function StartBtn() {
    const classes = useStyles();
    const checked = LandingAnimation('header');


    return (
        <div className={classes.root} id="start-btn">
            <Collapse in={checked} {... (checked ? { timeout: 1000 } : {})}></Collapse>
            <HomePage className={classes.startBtn} />

        </div>
    )

}

export default StartBtn;