import { useState } from "react";
import { Redirect } from "react-router-dom";

import "./style.css";

function SplashScreen() {
  const [redirectNow, setRedirectNow] = useState(false);
  setTimeout(() => setRedirectNow(true), 3000);
  return redirectNow ? (
    <Redirect to="/game" />
  ) : (
    <div className="SplashScreen">
      <h1>Hello Sudoku</h1>
    </div>
  );
}

export default SplashScreen;
