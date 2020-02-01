import React from 'react'
import './Cancel.css'
class Cancel extends React.Component{
    constructor(props){
        super(props);
        this.renderTable=this.renderTable.bind(this);
        this.cancel=this.cancel.bind(this);
    }
    renderTable(){
        return medicines.map((a, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td><p id={index}>{a}</p></td>
                <td><p id={index} onClick={this.cancel}>Unsubscribe</p></td>
              </tr>
            )
        });
    }
    cancel(){
        console.log("Cancelled");
    }
    render(){
        return(
            <div>
                <table>
                    <tbody>
                        {this.renderTable}
                    </tbody>
                </table>
            </div>
        )
    }
}