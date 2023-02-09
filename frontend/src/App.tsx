import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Box, Image, Link, Text } from "@chakra-ui/react";
import { Button } from "./components/Button";
import BottomBar from "./components/BottomBar/BottomBar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Box className="App">
      <Button
          frontIcon="powerOff"
          color="white"
          backgroundColor="red"
          onClick={()=>console.log("You clicked on the pink circle!!")}
          width = "200px"
      >
        登録
      </Button>
      <Box>
        <Link href="https://vitejs.dev" target="_blank">
          <Image src="/vite.svg" className="logo" alt="Vite logo" />
        </Link>
        <Link href="https://reactjs.org" target="_blank">
          <Image src={reactLogo} className="logo react" alt="React logo" />
        </Link>
      </Box>
      <Box textColor={"red"}>Vite + React</Box>
      <Box className="card">
        <Text>
          Edit <code>src/App.tsx</code> and save to test HMR
        </Text>
      </Box>
      <Text className="read-the-docs">
        Click on the Vite and React logos to learn more
      </Text>
      <BottomBar />
    </Box>
  );
}

export default App;
