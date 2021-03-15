import React from 'react';
import {Grid} from '@material-ui/core';
import './Project.scss';
import TitleField from './TitleField';
import {Element } from 'react-scroll';

export default function Project() {
    return (
        <Grid container className="project">
            <Grid item xs={12}>
                <Element name="project"/>
                <TitleField text="Project"/>
            </Grid>
            <Grid item sm={6} item className="img">
                <a href="http://learn-react-hontoni.vercel.app/"
                    target="true"
                >
                    <img src="./images/food.png" alt="food"/>
                </a>
            </Grid>
            <Grid item sm={6} item className="img">
                <a href="http://gallerylove0411.surge.sh"
                    target="true">
                    <img src="./images/gallerylove.png" alt="food"/>
                </a>
            </Grid>
            <Grid item sm={6} item className="img">
                <a href="http://minishop-admin.surge.sh/"
                    target="true">
                    <img src="./images/admin.png" alt="Admin"/>
                </a>  
            </Grid>
            <Grid item sm={6} item className="img">
                <a href="http://petshop0411.surge.sh/"
                    target="true"
                >
                    <img src="./images/petshop.png" alt="Petshop"/>
                </a>  
            </Grid>
        </Grid>
    )
}
