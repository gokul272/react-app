import React from 'react';
import './new.css'
import image from "./userpic.png"



const Staff = ({handleLogout}) =>{

    return(
        <section className="hero">
            <div className="usersidebar">
            <img width="30%"  className="userpic" src={image}/>
                <ul className="userlist">
                    <li> <i class="fas fa-list-ul"></i>Students Details</li>
                    <li><i class="fas fa-user-circle"></i>Account</li>
                    <li>
                    <button  className="bluebutton" onClick={handleLogout}>
                    LogOut<i  style={{marginLeft:'5px'}} class="fas fa-sign-out-alt"></i>
                </button>
                    </li>
                </ul>
            </div>
            <h1 className="intro"> welcome</h1>
        </section>
    )
};
export default Staff;