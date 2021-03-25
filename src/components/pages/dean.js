import React, { Component } from 'react'
import './facilities.css'
import image2 from "../../dean.jpg";
export default class dean extends Component {
    render() {
        return (
            <div>
                                 <div className="Layout1">
                     <h3 className="alileft">Dean's Message</h3>
                     <div className="line1"> </div>
                     <img    alt="principal" className="principal"  src={image2}/>
                    <p>The world today is a much better place to develop one’s potential. One is not limited by choice or technology, but only by the power of one's imagination.</p>
                    <p>At Adhiyamaan College of Engineering (ACE), the learners challenge assumptions, think beyond visible limits, and add the value of excellence in whatever they do.</p>
                    <p>Grounded in our commitment to engineering education innovation and interdisciplinary research, we offer our students a rich educational experience, an experience that bonds intellectual rigor and cross-disciplinary breadth in an intimate, student-centered environment. Research is an integral and conclusively enhancing part of this experience.</p>
                    <p>Today, we continue that legacy of innovation and leadership in undergraduate and professional education, and in research and technology transfer.</p>
                    <p>The College is its people – faculty, students, alumni and industries. Every aspect of our leadership, innovation, and growth comes from these sources. We seek, deliver and help you Achieve - Create – Excel (ACE).</p>                    
                     </div>
            </div>
        )
    }
}
