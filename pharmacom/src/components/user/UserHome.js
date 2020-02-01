import React from 'react';
// import { logouta, getTokena } from '../utils';
import Style from './UserHome.module.css';
// import Axios from 'axios'
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { Form, FormControl, Button } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import "../../assets/css/pharcom.css"
const styles = {
  // Navlink: {
  //   color: "#2a2f42"
  // },
  // AskButton: {
  // 	width: "110px",
  // 	marginTop: "7px"
  // },
  AinputBorder: {
    borderRadius: "20px"
  }
};
class UserHome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Slno: '',
      med_name: '',
      price: '',
      medicines: [["paracetamol", 10, 20], ["aspirin", 20, 2]]
    };
  };
  bill = () => {
    this.props.history.push("/bill");
  }
  gotoSubscription=()=>{
    this.props.history.push("/subscriptions");
  }
  handleChange = ({ target }) => {
    if (target.value != null && target.value > 0) {
      var temp = [];
      var flag = 0;
      if (localStorage.getItem("Bill")) {
        temp = JSON.parse(localStorage.getItem("Bill"));
        var i;
        for (i = 0; i < temp.length; i++) {
          if (temp[i][0] == target.id) {
            flag = 1;
            break;
          }
        }
      }
      if (flag) {
        temp[i][2] = target.value;
      }
      else {
        temp.push([target.id, target.name, target.value]);
      }
      localStorage.setItem("Bill", JSON.stringify(temp));
    }
  }

  renderTableData() {
    return this.state.medicines.map((medicine, index) => {
      return (
        <tr key={index}>
          <td>{index + 1}</td>
          <td>{medicine[0]}</td>
          <td>{medicine[1]}</td>
          <td><input id={medicine[0]} name={medicine[2]} onChange={this.handleChange} type="number"></input></td>
          <td>Rs.{medicine[2]}</td>
          <td><button>Request</button></td>
        </tr>
      )
    })
  }
  render() {
    return (
      <div className={Style.home}>
        <div className={Style.header}>

        </div>

        <div className={Style.row}>
          <div className={Style.leftcolumn}>
            <div className={Style.card}>
              <Form inline>
                <FormControl
                  type="text"
                  style={styles.AinputBorder}
                  size="sm"
                  className="Ainput-border mr-sm-2"
                />
                <button className="search-button">
                  <FaSearch />
                </button>
                <Button variant="secondary" onClick={this.bill}>Go to Cart</Button>
                <Button variant="secondary" onClick={this.gotoSubscription}>Subscriptions</Button>
              </Form>

            </div>
            <div className={Style.cardtable}>

              <div>
                <h1 id='title'>Medicine stock Details</h1>
                <table id='students'>
                  <tr>
                    <th>Sl No</th>
                    <th>Name of the medicine</th>
                    <th>Quantity Left</th>
                    <th>Quantity</th>
                    <th>Price per one piece</th>
                    <th>Request</th>
                  </tr>
                  <tbody>
                    {this.renderTableData()}
                  </tbody>
                </table>
              </div>
              {/* : <img src={require("./search.png")} alt="Search for Results" />} */}
            </div>
          </div>
          <div className={Style.rightcolumn}>
            <div className={Style.card1}>
              <p> {this.state.cId}</p>
              <p>{this.state.name} </p>
              <p>Name</p>
              <p>Address</p>
              <p>Number</p>
              <p>Email id</p>
            </div>
            <div className={Style.card1}>
              <button className={Style.buttonadmin} onClick={this.handleLogout}> Logout </button><br />
              <button className={Style.buttonadmin} onClick={this.reset}> Reset Password </button><br />
              {/* <button className={Style.buttonadmin} onClick={this.addStudent}> Add Student </button> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default UserHome;