// Node modules imports
import Markdown from 'react-markdown';
import { SyntheticEvent, useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router';
// Local imports
import './jobs.css';
// Shared imports
import serverAdr from "../../shared/library/server/address";
import { dp, NewLink } from '../../shared/components/routes/routes';


const WebsiteButton = (props: any) => {
  if (props.website === '0') return <></>
  return <a
    id="job-details-webBtn"
    href={`https://${props.website}/`}
    target="_blank"
    rel="noreferrer"
  >
    View Website
  </a>
}


const RequirementsSection = (props: {reqs: Array<string>}) => {
  if (props.reqs.length === 0) return <></>
  return <>
  <h3> Requirements </h3>
    <ul>
      {props.reqs.map(req => <li>{req}</li>)}
    </ul>
  </>
}


const AppFormContent = () => <>
  <label htmlFor="fname"> First Name </label>
  <input id="fname" type="text" />
  <label htmlFor="lname"> Last Name </label>
  <input id="lname" type="text" />
  <label htmlFor="email"> Email </label>
  <input id="email" type="email" />
  <label htmlFor="tel"> Mobile No. </label>
  <input id="tel" type="tel" />
  <button type="submit"> Submit </button>
</>


const AppFormSubmitted = () => <div className="loading-spinner" />


const AppFormCompleted = () => <>
  <div className="form-success" />
  <h2> Application Submitted! </h2>
</>


const ApplyModel = (props: any) => {
  const [showModal, setModal] = props.state;
  const [formContent, setForm] = useState(<AppFormContent/>);

  const submitApp = (event: SyntheticEvent) => {
    // Prevent form redirect on submit
    event.preventDefault();
    // Collect form values
    const fnameEl = document.querySelector('#fname') as HTMLInputElement;
    const lnameEl = document.querySelector('#lname') as HTMLInputElement;
    const emailEl = document.querySelector('#email') as HTMLInputElement;
    const telEl = document.querySelector('#tel') as HTMLInputElement;
    // Empty value error messages
    const fname = fnameEl.value;
    if (!fname) return alert('Please enter a first name.');
    const lname = lnameEl.value;
    if (!lname) return alert('Please enter a last name.');
    const email = emailEl.value;
    if (!email) return alert('Please enter a email address.');
    const tel = telEl.value;
    if (!tel) return alert('Please enter a phone number.');
    // Submit form values
    setForm(<AppFormSubmitted />);
    fetch(
      `${serverAdr}api/jobs/apply/${props.job}/${fname}/${lname}/${email}/${tel}`
    )
    .then(
      response => response.json()
    )
    .then(
      data => {
        if (data['status'] !== 'OK') return alert(data['error']);
        setForm(<AppFormCompleted />);
      }
    );
  }

  return <div
    className="job-apply-model-container"
    style={{display: showModal}}
  >
    <div className="job-apply-model">
      <div
        className="job-apply-close-btn"
        onClick={() => setModal('none')}
      />
      <h2> Apply Now </h2>
      <form className="job-apply-form" onSubmit={submitApp}>
        {formContent}
      </form>
    </div>
  </div>
}


const Job = ({ match }: RouteComponentProps<any>) => {
  const [showModal, setModal] = useState('none');

  const [ job, setJob ] = useState({
    uid: String,
    title: String,
    website: String,
    location: String,
    description: "",
    type: String,
    date: String,
    reqs: []
  });

  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    };
    fetch(
      `${serverAdr}api/jobs/${match.params.id}`, requestOptions
    ).then(
      response => response.json().then(data => {
        setJob(data[match.params.id])
      })
    );
  }, [match]);

  return <>
    <ApplyModel state={[showModal, setModal]} job={match.params.id} />
    <NewLink to={dp('jobs')} id="job-details-ui">
      <div id="job-details-backBtn" />
      <p> Return </p>
    </NewLink>
    <div id="job-details">
      <div id="job-details-head">
        <h2> {job.title} </h2>
        <h4> {job.date} </h4>
      </div>
      <div id="job-details-h3s">
        <h3> {job.location} </h3>
        <h3> {job.type} </h3>
      </div>
      <hr />
      <h3> Description </h3>
      <div id="job-description" className="job-description">
        <Markdown children={job.description} />
      </div>
      <RequirementsSection reqs={job.reqs}/>
      <div id="job-details-btns">
        <WebsiteButton website={job.website} />
        <button
          id="job-details-appBtn"
          onClick={() => setModal('flex')}
        >
          Apply Now
        </button>
      </div>
    </div>
  </>

}


export default Job;
