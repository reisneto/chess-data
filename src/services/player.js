function format(playerData) {
  return {
    avatar: playerData.avatar,
    url: playerData.url,
    name: playerData.name,
    username: playerData.username,
    location: playerData.location,
  };
}

async function getPlayer(username) {
  const baseURL = "https://api.chess.com/pub/player";
  const playerRawData = await fetch(`${baseURL}/${username}`);
  const playerData = await playerRawData.json();
  if (playerData.username)
    return format(playerData);

  return {};
}

export { getPlayer };
