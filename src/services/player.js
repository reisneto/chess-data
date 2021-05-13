import config from '../config/default.json';

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
  const baseURL = config.chess_api;
  const playerRawData = await fetch(`${baseURL}/${username}`);
  const playerData = await playerRawData.json();
  if (playerData.username)
    return format(playerData);

  return {};
}

export { getPlayer };
