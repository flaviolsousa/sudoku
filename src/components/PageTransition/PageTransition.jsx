import { CSSTransition } from "react-transition-group";

import "./style.css";

function PageTransition(props) {
  return (
    <CSSTransition
      in={props.match != null}
      timeout={300}
      classNames="pageTransition"
      unmountOnExit
    >
      <div className="pageTransition">{props.children}</div>
    </CSSTransition>
  );
}

export default PageTransition;
