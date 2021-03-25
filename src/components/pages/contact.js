import './contact.css';
import React, { Component } from "react";


class contact extends Component{
    render(){
       const message = `Adhiyamaan College of Engineering,\n  Dr.M.G.R.Nagar, Hosur,\n  Krishnagiri District, Tamil Nadu,\n India. Pin:635 109`;
      return(
            <div className="Layout1">
                  <h3>Contact Us</h3>
                  <div className="line"></div>
                  <h4>Contact Address</h4>
                  <div className='address'>{message}</div>
     
                  <h4>Office & Department Contact Number</h4>

                  <table border="1" cellpadding="0" cellspacing="0" id="abc">
  <tbody>
    <tr>
      <th width="50" align="left" valign="center" bgcolor="#FFFFFF"><div align="center"><strong>S.No</strong></div></th>
      <th width="187" align="left" valign="center" bgcolor="#FFFFFF"><strong>Contacts</strong></th>
      <th width="94" align="left" valign="center" bgcolor="#FFFFFF"><strong>Phone No.</strong></th>
      <th width="113" align="left" valign="center" bgcolor="#FFFFFF"><strong>Mobile No.</strong></th>
      <th width="234" align="left" valign="center" bgcolor="#FFFFFF"><strong>E-Mail-ID</strong></th>
    </tr>
    <tr>
      <td rowspan="2" align="left" valign="center"><div align="center">1.</div></td>
      <td><div align="left">
        <blockquote>
          <p>Administrative Office</p>
          </blockquote>
        </div></td>
      <td><div align="center">(04344)260570 / 261002</div></td>
      <td><div align="center">***</div></td>
      <td><div align="center">***</div></td>
    </tr>
    <tr>
      <td height="37"><div align="left">
        <blockquote>
          <p>Accounts Office</p>
          </blockquote>
      </div></td>
      <td><div align="center">(04344)261001 / 261034</div></td>
      <td><div align="center">***</div></td>
      <td><div align="center">***</div></td>
    </tr>
    <tr>
      <td valign="center" align="left" rowspan="2"><div align="center">2.</div></td>
      <td><div align="left">
        <blockquote>
          <p>Principal Office</p>
        </blockquote>
      </div></td>
      <td><div align="center">(04344)261020</div></td>
      <td><div align="center">***</div></td>
      <td><div align="center">principal@adhiyamaan.ac.in</div></td>
    </tr>
    <tr>
      <td valign="middle"><div align="left">
        <blockquote>
          <p>Fax</p>
        </blockquote>
      </div></td>
      <td><div align="center">(04344)260573</div></td>
      <td><div align="center">***</div></td>
      <td height="25"><div align="center">***</div></td>
    </tr>
	  <tr>
      <td valign="center" align="left" rowspan="2"><div align="center">3.</div></td>
      <td><div align="left">
        <blockquote>
          <p>Controller of Examinations</p>
        </blockquote>
      </div></td>
      <td><div align="center">(04344)261000</div></td>
      <td><div align="center">***</div></td>
      <td><div align="center">coe@adhiyamaan.ac.in</div></td>
    </tr>
    <tr>
      <td valign="middle"><div align="left">
        <blockquote>
          <p>Fax</p>
        </blockquote>
      </div></td>
      <td><div align="center">(04344)260571</div></td>
      <td><div align="center">***</div></td>
      <td height="25"><div align="center">***</div></td>
    </tr>
	  
    
   
	  <tr>
      <td valign="center" align="left"><div align="center">4.</div></td>
      <td><div align="left">
        <blockquote>
          <p>Dean-Autonomous</p>
        </blockquote>
      </div></td>
      <td><div align="center">(04344)261038</div></td>
      <td><div align="center">9487819104</div></td>
      <td><div align="center">dean@adhiyamaan.ac.in</div></td>
    </tr>
   
	  <tr>
      <td valign="center" align="left"><div align="center">5.</div></td>
      <td><div align="left">
        <blockquote>
          <p>DEAN (R&amp;D)</p>
        </blockquote>
      </div></td>
      <td><div align="center">(04344)261011</div></td>
      <td><div align="center">09994227629</div></td>
      <td><div align="center">deanresearch@adhiyamaan.ac.in</div></td>
    </tr>

<tr>
      <td valign="center" align="left"><div align="center">6.</div></td>
      <td><div align="left">
        <blockquote>
          <p>HOD - ECE</p>
        </blockquote>
      </div></td>
      <td><div align="center">(04344)261005</div></td>
      <td><div align="center">9487819151</div></td>
      <td><div align="center">hod_ece@adhiyamaan.ac.in</div></td>
    </tr>

    <tr>
      <td valign="center" align="left"><div align="center">7.</div></td>
      <td><div align="left">
        <blockquote>
          <p>HOD - CSE</p>
        </blockquote>
      </div></td>
      <td><div align="center">(04344)261006</div></td>
      <td><div align="center">9487819132</div></td>
      <td><div align="center">hod_cse@adhiyamaan.ac.in</div></td>
    </tr>
    <tr>
      <td valign="center" align="left"><div align="center">8.</div></td>
      <td><div align="left">
        <blockquote>
          <p>HOD - MBA</p>
        </blockquote>
      </div></td>
      <td><div align="center">(04344)261007</div></td>
      <td><div align="center">9994186326</div></td>
      <td><div align="center">hod_mba@adhiyamaan.ac.in</div></td>
    </tr>
    <tr>
      <td valign="center" align="left"><div align="center">9.</div></td>
      <td><div align="left">
        <blockquote>
          <p>HOD - Architecture</p>
        </blockquote>
      </div></td>
      <td><div align="center">(04344)261008</div></td>
      <td><div align="center">9791090923</div></td>
      <td><div align="center">hod_arch@adhiyamaan.ac.in</div></td>
    </tr>
    <tr>
      <td height="22" align="left" valign="center"><div align="center">10.</div></td>
      <td><div align="left">
        <blockquote>
          <p>HOD - Mechanical</p>
        </blockquote>
      </div></td>
      <td><div align="center">(04344)261010</div></td>
      <td><div align="center">9894213700</div></td>
      <td><div align="center">hod_mech@adhiyamaan.ac.in</div></td>
    </tr>
    <tr>
      <td valign="center" align="left"><div align="center">11.</div></td>
      <td><div align="left">
        <blockquote>
          <p>HOD - Civil</p>
        </blockquote>
      </div></td>
      <td><div align="center">(04344)261011</div></td>
      <td><div align="center">9994227629</div></td>
      <td><div align="center">hod_civil@adhiyamaan.ac.in</div></td>
    </tr>
    <tr>
      <td valign="center" align="left"><div align="center">12.</div></td>
      <td><div align="left">
        <blockquote>
          <p>HOD - EEE</p>
        </blockquote>
      </div></td>
      <td><div align="center">(04344)261012</div></td>
      <td><div align="center">9944559805</div></td>
      <td><div align="center">hod_eee@adhiyamaan.ac.in</div></td>
    </tr>
    <tr>
      <td valign="center" align="left"><div align="center">13.</div></td>
      <td><div align="left">
        <blockquote>
          <p>HOD - Aeronautical</p>
        </blockquote>
      </div></td>
      <td><div align="center">(04344)261013</div></td>
      <td><div align="center">9894445988</div></td>
      <td><div align="center">hod_aero@adhiyamaan.ac.in</div></td>
    </tr>
    <tr>
      <td valign="center" align="left"><div align="center">14.</div></td>
      <td><div align="left">
        <blockquote>
          <p>HOD - Chemical Engg.</p>
        </blockquote>
      </div></td>
      <td><div align="center">(04344)261014</div></td>
      <td><div align="center">8073153712</div></td>
      <td><div align="center">hod_chem@adhiyamaan.ac.in</div></td>
    </tr>
    <tr>
      <td valign="center" align="left"><div align="center">15.</div></td>
      <td><div align="left">
        <blockquote>
          <p>HOD - E &amp; I</p>
        </blockquote>
      </div></td>
      <td><div align="center">(04344)261015</div></td>
      <td><div align="center">9487819134</div></td>
      <td><div align="center">hod_eie@adhiyamaan.ac.in</div></td>
    </tr>
    <tr>
      <td valign="center" align="left"><div align="center">16.</div></td>
      <td><div align="left">
        <blockquote>
          <p>HOD - MCA</p>
        </blockquote>
      </div></td>
      <td><div align="center">(04344)261019</div></td>
      <td><div align="center">9487819140</div></td>
      <td><div align="center">hod_mca@adhiyamaan.ac.in</div></td>
    </tr>
    <tr>
      <td valign="center" align="left"><div align="center">17.</div></td>
      <td><div align="left">
        <blockquote>
          <p>HOD - Maths</p>
        </blockquote>
      </div></td>
      <td><div align="center">(04344)261009</div></td>
      <td><div align="center">9442520568</div></td>
      <td><div align="center">hod_maths@adhiyamaan.ac.in</div></td>
    </tr>
    <tr>
      <td valign="center" align="left"><div align="center">18.</div></td>
      <td><div align="left">
        <blockquote>
          <p>HOD - Physics</p>
        </blockquote>
      </div></td>
      <td><div align="center">(04344)261016</div></td>
      <td><div align="center">9442369968</div></td>
      <td><div align="center">hod_phy@adhiyamaan.ac.in</div></td>
    </tr>
    <tr>
      <td valign="center" align="left"><div align="center">19.</div></td>
      <td><div align="left">
        <blockquote>
          <p>HOD - Chemistry</p>
        </blockquote>
      </div></td>
      <td><div align="center">(04344)261017</div></td>
      <td><div align="center">9791916258</div></td>
      <td><div align="center">hod_che@adhiyamaan.ac.in</div></td>
    </tr>
    <tr>
      <td valign="center" align="left"><div align="center">20.</div></td>
      <td><div align="left">
        <blockquote>
          <p>HOD - English</p>
        </blockquote>
      </div></td>
      <td><div align="center">(04344)260583</div></td>
      <td><div align="center">9791239483</div></td>
      <td><div align="center">hod_english@adhiyamaan.ac.in</div></td>
    </tr>
    <tr>
      <td valign="center" align="left"><div align="center">21.</div></td>
      <td><div align="left">
        <blockquote>
          <p>HOD - Bio-Medical</p>
        </blockquote>
      </div></td>
      <td><div align="center">(04344)261037</div></td>
      <td><div align="center">9894171294</div></td>
      <td><div align="center">hod_bme@adhiyamaan.ac.in</div></td>
    </tr>
    <tr>
      <td valign="center" align="left"><div align="center">22.</div></td>
      <td><div align="left">
        <blockquote>
          <p>HOD - Bio-Tech</p>
        </blockquote>
      </div></td>
      <td><div align="center">(04344)261033</div></td>
      <td><div align="center">9487819135</div></td>
      <td><div align="center">hod_bt@adhiyamaan.ac.in</div></td>
    </tr>
    <tr>
      <td valign="center" align="left"><div align="center">23.</div></td>
      <td><div align="left">
        <blockquote>
          <p>HOD - IT</p>
        </blockquote>
      </div></td>
      <td><div align="center">(04344)261035</div></td>
      <td><div align="center">9487819100</div></td>
      <td><div align="center">hod_it@adhiyamaan.ac.in</div></td>
    </tr>
    <tr>
      <td valign="center" align="left"><div align="center">24.</div></td>
      <td><div align="left">
        <blockquote>
          <p>Machine Shop</p>
        </blockquote>
      </div></td>
      <td><div align="center">(04344)261022</div></td>
      <td><div align="center">***</div></td>
      <td><div align="center">***</div></td>
    </tr>
    <tr>
      <td valign="center" align="left"><div align="center">25.</div></td>
      <td><div align="left">
        <blockquote>
          <p>Central Library</p>
        </blockquote>
      </div></td>
      <td><div align="center">(04344)261023</div></td>
      <td><div align="center">9659433775</div></td>
      <td><div align="center">library@adhiyamaan.ac.in</div></td>
    </tr>
    <tr>
      <td valign="center" align="left"><div align="center">26.</div></td>
      <td><div align="left">
        <blockquote>
          <p>Placement Cell</p>
        </blockquote>
      </div></td>
      <td><div align="center">(04344)261024</div></td>
      <td><div align="center">9894896043</div></td>
      <td><div align="center">placement@adhiyamaan.ac.in</div></td>
    </tr>
    <tr>
      <td valign="center" align="left"><div align="center">27.</div></td>
      <td><div align="left">
        <blockquote>
          <p>ISTE Chapter</p>
        </blockquote>
      </div></td>
      <td><div align="center">(04344)261025</div></td>
      <td><div align="center">9894445988</div></td>
      <td><div align="center">iste@adhiyamaan.ac.in</div></td>
    </tr>
    <tr>
      <td valign="center" align="left"><div align="center">28.</div></td>
      <td><div align="left">
        <blockquote>
          <p>Guest House</p>
        </blockquote>
      </div></td>
      <td><div align="center">(04344)261026</div></td>
      <td><div align="center">***</div></td>
      <td><div align="center">***</div></td>
    </tr>
    <tr>
      <td valign="center" align="left"><div align="center">29.</div></td>
      <td><div align="left">
        <blockquote>
          <p>Construction Office</p>
        </blockquote>
      </div></td>
      <td><div align="center">(04344)261027</div></td>
      <td><div align="center">***</div></td>
      <td><div align="center">***</div></td>
    </tr>
    <tr>
      <td valign="center" align="left"><div align="center">30.</div></td>
      <td><div align="left">
        <blockquote>
          <p>Pennar Hostel (Gents)</p>
        </blockquote>
      </div></td>
      <td><div align="center">(04344)261028</div></td>
      <td><div align="center">***</div></td>
      <td><div align="center">***</div></td>
    </tr>
    <tr>
      <td valign="center" align="left"><div align="center">31.</div></td>
      <td><div align="left">
        <blockquote>
          <p>Cauvery Hostel (Gents)</p>
        </blockquote>
      </div></td>
      <td><div align="center">(04344)260583 / 261029</div></td>
      <td><div align="center">***</div></td>
      <td><div align="center">***</div></td>
    </tr>
    <tr>
      <td valign="center" align="left"><div align="center">32.</div></td>
      <td><div align="left">
        <blockquote>
          <p>Bhavani Hostel (Ladies)</p>
        </blockquote>
      </div></td>
      <td><div align="center">***</div></td>
      <td><div align="center">9442219157</div></td>
      <td><div align="center">***</div></td>
    </tr>
    <tr>
      <td valign="center" align="left"><div align="center">33.</div></td>
      <td><div align="left">
        <blockquote>
          <p>Security Office</p>
        </blockquote>
      </div></td>
      <td><div align="center">(04344)261031</div></td>
      <td><div align="center">***</div></td>
      <td><div align="center">***</div></td>
    </tr>
    <tr>
      <td valign="center" align="left"><div align="center">34.</div></td>
      <td><div align="left">
        <blockquote>
          <p>Cafeteria</p>
        </blockquote>
      </div></td>
      <td><div align="center">(04344)261032</div></td>
      <td><div align="center">***</div></td>
      <td><div align="center">***</div></td>
    </tr>
  </tbody>
</table>
            </div>
        )
    }
}
export default contact;