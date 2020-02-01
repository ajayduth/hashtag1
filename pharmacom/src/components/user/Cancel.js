import React from 'react'
import './Cancel.css'
class Cancel extends React.Component{
    constructor(props){
        super(props);
        this.renderTable=this.renderTable.bind(this);
        this.cancel=this.cancel.bind(this);
        this.state={
            medicines: ["paracetamol","aspirin","betadin"]
        }
    }
    renderTable(){
        return this.state.medicines.map((a, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td><p id={index}>{a}</p></td>
                <td><button id={index} onClick={this.cancel}>Unsubscribe</button></td>
              </tr>
            )
        });
    }
    cancel({target}){
        console.log("Cancelled");
        var temp=[];
        for(var i=0;i<this.state.medicines.length;i++)
        {
            if(i!=target.id)
            temp.push(this.state.medicines[i]);
        }
        this.setState({medicines:temp});
    }
    render(){
        return(
            <div className="cancel">
                <p>My Subscriptions</p>
                <table>
                    <tbody>
                        {this.renderTable()}
                    </tbody>
                </table>
            </div>
        )
    }
}
export default Cancel;