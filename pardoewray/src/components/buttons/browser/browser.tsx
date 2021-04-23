import { dp } from '../../../shared/components/routes/routes';


const BrowserBtn = () => {
  return <a href={dp('jobs')}>
    <div id="search-icon" className="btn-icon" />
    View Jobs
  </a>
}


export default BrowserBtn;
