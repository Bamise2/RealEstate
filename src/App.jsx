import "./index.css";

import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import List from "./pages/List";
import Singlepage from "./pages/Singlepage";

export default function App() {
  return (
    <div className="max-w-screen-xl mx-auto min-h-dvh px-5">
      <Navbar />
      <div className="h-[calc(100dvh-100px)]">
        <Routes >
        <Route path="/" element={<Home />}></Route>
        <Route path="/list" element={<List />}></Route>
        <Route path="/:id" element={<Singlepage />}></Route>
      </Routes>
      </div>
    </div>
  );
}


