import './administration.css';

import { Link } from 'react-router-dom';
import React, { Component } from "react";
import image1 from "../../banumathi.jpg";
import image2 from "../../principal.jpg";
import image3 from "../../dean.jpg";
import image4 from "../../researchdean.jpg";


class administration extends Component{
    render(){
        const message='DR.S.SURESH BABU, Ph.D. FIE., FIGS., \n DEAN (Research & Development)';
        return(
           <div>
               <div className="Layout1">
                   <h3>Chairperson's Message</h3>
                   <div className="line1"></div>
                   <img   width="22%" alt="banumathi" className="pic"  src={image1}/>
                   <p className="aboh1">ACE has a distinctive mission and history that set us apart from other institutions when we started our charitable trust Adhiyamaan Education and Research Institute (AERI) almost two decades ago. We envisioned a new kind of academic institution-one that could put it, "serve the times and the nation's needs." </p>
                   <p className="aboh2">Our efforts for innovating curriculum, percolating research culture, supporting our innovative student teams and upgrading our infrastructure with a vision and commitment to move further on the pathways of excellence perhaps is what made ACE to climb to be a top class institution in the region. It must be highly satisfying that our stake holders namely, the Industry, Government and the people in the community have acknowledged  their recognition of the spirit of excellence of our institution as it is truly reflected in our endeavor to provide value based education.</p>
                   <p className="aboh3">Faith in the name of our institution which is now an autonomous in spirit that the industry, the Government and the society recognizes the value of goodness that is cultivated in this institution in plenty by its students, teachers and all those who are part and parcel of this institution.</p>
                   <p className="aboh3">I am sure our achievements will make feel everyone of us proud. Our alumni here in India and abroad will feel proud of our achievements and this must invigorate our mind and soul to commit for even higher levels of achievements in the ensuing years.</p>
                   <p style={{fontSize:'18px'}}> Dr. Banumathi T</p>
                   <p style={{fontSize:'15px',marginTop:'-15px'}}> Chairperson</p>
                   <h3>Principal's Message</h3>
                   <div className="line1"></div>
                   <img   width="22%" alt="principal" className="pic"  src={image2}/>
                   <p  className="aboh4">India today stands as world’s third largest economic power, its economy growing at around 8%, Indian Entrepreneurs emerging as global entrepreneurs, Indians figuring increasingly in the list of the richest persons in the world, India’s knowledge power making India as a preferred destination for out sourcing knowledge services from India, India fast emerging as a destination for world class R&D Centers and Innovation hub. Young friends, these are the signs of even a brighter tomorrow for India and its people.</p>
                   <Link to='/principal'  className="read" >{">"}{">"}ReadMore...</Link>
                   <h3 style={{marginTop:'20px'}}>Dean's Message</h3>
                   <div className="line1"></div>
                   <img   width="22%" alt="dean" className="pic"  src={image3}/>
                   <p  className="aboh4">The world today is a much better place to develop one’s potential. One is not limited by choice or technology, but only by the power of one's imagination.At Adhiyamaan College of Engineering (ACE), the learners challenge assumptions, think beyond visible limits, and add the value of excellence in whatever they do.</p>
                   <Link to='/dean'   className="read">{">"}{">"}ReadMore...</Link>
                  
               </div>
              
           </div>
        )
    }
}
export default administration;