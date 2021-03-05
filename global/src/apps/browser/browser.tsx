// Component Imports
import './browser.css';
import App from '../../components/preview/preview';

// Asset Imports
import echatLogo from '../../assets/images/echat.jpg';
import toolsLogo from '../../assets/images/tools.jpg';
import secleaLogo from '../../assets/images/seclea.jpg';
import journalLogo from '../../assets/images/journal.jpg';
import donationLogo from '../../assets/images/donation.jpg';
import inverairLogo from '../../assets/images/inverair.jpg';
import ecuisineLogo from '../../assets/images/ecuisine.jpg';

const Browser = () => {
  return <div id='browser'>
    <App
      title='Seclea'
      image={secleaLogo}
      link='seclea.app'
      source='https://github.com/EasterCompany/Demo-Clients/tree/main/seclea'
      description={`Seclea tasked us with developing a technical test for a
        user browser in React which could pull random user data from an api
        and then display that data within a container, user images should be
        able to be viewed in as a thumbnail by default and fullscreen when the
        user clicks them.`}
    />
    <App
      title='Inverair'
      image={inverairLogo}
      link='inverair.app'
      source='https://github.com/EasterCompany/InverAir-App'
      description={`Inverair Drone Services contracted Easter Company to
        design, develop & deploy a website which advertised their company.
        Future developments will involve a contact & hire app which allows
        clients to inveractively book their appointments and get a qoute
        our api will automatically log that in Inverair's calender.`}
    />
    <App
      title='DoNation'
      image={donationLogo}
      link='donation.app'
      source='https://github.com/oceaster/DoNation-App'
      description={`DoNation tasked us with providing a technical test for their
      pledge app, which allows a user to make a commitment towards how they will
      make a change to their life that benefits the environment. Our api provides
      details on how much Co2, waste, water..etc will be saved if they commit to
      their pledge and also how much of the above variables have been saved by
      all users on their platform.`}
    />
    <App
      title='Tools'
      image={toolsLogo}
      link='https://github.com/EasterCompany/Overlord-Tools'
      source='https://github.com/EasterCompany/Overlord-Tools'
      description={`Overlord-Tools is one of three open source developer frameworks
        used and developed by Easter Company to streamline our design, development &
        deployment processes. Overlord-Tools is present within all of our
        repositories and we highly encourage everyone using Django & React to use
        Overlord-Tools as their encompassing fullstack framework.`}
    />
    <App
      title='eChat'
      image={echatLogo}
      description={`eChat is currently in early stage development and private.
        check back later for more details.`}
    />
    <App
      title='Journal'
      image={journalLogo}
      description={`The Journal is currently in early stage development and private.
        check back later for more details.`}
    />
    <App
      title='eCuisine'
      image={ecuisineLogo}
      description={`eCuisine is currently in early stage development and private.
        check back later for more details.`}
    />
  </div>
}

export default Browser;
