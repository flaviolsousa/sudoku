import Sudoku from "./components/Sudoku";
import ContentApp from "./components/ContentApp/ContentApp";
import { MemoryRouter as Router, Route } from "react-router-dom";
import SplashScreen from "./components/SplashScreen/SplashScreen";
import PageTransition from "./components/PageTransition/PageTransition";
import BackgroundApp from "./components/BackgroundApp/BackgroundApp";

import "./assets/style.css";

const routes = [
  { path: "/", Component: SplashScreen },
  { path: "/game", Component: Sudoku },
];

function App() {
  return (
    <div className="App">
      <BackgroundApp>
        <ContentApp>
          <Router>
            {routes.map(({ path, Component }) => (
              <Route key={path} exact path={path}>
                {({ match }) => (
                  <PageTransition match={match}>
                    <Component />
                  </PageTransition>
                )}
              </Route>
            ))}
          </Router>
        </ContentApp>
      </BackgroundApp>
    </div>
  );
}

export default App;
