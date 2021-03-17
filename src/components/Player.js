import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

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

export default function SimpleCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          name
        </Typography>
        <Typography variant="h5" component="h2">
          username
        </Typography>
        <Typography>location</Typography>
        <Typography variant="body2" component="p">
          status
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Go to official page</Button>
      </CardActions>
    </Card>
  );
}
