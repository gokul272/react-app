import React from "react";
import './new.css'


const Login = (props) =>{

        const { 
            email,  
            setEmail ,  
            password ,
            setPassword, 
            handleLogin , 
             handleSignup , 
              hasAccount ,
              setHasAccount , 
              emailError ,
               passwordError
            }=props;




    return(
        <section className="login">
                    <div className="loginContainer">
                        <label>UserName</label>
                        <input type="text" 
                               outoFocus 
                               required 
                               value={email} onChange={(e) =>setEmail(e.target.value)}
                                 />
                                 <p className="errorMsg">{emailError}</p>
                        <label>Password</label>
                        <input type="password"
                               required
                               value={password}
                               onChange={(e)=> setPassword(e.target.value)}
                        />
                        <p className="errorMsg">{passwordError}</p>
                        <div className="btnContainer">
                            {hasAccount ?(
                                    <>
                                    
                                    </>
                            ) : (
                                <>
                                <button onClick={handleLogin}>Sign in</button>
                               
                                </>
                            ) }
                        </div>
                       
                    </div>
        </section>
    )
}
export default Login;