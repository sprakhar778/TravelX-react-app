import "./Navbar.css";
import { faHotel } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from "../../Header/Header";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logo"> <FontAwesomeIcon icon={faHotel} /> XYZ</span>
        <div className="navItems">
          <button className="navButton">Login</button>
          <button className="navButton">Register</button>
        </div>
      </div>
     
    </div>
  );
};

export default Navbar;
