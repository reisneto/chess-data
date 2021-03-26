import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import {
  CardContent,
  CardHeader,
  CardActions,
  Link,
  Typography,
  Avatar,
} from "@material-ui/core";
import { useSelector } from "react-redux";
import Loading from "./Loading";
import Idle from "./Idle";

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
  const { data: playerData, status } = useSelector((state) => state.player);
  const feedback = {
    IDLE: <Idle />,
    LOADING: <Loading />,
    NOT_FOUND: <h1>not found</h1>,
    ERROR: <h1>ops, something bad happened, please try again...</h1>,
  };

  if (status !== "FOUND") return feedback[status];

  return (
    <Card className={classes.player}>
      <CardHeader
        avatar={<Avatar alt="user image" src={playerData.avatar} />}
        title={playerData.name}
        subheader={playerData.username}
      />

      <CardContent>
        {playerData.location && (
          <Typography>From {playerData.location}</Typography>
        )}
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
