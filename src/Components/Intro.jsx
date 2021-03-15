import React from 'react';
import {Grid} from '@material-ui/core';
import './Intro.scss';
import TypeWriterEffect from 'react-typewriter-effect';

const Intro = () => {
    return (
        <Grid container className="intro">
            <Grid item xs={12} sm={8}className="intro-info">
                <h1>NGUYEN VAN NAM</h1>
                <TypeWriterEffect
                    textStyle={{ fontFamily: 'Red Hat Display', color: "#3b5998" }}
                    cursorColor="#3F3D56"
                    startDelay={100}
                    cursorColor="black"
                    multiText={[
                        'Hi,I am Nam!',
                        'I am a frontend Dev!'
                    ]}
                    loop={true}
                    nextTextDelay={1000}
                    typeSpeed={50}
                    hideCursorAfterText={true}
                />
                <a href="./cv.pdf">
                    <button>Download CV</button>
                </a>
            </Grid>
        </Grid>
    );
}

export default Intro;
