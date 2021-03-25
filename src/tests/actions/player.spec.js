import * as actions from "../../actions/player";
import thunk from "redux-thunk";
import fetchMock from "fetch-mock";
import configureMockStore from "redux-mock-store";
import initiaState from "../../reducers/initialState";
import * as playerService from "../../services/player";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const fetchData = {
  avatar:
    "https://images.chesscomfiles.com/uploads/v1/user/62606342.13618355.200x200o.e158e6510806.jpeg",
  player_id: 62606342,
  "@id": "https://api.chess.com/pub/player/reisneto",
  url: "https://www.chess.com/member/reisneto",
  name: "Álvaro Reis",
  username: "reisneto",
  followers: 3,
  country: "https://api.chess.com/pub/country/BR",
  location: "Manaus",
  last_online: 1616552567,
  joined: 1561307367,
  status: "premium",
  is_streamer: false,
};

const storeData = {
  avatar:
    "https://images.chesscomfiles.com/uploads/v1/user/62606342.13618355.200x200o.e158e6510806.jpeg",
  url: "https://www.chess.com/member/reisneto",
  name: "Álvaro Reis",
  username: "reisneto",
  location: "Manaus",
};

describe("action player", () => {
  afterEach(() => {
    fetchMock.restore();
    jest.clearAllMocks();
  });

  describe("when player onSubmit sent", () => {
    it("should set store with new player", () => {
      const player = "reisneto";
      fetchMock.getOnce(`https://api.chess.com/pub/player/${player}`, {
        body: fetchData,
        headers: { "content-type": "application/json" },
      });

      const expectedActions = { type: "SEARCH_PLAYER", player: storeData };

      const store = mockStore(initiaState);
      return store.dispatch(actions.searchPlayer(player)).then(() => {
        expect(store.getActions()).toEqual([expectedActions]);
      });
    });

    it.todo("should not set store if player is null");
    it.todo("should verify cache first");
    it.todo(
      "should search on chess.com only if cache doesnt have the information"
    );

    it("should assign player data", async () => {
      const dispatchMock = jest.fn();
      jest
        .spyOn(playerService, 'getPlayer')
        .mockResolvedValue(storeData);

      await actions.searchPlayer('reisneto')(dispatchMock);

      expect(dispatchMock).toHaveBeenCalledTimes(1);
      expect(dispatchMock).toHaveBeenCalledWith({
        type: "SEARCH_PLAYER",
        player: storeData
      });
    });
  });
});
