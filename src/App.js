import Nav from "./components/Nav";
import {
  Routes,
  Route,
} from "react-router-dom";
import Home from "./views/Home";
import WhoI from './views/WhoI';

function App() {
  return (
    <div className="App">
  <Nav />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/whoami" element={<WhoI />} />
    </Routes>
    </div>
  );
}

export default App;
