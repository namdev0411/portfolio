import React from 'react';
import './Hobby.scss';
import {Grid} from '@material-ui/core';
import TitleField from './TitleField';
import {Element } from 'react-scroll';

export default function Hobby() {
    const sources = [
        {
            name:'ゲーム',
            src:'game.jpg',
            type: 1
        },
        {
            name:'撮影',
            src: 'sefi.jpeg',
            type: 1
        },
        {
            name:'友達と遊び',
            src: 'tomodachi.jpg',
            type: 1
        },
        {
            name:'登山',
            src: 'tozan.MOV',
            type: 2
        }
    ];
    return (
        <Grid container>
            <Grid item xs={12}>
                <Element name="hobby"/>
                <TitleField text="Hobby"/>
            </Grid>
            <div container className="hobby">
                {sources.map(item=>{
                    if(item.type===1)return(
                        <div key={item.name}>
                            <img src={"./images/"+item.src} alt={item.src.split('.')[0]}/>
                            <h6 className="hobby-name">{item.name}</h6>
                        </div>
                    )
                    return (
                        <div key={item.name}>
                             <video 
                                height="300px"
                                width="350px"
                                src={"./videos/"+item.src}
                                autoPlay
                                controls
                            ></video>
                        </div>
                    )
                }
                )}
            </div>
        </Grid>
    )
}