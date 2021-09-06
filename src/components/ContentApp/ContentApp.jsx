import React from "react";
import useWindowDimensions from "../../hooks/useWindowDimensions";

import "./style.css";

function ContentApp(props) {
  const { height, width } = useWindowDimensions();
  return (
    <div className="content-app">
      width: {width} ~ height: {height}
      {props.children}
    </div>
  );
}

export default ContentApp;
