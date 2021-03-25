import React, { Component } from 'react'
import './cources.css';

export default class civil extends Component {
    render() {
        return (
            <div>  
               <div className="layout">

                <h3 className="alileft">Civil Engineering Department</h3>
                <div className="line"> </div>
                <p>The Department of Civil Engineering started during the academic year 1993 -1994 is presently having an intake of 120. The department is re-accredited during 2019 by National Board of Accreditation, New Delhi and conferred autonomous Status by UGC, during 2007. Demonstrated capabilities of the department is endorsed by the ongoing sponsored and curiosity driven research projects besides consultancy.</p>

                <p> The strength of department is attributed to learning oriented pedagogical practices by the experienced and committed faculty from diversified facets of Civil Engineering.</p>

                <p>    Besides this, State-of-the art equipment and different flavours of GIS software, structural engineering software, Image processing software are being exploited to inculcate professional skills.</p>

                <p>    The core competency of the department is evidenced by the ongoing research programmers sponsored by the Department of Science and Technology, Department of Space, Government of India, Ministry of Human Resources Development, New Delhi and Ministry of Earth Sciences.</p>

                <p>   The department offers post graduate program in ME - Structural Engineering from the academic year 2014-2015. The advanced softwares are being used for training, research and consultancy works.</p>
                    <h3 className="alicenter">Laboratory Facilities</h3>
                             <div className="line"> </div>
                             <p>First Year</p>
                             <ol>
			                      <li>Engineering Physics Lab</li>
			                      <li>Engineering Chemistry Lab</li>
			                     <li>Fundamentals of programming Lab</li>
		                     </ol>
                             <p>Second Year</p>
                             <ol>
		                         <li>Strength of Materials Lab</li>
		                         <li>Hydraulic Engineering Lab</li>
		                         <li>Surveying Lab</li>
		                     </ol>
                             <p>Third Year</p>
                             <ol>
		      <li>Environmental Engineering Lab</li>
		      <li>Computer Aided Design Lab</li>
		      <li>Soil Mechanics Lab</li>
		      <li>Concrete Lab</li>
		      <li>Highway Engineering Lab</li>
		      </ol>
               
                </div>
            </div>
        )
    }
}