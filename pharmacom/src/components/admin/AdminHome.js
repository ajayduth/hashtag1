import React from 'react'
import './Adminhome.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
var medicines=[["Paracetamol", "Preethi Medicals"], ["Aspirin","Ajay Pharmacy"],["Betadin", "Bismi Medicals"]];
class Adminhome extends React.Component{
    constructor(props){
        super(props);
        this.feed=this.feed.bind(this);
        this.transfer=this.transfer.bind(this);
        this.imported=this.imported.bind(this);
        this.modal=this.modal.bind(this);
        this.state={
            medicines:[["Paracetamol", "Preethi Medicals"], ["Aspirin","Ajay Pharmacy"],["Betadin", "Bismi Medicals"]],
            transfer:[["Preethi Medicals", "Ajay Pharmacy", "Betadin",50], ["Bismi Medicals","Ajay Pharmacy","Aspirin",100],["Ajay Pharmacy","Adarsh Medicals","Dolo",20]],
            med:"",
            num:0,
            toggle:false
        }
    }
    feed(){
        return this.state.medicines.map((a, index) => {
        return(
            <div className="eachfeed">
                <div>
                    <h3>{a[0]}</h3>
                    <p>{a[1]}</p>
                </div>
                <button id={index} onClick={this.imported}>Imported</button>
            </div>
        );
    });
    }
    imported({target}){
        var temp=[];
        for(var i=0;i<this.state.medicines.length;i++)
        {
            if(i!=target.id)
            temp.push(this.state.medicines[i]);
        }
        this.setState({medicines:temp});
    }
    transfer(){
        return this.state.transfer.map((a, index) => {
        return(
            <div className="transfer" id={index} onClick={this.modal}>
                {a[0]}
                < FontAwesomeIcon icon={faArrowRight} />
                {a[1]}
            </div>
        )
        });
    }
    modal({target}){
        if(!this.state.toggle)
        {    
            var data=this.state.transfer[target.id];
            // console.log(data);
            this.setState({med: data[2], num:data[3]});
            this.setState({toggle:true});
        }
        else
        this.setState({toggle:false});
    }
    render(){
        return(
        <div>
            <div className={this.state.toggle?"modal1":"hide"}>
                <p>Medicine Transfered: {this.state.med}</p>
                <p>Number of medicine transfered: {this.state.num}</p>
                <button onClick={this.modal}>Close</button>
            </div>
            <div className="rowad">
                <div className="feed">
                {this.feed()}
                </div>
                <div className="successful">
                {this.transfer()}
                </div>
            </div>
        </div>
        )
    }
}
export default Adminhome;