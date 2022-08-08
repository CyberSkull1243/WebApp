import React, { useState } from "react";
import RightSide from "./RightSide";

function App() {
  const [showText, setShowText] = useState(false);
  const onClick = () => setShowText(true);
  return (
    <div>
      
      {showText ? <Text /> : null}
    </div>
  );
}

const Text = () => <div>You clicked the button!</div>;


export default App;
