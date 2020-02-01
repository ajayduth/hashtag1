import React from 'react'
import './bill.css'
class Bill extends React.Component{
    render(){
        constructor(props){
            super(props);
            this.renderTable=this.renderTable.bind(this);
            this.Sum=this.Sum.bind(this);
        }
        renderTable(){
            return this.props.medicines.map((a, index) => {
                return (
                    <tr key={index}>
                        <td>{index + 1}</td>
                        <td><p id={index} >{a[0]}</p></td>
                        <td><p id={index} >{a[1]}</p></td>
                        <td><p id={index} >{a[2]}</p></td>
                        <td><p id={index} >{a[1]*a[2]}</p></td>
                    </tr>
                )
            });
        }
        Sum(){
            var sum=0;
            this.props.medicines.map((a, index) => {
                   sum=sum+a[1]*a[2];
            });
            return sum;
        }
        return(
            <div>
            <p>{this.props.pharmacyname}</p>
            <p>{this.date}</p>
            <table>
            <th>S No.</th>
            <th>Medicine</th>
            <th>No. of pcs</th>
            <th>Price/1pc</th>
            <th>Net price</th>
            <tbody>
                {this.renderTable}
                <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>{this.Sum}</td>
                </tr>
            </tbody>
            </table>
            </div>
        )
    }
}