import React from 'react';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent'; 
import TimelineDot from '@material-ui/lab/TimelineDot';
import {Typography} from '@material-ui/core';
import {Grid} from '@material-ui/core';
import './EducationTimeline.scss';
import TitleField from './TitleField';
import {Element } from 'react-scroll';

export default function EducationTimeline() {
  return (
    <Grid container className="educationTimeline">
      <Grid item xs={12}>
        <Element name="education"/>
        <TitleField text="Education"/>
      </Grid>
      <Timeline align="alternate">

        <TimelineItem>
          <TimelineOppositeContent>
              <Typography color="textSecondary">2022/2</Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot variant="outlined" color="secondary" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>Salesforce 認定 Platform アプリケーションビルダー試験に合格</TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent>
              <Typography color="textSecondary">2021/4</Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot variant="outlined" color="secondary" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>2NFJAPAN株式会社に入社、Salesforceの勉強を始める</TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot variant="outlined" color="warning"/>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>ReactとFirebase卒業作成</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>
              <Typography color="textSecondary">2年生</Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot variant="outlined" color="secondary" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>Spring,Reactの勉強</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>
              <Typography color="textSecondary">１年生</Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot variant="outlined" color="primary"/>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>WEBフロントエンドの勉強</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>
              <Typography color="textSecondary">2019/4</Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot variant="outlined" color="secondary" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>専門学校入学</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>
              <Typography color="textSecondary">2019/3</Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot variant="outlined" color="primary" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>日本語学校卒業</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>
              <Typography color="textSecondary">2017/4</Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot variant="outlined" />
          </TimelineSeparator>
          <TimelineContent>来日、日本語学校入学</TimelineContent>
        </TimelineItem>
      </Timeline>
    </Grid>
  );
}
