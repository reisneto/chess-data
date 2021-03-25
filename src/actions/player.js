import * as playerService from '../services/player';

export function searchPlayer(username) {
  return async (dispatch) => {
    const player = await playerService.getPlayer(username);
    dispatch({ type: "SEARCH_PLAYER", player });
  };
}
