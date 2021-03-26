import * as playerService from '../services/player';

export function searchPlayer(username) {
  
  return async (dispatch) => {
    dispatch({ type: "LOADING_PLAYER" });
    try {
      const player = await playerService.getPlayer(username);
      dispatch({ type: "SEARCH_PLAYER", player }); 
    } catch (error) {
      dispatch({ type: "ERROR_PLAYER" });
    }
  };
}
