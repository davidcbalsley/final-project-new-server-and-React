import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import ClientCreateLogin from "./pages/ClientCreateLogin";
import ClientEnterPersonalInfo from "./pages/ClientEnterPersonalInfo";
import ClientViewAndEditPersonalInfo from "./pages/ClientViewAndEditPersonalInfo";
import WorkerEnterLicensePlate from "./pages/WorkerEnterLicensePlate";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/ClientCreateLogin" component={ClientCreateLogin} />
          <Route exact path="/ClientEnterPersonalInfo" component={ClientEnterPersonalInfo} />
          <Route exact path="/ClientViewAndEditPersonalInfo" component={ClientViewAndEditPersonalInfo} />
          <Route exact path="/WorkerEnterLicensePlate" component={WorkerEnterLicensePlate} />
          {/*}
          <Route exact path="/WorkerViewClientInfo" component={WorkerViewClientInfo} />
          <Route exact path="/WorkerConfirmation" component={WorkerConfirmation} />
          */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
