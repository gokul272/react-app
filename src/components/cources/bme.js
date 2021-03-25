import React, { Component } from 'react'
import './cources.css';

export default class bme extends Component {
    render() {
        return (
            <div>  
               <div className="layout">
               <h3  className="alileft">Biomedical Engineering Department</h3>
                <div className="line"> </div>
                <p>The Department of Biomedical Engineering was started in the year 2003-2004 and it is inter-disciplinary in nature which provides ample scope for students to study the Human System through electronics. Our faculty, staff and students are all important part of the team that provide distinctive opportunities for creative solutions to Biomedical Engineering research and design problems. We aim for excellence in under graduate education; meaningful and innovative research and service dedicated to advancing the field of Biomedical Engineering.</p>
                <h3 className="alicenter">Lab Facilities</h3>
                <div className="line"> </div>
                <ol>
							  <li>Life Sciences Lab</li>
							  <li>Sensors and Measurements Lab</li>
							  <li>Biomedical Instrumentation Lab</li>
							  <li>Diagnostic &amp; Therapeutic Equipments Lab</li>
							  <li>Digital Signal Processing Lab</li>
							  <li>Microprocessor Lab</li>
							  <li>Electronic Circuits Lab</li>
							  <li>Electron Devices and Circuits Lab</li>
							  <li>Integrated Circuits Lab</li>
							  <li>Electronic Design Lab</li>
							  <li>Digital Image Processing Lab</li>
							  <li>Hospital training Lab</li>
			  </ol>
               </div>
            </div>
        )
    }
}