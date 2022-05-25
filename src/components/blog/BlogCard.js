import React from 'react'
import {
  Card,
  CardContent,
  Typography,
} from "@material-ui/core";
import { Button,CardActions } from '@mui/material';
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles({
  root: {
    width: 500,
    justifyContent:'center'
  },
  button:{
    justifyContent:'center',
    margin:'0 auto',
    float:'none'
  }
});

export const BlogCard = ({post,onPostClick}) => {
  const classes = useStyles();
  function handleClick(){
      onPostClick(post)
  }
  return (
    <Card className={classes.root}>
      <CardContent style={{justifyContent:'center'}}>
        <Typography gutterBottom variant="h5" component="div">{post.title} </Typography>
        <Typography gutterBottom variant="h6" component="div"> Team: {post.team} </Typography>
        <Typography gutterBottom variant="h6" component="div"> Player: {post.player} </Typography>
        <Typography gutterBottom variant="h6" component="div"> Post: {post.post} </Typography>
      </CardContent>
      <CardActions className={classes.button}>
        <Button onClick={handleClick}>Delete Post</Button>
      </CardActions>
    </Card>
  )
}
