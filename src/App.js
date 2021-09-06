import Sudoku from "./components/Sudoku";
import ContentApp from "./components/ContentApp/ContentApp";

import "./assets/style.css";

function App() {
  return (
    <div className="App">
      <ContentApp>
        <Sudoku />
      </ContentApp>
    </div>
  );
}

export default App;
