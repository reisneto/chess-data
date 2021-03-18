import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import { CardContent, CardActions, Link, Typography } from "@material-ui/core";
import { useSelector } from "react-redux";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function Player() {
  const classes = useStyles();
  const playerData = useSelector((state) => state.player.data);

  if (!playerData.name) return "";

  return (
    <Card className={classes.root}>
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
