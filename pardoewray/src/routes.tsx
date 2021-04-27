// Local applications
import Home from './apps/home/home';
import News from './apps/news/news';
import Post from './apps/news/post';
import Job from './apps/jobs/job';
import Jobs from './apps/jobs/jobs';
import Client from './apps/client/client';
import Candidate from './apps/candidate/candidate';

// Local error messages
import PageNotFoundError from './apps/404/404';

// Local components
import { Route, Switch } from './shared/components/routes/routes';

// Global app vairbles
export const appName = "pardoewray";

// App routes
const Routes = () => {
  return <Switch>
    { // Home Page
      Route({
        path: '',
        app: Home
      })
    }
    { // News Page
      Route({
        path: 'news',
        app: News
      })
    }
    { // Job View
      Route({
        path: 'news/:id',
        app: Post
      })
    }
    { // Jobs Browser
      Route({
        path: 'jobs',
        app: Jobs
      })
    }
    { // Job View
      Route({
        path: 'jobs/:id',
        app: Job
      })
    }
    { // Clients Page
      Route({
        path: 'client',
        app: Client
      })
    }
    { // Candidates Page
      Route({
        path: 'candidate',
        app: Candidate
      })
    }
    { // Error 404: Page not found
      Route({
        path: '*',
        any: true,
        app: PageNotFoundError
      })
    }
  </Switch>
}

export default Routes;
