import React ,{Component} from "react";
import './about.css';
import image from "../../Hosur-City.jpg";

class about extends Component{
    render(){
    return (
        <div>
        <div className='Layout3'>
            <div className='layout1' >
            <h3>About Our College</h3>
                <div className="line" style={{width:'50%'}}></div>
                <p>The institution is spread over a sprawling campus with calm surroundings, creating a fitting atmosphere for study. The Institute provides a clean and invigorating environment conducive for higher education.</p>
                <p>Adhiyamaan College of Engineering is one of the educational institutions developed by Adhiyamaan Educational & Research Institution - a trust, which was started in the year 1987-1988 to cater the needs of the nation in the development of technocrats and to provide facilities for educating and training men and women to meet the entrepreneurial and management needs. The management has created adequate infrastructural facilities and sufficient funds and is keen on developing the institution for higher education.</p>
                <p>It is the first Engineering College to be started in the most backward erstwhile Dharmapuri District of the State of Tamilnadu to develop the people academically, socially and economically. It was originally affiliated to University of Madras. When the Periyar University was carved out from the University of Madras; it was affiliated to it. Since the government of Tamilnadu decided to bring all the Engineering and Technical Institutions in the State under one Technological University in the year 2001, Adhiyamaan College of Engineering was affiliated to the Anna University, Chennai. The college is housed in Adhiyamaan Educational & Research Institutions Campus, Dr.M.G.R Nagar, Hosur. The Campus is spread over an area of 250 acres abutting National Highway NH-7.</p>
                <p>The Institution is situated 6 kms from Hosur bus stand and railway station. The Institution is well connected to three major Railway Junctions viz., Hosur, Jolarpet and Bangalore.</p>
                 <h3>About Hosur</h3>
                 <div className="line" style={{width:'50%'}}></div>
                 <div className="about">
                 <img  width='100%'alt='ho' className='ho' src={image}/>
                 <p className="aboh">The climate of Hosur is similar to that of Bangalore, which is just 35 kms away. Hosur, because of its proximity to Bangalore, enjoys all the facilities like Highway, Train, Airport and other communication similar to that of a metropolitan city. Hosur is a fast growing major industrial town with various Industrial Units like TITAN, Ashok Leyland, Hindustan Motors, TVS and a host of other small, Medium Scale Industries. The college has established very good rapport with Industries so that majority of students do their project work in these Industries.</p>
                 </div>
                 <h3>Quality Policy</h3>
                 <div className="line" style={{width:'50%'}}></div>
                 <p>ACE is committed to develop skills, knowledge and right attitude among students to meet the expectations of Industry, Parents and Society with continual improvement through dedicated team work.</p>
                <h3>Objectives</h3>
                <div className="line" style={{width:'50%'}}></div>
                <ul className="uli">
                    <li>To create sustainable  teaching -  learning process in all academic units that promote pedagogical innovations.</li>
                    <li>To transform  students by facilitating holistic personality development and sustenance of  talent.</li>
                    <li>To nurture  higher commitment towards learning, research and creative thinking among students and faculty members.</li>
                    <li>To enhance industry-institute relationship to accelerate students' industry readiness.</li>
                </ul>
                <h3>Core Values</h3>
                <div className="line" style={{width:'50%'}}></div>
                <p>Student Focus : Meeting community and student needs by creating an educational environment and culture so that the students can attain a variety of goals.</p>
                <p>Excellence : Maintain a high standard of integrity and performance leading to the achievement of academic and professional goals.</p>
                <p>Collaboration : Seeking input from all sectors and the stake holders of the college and the community.</p>
                <p>Diversity : Fostering a learning community in which the values, goals, and learning styles of all students are recognized and supported.</p>
                <p>Life-Long Learning : Serving enthusiastic, independent thinkers and learners striving for personal growth.</p>
                <p>Technological Advancement : Keeping pace with global technological trends and enhancing traditional values of technology to prepare students for success at work place.</p>
                <p>Supportive Atmosphere : Institution supports an atmosphere of trust where communication and teamwork cultivate a rich environment for teaching and learning process.</p>
                </div>
            <div className='sidebar1' >
            <h3 style={{paddingLeft:'35px'}}>Vision</h3>
            <div className="line" style={{marginLeft:'50px',width:'20%'}}></div>
            <p style={{marginLeft:'40px',marginRight:'40px'}}>To foster ACE as a centre or nurturing and developing world class Engineers and Managers who convert global challenges into opportunities through value-based quality education.</p>
            <h3 style={{paddingLeft:'35px'}}>Mission</h3>
            <div className="line" style={{marginLeft:'50px',width:'20%'}}></div>
            <p style={{marginLeft:'40px',marginRight:'40px'}}>To impart value-based quality education through effective teaching-learning processes.</p>
            <p style={{marginLeft:'40px',marginRight:'40px'}}>To nurture creativity, excellence and critical thinking by applying global competency factors to contribute and excel in the rapidly growing technological world.</p>
            <p style={{marginLeft:'40px',marginRight:'40px'}}>To continuously develop and improve holistic and innovative personality for global mobility.</p>
            <p style={{marginLeft:'40px',marginRight:'40px'}}>To make ACE a centre for excellence.</p>
            <h3 style={{}}>PO,PSO and CO</h3>
            <div className="line" style={{marginLeft:'50px',width:'20%'}}></div>
             <ul style={{marginTop:'10px',marginBottom:'10px', marginLeft:'100px'}}>
                 <li >
                 PO, PSO & CO
                 </li>
             </ul>
             <h3 style={{marginLeft:'83px',marginTop:'30px'}}>UG Courses Offered</h3>
            <div className="line" style={{marginLeft:'50px',width:'20%'}}></div>
            <ul style={{marginInlineStart:'100px',marginTop:'10px',marginBottom:'10px'}}>
                <li>B.Arch (Archicture)</li>
                <li>B.E (Aeronautic Engg.)</li>
                <li>B.E (Biomedical Engg.)</li>
                <li>B.E (Civil Engg.) </li>
                <li>B.E (CSE)</li>
                <li>B.E (ECE)</li>
                <li>B.E (EIE)</li>
                <li>B.E (EEE)</li>
                <li>B.E (MECH)</li>
                <li>B.Tech (Chemical Engg.)</li>
                <li>B.Tech (Biotechnology)</li>
                <li>B.Tech (IT)</li>
            </ul>
            <h3 style={{marginLeft:'83px'}}>PG Courses Offered</h3>
            <div className="line" style={{marginLeft:'50px',width:'20%'}}></div>
            <ul style={{marginInlineStart:'100px',marginTop:'10px',marginBottom:'10px'}}>

                <li>M.E ( Comm. Systems )</li>
                <li>M.E ( VLSI Design)</li>
                <li>M.E ( CSE )</li>
                <li>M.E ( Power Systems )</li>
                <li>M.E ( Engg. Design )</li>
                <li>M.E ( Structural Design)</li>
                <li>M.B.A ( Full Time & Part Time)</li>
                <li>M.C.A</li>

            </ul>
            <h3 style={{marginLeft:'83px'}}>Available Facilities</h3>
            <div className="line" style={{marginLeft:'50px',width:'20%'}}></div>
            <ul style={{marginLeft:"100px"}}>
                <li>Internet</li>
                <li>Transport</li>
                <li>Hostel</li>
                <li>Digital Library</li>
                <li>Banking (ATM) & Postal</li>

            </ul>
            </div>
        </div>
        
        </div>
    
    )
    }
}

export default about;
