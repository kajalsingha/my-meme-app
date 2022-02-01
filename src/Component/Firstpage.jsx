import React from "react";

import { Form, Button, Card, Alert } from "react-bootstrap"
import { Container } from "react-bootstrap";


const Firstpage =(props) => {

const {email,setEmail, password,setPassword,handleLogin,handleSignup,hasAccount,setHasAccount,emailError,passwordError}= props;


    return(
<section>


     <Container
    className="d-flex align-items-center justify-content-center"
    style={{ minHeight: "100vh" }}
   >
<div >
<div >
    {hasAccount ? (
        <>    
        <div className="Header">Login Page </div>
        </>
          ) : (
        <>        
        <div className="Header">Registration Page </div>
        
         </>
         )
    }
     </div>


 <Card> <Card.Body>
       
         
           <Form>
           
         <h6 className="text2"> Email :</h6> 
       < input className="captions" type= "text" placeholder='email' autoFocus  value={email}
       onChange={(e)=>setEmail
           (e.target.value) } required />
           <p className="errorMsg">{emailError}</p>
          <h6 className="text2">   Password :</h6> 
        <input className="captions" type = "password" placeholder='password' autoFocus value={password} 
onChange={(e)=>setPassword
    (e.target.value) } required />
    <p className="errorMsg">{passwordError}</p>
   


    </Form>
    <div className="btnContainer" >
    {hasAccount ? (
        <>    
        <button  className='button' onClick={handleLogin}>Login</button>
        </>
          ) : (
        <>        
        <button  className='button' onClick={handleSignup} >Sign up</button>
      
         </>
         )
    }
     </div>
     </Card.Body></Card>
   
     <div>
     {hasAccount ? (
        <>    
        <p className="text" >Don't have an account? <span className="span" onClick={()=>setHasAccount(!hasAccount)}>Sign up</span></p>
        </>
          ) : (
        <>        
 
        <p className="text">Already have an account ?  <span className="span" onClick={() =>setHasAccount(!hasAccount) } >  Log in</span></p>
        
         </>
         )
    }
     </div>
    
      </div>
      </Container>
</section>
    )
    
}

export default Firstpage;