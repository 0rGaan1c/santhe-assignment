import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import OwnerPage from "./Pages/OwnerPage";
import DealerPage from "./Pages/DealerPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<OwnerPage />} />
        <Route path="/owners" element={<OwnerPage />} />
        <Route path="/dealers" element={<DealerPage />} />
      </Routes>
    </Router>
  );
}

export default App;
