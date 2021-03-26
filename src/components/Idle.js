import { Card, CardContent, CardMedia, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  message: {
    marginTop: theme.spacing(4),    
  },
  content: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    "& p": {
      fontSize: 18,
    }
  },
  media: {
    height: 0,
    paddingTop: '45.25%', // 16:9
  },
}));

export default function Idle() {
  const classes = useStyles();
  return (
    <Card className={classes.message}>
      <CardMedia
        className={classes.media}
        image={`${process.env.PUBLIC_URL}/static/images/dogtyping.jpg`}
        title="info about how to search"
      />
      <CardContent className={classes.content}>
        <Typography>
          Hi, you can type a username and we'll try to find it out
        </Typography>
      </CardContent>
    </Card>
  );
}
