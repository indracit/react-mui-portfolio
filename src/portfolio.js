
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import {  CardActionArea } from '@mui/material';
import Taskmanager from './icons/Taskmanager.jpg'
import extrack from './icons/extrack.jpg'
const Portfolio = () => {
    return (
            <Grid container  style={{color: '#F8F9F9',backgroundColor: '#17202A',minHeight:'100vh',width:'100vw'}} direction="row" justifyContent="center" alignItems="center" spacing={2}>  
                <Grid item>
                    <h2>PROJECTS &gt;</h2>
                </Grid>
                <Grid item>
                <Card sx={{ maxWidth: 290 }}>
      <CardActionArea href='https://github.com/indracit/task-manager'>
        <CardMedia
          component="img"
          height="130"
        
          image={Taskmanager}
          alt="Task manager"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Task Manager
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Developed with Node js.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
                </Grid>
                <Grid item>
                <Card sx={{ maxWidth: 290 }}>
      <CardActionArea href='https://github.com/indracit/excercise-tracker'>
        <CardMedia
          component="img"
          height="130"
          image={extrack}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Excercise Tracker
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Developed with Node js
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card> </Grid>
        </Grid>
    );
};

export default Portfolio;