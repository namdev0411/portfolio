import React from 'react';
import TitleField from './TitleField';
import './Certifieds.scss';
import {Grid} from '@material-ui/core';
import {Element } from 'react-scroll';

const Certifieds = ({}) => {
    return (
        <Grid container className="certifieds">
            <Element name="certifieds"/>
            <TitleField text="Certifieds"/>
            <Grid container className="certifieds-body">
                <Grid item sm={3}>
                    <CertifiedsItem title="Salesforce 認定 Platform アプリケーションビルダー資格 " time="2/2022" image='/Appbuider_Ces.jpeg'/>
                </Grid>
                <Grid item sm={3}>
                    <CertifiedsItem title="日本語能力試験 2級" time="1/2019" image='/JLPT-logo.jpg'/>
                </Grid>
                <Grid item sm={3}>
                    <CertifiedsItem title="文部科学省後援 情報検定 情報活用試験3級" time="2/2020" image="/jken-logo.jpg"/>
                </Grid>
                <Grid item sm={3}>
                    <CertifiedsItem title="Java能力認定試験　2級" time="2/2020" image='/java.jpg'/>
                </Grid>
            </Grid>
        </Grid>
    );
}
const CertifiedsItem = ({image,title,time})=>{
    return(
        <div className="certifieds-item">
            <img className="certifieds-image" src={image} alt="Opp..."/>
            <h3 className="certifieds-title">{title}</h3>
            <p className="certifieds-time">{time}</p>
        </div>
    )
}
export default Certifieds;
