// Local components
import './candidate.css';
import '../home/home.css';
import zelephant from '../../assets/zelephant.webp';
import EmailBtn from '../../components/buttons/email/email';
import BrowserBtn from '../../components/buttons/browser/browser';
import React from 'react';


const HeaderSection = () => {
  return <div className="home-section">
    <div className="home-left">
      <h2 style={{textAlign: 'center'}}> We are Specialists </h2>
      <h3 style={{textAlign: 'center'}}> We understand your industry. </h3>

      <div className="home-buttons">
        <EmailBtn />
      </div>

      <p style={{textAlign: 'center'}}>
        Send over your latest information and CV and we'll get you started.
      </p>
    </div>

    <div className="home-right">
      <img src={zelephant} alt="zelephant" style={{maxWidth: '420px'}} />
    </div>
  </div>
}


const CVSection = () => {
  return <div className="grid-section">

    <div className="grid-item">
      <div className="grid-item-head">
        <h3> CV Assistance </h3>
        <div id="cv-icon" className="btn-icon" />
      </div>
      <p>
        We understand that preparing your CV
        is a difficult task, but we are here to
        help. We can help you through the
        process of putting together your CV,
        offering you an honest critique.
        <br/><br/>
        Your CV is the first impression a company
        will have of you, so it’s important to
        get it right. We want to help you stand out.
      </p>
    </div>

    <div className="grid-item">
      <div className="grid-item-head">
        <h3> Face to Face Interview </h3>
        <div id="head-icon" className="btn-icon" />
      </div>
      <p>
        We understand that building a good repour with your
        consultant is extremely important, we need to understand
        your goals and aspirations along with your skill set and achievements.
        <br/>
        When possible, we meet every candidate we represent in person;
        however when that isn’t possible we utilise modern online video platforms.
      </p>
    </div>

    <div className="grid-item">
      <div className="grid-item-head">
        <h3> Interview Preparation </h3>
        <div id="check-icon" className="btn-icon" />
      </div>
      <p>
        Being prepared for your interview is
        key to your success. We ensure that
        you have all the information you need
        to have a successful interview.
        <br/><br/>
        Not only will we provide a detailed
        pre-interview pack, your consultant
        will call you prior to your interview to
        discuss the process and what
        to expect.
      </p>
    </div>

  </div>
}


const Candidate = () => {
  document.title = 'Pardoe Wray | Candidate';

  return <>
    <HeaderSection />
    <CVSection />
    <div className="home-buttons">
      <BrowserBtn />
      <EmailBtn />
    </div>
  </>
}


export default Candidate;
