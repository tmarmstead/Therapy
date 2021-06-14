import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import Header from "../../components/Header"
import TestingAboutPage from '../../components/AboutPage';



const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        background: "#b7b7a4"
    },
    textcolor: {
        color: '#cb997e'
    },
    container: {
        textAlign: 'center'
    },
    title: {
        color: '#6b705c',
        fontSize: '5rem',
        fontFamily: 'Helvetica',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        // marginTop: '50'

    },
    expandMore: {
        color: 'black',
        fontSize: '1rem',
        display: 'flex',
        // justifyContent: 'center',
        alignItems: 'center',
        // height: '100vh'
        // background: "#b7b7a4"
    }
}));

const About = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <h1 className={classes.title}>About Us</h1> <br></br>
            <TestingAboutPage />
        </div>
    );
};

export default About;