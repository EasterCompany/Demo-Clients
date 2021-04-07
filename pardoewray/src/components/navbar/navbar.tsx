// Component imports
import './navbar.css';
import { Link } from "../../shared/components/routes/routes";


const Navbar = () => {
  return <div id="nav-header">
    <div id="header" />
    <nav>
      <Link link="" name="Home" />
      <Link link="client" name="Client" />
      <Link link="candidate" name="Candidate" />
      <Link link="jobs" name="Jobs" />
    </nav>
    <div
      id="nav-menu-button"
      className="nav-menu-button"
    />
  </div>
};


export default Navbar;
