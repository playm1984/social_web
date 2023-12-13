import { Route, Routes } from "react-router-dom";

import Blog from "./pages/Blog";
import Auth from "./pages/Auth";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/main" element={<Blog />} />
      </Routes>
    </div>
  );
};

export default App;
