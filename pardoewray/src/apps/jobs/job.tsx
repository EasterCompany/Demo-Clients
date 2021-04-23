// Node modules imports
import Markdown from 'react-markdown';
import { useEffect, useState } from 'react';
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


const Job = ({ match }: RouteComponentProps<any>) => {

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
        >
          Apply Now
        </button>
      </div>
    </div>
  </>

}


export default Job;
