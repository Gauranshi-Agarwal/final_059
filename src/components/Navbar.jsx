import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h2>CampusVerse</h2>
      <div>
        <Link to="/">Home</Link>
        <Link to="/360">360°</Link>
        <Link to="/notex">Notex</Link>
        <Link to="/risewall">RiseWall</Link>
        <Link to="/talknest">TalkNest</Link>
        <Link to="/alumni">Alumni</Link>
        <Link to="/reviews">Reviews</Link>
      </div>
    </nav>
  );
}
