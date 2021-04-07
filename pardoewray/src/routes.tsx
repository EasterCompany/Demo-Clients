// Local components
import Home from './apps/home/home';
import Jobs from './apps/jobs/jobs';
import Client from './apps/client/client';
import Candidate from './apps/candidate/candidate';
import { Route } from './shared/components/routes/routes';

// Global app vairbles
export const appName = "pardoewray";


// App routes
const Routes = () => {
  return <>
    <Route path='' app={Home} />
    <Route path='jobs' app={Jobs} />
    <Route path='client' app={Client} />
    <Route path='candidate' app={Candidate} />
  </>
}


export default Routes;
