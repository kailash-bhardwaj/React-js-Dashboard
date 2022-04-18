

import { Link } from 'react-router-dom';
import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

function Login() {
  return (
    <>
    <div className='main'>
    <div className='main__login'>
    <div className='main__login-inner'>
    <Card>
      <CardContent>
      <h1>Login</h1>
      <div className='logingroup'>
      <TextField fullWidth  id="outlined-basic" label="Email" variant="outlined" />
      </div>
      <div className='logingroup'>
      <TextField fullWidth  id="outlined-basic" label="Password" variant="outlined" />
      </div>
      <div className='logingroup'>
     
      <Link className='button' to="/dashboard">Login</Link>
      
      </div>
      <div className='forgottext'>
      <Link to="/forgot">Forgot Password</Link>
      </div>
      </CardContent>
      </Card>
    </div>
    </div>
    </div>
    </>
  );
}

export default Login;