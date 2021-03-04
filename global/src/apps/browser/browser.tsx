import './browser.css';
import echatLogo from '../../assets/images/echat.jpg';
import toolsLogo from '../../assets/images/tools.jpg';
import secleaLogo from '../../assets/images/seclea.jpg';
import journalLogo from '../../assets/images/journal.jpg';
import donationLogo from '../../assets/images/donation.jpg';
import inverairLogo from '../../assets/images/inverair.jpg';
import ecuisineLogo from '../../assets/images/ecuisine.jpg';

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
    <App link='seclea.app' title='Seclea' image={secleaLogo} />
    <App link='inverair.app' title='Inverair' image={inverairLogo} />
    <App link='donation.app' title='DoNation' image={donationLogo} />
    <App
      link='https://github.com/EasterCompany/Overlord-Tools'
      title='Tools' image={toolsLogo}
    />
    <App link='chat.app' title='eChat' image={echatLogo} />
    <App link='journal.app' title='Journal' image={journalLogo} />
    <App link='cuisine.app' title='eCuisine' image={ecuisineLogo} />
  </div>
}

export default Browser;
