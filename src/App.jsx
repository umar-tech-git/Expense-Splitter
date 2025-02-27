import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WelcomePage from "./components/WelcomePage";
import ExpenseSplitter from "./components/ExpenseSplitter";
import "./styles.css";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/split" element={<ExpenseSplitter />} />
      </Routes>
    </Router>
  );
}

export default App;
