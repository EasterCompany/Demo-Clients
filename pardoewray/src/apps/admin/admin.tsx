// Node modules imports
import { SyntheticEvent, useEffect, useState } from 'react';
// Local imports
import './admin.css';
// Shared imports
import { dp } from '../../shared/components/routes/routes';
import serverAdr from "../../shared/library/server/address";

let secretKey = "";
let jobBoxCount = 0;


const cookie = (key: string) => {
  const c = document.cookie.match("(^|;)\\s*" + key + "\\s*=\\s*([^;]+)");
  return c ? c.pop() : "";
};


const getPostId = () => {
  jobBoxCount++;
  return "jobs-browser-post-" + jobBoxCount;
}


const CreateJobPost = () => {

  const createPost = (event: SyntheticEvent) => {
    event.preventDefault();
    const jobTitleEl = document.querySelector("#new-job-title") as HTMLInputElement;
    const jobCompyEl = document.querySelector("#new-job-company") as HTMLInputElement;
    const jobWebsiteEl = document.querySelector("#new-job-website") as HTMLInputElement;
    const jobLocationEl = document.querySelector("#new-job-location") as HTMLInputElement;
    const jobTypeEl = document.querySelector("#new-job-type") as HTMLSelectElement;
    const jobDescEl = document.querySelector("#new-job-desc") as HTMLTextAreaElement;
    const jobReqsEl = document.querySelector("#new-job-reqs") as HTMLInputElement;
    const jobInfo = {
      title: encodeURIComponent(jobTitleEl.value),
      company: encodeURIComponent(jobCompyEl.value) || "0",
      website: encodeURIComponent(jobWebsiteEl.value) || "0",
      location: encodeURIComponent(jobLocationEl.value),
      type: encodeURIComponent(jobTypeEl.value),
      desc: encodeURIComponent(jobDescEl.value),
      reqs: encodeURIComponent(jobReqsEl.value)
    }

    const requestOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': secretKey
      }
    };

    fetch(serverAdr + `api/admin/jobs/create/` +
    `${jobInfo.title}/${jobInfo.company}/${jobInfo.website}/` +
    `${jobInfo.location}/${jobInfo.type}`, requestOptions
    )
    .then(response => response.json())
    .then(data => {
      if (data.status === 'BAD') return alert('Failed to create job post.');
      // UPDATE Job Description
      const postUID = encodeURIComponent(data.uid);
      fetch(
        serverAdr + `api/admin/jobs/update/desc/` +
        `${postUID}/${jobInfo.desc}`,
        requestOptions
      );
      fetch(
        serverAdr + `api/admin/jobs/update/reqs/` +
        `${postUID}/${jobInfo.reqs}`,
        requestOptions
      );
      window.location.reload();
    });
  }

  return <>
    <h2> Make New Job Post </h2>
    <form id="create-job-post" onSubmit={createPost}>
      <div className="create-job-post-option">
        <h3> Job Title </h3>
        <input type="text" id="new-job-title" placeholder="Job Title" />
      </div>

      <div className="create-job-post-option">
        <h3> Company Name </h3>
        <input type="text" id="new-job-company" placeholder="Company Name" />
        <p> Only visible to admins </p>
      </div>

      <div className="create-job-post-option">
        <h3> Website </h3>
        <input type="text" id="new-job-website" placeholder="Website"/>
        <p> https:// Included by default </p>
      </div>

      <div className="create-job-post-option">
        <h3> Location </h3>
        <input type="text" id="new-job-location" placeholder="City or Remote" />
      </div>

      <div className="create-job-post-option">
        <h3> Type </h3>
        <select name="jobType" id="new-job-type">
          <option value="Permanent">Permanent</option>
          <option value="Contract">Contract</option>
        </select>
      </div>

      <div className="create-job-post-option">
        <h3> Description </h3>
        <textarea id="new-job-desc" placeholder="Enter a Job Description here..." />
      </div>

      <div className="create-job-post-option">
        <h3> Requirements </h3>
        <input
          id="new-job-reqs"
          type="text"
          style={{width: '80vw', height: '32px'}}
        />
        <p> Seperate the requirements with a comma. </p>
      </div>

      <button type="submit"> Submit </button>
    </form>
  </>
}


const JobsView = () => {
  const [app, setApp] = useState(<></>);

  useEffect(() => {

    const Job = (props: any) => {
      const thisPostId = getPostId()

      return <div
        id={thisPostId}
        className="admin-job-box"
      >
        <h2> {props.job.title} </h2>
        <h2> {props.job.company} </h2>
        <div className="admin-job-box-foot">
          <h4> {props.job.location} </h4>
          <h4> {props.job.type} </h4>
          <h4> {props.job.date} </h4>
        </div>
        <div className="admin-job-box-options">
          <button
            onClick={() => deleteJob(props.job.uid, thisPostId)}
          > DELETE </button>
          <button
            onClick={() => window.open(dp(`jobs/${props.job.uid}`))}
          > VIEW </button>
          <button> EDIT </button>
        </div>
      </div>
    }

    const ListJobs = (data: Array<any>) => <div id="job-view-container">
      {data.map(item => <Job job={item}/>)}
    </div>

    const requestOptions = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': secretKey
        }
    };

    fetch(`${serverAdr}api/admin/jobs`, requestOptions)
      .then(response => response.json())
      .then(d => setApp(ListJobs(d.data)));
    }, []);

  const deleteJob = (jobUID: string, postID: string) => {
    const requestOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': secretKey
      }
    };
    fetch(
      `${serverAdr}api/admin/jobs/delete/${encodeURIComponent(jobUID)}`,
      requestOptions
    )
    const postBox = document.querySelector(`#${postID}`) as HTMLDivElement;
    postBox.remove();
  }

  const AdminTools = () => <div id="admin-tools">
    <button
      onClick={() => window.location.reload()}
    > Home </button>
    <button
      onClick={() => setApp(<CreateJobPost/>)}
    > New Job Post </button>
  </div>

  return <>
    <AdminTools />
    {app}
  </>
}


const AdminPanel = () => {
  const [login, setLogin] = useState(0);
  const [app, setApp] = useState(<div>Loading...</div>);

  const attemptLogin = () => {
    // Fetch login credentials
    fetch(serverAdr + 'api/admin', {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': secretKey
    }
    }).then((response) => {response.json().then((data) => {
        if (data.status === 'OK') {
          document.cookie = `adminToken=${data.token}`;
          setLogin(1);
          setApp(<JobsView />);
        } else {
          alert('Login Failed');
      }})
    })
  }

  useEffect(() => {
    const authorize = (event : SyntheticEvent) => {
      // block from redirecting
      event.preventDefault();
      // user input
      const userInputEl = document.querySelector("#admin-login-input") as HTMLInputElement;
      secretKey = userInputEl.value;
      attemptLogin();
    };
    const Login = () => {
      return <form id="admin-login" onSubmit={authorize}>
        <h1> Admin </h1>
        <input id="admin-login-input" type="text" />
        <button type="submit"> submit </button>
      </form>
    }
    if (login === 0) setApp(<Login />)
  }, [login]);

  return <div id="admin-panel">
    {app}
  </div>
}


export default AdminPanel;
