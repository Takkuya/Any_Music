import "./styles/globalStyle.css";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ChakraProvider, Box } from "@chakra-ui/react";
import HomeScreen from "./components/HomeScreen/HomeScreen";
import ArtistPage from "./components/ArtistPage";
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
            <Route path="/artist" component={ArtistPage} />
          </Switch>
        </div>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
