import "./App.css";
import { Container } from '@material-ui/core';
import Search from './components/Search';
import Player from './components/Player';

function App() {

  return (
    <Container maxWidth="sm">
      <Search />
      <Player />
    </Container>
  );
}

export default App;
