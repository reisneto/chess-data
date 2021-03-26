import "./App.css";
import { Container, Box } from "@material-ui/core";
import Search from "./components/Search";
import Player from "./components/Player";
import store from "./store";
import { Provider } from "react-redux";

function App() {
  return (
    <Container maxWidth="sm">
      <Provider store={store}>
        <Box my={1}>
          <Search />
          <Player />
        </Box>
      </Provider>
    </Container>
  );
}

export default App;
