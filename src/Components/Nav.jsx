import React, { useEffect, useState } from 'react';
import {Grid} from '@material-ui/core';
import './Nav.scss';
import {Link } from 'react-scroll';

const Nav = () => {
    const [display, setdisplay] = useState(false);
    const [scroll, setscroll] = useState(false);

    useEffect(() => {
        const handleScroll = (event)=>{
            if(window.scrollY >0){
                setscroll(true);
            }else setscroll(false);
        }
        window.addEventListener("scroll",handleScroll);
        return () => {
            window.removeEventListener("scroll",handleScroll)
        };
    });
    return (
        <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
            className={!scroll ? "nav":"nav active"}
        >
            <Grid item sm={6}>
                <img className ="page-image" src="./portfolio.png" alt="Opp..."/>
            </Grid>
            <Grid item sm={6}>
                <Grid 
                    container
                    className="nav-bar"
                    direction="row"
                >   
                    <div className="hamburger" 
                        onClick={()=>{
                            setdisplay(curr=>!curr);
                        }}
                    >
                        <p className="burger"></p>
                        <p className="burger"></p>
                        <p className="burger"></p>
                    </div>
                    <ul className={display ? "list-nav active": "list-nav"}>
                        <Link to="ido" spy={true} smooth={true} offset={50} duration={500} className="nav-link">I do</Link>
                        <Link to="education" spy={true} smooth={true} offset={50} duration={500} className="nav-link">Education</Link>
                        <Link to="project" spy={true} smooth={true} offset={50} duration={500} className="nav-link">Project</Link>
                        <Link to="hobby" spy={true} smooth={true} offset={50} duration={500} className="nav-link">Hobby</Link>
                        <Link to="certifieds" spy={true} smooth={true} offset={50} duration={500} className="nav-link">Certifieds</Link>
                    </ul>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default Nav;
