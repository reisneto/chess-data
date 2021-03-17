import "./App.css";
import { Container } from "@material-ui/core";
import Search from "./components/Search";
import Player from "./components/Player";
import { useState } from "react";

function App() {
  const [data, setData] = useState({});

  function format(playerData) {
    return {
      avatar: playerData.avatar,
      url: playerData.url,
      name: playerData.name,
      username: playerData.username,
      location: playerData.location,
    };
  }

  const getPlayerData = async (player) => {
    const baseURL = "https://api.chess.com/pub/player";
    const playerRawData = await fetch(`${baseURL}/${player}`);
    const playerData = await playerRawData.json();
    setData(format(playerData));
    return;
  };

  const onSubmit = (event, player) => {
    event.preventDefault();
    getPlayerData(player);
  };

  return (
    <Container maxWidth="sm">
      <Search onSubmit={onSubmit} />
      <Player playerData={data} />
    </Container>
  );
}

export default App;
