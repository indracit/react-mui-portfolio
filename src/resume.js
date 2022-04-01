
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
const Resume = () => {
    return (
        

        <Grid container style={{height:'100vh',width:'100vw'}}   direction="column" justifyContent="center" alignItems="center" spacing={2}>
          <h1>RESUME</h1>
          <Grid item>
          <Card sx={{ minWidth: 260 }}>
      <CardContent>
      <h3>EXPERIENCE</h3>
        <Typography sx={{ fontSize: 10 }} color="text.secondary" gutterBottom>
        * Data Management Team member <br></br>
        * Integra Micro Systems Pvt Ltd - Full time <br></br>
        * Jul 2021 - Present <br></br>
        * Chennai, Tamil Nadu, India
        </Typography>
      </CardContent>
    </Card>
          </Grid>
          <Grid item>
          <Card sx={{ minWidth: 260 }}>
      <CardContent>
          <h3>EDUCATION</h3>
        <Typography sx={{ fontSize: 10 }} color="text.secondary" gutterBottom>
        * Anna University BIT Campus Trichy <br></br>
        * B.E Computer Science and Engineering<br></br>
        * 2016 - 2020<br></br>
        * Grade: 62%<br></br>
        </Typography>
      </CardContent>
    </Card>
          </Grid>
       
        </Grid>
        
    );
};

export default Resume;







