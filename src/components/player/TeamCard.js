import React from "react"
import {Link} from 'react-router-dom'
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
    maxWidth: 400,
    justifyContent:'center'
  },
  media: {
    display: "block",
    marginLeft: "auto",
    marginRight:" auto",
    height: "150px",
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
         <Typography variant="body2" color="text.secondary">
            {team.strDescriptionEN}
         </Typography>
       </CardContent>
     </CardActionArea>
     <CardActions>
       <Button component={Link} to={`/leagueplayer/${team.strTeam}`} size="small" color="primary">
         Go to {`${team.strTeam}`} Page
       </Button>
     </CardActions>
   </Card>
  )
}
