// Component imports
import './preview.css';
import { useState } from 'react';

// Asset imports
import closeButton from '../../assets/icons/close.svg';


const Bio = (props: any) => {
  const [bioDisplay, setBio] = props.display

  const closeBio = () => {
    setBio('none');
    const bapps = document.getElementsByName('browser-app');
    bapps.forEach(element => {
      element.style.display = 'block';
    });
  }

  return <div style={{display: bioDisplay}}>
    <div
      className="browser-app-bio"
      onClick={closeBio}
    />
    <div className="browser-app-bio-content">

      <div
        className="browser-app-bio-close"
        style={{backgroundImage: `url(${closeButton})`}}
        onClick={closeBio}
      />

      <div className="browser-app-bio-bg-bg">
        <div
          className="browser-app-bio-bg"
          style={{backgroundImage: `url(${props.app.image})`}}
        />
      </div>

      <div
        className="browser-app-bio-image"
        style={{backgroundImage: `url(${props.app.image})`}}
      />

      <h1 className="browser-app-bio-title">
        {props.app.title}
      </h1>

      <div className="browser-app-bio-desc">
        <p> {props.app.description} </p>
      </div>

      <button
        tabIndex={0}
        className="browser-app-launch"
        onClick={() => {
          if (props.app.link)
            window.location = props.app.link
          else
            alert('Failed to launch app, try another.')
        }}
      >
        Launch App
      </button>

      <button
        tabIndex={0}
        className="browser-app-source"
        onClick={() => {
          if (props.app.source)
            window.location = props.app.source
          else
            alert('Failed to find app source, try another.')
        }}
      >
        View Source
      </button>

    </div>
  </div>
}


const App = (app: any) => {
  const [bioDisplay, setBio] = useState("none");

  const showBio = () => {
    const bapps = document.getElementsByName('browser-app');
    bapps.forEach(element => {
      element.style.display = 'none';
    });
    setBio("flex");
  }

  return <>
    <button
      tabIndex={0}
      name="browser-app"
      className="browser-app-container"
      onClick={showBio}
    >
      <div
        id={`${app.title}-app`}
        style={{backgroundImage: `url(${app.image})`}}
        className="browser-app-image"
      />
      <div className="browser-app-title"> {app.title} </div>
    </button>
    <Bio display={[bioDisplay, setBio]} app={app} />
  </>
}


export default App
