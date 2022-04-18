
import { Link } from 'react-router-dom';
import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

function ForgotPassword() {
  return (
    <>
 <div className='main'>
    <div className='main__login'>
    <div className='main__login-inner'>
    <Card>
      <CardContent>
      <h1>Forgot Password</h1>
      <div className='logingroup'>
      <TextField fullWidth  id="outlined-basic" label="Email" variant="outlined" />
      </div>
      <div className='logingroup'>
      <Button  fullWidth variant="contained">Submit</Button>
      </div>
      <div className='forgottext'>
      <Link to="/">Login</Link>
      </div>
      </CardContent>
      </Card>
    </div>
    </div>
    </div>
    </>
  );
}

export default ForgotPassword;