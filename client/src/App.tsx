import { Route, Routes } from "react-router-dom";
import Home from "@pages/Home";
import Setting from "@pages/Setting";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/setting" element={<Setting />} />
      </Routes>
    </div>
  );
};

export default App;
