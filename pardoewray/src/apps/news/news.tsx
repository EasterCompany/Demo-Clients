// Node modules imports
import { useEffect, useState } from 'react';
// Local imports
import './news.css';
// Shared imports
import serverAdr from "../../shared/library/server/address";
import { dp, NewLink } from '../../shared/components/routes/routes';


const Post = (props: any) => <NewLink
    className="news-post"
    to={dp(`news/${props.id}`)}
  >
  <div className="news-post-head">
    <h2> {props.title} </h2>
    <h3 style={{textAlign: 'right'}}> {props.date} </h3>
  </div>
</NewLink>


const News = () => {
  const [posts, setPosts] = useState({
    posts: [{
      id: "",
      title: "",
      content: "",
      date: "",
    }]
  });
  document.title = 'Pardoe Wray | News';

  useEffect(() => {
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    };
    fetch(`${serverAdr}api/news`, requestOptions)
      .then(response => response.json())
      .then(p => {setPosts(p)})
  }, []);

  return <div className="news-container">
    <h2 id="news-page-header"> What's Going on? </h2>
    {posts.posts.map(post =>
      <Post
        id={post.id}
        title={post.title}
        content={post.content}
        date={post.date}
      />
    )}
  </div>
}


export default News;
