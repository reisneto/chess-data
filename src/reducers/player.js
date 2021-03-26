import { initialState } from "./initialState";

export default function playerReducer(state = initialState.player, action) {
  switch (action.type) {
    case "NOT_FOUND":
      return {
        ...state,
        status: 'NOT_FOUND'
      }
    case "ERROR_PLAYER":
      return {
        ...state,
        error: true,
        status: "ERROR",
      }
    case "LOADING_PLAYER":
      return {
        ...state,
        loading: true,
        status: "LOADING",
      }
    case "SEARCH_PLAYER":
      return {
        ...state,
        loading: false,
        error: false,
        status: "FOUND",
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
