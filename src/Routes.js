import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Application from "./Pages/Application";

const Routes = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/application">Application</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/application">
            <Application />
          </Route>
        </Switch>
        </div>
      </Router>
  )
}