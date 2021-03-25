import React, { Component } from 'react'
import './cources.css';

export default class eee extends Component {
    render() {
        return (
            <div>
              <div className="layout">
              <h3 className="alileft">Electrical and Electronics Engineering Department</h3>
                <div className="line"></div>
                <p>The Department of Electrical And Electronics Engineering was established in the year 1992-1993 with an intake of 60 students and the intake was increased to 120 in the academic year 2007-2008 and 180 in the academic year 2014 - 2015. PG (ME - Power System Engineering) with intake 18 from 2005 - 2006. The Department maintains high quality of teaching and learning process with the help of well qualified faculty members.</p>
                <h3 className="alicenter">Faculty</h3>
                <div className="line"></div>
                <p>The faculty members are postgraduates and doctorates. </p>
                <h3 className="alicenter">Facilities</h3>
                <div className="line"></div>
                <p>Laboratories are well equipped. Good exposure is given to all the students to update their practical knowledge with the help of technically strong instructors. 
The Department is tuned for conducting research activities in Electrical Power Sector.</p>
                <h3 className="alicenter">Achievements</h3>
                <div className="line"></div>
                <ol>
                    <li> Ms. S.Sarayu of 2007-2011 batch secured First Rank in University Exam. </li>
                    <li> Mr. G.Prakash of 1993-1997 batch secured fourth rank in All India level IAS Cadre 2000 examination. Presently he serves as on IAS cadre in Tamil Nadu. </li>
                    <li> Mr. S.R.Prakash & Mr. C.Sakayaraj of 1997 batch secured 2nd and 8th rank respectively in the University examination.</li>
                </ol>
                <h3 style={{marginLeft:'120px'}}>Lab Facilities</h3>
                <div className="line"></div>
                <ol>
							  <li>Electrical Machines  Laboratory</li>
							  <li>Control Systems Laboratory</li>
							  <li>Power Electronics Laboratory</li>
							  <li>Electric Circuits Laboratory</li>
							  <li>Measurements &amp; Instrumentation Laboratory</li>
							  <li>Power System Simulation Laboratory</li>
							  <li>Microprocessor &amp; Microcontroller Laboratory</li>
                              <li>Electron Devices and Circuits Laboratory</li>
                              <li>Electrial Drives and Control Laboratory</li>
                              <li>Linear Integrated Circuits Laboratory</li>
                              <li>Engineering Practices(EEE) Laboratory</li>
			  </ol>
              </div>
            </div>
        )
    }
}
