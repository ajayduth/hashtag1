import React from 'react';
// import { logouta, getTokena } from '../utils';
import Style from './UserHome.module.css';
// import Axios from 'axios'
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { Form,FormControl,Button } from "react-bootstrap";
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
      Slno:'',
      med_name:'',
      price:'',
      qty:'',
      medicines: [["1","paracetamol","10","haah"],["2","asperin","20",""]]
    };
  };
  addtoCart=()=>{

  }
  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value, error: '' });
  };
  renderTableHeader() {
    let header = Object.keys(this.state.medicines[0])
    return header.map((key, index) => {
      return <th key={index}>{key.toUpperCase()}</th>
    })
  }
  renderTableData() {
    return this.state.medicines.map((medicine, index) => {
      const { Slno, med_name, price, qty} = medicine
      return (
        <tr key={Slno}>
          <td>{med_name}</td>
          <td>{price}</td>
          <td><input value={this.state.qty} onChange={this.handleChangeQty}  type="number" ></input></td>
            <td><button onClick={this.addtoCart()}></button></td>
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
                <Button variant="secondary">amsbjsubsddk</Button>
               
							</Form>
              
            </div>
            <div className={Style.cardtable}>
              
                <div>
                  <h1 id='title'>Medicine stock Details</h1>
                  <table id='students'>
                    <tbody>
                      <tr>{this.renderTableHeader()}</tr>
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