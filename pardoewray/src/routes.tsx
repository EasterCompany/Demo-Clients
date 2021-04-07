// Node module imports
import { Switch, Route } from "react-router-dom";

// Local components
import Home from './apps/home/home';
import Jobs from './apps/jobs/jobs';
import Client from './apps/client/client';
import Candidate from './apps/candidate/candidate';


const Routes = () => {
  return <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/jobs" exact component={Jobs} />
    <Route path="/client" exact component={Client} />
    <Route path="/candidate" exact component={Candidate} />
    <Route path="/" component={ () => <h1>404</h1> } />
  </Switch>
}


export default Routes
