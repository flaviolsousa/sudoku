import React from "react";
import useWindowDimensions from "../../hooks/useWindowDimensions";

import "./style.css";

function ContentApp(props) {
  let { height, width } = useWindowDimensions();
  const factor = 0.65;
  if (width > height * factor) width = height * factor;

  return (
    <div
      style={{
        "--width": width + "px",
        "--height": height + "px",
        fontSize: width / 15 + "px",
      }}
      className="content-app"
    >
      {props.children}
    </div>
  );
}

export default ContentApp;
