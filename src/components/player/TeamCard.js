import React from "react"
import {Link} from 'react-router-dom'
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";
import { Button,CardActions } from '@mui/material';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    width: 500,
    justifyContent:'center'
  },
  media: {
    display: "block",
    marginLeft: "auto",
    marginRight:" auto",
    height: "150px",
    width: 'auto'
  },
  button:{
    justifyContent:'center',
    margin:'0 auto',
    float:'none'
  }
});

export const TeamCard = ({team}) => {

  const classes = useStyles();
  return (
     <Card className={classes.root} >
     <CardContent style={{justifyContent:'center'}}>
       <CardMedia
         component="img"
         className={classes.media}
         image={team.strTeamBadge}
         alt={`${team.strTeam}`}
       />
         <Typography gutterBottom variant="h4" component="div">
            {team.strTeam}
         </Typography>
         <Typography gutterBottom variant="h5" component="div">
            {team.strStadiumLocation}
         </Typography>
       </CardContent>
     <CardActions className={classes.button}>
       <Button component={Link} to={`/leagueplayers/${team.strTeam}`} size="small" color="primary">
         Go to {`${team.strTeam}`} Page
       </Button>
     </CardActions>
   </Card>
  )
}
