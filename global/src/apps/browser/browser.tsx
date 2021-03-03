import './browser.css';
import toolsLogo from '../../assets/images/tools.jpg';
import secleaLogo from '../../assets/images/seclea.jpg';
import donationLogo from '../../assets/images/donation.jpg';
import inverairLogo from '../../assets/images/inverair.jpg';

const App = (app: any) => {
  return <div className='browser-app-container'>
    <div
      id={`${app.title}-app`}
      style={{backgroundImage: `url(${app.image})`}}
      className='browser-app-image'
      onClick={
        () => window.location.href = app.link
      }
    />
    <p className='browser-app-title'> {app.title} </p>
  </div>
}

const Browser = () => {
  return <div id='browser'>
    <App link='seclea' title='Seclea' image={secleaLogo} />
    <App link='inverair' title='Inverair' image={inverairLogo} />
    <App link='donation' title='DoNation' image={donationLogo} />
    <App
      link='https://github.com/EasterCompany/Overlord-Tools'
      title='Tools' image={toolsLogo}
    />
  </div>
}

export default Browser;
