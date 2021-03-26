import * as playerService from "../services/player";

export function searchPlayer(username) {
  return async (dispatch) => {
    dispatch({ type: "LOADING_PLAYER" });
    try {
      const player = await playerService.getPlayer(username);
      if (Object.keys(player).length > 0)
        dispatch({ type: "SEARCH_PLAYER", player });
      else dispatch({ type: "NOT_FOUND" });
    } catch (error) {
      dispatch({ type: "ERROR_PLAYER" });
    }
  };
}
