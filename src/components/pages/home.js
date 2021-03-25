import './home.css';
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';

   

import image1 from "../../slider1.jpg";
import image2 from "../../slider2.jpg";
import image3 from "../../slider3.jpg";
import image4 from "../../infosys-logo.png";
import image5 from "../../wipro-logo.png";
import image6 from "../../microsoft-logo.png";
import image7 from "../../msdn-logo.png";
import image8 from "../../bsnl-logo.png";
import image9 from "../../google.png";
import image10 from "../../tcs.png";
import image11 from "../../capgemini.png";
import image12 from "../../zifo.png";
import image13 from "../../crmit.png";






 
 
class Home extends Component{
 
  render(){
    const settings={
      fade:true,
      infinite:true,
      speed:500,
      slidesToShow:1,
      arrows:true,
      slidesToScroll:1,
      autoplay: true,
      className:"slides"
    }
    return(
        <div>
            <div className="Layout">
            <div className="Slider">
               <Slider {...settings}>
                <div>
                  <img width="100%" src={image1}
                       alt="First slide"
                       className="slick-image"/>
                   <div className="slick-caption">
                       <p> The Principal Speech Infront of the Governor </p>
                   </div>
            </div>
                 <div>
                    <img  width="100%" src={image2}
                     alt="Second slide"
                    className="slick-image"/>
                    <div className="slick-caption">
                       <p>Paying respect to Thamizh Thai Vaazhthu</p>
                  </div>
                 </div>
            <div>
                    <img   width="100%" src={image3}
                    alt="Second slide"
                    className="slick-image"/>
                    <div className="slick-caption">
                <p>The Principal honouring the Governor with memento</p>
            </div>
         </div>
         </Slider>
           </div>
           <div className="sidebar">
          
           <button  className='btn1'>NEWS AND EVENTS</button>
          
          


         <marquee class="GeneratedMarquee" behavior="scroll" direction="up"    onmouseover="this.stop();" onmouseout="this.start();" scrollamount="2" >
         <Link to='ceo'> <h3 className="sidetext">New-Examination Fees circular</h3></Link>
         <Link to='ceo'> <h3 className="sidetext">New-Final Year examination time table</h3></Link>
         <h3 className="sidetext">Postponed of UG/PG Arear Exam August 2020</h3>
         </marquee>
        



           <Link to='/examresults'>
           <button  className='btn2'>EXAM RESULTS</button>
           </Link>
           <Link to='/contact'>
           <button  className='btn1'>HELP LINE</button>
           </Link>
           <Link to='/about'>
           <button  className='btn1'>About Our College</button>
           </Link>
           </div>

          </div>
          <div class="row">
                 <Link to='contact' style={{textDecoration:'none'}}>
                 <div class="card" > 
                    <div class="card-header" >
                         <h3 className="cardhead">  College Code 2601</h3>
                     </div>
                  </div>
                  </Link>
                  <Link to='admission' style={{textDecoration:'none'}}>  
              <div class="card">
                     <div class="card-header">
                    <h3   className="cardhead">Admission Enquiry</h3>
                    </div>
               </div>
               </Link>

               <div class="card">
                     <div class="card-header">
                            <h3   className="cardhead">TANCET 
                              Exam</h3>
                   </div>
               </div>
               <div class="card">
                     <div class="card-header">
                            <h3  className="cardhead">Consortium Exam</h3>
                   </div>
               </div>
               <div class="card">
                     <div class="card-header">
                            <h3   className="cardhead">Application Download</h3>
                   </div>
               </div>
          </div>
          <div className="mou">
            <h1 style={{marginTop:'10px',textAlign:"center"}}>Our Requirters</h1>

          </div>
          <div class="row1">
          <div class="card" style={{backgroundColor:"white" ,border:"none"}}>
                 <img   width="100%"  alt="companies" src={image4}/>
            </div>

            <div class="card" style={{backgroundColor:"white"  ,border:"none"}}>
                  <img   width="70%" height="100%" alt="companies" src={image5}/>
            </div>

            <div class="card" style={{backgroundColor:"white"  ,border:"none"}}>
                  <img   width="100%"  className="micro" alt="companies" src={image6}/>
            </div>

            <div class="card" style={{backgroundColor:"white"  ,border:"none"}}>
                  <img   width="60%" height="100%"  alt="companies"src={image7}/>
            </div>

            <div class="cardbs" style={{backgroundColor:"white"  ,border:"none"}}>
                  <img   width="40%" height="100%" alt="companies" src={image8}/>
            </div>
            

          </div>
          <div class="row1">
          <div class="card" style={{backgroundColor:"white" ,border:"none"}}>
                 <img   width="50%"  alt="companies" className="goo" src={image9}/>
            </div>

            <div class="card" style={{backgroundColor:"white"  ,border:"none"}}>
                  <img   width="80%" alt="companies" className="tcs" src={image10}/>
            </div>

            <div class="card" style={{backgroundColor:"white"  ,border:"none"}}>
                  <img   width="100%"  alt="companies" className="cap" src={image11}/>
            </div>

            <div class="card" style={{backgroundColor:"white"  ,border:"none"}}>
                  <img   width="50%"  className="cap" alt="companies"src={image12}/>
            </div>

            <div class="card" style={{backgroundColor:"white"  ,border:"none"}}>
                  <img   width="50%"  className="crm"  alt="companies" src={image13}/>
            </div>
            

          </div>
       
    </div>
    )
    }
}
export default Home;