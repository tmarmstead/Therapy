import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';



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
            <h1 className={classes.expandMore}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At risus viverra adipiscing at in tellus integer feugiat. Quis vel eros donec ac odio tempor. Mauris a diam maecenas sed enim ut sem viverra aliquet. Auctor elit sed vulputate mi sit. Vitae auctor eu augue ut lectus arcu bibendum at varius. Tempus iaculis urna id volutpat. Consectetur libero id faucibus nisl tincidunt eget nullam non. Aliquam purus sit amet luctus venenatis lectus magna fringilla urna. Id semper risus in hendrerit gravida rutrum quisque. Orci phasellus egestas tellus rutrum tellus pellentesque eu. Amet cursus sit amet dictum sit amet justo donec. Volutpat commodo sed egestas egestas fringilla phasellus faucibus scelerisque. Neque laoreet suspendisse interdum consectetur libero id faucibus nisl. Lorem dolor sed viverra ipsum. Bibendum arcu vitae elementum curabitur vitae. Ullamcorper velit sed ullamcorper morbi.

            In ornare quam viverra orci sagittis eu volutpat. Vel elit scelerisque mauris pellentesque pulvinar. Sit amet volutpat consequat mauris nunc congue. Amet consectetur adipiscing elit duis. Leo a diam sollicitudin tempor id eu. Orci porta non pulvinar neque laoreet suspendisse. At lectus urna duis convallis convallis tellus. Dignissim diam quis enim lobortis scelerisque fermentum dui. Adipiscing elit ut aliquam purus sit amet luctus venenatis. Pellentesque eu tincidunt tortor aliquam. Et netus et malesuada fames. Nibh tortor id aliquet lectus. Nibh venenatis cras sed felis eget velit. Amet consectetur adipiscing elit duis tristique sollicitudin nibh sit. Viverra mauris in aliquam sem fringilla ut morbi tincidunt augue. Adipiscing enim eu turpis egestas.
</h1>
        </div>
    );
};

export default About;