import "./App.css";

import Home from "./Component/Home";
import Counter from "./Component/counter";
import Game from "./Component/Tic-Tac-Toe/Game";
import Stopwatch  from "./Component/Stopwatch/Stopwatch";
import { BrowserRouter , Routes,Route} from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/counter" element={<Counter/>}/>
        <Route path="/game" element={<Game/>}/>
        <Route path="/stopwatch" element={<Stopwatch/>}/>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
