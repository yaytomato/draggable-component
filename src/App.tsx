import React from "react";

import Draggable from "./components/Draggable";
import Box from "./components/Box";

function App() {
  return (
    <div className="container">
      <Draggable>
        <Box />
      </Draggable>
    </div>
  );
}

export default App;
