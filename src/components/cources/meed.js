import React, { Component } from 'react'
import './cources.css';
export default class meed extends Component {
    render() {
        return (
            <div>
                <div className="layout">

                    <h3 className="alileft">ME - Engineering Design</h3>
                    <div className="line"> </div>   
                    <p>The Department of Mechanical Engineering started during 1991 -1992 is presently having an intake of 240. The Department is accredited by National Board of Accreditation of AICTE, New Delhi.</p>
                    <p>The post graduation course of Engineering Design (ME - ED) was started during the year 2005-06. The Department is fully equipped with the state of art of Laboratories having Design and Analysis of Mechanical System, Failure Analysis and Design of Machine Members, Finite Element Analysis of Structures and Vibration Analysis of Systems.</p>
                    <p>The Department of Mechanical Engineering provides high quality education along with discipline. The Professor and Lecturers make it possible to give individual attention to the learners and to motivate them to achieve their professional goals. The curriculum structure of the department is designed to meet the present day requirement of Industries. The interaction between the staff and students is excellent and all the laboratories are well equipped as per requirements of the curriculum.  </p>
                    <h3 style={{marginLeft:'120px'}}>Lab Facilities</h3>
                    <div className="line"> </div>   
                    <ol>
                        <li>CAD Lab</li>
                        <p className="a">Work Stations [HP, Make i3, 500GB Hard Disk/ 8 GB RAM], Pro-E, CATIA, &AutoCAD.</p>
                        <li>Analysis and Simulation Lab</li>
                        <p className="a">Work Stations [HP, Make i3, 500GB Hard Disk/ 8 GB RAM], CATIA &ANSYS Software’s.</p>
                    </ol>
           
            </div>    
            </div>
        )
    }
}
