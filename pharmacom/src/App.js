import React from "react";
import UserLogin from './components/user/UserLogin';
import AdminLogin from './components/admin/AdminLogin'
import UserHome from './components/user/UserHome'
class App extends React.Component {
  render() {
    return (
        <UserHome />
    )
  }
}

export default App;
