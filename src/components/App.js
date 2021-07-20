import React, { useState } from "react";
import DarkModeWrapper from "./DarkModeWrapper";
import Header from "./Header";
import TweetsContainer from "./TweetsContainer";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  function handleDarkMode() {
    setDarkMode(!darkMode)
  }
  return (
    <DarkModeWrapper darkMode={darkMode}>
      <Header darkMode={darkMode} onDarkMode={handleDarkMode} />
      <TweetsContainer />
    </DarkModeWrapper>
  );
}

export default App;
