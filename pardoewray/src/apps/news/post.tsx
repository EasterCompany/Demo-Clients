// Node modules imports
import Markdown from 'react-markdown';
import { useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router';
// Local imports
import './news.css';
// Shared imports
import serverAdr from "../../shared/library/server/address";
import { dp, NewLink } from '../../shared/components/routes/routes';


const Post = ({ match }: RouteComponentProps<any>) => {
  const [post, setPost] = useState({
    title: "",
    content: "",
    date: ""
  });

  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    };
    fetch(
      `${serverAdr}api/news/${match.params.id}`, requestOptions
    ).then(
      response => response.json().then(data => {
      setPost(data[match.params.id])
      })
    );
  }, [match]);

  return <>
    <NewLink to={dp('news')} id="job-details-ui">
      <div id="job-details-backBtn" />
      <p> Return </p>
    </NewLink>
    <div id="job-details">
      <div id="job-details-head">
        <h2> {post.title} </h2>
        <h4> {post.date} </h4>
      </div>
      <hr />
      <div id="job-description" className="job-description">
        <Markdown children={post.content} />
      </div>
    </div>
  </>
}


export default Post;
