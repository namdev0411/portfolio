import './App.css';
import {Grid} from '@material-ui/core';
import Nav from './Components/Nav';
import Intro from './Components/Intro';
import EducationTimeline from './Components/EducationTimeline';
import Certifieds from './Components/Certifieds';
import Skill from './Components/Skill';
import Desc from './Components/Desc';
import Project from './Components/Project';
import Hobby from './Components/Hobby.jsx';
import Footer from './Components/Footer.jsx';

function App() {
  return (
    <Grid container>
        <Nav/>
        <Intro/>
        <Desc/>
        <EducationTimeline/>
        {/* <Skill/> */}
        <Project/>
        <Hobby/>
        <Certifieds/>
        <Footer/>
    </Grid>
  );
}

export default App;
