import "./App.css";
import { Container } from "@material-ui/core";
import Search from "./components/Search";
import Player from "./components/Player";
import store from "./store";
import { Provider } from "react-redux";

function App() {
  return (
    <Container maxWidth="sm">
      <Provider store={store}>
        <Search />
        <Player />
      </Provider>
    </Container>
  );
}

export default App;
