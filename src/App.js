import "./styles/globalStyle.css";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ChakraProvider, Box } from "@chakra-ui/react";

import HomeScreen from "./components/HomeScreen/HomeScreen";
import ArtistPage from "./components/Pages/ArtistPage";
import AlbumPages from "./components/Pages/AlbumPages";
import Header from "./components/Header";

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <div className="App">
          <Box background="#333">
            <Header />
          </Box>
          <Switch>
            <Route path="/" component={HomeScreen} exact />
            <Route path="/artistpage/:id" component={ArtistPage} />
            <Route path="/albumpage/:id" component={AlbumPages} />
          </Switch>
        </div>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
