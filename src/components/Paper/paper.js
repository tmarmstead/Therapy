import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
// import Grid from '@material-ui/core/Grid'
// import FormRow from '@material-ui/core/FormRow'
// import { Card } from '@material-ui/core';
// import SimpleCard from "../Card/card";
import Typography from "@material-ui/core/Typography";
// import IconButton from '@material-ui/IconButton';
// import ActionHome from 'material-ui/svg-icons/action/home';
import Image from '../../images/picture.jpg';
// import Box from '@material-ui/core/Box'
import "../Paper/paper.css"

const styles = {
    paperContainer: {
        backgroundImage: `url(${Image})`,
        objectFit: 'cover'
    }
};


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(1),
            width: theme.spacing(30),
            height: theme.spacing(30),
        },
    },
}));

export default function SimplePaper() {
    const classes = useStyles();

    return (
        <div className={classes.root}>

            <Paper className="paper first" elevation={9} />
            <Paper className="paper" elevation={9}>
                <Typography variant="h4" className="paper-title">Therapy for Everyone</Typography>
                <Typography variant="h5" className="paper-text">We are experienced and ready to help our clients work through a variety of topics</Typography>
            </Paper>
            <Paper className="paper" style={styles.paperContainer} elevation={9}>Picture here?</Paper>
            <Paper className="paper" elevation={9} />
        </div>
    );
}