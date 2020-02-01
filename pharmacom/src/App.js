import React from "react";
import { BrowserRouter, Switch } from 'react-router-dom'
import UserLogin from './components/user/UserLogin';
import AdminLogin from './components/admin/AdminLogin'
import UserHome from './components/user/UserHome'
import AdminHome from './components/admin/AdminHome'
import AddUser from './components/admin/AddUser'
import Bill from './components/user/Bill'
import Cancel from './components/user/Cancel'
import PublicRoute from './Route/Publicroute';
class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <PublicRoute component={UserLogin} path="/" exact />
          <PublicRoute component={AdminLogin} path="/1" exact />
          <PublicRoute component={UserHome} path="/2" exact />
          <PublicRoute component={AdminHome} path="/3" exact />
          <PublicRoute component={AddUser} path="/4" exact />
          <PublicRoute component={Bill} path="/bill" exact />
          <PublicRoute component={Cancel} path="/subscriptions" exact />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App;
