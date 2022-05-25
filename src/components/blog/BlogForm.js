import React,{useState} from 'react'
import { Button,TextField,InputAdornment,FormControl,InputLabel} from '@mui/material'

export const BlogForm = ({onAddPost}) => {
    const [formData, setFormData] = useState({
        title:"",
        team: "",
        player: "",
        post:""
    })
    function handleChange(event) {
        setFormData({
          ...formData,
          [event.target.name]: event.target.value,
        });
    }
    function handleSubmit(event) {
        event.preventDefault();
        const itemData={
          title:formData.title,
          team: formData.team,
          player: formData.player,
          post:formData.post
        }
        fetch("http://localhost:3001/blog", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(itemData),
      })
        .then((r) => r.json())
        .then((newItem) => onAddPost(newItem));
      }

  return (
    <FormControl component='form' onSubmit={handleSubmit}>
      <h1>New Post</h1>
      <FormControl>
        <TextField
          id='standard-search'
          label='Title'
          focused
          name="title"
          placeholder='Post Title'
          value={formData.title}
          onChange={handleChange}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                {/* <PersonIcon /> */}
              </InputAdornment>
            ),
          }}
        />
      </FormControl>
        <br/>
        <FormControl>
          <TextField
            id='standard-search'
            label='Team'
            focused
            name="team"
            placeholder='Team Name'
            value={formData.team}
            onChange={handleChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  {/* <PersonIcon /> */}
                </InputAdornment>
              ),
            }}
          />
        </FormControl>
        <br/>
        <FormControl>
          <TextField
            id='standard-search'
            label='Player'
            focused
            name="player"
            placeholder='Player Name'
            value={formData.player}
            onChange={handleChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  {/* <PersonIcon /> */}
                </InputAdornment>
              ),
            }}
          />
        </FormControl>
        <br/>
        <FormControl>
          <TextField
            id='standard-search'
            label='Post'
            focused
            name="post"
            placeholder='Write your post here'
            value={formData.post}
            onChange={handleChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  {/* <PersonIcon /> */}
                </InputAdornment>
              ),
            }}
          />
        </FormControl>
        
        <Button type="submit">Add Post</Button>
    </FormControl>
  )
}
