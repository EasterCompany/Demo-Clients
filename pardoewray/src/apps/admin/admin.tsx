// Node modules imports
import { SyntheticEvent, useEffect, useState } from 'react';
// Local imports
import './admin.css';
// Shared imports
import serverAdr from "../../shared/library/server/address";

let secretKey = "";
let jobBoxCount = 0;


const getPostId = () => {
  jobBoxCount++;
  return "jobs-browser-post-" + jobBoxCount;
}


const AdminTools = () => <div id="admin-tools">
  <button> New Job Post </button>
</div>


const JobsView = () => {
  const [jobs, setJobs] = useState({
    data: [{
      uid: String,
      title: String,
      location: String,
      type: String,
      date: String,
    }]
  });

  useEffect(() => {
    const requestOptions = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': secretKey
        }
    };
    fetch(`${serverAdr}api/jobs`, requestOptions)
      .then(response => response.json())
      .then(d => {setJobs(d)})
  }, []);

  const Job = (props: any) => <div
    id={getPostId()}
    className="admin-job-box"
  >
    <h2> {props.job.title} </h2>
    <h3> {props.job.uid} </h3>
    <h4> {props.job.location} </h4>
    <h4> {props.job.type} </h4>
    <h4> {props.job.date} </h4>
  </div>

  return <>
    <AdminTools />
    <div id="job-view-container">
      {jobs.data.map(job => <Job job={job}/>)}
    </div>
  </>
}


const AdminPanel = () => {
  const [login, setLogin] = useState(0);
  const [app, setApp] = useState(<div>Loading...</div>);

  useEffect(() => {
    const Login = () => {
      return <form id="admin-login" onSubmit={authorize}>
        <h1> Admin </h1>
        <input id="admin-login-input" type="text" />
        <button type="submit"> submit </button>
      </form>
    }
    if (login === 0) setApp(<Login />)
  }, [login]);

  const authorize = (event : SyntheticEvent) => {
    // block from redirecting
    event.preventDefault();
    // user input
    const userInputEl = document.querySelector("#admin-login-input") as HTMLInputElement;
    secretKey = userInputEl.value;
    const requestOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': secretKey
      }
    };
    fetch(
      `${serverAdr}api/jobs`, requestOptions
    ).then(
      response => response.json().then(data => {
        setLogin(1);
        setApp(<JobsView />)
      })
    );
  }

  return <div id="admin-panel">
    {app}
  </div>
}


export default AdminPanel;
