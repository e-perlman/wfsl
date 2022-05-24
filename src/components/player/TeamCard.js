import React from "react"
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";
import { Button, CardActionArea, CardActions } from '@mui/material';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    maxWidth: 500,
    justifyContent:'center'
  },
  media: {
    justifyContent:'center',
    height: "100px",
    width: 'auto'
  }
});

export const TeamCard = ({team,onShowRoster}) => {
  function onTeamClick(){
    onShowRoster(team)
  }
  const classes = useStyles();
  return (
     <Card className={classes.root} onClick={onTeamClick}>
     <CardActionArea>
       <CardMedia
         component="img"
         className={classes.media}
         image={team.strTeamBadge}
         alt={`${team.strTeam}`}
       />
       <CardContent>
         <Typography gutterBottom variant="h5" component="div">
            {team.strTeam}
         </Typography>
         <Typography gutterBottom variant="h5" component="div">
            {team.strStadiumLocation}
         </Typography>
         <Typography variant="body2" color="text.secondary">
            {team.strDescriptionEN}
         </Typography>
       </CardContent>
     </CardActionArea>
     <CardActions>
       <Button size="small" color="primary">
         Share
       </Button>
     </CardActions>
   </Card>
  )
}
