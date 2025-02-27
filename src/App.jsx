import { Routes, Route } from "react-router-dom";
import WelcomePage from "./components/WelcomePage";
import ExpenseSplitter from "./components/ExpenseSplitter";
import "./styles.css";
function App() {
  return (
    <>
    <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/split" element={<ExpenseSplitter />} />
      </Routes>
    </>
      
  );
}

export default App;
