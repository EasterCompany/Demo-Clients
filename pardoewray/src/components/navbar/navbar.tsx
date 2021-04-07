// Modules
import { Link } from "react-router-dom";
// Component imports
import './navbar.css';

const NavButton = (props: any) => {
  return <Link to={props.link}>
    {props.name}
  </Link>
}

const Navbar = () => {
  return <div id="nav-header">
    <div id="header" />
    <nav>
      <NavButton link="/" name="Home" />
      <NavButton link="/client" name="Client" />
      <NavButton link="/candidate" name="Candidate" />
      <NavButton link="/jobs" name="Jobs" />
    </nav>
    <div
      id="nav-menu-button"
      className="nav-menu-button"
    />
  </div>
};

export default Navbar;
