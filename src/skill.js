import { Avatar } from "@mui/material";
import { Grid } from "@mui/material";
import html from './icons/html.png'
import css3 from './icons/css3.png'
import bootstrap from './icons/bootstrap.png'
import javascript from './icons/javascript.png'
import material from './icons/material.png'
import reactjs from './icons/reactjs.png'
import nodejs from './icons/nodejs.png'
import npm from './icons/npm.png'
import python from './icons/python.png'
import mongodb from './icons/mongodb.png'
import mysql from './icons/mysql.png'
import postgresql from './icons/postgresql.png'
import git from './icons/git.png'
import heroku from './icons/heroku.png'




const Skill = () => {
    return (
            <Grid container style={{color: '#F8F9F9',backgroundColor: '#17202A',minHeight:'60vh',width:'100vw'}} direction="row" justifyContent="center" alignItems="center" spacing={1}>  
                <h1>SKILLS &gt;</h1>
                <Grid item>
                <Avatar
                alt="html logo"
                src={html}
                sx={{ width: 60, height: 60 }}/>
                </Grid>
                <Grid item>
                <Avatar
                alt="css logo"
                src={css3}
                sx={{ width: 60, height: 60 }}/>
                </Grid>
                <Grid item>
                <Avatar
                alt="bootstrap logo"
                src={bootstrap}
                sx={{ width: 60, height: 60 }}/>
                </Grid>
                <Grid item>
                <Avatar
                alt="javascript logo"
                src={javascript}
                sx={{ width: 60, height: 60 }}/>
                </Grid>
                <Grid item>
                <Avatar
                alt="material logo"
                src={material}
                sx={{ width: 60, height: 60 }}/>
                </Grid>
                <Grid item>
                <Avatar
                alt="react logo"
                src={reactjs}
                sx={{ width: 60, height: 60 }}/>
                </Grid>
                <Grid item>
                <Avatar
                alt="node logo"
                src={nodejs}
                sx={{ width: 60, height: 60 }}/>
                </Grid>
                <Grid item>
                <Avatar
                alt="npm logo"
                src={npm}
                sx={{ width: 60, height: 60 }}/>
                </Grid>
                <Grid item>
                <Avatar
                alt="python logo"
                src={python}
                sx={{ width: 60, height: 60 }}/>
                </Grid>
                <Grid item>
                <Avatar
                alt="mongo logo"
                src={mongodb}
                sx={{ width: 60, height: 60 }}/>
                </Grid>
                <Grid item>
                <Avatar
                alt="mysql logo"
                src={mysql}
                sx={{ width: 60, height: 60 }}/>
                </Grid>
                <Grid item>
                <Avatar
                alt="postgresql logo"
                src={postgresql}
                sx={{ width: 60, height: 60 }}/>
                </Grid>
                <Grid item>
                <Avatar
                alt="git logo"
                src={git}
                sx={{ width: 60, height: 60 }}/>
                </Grid>
                <Grid item>
                <Avatar
                alt="heroku logo"
                src={heroku}
                sx={{ width: 60, height: 60 }}/>
                </Grid>
                

                
        </Grid>
    );
};

export default Skill;