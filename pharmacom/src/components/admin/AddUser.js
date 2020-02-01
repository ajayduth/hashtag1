import React, { Component } from "react";
// import { getTokena } from '../utils'
// import "./css/Newstudentreg.css";
import { confirmAlert } from 'react-confirm-alert';
// import Axios from "axios";
import {
    Form,Button,Container
} from 'react-bootstrap'
import "../../assets/css/pharcom.css"

class AddUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pName:null,
      addr:null,
      email:null,
      phone:null,
      prc:null

    };
  }

  handleSubmit = e => {
    e.preventDefault();


   
      console.log(`
        --SUBMITTING--
       
        Pharmacy Name: ${this.state.pName}
        Full Address: ${this.state.addr}
        Email: ${this.state.email}
        Phone Number: ${this.state.phone}
        PRC Number: ${this.state.prc}
        

      `);
   
    } ;
  

  handlechange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    
    this.setState({ [name]: value }, () => console.log(this.state));
  };

  render() {

    return (
        <div className="form-container">
            
        <Form className="fo-rm" onSubmit={this.handleSubmit}>
        <h2>Add User</h2> 
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Pharmacy Name</Form.Label>
          <Form.Control name="pName" value={this.state.pName} type="text" placeholder="Enter Pharmacy Name" onChange={this.handlechange} />
          {/* <Form.Text className="text-muted">
        
          </Form.Text> */}
        </Form.Group>
        <Form.Group controlId="formBasicid">
          <Form.Label>PRC Number</Form.Label>
          <Form.Control name="prc" value={this.state.prc} type="text" placeholder="Enter PRC Number" onChange={this.handlechange} />
          {/* <Form.Text className="text-muted">
        
          </Form.Text> */}
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Address</Form.Label>
          <Form.Control name="addr" value={this.state.addr} as="textarea" rows="3" placeholder="Enter Full Address" onChange={this.handlechange} />
          {/* <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text> */}
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control name="email" value={this.state.email} type="email" placeholder="Enter email" onChange={this.handlechange} />
        {/* <Form.Text className="text-muted">
      We'll never share your email with anyone else.
         </Form.Text> */}
        </Form.Group>
      
        <Form.Group controlId="formBasicPhonenumber">
          <Form.Label>PhoneNumber</Form.Label>
          <Form.Control name="phone" value={this.state.phone} type="text" placeholder="Enter Phone Number" onChange={this.handlechange} />
        </Form.Group>
        <Form.Group controlId="formBasicPhonenumber">
          {/* <Form.Label></Form.Label> */}
          {/* <Form.Control type="text" placeholder="Enter phonenumber" /> */}
        </Form.Group>
        <Button size="lg" variant="primary" type="submit">
          Add User
        </Button>
      </Form>
      </div>
        
    );
  }
}

export default AddUser;
