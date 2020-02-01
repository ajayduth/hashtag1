import React from 'react'
import './Adminhome.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
class Adminhome extends React.Component{
    constructor(props){
        super(props);
        this.feed=this.feed.bind(this);
        this.transfer=this.transfer.bind(this);
    }
    feed(){
        return(
            <div className="eachfeed">
                <div>
                    <h3>Medicine Name</h3>
                    <p>Pharmacy Name</p>
                </div>
                <button>Import</button>
            </div>
        );
    }
    transfer(){
        return(
            <div className="transfer">
                <p>Pharmacy1</p>
                < FontAwesomeIcon icon={faArrowRight}/>
                <p>Pharmacy2</p>
            </div>
        )
    }
    render(){
        return(
            <div className="rowad">
                <div className="feed">
                {this.feed()}
                </div>
                <div className="successful">
                {this.transfer()}
                </div>
            </div>
        )
    }
}
export default Adminhome;