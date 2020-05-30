import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          {/*}
          <Route exact path="/ClientCreateLogin" component={ClientCreateLogin} />
          <Route exact path="/ClientEnterPersonalInfo" component={ClientEnterPersonalInfo} />
          <Route exact path="/ClientCreateNameAndAddress" component={ClientCreateNameAndAddress} />
          <Route exact path="/ClientEnterNumPeopleByAge" component={ClientEnterNumPeopleByAge} />
          <Route exact path="/ClientCreateLicensePlates" component={ClientCreateLicensePlates} />
          <Route exact path="/ClientConfirmation" component={ClientConfirmation} />
          <Route exact path="/WorkerEnterLicensePlate" component={WorkerEnterLicensePlate} />
          <Route exact path="/WorkerViewClientInfo" component={WorkerViewClientInfo} />
          <Route exact path="/WorkerConfirmation" component={WorkerConfirmation} />
  */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
