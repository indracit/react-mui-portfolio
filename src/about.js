import Avatar from '@mui/material/Avatar';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import ij from './ij.jpg'
const about = () => {
    return (
            
            <Grid container style={{minHeight:'90vh',width:'100vw'}} direction="column" justifyContent="center" alignItems="center" spacing={2}>
              <h1>ABOUT</h1>
            <Grid item >
            <Avatar alt="Indracit" src={ij} sx={{ width: 150, height: 150 }}/>
            </Grid>
            <Grid item >
            <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: '.7rem' }}  color="text.secondary" gutterBottom>
        Hi Im Indracit S ,I've completed by Bachelor degree in Computer Science <br></br>and Engineering in Anna University BIT Campus Trichy by 2020.<br></br>
I have been worked in Frontend Technologies like HTML, CSS, Bootstrap,<br></br>Material UI, Javascript and React.js<br></br>
And also backend Technologies like Node.js , Express .js, Python and<br></br> Databases such as Mysql,Mongo Db and PostgresSql.
        </Typography>
      </CardContent>
    </Card>
            </Grid>
        </Grid>
        
    );
};

export default about;