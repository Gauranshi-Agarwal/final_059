import { Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";

import Home from "./pages/Home";
import Campus360 from "./pages/Campus360";
import Notex from "./pages/Notex";
import RiseWall from "./pages/Risewall";
import TalkNest from "./pages/Talknest";   // ✅ FIXED
import Alumni from "./pages/Alumni";
import Reviews from "./pages/Reviews";     // ✅ MUST EXIST

export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/360" element={<Campus360 />} />
        <Route path="/notex" element={<Notex />} />
        <Route path="/risewall" element={<RiseWall />} />
        <Route path="/talknest" element={<TalkNest />} />
        <Route path="/alumni" element={<Alumni />} />
        <Route path="/reviews" element={<Reviews />} />
      </Route>
    </Routes>
  );
}
