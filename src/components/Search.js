import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, InputBase, IconButton } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2px 4px',
    marginBottom: '20px',
    display: 'flex',
    alignItems: 'center',
    width: 400,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
 
}));

export default function Search() {
  const classes= useStyles();
  const [player, setPlayer] = useState('');
  
  const getPlayerData = async(player) => {
    const baseURL = 'https://api.chess.com/pub/player';
    const playerRawData = await fetch(`${baseURL}/${player}`);
    const playerData = await playerRawData.json();
    alert(JSON.stringify(playerData));
    return
  }

  const onSubmit = (event) => {
    event.preventDefault();
    getPlayerData(player);
  };

  return (
    <Paper component="form" className={classes.root} margin="normal">
      <InputBase
        className={classes.input}
        placeholder="Search a chess player"
        inputProps={{ "aria-label": "search chess player" }}
        value={player}
        onChange={(e) => setPlayer(e.target.value)}
      />
      <IconButton
        className={classes.iconButton}
        type="submit"
        aria-label="search"
        onClick={onSubmit}
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}
