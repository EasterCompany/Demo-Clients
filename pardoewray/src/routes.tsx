// Local components
import Home from './apps/home/home';
import Jobs from './apps/jobs/jobs';
import Client from './apps/client/client';
import Candidate from './apps/candidate/candidate';
import { Route } from './shared/components/routes/routes';
import { Switch } from "react-router-dom";

// Global app vairbles
export const appName = "pardoewray";

// App routes
const Routes = () => {
  return <Switch>
    { // Home Page
      Route({path: '', app: Home})
    }
    { // Jobs Browser
      Route({path: 'jobs', app: Jobs})
    }
    { // Clients Page
      Route({path: 'client', app: Client})
    }
    { // Candidates Page
      Route({path: 'candidate', app: Candidate})
    }
    { // 404 Page not found
      Route({
        path: '*',
        any: true,
        app: () => <>
          { document.title = 'Pardoe Wray | 404' }
          <h1>Error 404</h1>
          <h2>Page not found</h2>
        </>
      })
    }
  </Switch>
}

export default Routes;
