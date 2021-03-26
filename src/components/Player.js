import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import {
  CardContent,
  CardActions,
  Link, 
  Typography,
} from "@material-ui/core";
import { useSelector } from "react-redux";
import Loading from './Loading';

const useStyles = makeStyles((theme) => ({
  player: {
    marginTop: theme.spacing(1),
  },
  title: {
    fontSize: 14,
  },
}));

export default function Player() {
  const classes = useStyles();
  const { data: playerData, loading } = useSelector((state) => state.player);

  if (loading) return <Loading />

  if (!playerData.name) return "";

  return (
    <Card className={classes.player}>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          {playerData.name}
        </Typography>
        <Typography variant="h5" component="h2">
          {playerData.username}
        </Typography>
        <Typography>{playerData.location}</Typography>
        <Typography variant="body2" component="p">
          {playerData.status}
        </Typography>
      </CardContent>
      <CardActions>
        <Link
          variant="body2"
          target="_blank"
          rel="noopener"
          href={playerData.url}
        >
          official page
        </Link>
      </CardActions>
    </Card>
  );
}
