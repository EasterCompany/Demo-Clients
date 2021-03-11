// Component imports
import './preview.css';
import { useState } from 'react';

// Asset imports
import closeButton from '../../assets/icons/close.svg';


const Bio = (props: any) => {
  const [bioDisplay, closeBio] = props.display
  return <div style={{display: bioDisplay}}>
    <div
      className="browser-app-bio"
      onClick={() => closeBio("none")}
    />
    <div className="browser-app-bio-content">
      <div
        className="browser-app-bio-close"
        style={{backgroundImage: `url(${closeButton})`}}
        onClick={() => closeBio("none")}
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
  const [bioDisplay, showBio] = useState("none");
  return <>
    <div
      className="browser-app-section"
      onClick={() => showBio("flex")}
    >
      <div className="browser-app-container">
        <div
          id={`${app.title}-app`}
          style={{backgroundImage: `url(${app.image})`}}
          className="browser-app-image"
        />
        <p className="browser-app-title"> {app.title} </p>
      </div>
    </div>
    <Bio display={[bioDisplay, showBio]} app={app} />
  </>
}


export default App
