import React, {useState} from "react";
import {axiosWithAuth} from './utils/axiosWithAuth';


const SignUp = (props) => {

  const [emailAddress, setEmail] = useState({Email: ''})
  const [userPassword, setPassword] = useState({password: ''})

  const login = e =>
  {
    e.preventDefault();
    setEmail( prev => ( {
      ...prev,
      isFetching: true
    } ) );

    const credentials = {
        email: emailAddress.Email,
        password: userPassword.password
    }
   
    axiosWithAuth()
      .post( '/api/auth/register', credentials )
    .then( res =>
      {
        console.log( res );
        localStorage.setItem( 'token', res.data.payload );
        props.history.push( '/protected' );
      } )
      .catch( err => console.log( err ) );
  }


  return (
    <div>
      <h1>Sign Up</h1>
    </div>
  )
}

export default SignUp;