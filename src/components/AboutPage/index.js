import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import { IconButton, Collapse } from '@material-ui/core';
// import { Link as Scroll } from 'react-scroll'
import './about.css'

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh'
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
        fontFamily: 'Helvetica'
    },
    expandMore: {
        color: 'black',
        fontSize: '4rem'
    }
}));

function TestingAboutPage() {
    // const classes = useStyles();
    // const [checked, setchecked] = useState(false);

    // useEffect(() => {
    //     setchecked(true);
    // })

    return (
        <div>
            <h1 id="about-page">
                Get Help Today<br />Lorem ipsum dolor sit amet consectetur adipisicing elit.Maxime mollitia,
    molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
optio, eaque rerum! Provident similique accusantium nemo autem.Veritatis
obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
    tenetur error, harum nesciunt ipsum debitis quas aliquid.Reprehenderit,
        quia.Quo neque error repudiandae fuga ? Ipsa laudantium molestias eos
sapiente officiis modi at sunt excepturi expedita sint ? Sed quibusdam
recusandae alias error harum maxime adipisci amet laborum.Perspiciatis
minima nesciunt dolorem! Officiis iure rerum voluptates a cumque velit
quibusdam sed amet tempora.Sit laborum ab, eius fugit doloribus tenetur
fugiat, temporibus enim commodi iusto libero magni deleniti quod quam
consequuntur! Commodi minima excepturi repudiandae velit hic maxime
doloremque.Quaerat provident commodi consectetur veniam similique ad
earum omnis ipsum saepe, voluptas, hic voluptates pariatur est explicabo
fugiat, dolorum eligendi quam cupiditate excepturi mollitia maiores labore
suscipit quas ? Nulla, placeat.Voluptatem quaerat non architecto ab laudantium
modi minima sunt esse temporibus sint culpa, recusandae aliquam numquam
totam ratione voluptas quod exercitationem fuga.Possimus quis earum veniam
quasi aliquam eligendi, placeat qui corporis!
            </h1>
        </div>
    );
};

export default TestingAboutPage;




















