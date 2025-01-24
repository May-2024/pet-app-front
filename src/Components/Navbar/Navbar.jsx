import { Link } from "react-router-dom";
import { IoPawSharp } from "react-icons/io5";
import { IoPawOutline } from "react-icons/io5";
import "./Navbar.css";

export function Navbar(showItems, setShowItems) {
  return (
    <div className="navbar-container">
      
      <div className="app-name-container">
        <figure className="logo-container">
          <img src="/nala-Photoroom.png" alt="" />
        </figure>
        <div>
          <p>
            Pet{" "}
            <span>
              <IoPawSharp size={"1rem"} /> <IoPawOutline size={"1rem"} />{" "}
              <IoPawSharp size={"1rem"} />
            </span>
          </p>
          <p>Friendly</p>
        </div>
      </div>

      <ul className="links-container">
        <li>
          <Link to={"/"}>Adopta</Link>
        </li>
        <li>
          <Link to={"/users"}>Usuario</Link>
        </li>
      </ul>
    </div>
  );
}
