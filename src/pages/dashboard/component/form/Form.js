
import React from 'react';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Checkbox from '@mui/material/Checkbox';
import Radio from '@mui/material/Radio';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Switch from '@mui/material/Switch';
import Button from '@mui/material/Button';
import Drawer from '../drawer/Drawer'

function Form() {
  return (
    <>
    <div className='headerform'>
    <h2>Forms</h2>
<Drawer/>
    </div>

<Card>
      <CardContent>
      <div className='logingroup'>
    <label>Text field</label>
      <TextField fullWidth  id="outlined-basic" label="Text field" variant="outlined" />
      </div>
      <div className='logingroup'>
      <label>Checkbox</label>
      <Checkbox/>
      </div>
      <div className='logingroup'>
      <label>Radio</label>
      <Radio />
      </div>
      <div className='logingroup'>
      <label>Select</label>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          //value="{age}"
          label="Age"
         // onChange={handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      </div>
      <div className='logingroup'>
      <label>Switch</label>
      <Switch/>
      </div>
      <div className='logingroup'>
      <Button variant="text">Text</Button>
</div>
<div className='logingroup'>
<Button variant="contained">Contained</Button>

</div>
<div className='logingroup'>

<Button variant="outlined">Outlined</Button>
</div>

      </CardContent>
      </Card>
      
    </>
  );
}

export default Form;