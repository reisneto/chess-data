import { initialState } from "./initialState";

export default function playerReducer(state = initialState.player, action) {
  switch (action.type) {
    case "ERROR_PLAYER":
      return {
        ...state,
        error: true,
      }
    case "LOADING_PLAYER":
      return {
        ...state,
        loading: true,
      }
    case "SEARCH_PLAYER":
      return {
        ...state,
        loading: false,
        error: false,
        data: {
          avatar: action.player.avatar,
          name: action.player.name,
          username: action.player.username,
          url: action.player.url,
          location: action.player.location,
        },
      };

    default:
      return state;
  }
}
