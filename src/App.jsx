import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CustomPlan from "./pages/CustomPlan";
import BestPlan from "./pages/BestPlan";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/custom-plan" element={<CustomPlan />} />
        <Route path="/best-plan" element={<BestPlan />} />
      </Routes>
    </Router>
  );
}
