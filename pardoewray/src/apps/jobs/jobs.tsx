// Node modules imports
import { useEffect, useState } from 'react';
// Local imports
import './jobs.css';
// Shared imports
import serverAdr from "../../shared/library/server/address";
import { dp, NewLink } from '../../shared/components/routes/routes';

let listCount = 0;


const getPostId = () => {
  listCount++;
  return "jobs-browser-post-" + listCount;
}


const filterJobs = () => {
  const searchBox = document.querySelector("#jobs-search") as HTMLInputElement;
  for (let i=1; i <= listCount; i++) {
    const post = document.querySelector("#jobs-browser-post-" + i) as HTMLLinkElement;
    const postText = post.innerText.toLowerCase().replace(/\s/g, '');;
    const searchText = searchBox.value.toLowerCase().replace(/\s/g, '');;
    if (postText.includes(searchText)) post.style.display = "block";
    else post.style.display = "none";
  }
}


const Job = (props: any) => {
  return <NewLink
      id={props.id}
      to={dp('jobs/' + props.url)}
      className="jobs-browser-post"
    >
    <div className="jobs-browser-post-foot">
      <h2> {props.title} </h2>
      <h4 style={{textAlign: 'right'}}> {props.added} </h4>
    </div>
    <div className="jobs-browser-post-foot">
      <h3> {props.location} </h3>
      <h3> {props.type} </h3>
    </div>
  </NewLink>
}


const Jobs = () => {
  document.title = 'Pardoe Wray | Jobs';
  listCount = 0;

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
    const searchBox = document.querySelector("#jobs-search") as HTMLInputElement;
    searchBox.addEventListener('keyup',function(){filterJobs();});
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
      <input id="jobs-search" type="text" placeholder="search..." />
    </div>
    <div id="jobs-browser-list">
      {jobs.data.map(job =>
        <Job
          id={getPostId()}
          url={job.uid}
          title={job.title}
          location={job.location}
          type={job.type}
          added={job.date}
        />
      )}
    </div>
  </div>
}


export default Jobs;
