import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";

import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="h-[100vh]">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
