import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, InputBase, IconButton } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { useDispatch } from "react-redux";
import * as actions from "../actions/player";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
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
  const classes = useStyles();
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  function onSubmit(event) {
    event.preventDefault();
    dispatch(actions.searchPlayer(search));
  }

  return (
    <Paper component="form" className={classes.root}>
      <InputBase
        className={classes.input}
        placeholder="Search a chess player"
        inputProps={{ "aria-label": "search chess player" }}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        data-testid="search-input"
      />
      <IconButton
        className={classes.iconButton}
        type="submit"
        aria-label="search"
        onClick={(event) => onSubmit(event, search)}
        data-testid="search-submit"
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}
