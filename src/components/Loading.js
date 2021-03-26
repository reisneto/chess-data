import { makeStyles } from "@material-ui/core/styles";
import { Box, CircularProgress } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  loading: {
    display: "flex",
    justifyContent: "center",
    marginTop: theme.spacing(4),
  },
}));
export default function Loading() {
  const classes = useStyles();
  return (
    <Box className={classes.loading}>
      <CircularProgress  />
    </Box>
  );
}
