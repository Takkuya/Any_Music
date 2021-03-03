import { ChakraProvider, Box } from "@chakra-ui/react";
import "./styles/globalStyle.css";
import Header from "./components/Header";
import TrendingCards from "./components/TrendingCards";
import MusicCards from "./components/MusicCards";

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <Box background="#333">
          <Header />
        </Box>
        <Box background="#404040">
          <TrendingCards />
        </Box>
        {/* <Box background="#404040">
          <MusicCards />
        </Box> */}
      </div>
    </ChakraProvider>
  );
}

export default App;
