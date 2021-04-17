// Node modules imports
import { useEffect, useState } from 'react';
// Local imports
import './jobs.css';
// Shared imports
import serverAdr from "../../shared/library/server/address";
import { dp, NewLink } from '../../shared/components/routes/routes';


export const Job = (props: any) => {
  return <NewLink to={dp('jobs/' + props.url)} className="jobs-browser-post">
    <h2> {props.title} </h2>
    <div className="jobs-browser-post-foot">
      <h3> {props.company} </h3>
      <h3> {props.location} </h3>
    </div>
    <div className="jobs-browser-post-foot">
      <h4> {props.type} </h4>
      <h4 style={{textAlign: 'right'}}> {props.added} </h4>
    </div>
  </NewLink>
}


const Jobs = () => {
  document.title = 'Pardoe Wray | Jobs';

  const [jobs, setJobs] = useState({
    data: [{
      uid: String,
      title: String,
      company: String,
      location: String,
      type: String,
      date: String,
    }]
  });

  useEffect(() => {
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    };
    fetch(`${serverAdr}api/jobs`, requestOptions)
      .then(response => response.json())
      .then(d => {setJobs(d)})
  }, []);

  return <div id="jobs-browser-container">
    <h1> Jobs Browser </h1>
    <div id="jobs-browser-search-container">
      <div id="jobs-browser-search-img" />
      <input type="text" placeholder="search for jobs..." />
    </div>
    {jobs.data.map(job => (
      <Job
        url={job.uid}
        title={job.title}
        company={job.company}
        location={job.location}
        type={job.type}
        added={job.date}
      />
    ))}
  </div>
}


export default Jobs;
