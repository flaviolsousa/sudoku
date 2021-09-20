import { useState } from "react";
import { Redirect } from "react-router-dom";

// import Badge from "../../../node_modules/material-kit-react/src/components/Badge/Badge.js";

import "./style.css";

function SplashScreen() {
  const [redirectNow, setRedirectNow] = useState(false);
  setTimeout(() => setRedirectNow(true), 3000);
  return redirectNow ? (
    <Redirect to="/game" />
  ) : (
    <div className="SplashScreen">
      <h1>Hello Sudoku</h1>
      {/* <Badge color="primary">primary</Badge> */}
    </div>
  );
}

export default SplashScreen;
