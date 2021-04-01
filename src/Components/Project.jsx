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
                <h3 style={{textAlign: "center"}}>
                    Food Review(React + sass)
                </h3>
            </Grid>
            <Grid item sm={6} item className="img">
                <a href="https://photo-gallery-94c5d.web.app"
                    target="true">
                    <img src="./images/gallerylove.png" alt="food"/>
                </a>
                <h3 style={{textAlign: "center"}}>
                    Gallery(React + firebase)
                </h3>
            </Grid>
            <Grid item sm={6} item className="img">
                <a href="http://minishop-admin.surge.sh/"
                    target="true">
                    <img src="./images/admin.png" alt="Admin"/>
                </a>  
                <h3 style={{textAlign: "center"}}>
                    Product管理(React + firebase)
                </h3>
            </Grid>
            <Grid item sm={6} item className="img">
                <a href="https://petshop-65533.web.app/home"
                    target="true"
                >
                    <img src="./images/petshop.png" alt="Petshop"/>
                </a>  
                <h3 style={{textAlign: "center"}}>
                    ネットショッピングサイト(Reactjs)
                </h3>
            </Grid>
        </Grid>
    )
}
