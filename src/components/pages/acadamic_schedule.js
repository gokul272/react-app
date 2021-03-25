import React ,{Component} from "react";
import './acadamic_schedule.css';
import s1 from "../../ac1.jpg";
import s2 from "../../ac2.jpg";




class acadamic_schedule extends Component{
    render(){
    return (
         <div className="Layout1">
             <h2 className="alileft">Acadamic Schedule</h2>
             <div className="line"></div>
             <img src={s1} className="acadamic" alt="acadamic"/>
             <img src={s2}  className="acadamic"alt="acadamic"/>
        </div>


    )
    }
}
export default acadamic_schedule;