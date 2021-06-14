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
import CoupleAtTable from '../../images/couple-at-table.png';
import Happy from '../../images/happy.png';
import Military from '../../images/military.png';
import Child from '../../images/child.png';
// import Box from '@material-ui/core/Box'
import "../Paper/paper.css"

const styles = {
    paperContainer: {
        backgroundImage: `url(${CoupleAtTable})`,
        objectFit: 'cover'
    },
    two: {
        backgroundImage: `url(${Happy})`,
        height: 240,
        width: 240,
        objectFit: 'fill'
    },
    three: {
        backgroundImage: `url(${Military})`,
        height: 240,
        width: 240,
        objectFit: 'fill'
    },
    four: {
        backgroundImage: `url(${Child})`,
        height: 240,
        width: 240,
        objectFit: 'fill'
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

            <Paper className="paper first" style={styles.paperContainer} elevation={9} />
            <Paper className="paper" style={styles.two} elevation={9} />
            <Paper className="paper" style={styles.four} elevation={9} />
            <Paper className="paper" style={styles.three} elevation={9} />
        </div>
    );
}