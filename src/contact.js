import React, { useState } from 'react'
import emailjs from '@emailjs/browser'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'
import { Grid } from '@mui/material'
import { TextField } from '@mui/material'
import { Button } from '@mui/material'
import SendIcon from '@mui/icons-material/Send';
import Card from '@mui/material/Card';

 const ContactUs = () => {
  
   const [name,setName]=useState('');
   const [email,setEmail]=useState('');
   const [message,setMessage]=useState('');
  

  const toastifySuccess = () => {
    toast('Form sent successfully! Have a nice day 😊', {
      position: 'bottom-right',
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      className: 'submit-feedback success',
      toastId: 'notifyToast',
    })
  
  }
  const sendEmail = (e) => {
    e.preventDefault()
    console.log(e)
    emailjs
      .sendForm(
        'service_p7i2bvi',
        'template_7hcyr4p',
        e.target,
        'user_Vow7L69Qh60bpUR6wspjs'
      )
      .then(
        (result) => {
          console.log(result.text)
        },
        (error) => {
          console.log(error.text)
        }
      )
      toastifySuccess()
      console.log(name,email,message)
      setName('')
      setEmail('')
      setMessage('')
      
  };
  

  return (
      
      <form onSubmit={sendEmail}>
          <Grid container style={{minHeight:'70vh',width:'100vw'}} direction="column" justifyContent="center" alignItems="center" spacing={2}>
        <Card sx={{ minWidth: 290  }}>
        <Grid container  direction="column" justifyContent="space-around" alignItems="center" spacing={1}> 
           <Grid item>

           <h4>CONTACT</h4>
           </Grid>
        <Grid item>
            <TextField id="outlined-basic" label="Name"  name='name'
            type='text'
            size="small"
            value={name}
            onChange={(e) => setName(e.target.value)} variant="outlined" />
            </Grid>
            <Grid item>
             <TextField id="outlined-basic" label="Email" 
            name='email'
            type='email'
            size="small"
            value={email}
            onChange={(e) => setEmail(e.target.value)} variant="outlined" />
            </Grid> 
      
      <Grid item>

        <TextField
          id="outlined-textarea"
          label="Message"
          name='message'
          size="small"
          onChange={(e) => setMessage(e.target.value)}
          value={message}
          multiline
          />
        
          </Grid>
          
       <Grid item>
    <Button variant="contained"  style={{marginBottom:'.5rem'}} color="success" type='submit' value='Send' size="small" endIcon={<SendIcon />}>
        SEND
      </Button>
           </Grid>   
           </Grid>

          </Card>
      <div>
          <ToastContainer
            position='bottom-right'
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            />
        </div>
        
      </Grid>
      </form>

      
    
  )
}

export default ContactUs;