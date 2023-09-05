import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "@aws-amplify/ui-react/styles.css";
import {
  Button,
  Heading,
  View,
  withAuthenticator,
  Image,
  Card,
} from "@aws-amplify/ui-react";

function App({ signOut }) {
  const [count, setCount] = useState(0);

  return (
    <>
      <View className="App">
        <Card>
          <Image src={viteLogo} className="logo" alt="vite logo" />
          <Heading level={1}>We now have Auth!</Heading>
        </Card>
        <Button onClick={signOut}>Sign Out</Button>
      </View>
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  );
}

export default withAuthenticator(App);
