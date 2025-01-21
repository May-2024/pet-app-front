import { Link } from "react-router-dom";
import "./Navbar.css";

export function Navbar(showItems, setShowItems) {
  return (
    <div className="navbar-container">
      <figure className="logo-container">
        <img src="/vite.svg" alt="" />
      </figure>

      <ul className="links-container">
        
        <li>
          <Link to= {"/"}>Homeless</Link>
        </li>

        <li>
          <Link to={"/pets"}>Pets</Link>
        </li>
        
        <li>
          <Link to={"/users"}>User</Link>
        </li>


      </ul>
    </div>
  );
}