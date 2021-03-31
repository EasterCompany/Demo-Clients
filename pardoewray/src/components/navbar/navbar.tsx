// Modules
import { render } from 'react-dom';
// Component imports
import './navbar.css';
import Home from '../../apps/home/home';
import Client from '../../apps/client/client';
import Candidate from '../../apps/candidate/candidate';
import Jobs from '../../apps/jobs/jobs';

const navMenuOpen = () => {
  const navbar = document.querySelector('#navbar') as HTMLDivElement;
  const navbtn = document.querySelector('#nav-menu-button') as HTMLDivElement;
  navbar.className = 'navbar-menu-open';
  navbtn.className = 'nav-menu-button-open';
}

const navMenuClose = () => {
  const navbar = document.querySelector('#navbar') as HTMLDivElement;
  const navbtn = document.querySelector('#nav-menu-button') as HTMLDivElement;
  navbar.className = 'navbar-menu';
  navbtn.className = 'nav-menu-button';
}

const gotoPage = (page: JSX.Element) => render(
  page,
  document.querySelector('#article-content')
)

const homeClick = () => gotoPage(<Home />)
const clientClick = () => gotoPage(<Client />)
const candidateClick = () => gotoPage(<Candidate />)
const jobsClick = () => gotoPage(<Jobs />)

const Navbar = () => {
  return <div id="nav-header">
    <div id="header" />
    <div id="navbar" className="navbar-menu" onClick={navMenuClose}>
      <button onClick={homeClick}> Home </button>
      <button onClick={clientClick}> Client </button>
      <button onClick={candidateClick}> Candidate </button>
      <button onClick={jobsClick}> Jobs </button>
    </div>
    <div
      id="nav-menu-button"
      className="nav-menu-button"
      onClick={navMenuOpen}
    />
  </div>
};

export default Navbar;
export {
  clientClick,
  candidateClick,
  jobsClick
}
