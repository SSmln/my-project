import React, {useState} from 'react'
import SignupScrren from "./SignupScrren"



function LoginScreen() {
  const [signIn, setSiginIn] = useState(false); 
  return (
    <div className='loginScreen'>
      <div className="loginScreen__backgound">
        <img 
        className='loginScreen__logo'
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1280px-Netflix_2015_logo.svg.png" 
        alt=""/>  
        
        <button onClick={() => setSiginIn(true)}></button>

        <button className='loginScreen__button'>Sign in</button>
        <div className='loginScreen__gradient' />
        
      </div>
   
      <div className="loginScreen__body"> 
        {signIn ? (
          <SignupScrren />
        ) : (<>
          <h1>Unlimited films, TV programmes and more.</h1>
          <h2>Watch anywhere. Cancel at any time.</h2>
          <h3>Ready to watch ? Enter your email to create or restart your membership
          </h3>

          <div className="LoginScreen__input">
            <form>
              <input type="email"
              placeholder='Email Address' />
              <button 
              onClick={()=> setSiginIn(true)}
              className='loginScrren__getStarted'>
                GET STARTED
              </button>
            </form>
          </div>
        </>
        )}
          
      </div>
    </div>



  )
}

export default LoginScreen;
