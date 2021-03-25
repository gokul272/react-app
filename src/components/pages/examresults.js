import React, { Component } from 'react'
import './facilities.css'
import Button from "react-bootstrap/Button";

export default class examresults extends Component {
    render() {
        return (
            <div>
                   <div className="Layout1">
                   <h3 className="alileft">Examination Results</h3>
                    <div className="line1"> </div>
                        <div className="card2">
                            <form action="submit">
                            <label  className="al1" style={{color:'black'}}>Register Number</label>
                            <input className="al"type="text" placeholder="Register Number" name="uname" required/>
                            <Button  className="but" type="submit" > Submit </Button>
                            </form>
                          
                        </div>
                   </div>
            </div>
        )
    }
}
