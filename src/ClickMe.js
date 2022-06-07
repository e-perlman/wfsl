import React from 'react'
import { useState } from 'react'
import { Button,TextField,InputAdornment,FormControl,InputLabel} from '@mui/material'
import { ResetTv } from '@mui/icons-material'

export const ClickMe = () => {
    const [counter,setCounter]=useState(0)
    const [formData, setFormData] = useState({
    title:"",
})
    function handleClick(e){
        const newCounter=counter+formData.title.length
        setCounter(newCounter) 
        setFormData({title:''}) 
    }
    function handleChange(event) {
        setFormData({
          ...formData,
          [event.target.name]: event.target.value,
        });
    }
  return (
    <div>
        <FormControl>
        <TextField
          id='standard-search'
          label='Title'
          focused
          name="title"
          placeholder='Post Title'
          value={formData.title}
          onChange={handleChange}
        />
        <button onClick={handleClick}>Click Me</button>
        <p>{counter}</p>
      </FormControl>
    </div>
  )
}
