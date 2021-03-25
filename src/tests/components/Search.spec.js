import { render, screen, fireEvent, act } from "@testing-library/react";
import Search from "../../components/Search";
import thunk from "redux-thunk";
import configureMockStore from "redux-mock-store";
import initiaState from "../../reducers/initialState";
import { Provider } from "react-redux";
import store from "../../store";
import * as actions from "../../actions/player";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("Search Component", () => {
  it("should retrieve data typed on search component", () => {
    const data = "reisneto";

    render(
      <Provider store={store}>
        <Search />
      </Provider>
    );

    const searchInputDiv = screen.getByTestId("search-input");
    const searchInput = searchInputDiv.children[0];
    fireEvent.change(searchInput, {
      target: { value: data },
    });

    expect(searchInput).toHaveValue(data);
  });

  it("should call dispatch when onSubmit is called", () => {
    const store = mockStore(initiaState);
    store.dispatch = jest.fn();
    actions.searchPlayer = jest.fn();

    render(
      <Provider store={store}>
        <Search />
      </Provider>
    );

    const searchInputDiv = screen.getByTestId("search-input");
    const searchInput = searchInputDiv.children[0];
    fireEvent.change(searchInput, {
      target: {
        value: "reisneto",
      },
    });

    const submitButton = screen.getByTestId("search-submit");
    fireEvent.click(submitButton);

    expect(store.dispatch).toHaveBeenCalledTimes(1);
    expect(actions.searchPlayer).toHaveBeenCalledTimes(1);
  });
});
