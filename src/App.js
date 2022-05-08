import Nav from "./components/Nav";
import {
  Routes,
  Route,
} from "react-router-dom";
import Home from "./views/Home";
import WhoI from './views/WhoI';
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
  <Nav />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/whoami" element={<WhoI />} />
    </Routes>
  <Footer />
    </div>
  );
}

export default App;
