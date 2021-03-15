import React from 'react';
import './Footer.scss';
import {Grid} from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';

export default function Footer() {
    return (
        <Grid 
         className="footer"
         container
         justify="center"
         alignItems="center"
         >
            <a href="https://www.facebook.com/nam.cool.773">
                <FacebookIcon/>
            </a>
            <a href="https://github.com/namdev0411">
                <GitHubIcon/>
            </a>
            <a href="https://www.instagram.com/namdev0411/">
                <InstagramIcon/>
            </a>
        </Grid>
    )
}
