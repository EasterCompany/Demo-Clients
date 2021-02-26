import './browser.css';
import secleaLogo from '../../assets/images/seclea.jpg';

const App = (app: any) => {
  return <div className='browser-app-container'>
    <div
      id={`${app.title}-app`}
      style={{backgroundImage: `url(${app.image})`}}
      className='browser-app-image'
      onClick={
        () => window.location.href += app.link
      }
    />
    <p className='browser-app-title'> {app.title} </p>
  </div>
}

const Browser = () => {
  return <div id='browser'>
    <App
      link='seclea'
      title='Seclea'
      image={secleaLogo}
    />
  </div>
}

export default Browser;
