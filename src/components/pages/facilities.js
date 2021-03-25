import React, { Component } from 'react'
import './facilities.css'


export default class facilities extends Component {
    render() {
        return (
            <div>
                <div className="Layout1">
                <h3 className="alileft">College Library</h3>
                    <div className="line1"> </div>
                    <img className="pic1" src="../../images/libimg.jpg"/>
                    <p>The Central Library has been built to International Standards. It spread over to an area of 4500 sq. m. with ground plus four floors. The library is equipped with a Reference section it could accommodated around 500 students, Digital library, Audio Visual Section, Journal Section, conference room, Research Scholar Section, Newspaper and Magazine Section, and Reprography Section. It has numerous specialized collection of Books, Journals, ASME, ASTM, IEEE-ASPP, Springer, Elsevier, EBSCO Art & Architecture, GREENR - Architecture, J-Gate Engineering, J-Gate Business Management, EMERALD Management, and McGraw Hill. The library is fully computerized and can be accessed using the OPAC (Online Public Access Catalogue) system which enables the students to search the required books they specifying the author, title, subject and keywords. It facilitates the users to reserve the books they need, and also updates on the status of a particular book and that of the User.</p>
                    
                   
                   
                    <h3 className="int">Internet</h3>
                    <div className="line1"> </div>
                    
                    <img className="pic1" src="../../images/internet-marketing.jpg"/>
                        
                <p  className="aliright">  Our college is fully equipped with round the clock internet facility with a speed of 310 Mbps, in collaboration with BSNL networks. The node facility is available for the entire campus including the hostels.</p>
                <p  className="aliright1">Round the Clock OFC internet connectivity is available for the entire campus including hostels.</p>       
                <p className="aliright1">All the Computer Laboratories are connected to the internet through Managable Switches(VLAN)</p>
                <p className="aliright1">The high end computing nodes are in the network of ACE through which simultaneously many users can access any of the servers in additions to other users from their department through campus network. About 1000 users can simultaneously access the facilities of ACE from the respective departments.</p>
                <p>Since all the computer systems in ACE are connected in a switched fiber optic campus network, one can access any resource from any node in the campus. A variety of software is also available for the students and the users.</p>
                <h3 className="int">Hostels</h3>
                    <div className="line1"> </div>   
                    <img className="pic2" src="../../images/hostel.jpg"/>   
                    <p>There are three hostels: Pennar, Cauvery and Bhavani with all facilities for the students.</p>
                    <p>We have highly modernized kitchen to provide wholesome food for the students. The hostels have library sections with books for all the departments as well as technical and non-technical magazines.</p>
                    <p>The hostel at Adhiyamaan College of Engineering is meant only for discipline, studies and behavior activities. The hostel is administered by four Deputy Wardens with high responsibilities. The hostel has got the following facilities:</p>
                    <ul className="uli">
                     <li>
                         50 single member and 200 double member and 50 four members rooms with visitors hall.
                         </li>
                     <li>
                         Well established library with 1500 volumes and technical and non- technical magazines.
                         </li>
                     <li>
                         Highly furnished dining hall which yields energetic food .
                        </li>
                     <li>
                         Good refreshment with indoor and outdoor games and TV halls.
                         </li>
                    <li>
                         Sick room for emergency when the students are ill .
                    </li>
                        </ul>
                        <h3 className="int">Transport</h3>
                    <div className="line1"> </div>  
                    <img className="pic2" src="../../images/buses.jpg"/>    
                    <p>The Institution has got a fleet of buses to credit and for the convenience of the day scholars and faculty members. The students wishing to avail the transport facility will have to obtain a monthly pass by paying a nominal amount. The amount is meagre compared to that of the city buses.</p>
                    <p>Besides these buses, two buses are operated from Bangalore, two buses from  Krishnagiri, one bus from Berikai and one bus from Denkanikottai every day to facilitate the staff members and students of AERI</p>
                    <h3 className="int">Medical Facility</h3>
                    <div className="line1"> </div>  
                    <p>An ambulance van is available to provide 24 hours medical facilities.</p>
                    </div>
            </div>
        )
    }
}
