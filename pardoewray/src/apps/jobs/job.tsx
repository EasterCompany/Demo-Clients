// Node modules imports
import { useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router';
// Local imports
import './jobs.css';
// Shared imports
import serverAdr from "../../shared/library/server/address";
import { dp, NewLink } from '../../shared/components/routes/routes';


const Job = ({ match }: RouteComponentProps<any>) => {

  const [ job, setJob ] = useState({
    uid: String,
    title: String,
    website: String,
    location: String,
    description: String,
    type: String,
    date: String,
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
      <p>{job.description}</p>
      <h3> Requirements </h3>
      <p> ... </p>
      <div id="job-details-btns">
        <a
          id="job-details-webBtn"
          href={`https://${job.website}/`}
          target="_blank"
          rel="noreferrer"
        >
          View Website
        </a>
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
