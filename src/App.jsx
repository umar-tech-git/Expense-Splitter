import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WelcomePage from "./components/WelcomePage";
import ExpenseSplitter from "./components/ExpenseSplitter";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/splitter" element={<ExpenseSplitter />} />
      </Routes>
    </Router>
  );
}

export default App;
