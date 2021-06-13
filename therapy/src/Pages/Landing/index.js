import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import Header from '../../components/Header';
import StartBtn from '../../components/StartBtn';


const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '100vh',
        backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/pastel.jpeg'})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
    }
}));

const Landing = () => {

    return (
        <div>
            <CssBaseline />
            <Header />
            <StartBtn />
        </div>
    );
};

export default Landing;