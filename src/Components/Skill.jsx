import React from 'react';
import './Skill.scss';
import TitleField from './TitleField';
import {Grid} from '@material-ui/core';
import {Element } from 'react-scroll';

const Skill = () => {
    return (
        <Grid container className="skill-bar">
            <Element name="skills"/>
            <TitleField text="Coding Skills"/>
            <Grid container>
                <Grid sm={5} item className="skill-bar-group">
                    <SkillItem rate={4} text="HTML5"/>
                    <SkillItem rate={3} text="Javascript"/>
                </Grid>
                <Grid sm={5} item　className="skill-bar-group">
                    <SkillItem rate={4} text="Css"/>
                    <SkillItem rate={3} text="ReactJs"/>
                </Grid>
                <Grid sm={5} item className="skill-bar-group">
                    <SkillItem rate={3} text="Nodejs"/>
                    <SkillItem rate={3} text="Material-ui"/>
                </Grid>
                <Grid sm={5}item　className="skill-bar-group">
                    <SkillItem rate={2} text="Photoshop"/>
                    <SkillItem rate={3} text="Bootstrap"/>       
                </Grid>
            </Grid>
        </Grid>
    );
}

export default Skill;

const SkillItem = ({rate,text})=>{
    return(
        <Grid container className="skill-item">
            <p style={{display:'inline',width:90}}>{text?text:"TextDefault"}:&nbsp;</p>
            <div className={!rate?"skill-bar-item":`skill-bar-item rate${rate}`}></div>
        </Grid>
    )
}
