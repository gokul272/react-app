import React, { Component } from 'react'
import './cources.css';

export default class mca extends Component {
    render() {
        return (
            <div>
                 <div className="layout">

                <h3 className="alileft">Master of Computer Applications</h3>
                <div className="line"> </div>
                <p>The Department of MCA was established in the academic year 1995 -96 with the intake of 60 and it now is increased to 120 and affiliated to Anna University, Chennai. It strives hard to develop world class, self disciplined computer professionals who will be responsible for uplifting the economical status of our Nation and humanity.</p>
                <h3 style={{marginLeft:'120px'}}>Lab Facilities</h3>
                <div className="line"> </div> 
                <p>The department has good Computer Laboratories equipped with 6 servers and 237 nodes. All the computers are networked and protected from all known viruses and firewall to have complete data security. To ensure continues usability of computers to the students, all the computers have a power backup with uninterrupted power supply (UPS) up to 5 hours. Essential licensed software is provided to all systems to support the academic and University curriculum. </p> 
                <h3 style={{marginLeft:'120px'}}>Library Facilities</h3>
                <div className="line"> </div>     
                <p>The department has a fully automated library with 12439 books of 2112 titles and about 500 CDs. Apart from text books, the library has National and International journals and some popular dailies. Moreover, online book reservation facility through intranet is also available in the department library. The department maintains an exclusive question bank in the library which comprises a collection of University Question papers and additional objective type questions papers prepared by the department faculty.</p> 
                <h3 style={{marginLeft:'120px'}}>Salient Features</h3>
                <div className="line"> </div>    
                <ol>
						    <li>Full Fledged placement cell assisting personality development training and communication development classes.</li>
						    <li>Regular industry interaction.</li>
						    <li>Career opportunity seminars.</li>
						    <li>Regular counseling / monitoring for students.</li>
						    <li>Round the clock state of the art computer lab with LAN networking with Internet and web-browsing facility. The Department has exclusive Intranet server, so that the students get all the details about the unit test schedule, Model question papers, Self evaluator system with more than 1000 questions and class toppers etc..</li>
						    <li>All the Class rooms are furnished with WI-Fi internet connectivity, LCD projectors, Sony 21'' Flat TV and water facility, Satellite communication and Visualized class room facility .</li>
						    <li>Smart Board class room facility.</li>
					      </ol> 
                </div>
            </div>
        )
    }
}
