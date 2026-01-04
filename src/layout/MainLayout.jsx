import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
<<<<<<< HEAD
import Chatbot from "../components/Chatbot";
import "./MainLayout.css";
=======
import "../layout/MainLayout.css";
>>>>>>> f5ed24a (Fix routing error and integrate CampusBot)

export default function MainLayout() {
  return (
    <>
      <Navbar />
<<<<<<< HEAD
      <main className="content">
        <Outlet />
      </main>
      <Chatbot />
=======
      <Outlet />
>>>>>>> f5ed24a (Fix routing error and integrate CampusBot)
      <Footer />
    </>
  );
}
<<<<<<< HEAD
=======

>>>>>>> f5ed24a (Fix routing error and integrate CampusBot)
