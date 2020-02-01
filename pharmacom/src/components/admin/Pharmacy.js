import React from 'react'
import './Pharmacy.css'
class Pharmacy extends React.Component{
    constructor(props){
        super(props);
        this.renderTable=this.renderTable.bind(this);
    }
    renderTable(){
        return pharmacy.map((a, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td><p id={index}>{a}</p></td>
                <td><p id={index} onClick={this.cancel}>Unsubscribe</p></td>
              </tr>
            )
        });
    }
    
    render(){
        return(
            <div>
                <p>Medical Pharmacies</p>
                <table>
                    <tbody>
                        {this.renderTable}
                    </tbody>
                </table>
                <button>Add Pharmacy</button>
            </div>
        )
    }
}