import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import { Collapse, Button } from '@material-ui/core';
// import LandingAnimation from '../LandingAnimation';

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },

    startBtn: {
        fontSize: '40px',
        fontFamily: 'Comfortaa'
    }

}));

function StartBtn() {


    return (
        <div id="start-btn">
            <h1>Start Button Hello</h1>
        </div>
    )

}

export default StartBtn;