import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        background: "#ffd7ba"
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

const Contact = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <h1 className={classes.title}>We're ready to help.</h1> <br></br>
            <p className={classes.title}>how about you?</p>

        </div>
    );
};

export default Contact;