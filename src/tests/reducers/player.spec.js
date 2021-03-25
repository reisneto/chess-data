import playerReducer from "../../reducers/player";
import { initialState } from "../../reducers/initialState";

const action = {
  type: "SEARCH_PLAYER",
  player: {
    avatar:
      "https://images.chesscomfiles.com/uploads/v1/user/62606342.13618355.200x200o.e158e6510806.jpeg",
    url: "https://www.chess.com/member/reisneto",
    name: "Álvaro Reis",
    username: "reisneto",
    location: "Manaus",
  },
};

const data = {
  data: {
    avatar:
      "https://images.chesscomfiles.com/uploads/v1/user/62606342.13618355.200x200o.e158e6510806.jpeg",
    url: "https://www.chess.com/member/reisneto",
    name: "Álvaro Reis",
    username: "reisneto",
    location: "Manaus",
  },
};

describe("player reducer", () => {
  it("should change player data", () => {
    const reducerData = playerReducer(initialState.player, action);
    expect(reducerData).toEqual({ ...data });
  });

  it("should return state if action not found", () => {
    const reducerData = playerReducer(initialState.player, {type: 'INVALID_ACTION'});
    expect(reducerData).toEqual(initialState.player);
  })
});
