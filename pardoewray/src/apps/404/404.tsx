// Local components
import './404.css';
// Local assets
import logoImg from '../../assets/zelephant2.webp';


const PageNotFoundError = () => {
  document.title = 'Pardoe Wray | 404';

  return <div id="page-not-found">
    <h2>Sorry, this page doesn't exist.</h2>
    <img src={logoImg} alt="logo" />
  </div>
}


export default PageNotFoundError;
