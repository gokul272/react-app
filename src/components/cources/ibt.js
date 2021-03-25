import React, { Component } from 'react'
import './cources.css';

export default class ibt extends Component {
    render() {
        return (
            <div>
                <div className="layout">

                <h3 className="alileft">Biotechnology Department</h3>
                <div className="line"> </div>
                <p>The Department of Biotechnology is one of the growing departments in the college. The Department has highly qualified and experienced faculty and excellent research facilities with modern infrastructure. The department is engaged in teaching and research in the areas of Biotechnology. The laboratories are well equipped and run round the clock. The Biotechnology course is an Engineering degree focusing not only on the technological, computational and the mathematical aspects of the field, but also industrial process involved. It is a bridge between biology and engineering.</p>
                <h3 style={{marginLeft:'120px'}}>Lab Facilities</h3>
                <div className="line"> </div>
                <ol>
							  <li>Analytical Techniques in Biotechnology Lab</li>
							  <li>Bioorganic Chemistry Lab</li>
							  <li>Microbiology Lab</li>
							  <li>Molecular Biology Lab</li>
							  <li>Genetic Engineering Lab</li>
							  <li>Bioprocess Lab - I</li>
							  <li>Bioprocess Lab -II</li>
							  <li>Instrumental Methods of Analysis Lab</li>
							  <li>Chemical Engineering Lab</li>
							  <li>Immunology Lab</li>
							  <li>Cell Biology Lab</li>
							  <li>Downstream Processing Lab</li>
							  <li>Biochemistry Lab</li>
			  </ol>
              <h3 style={{marginLeft:'120px'}}>Library Facilities</h3>
                <div className="line"> </div>
                <p>The College Central Library has fully automated library with 3669 Volumes of book with 2059 titles. Apart from text books, the library has National and International journals and some popular dailies. Moreover, online book reservation facility through intranet is also available.</p>

                </div>          
            </div>
        )
    }
}
