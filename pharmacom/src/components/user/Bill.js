import React from 'react'
import './Bill.module.css'
import { Button } from "react-bootstrap";
class Bill extends React.Component {
    constructor(props) {
        super(props);
        this.renderTable = this.renderTable.bind(this);
        this.Sum = this.Sum.bind(this);
        this.bill = this.bill.bind(this);
    }
    renderTable() {
        if (localStorage.getItem("Bill"))
            return JSON.parse(localStorage.getItem("Bill")).map((a, index) => {
                return (
                    <tr key={index}>
                        <td>{index + 1}</td>
                        <td><p id={index} >{a[0]}</p></td>
                        <td><p id={index} >{a[1]}</p></td>
                        <td><p id={index} >{a[2]}</p></td>
                        <td><p id={index} >{a[1] * a[2]}</p></td>
                    </tr>
                )
            });
    }
    Sum() {
        var sum = 0;
        if (localStorage.getItem("Bill"))
            JSON.parse(localStorage.getItem("Bill")).map((a, index) => {
                sum = sum + a[1] * a[2];
            });
        return sum;
    }
    bill() {
        console.log("Printed");
        localStorage.removeItem("Bill");
        this.props.history.push("/2");
    }
    render() {

        return (
            <div>
                <p>{this.props.pharmacyname}</p>
                <p>{this.date}</p>
                <table>
                    <tr>
                        <th>S No.</th>
                        <th>Medicine</th>
                        <th>No. of pcs</th>
                        <th>Price/1pc</th>
                        <th>Net price</th>
                    </tr>
                    <tbody>
                        {this.renderTable()}
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>{this.Sum()}</td>
                        </tr>
                    </tbody>
                </table>
                <Button variant="secondary" onClick={this.bill}>Bill</Button>
            </div>
        )
    }
}
export default Bill;