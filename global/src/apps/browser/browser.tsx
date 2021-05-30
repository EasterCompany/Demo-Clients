// Component Imports
import './browser.css';
import App from '../../components/preview/preview';

// Asset Imports
import echatLogo from '../../assets/images/echat.jpg';
import toolsLogo from '../../assets/images/tools.jpg';
import journalLogo from '../../assets/images/journal.jpg';
import inverairLogo from '../../assets/images/inverair.jpg';
import ecuisineLogo from '../../assets/images/ecuisine.jpg';
import forensicLogo from '../../assets/images/forensic.jpg';
import pardoewrayLogo from '../../assets/images/pardoewray.jpg';


const Browser = () => {
  return <div id='browser'>
    <App
      title='Inverair'
      image={inverairLogo}
      link='inverair.app'
      source='https://github.com/EasterCompany/InverAir-App'
      description={`Inverair Drone Services contracted Easter Company to
        design, develop & deploy a website which advertised their company.
        Future developments will involve a contact & hire app which allows
        clients to inveractively book their appointments and get a qoute
        our api will automatically log that in Inverair's calender.
        view this website live at www.inverair.co.uk
      `}
    />
    <App
      title='PardoeWray'
      image={pardoewrayLogo}
      link='pardoewray.app'
      description={`Pardoewray talent management agency has tasked us with the development
        of a new web application for their customers & clients to utilize in finding,
        sharing and advertising applications while also providing a great advertising
        platform for Pardoewray as a company.`}
    />
    <App
      title='Tools'
      image={toolsLogo}
      link='https://github.com/EasterCompany/Overlord-Tools/blob/main/README.md'
      source='https://github.com/EasterCompany/Overlord-Tools'
      description={`Overlord-Tools is one of three open source developer frameworks
        used and developed by Easter Company to streamline our design, development &
        deployment processes. Overlord-Tools is present within all of our
        repositories and we highly encourage everyone using Django & React to use
        Overlord-Tools as their encompassing fullstack framework.`}
    />
  </div>
}


export default Browser;
