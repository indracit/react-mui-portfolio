import {Grid ,Link, Typography } from '@mui/material';
import Particles from "react-tsparticles";
import particlesOptions from "./particles.json";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Home() {
    return ( <div style={{color: '#F8F9F9',backgroundColor: '#17202A',minHeight:'100vh',width:'100vw'}}>
            <Particles options={particlesOptions}/>
            <Grid container display="flex" flexDirection="column" minHeight="100vh" justifyContent="center" alignItems="center" spacing={1} >
                <Grid item>
                     
            <Typography variant='h5' fontSize={'2rem'}>Hello! I am  Indracit</Typography>
                </Grid>
                <Grid item>
                  
            <Typography fontSize={'1.5rem'}>Full Stack Web developer </Typography>
                </Grid>
            <Grid item >
                <Grid container spacing={2}>
                    <Grid item>
                 <Link href="https://github.com/indracit" color="inherit">
                <GitHubIcon fontSize="large"/>
                 </Link>
                    </Grid >
                    <Grid item>
                  <Link href="https://www.linkedin.com/in/indracits/" color="inherit">
                <LinkedInIcon sx={{ fontSize: 40 }}/>
                  </Link>
                    </Grid>
                </Grid>
            </Grid>
              </Grid>
    
          </div>   
    );
}

export default Home;
