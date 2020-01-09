import React, { useState } from "react";
import Navigation from "./Navigation";
import { StyledSignUp, StyledSignUpTitle } from "../styles/StyledSignUp";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { axiosWithAuth } from "./utils/axiosWithAuth";

const SignUp = props => {
  const [emailAddress, setEmail] = useState({
    email: ""
  });

  const [userPassword, setPassword] = useState({
    password: ""
  });

  

  const emailHandleChange = event => {
    
    // @ts-ignore
    setEmail({
      email: event.target.value
    });
  };

  const passwordHandleChange = event => {
   
    // @ts-ignore
    setPassword({
      password: event.target.value
    });
  };

  const credentials = {
    username: emailAddress.email,
    password: userPassword.password
  }

  const signUp = e => {
    e.preventDefault();
    setEmail(prev => ({
      ...prev,
    }));
    axiosWithAuth()
      .post("/api/auth/register", credentials)
      .then(res => {
        setError(error)
      })
      .catch(err => {
        
        setError(err)
      })
   
  };




 const signUpButton = ()=> {
    
  
    if(emailAddress.email !== '' && userPassword.password !=='' ){

      setTimeout(() => {
         props.history.push('/login')
      }, 1000);
       
      }
    
  
 }

  const [ error, setError ] = useState('')
  

  return (
    <div>

      <Navigation />
      <StyledSignUpTitle>
      <h1>Sign Up</h1>
      </StyledSignUpTitle>

      <Formik
        initialValues={{ email: "", password: "" }}
        validate={values => {
          const errors = {};
          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }
          // if (!values.password) {
          //   errors.password = "Required";
          // }
          // errors.password = "Invalid password";
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <StyledSignUp>
          <Form className="form-field" onSubmit={signUp}>
            <label htmlFor="email">Email: </label>
            <br />
            <Field
              className="field-input"
              id="email"
              type="email"
              name="email"
              value={emailAddress.email}
              onChange={emailHandleChange}
            />
            <br />
            <ErrorMessage name="email" component="div" />
            <label htmlFor="password">Password: </label>
            <br />
            <Field
              className="field-input"
              id="password"
              type="password"
              name="password"
              value={userPassword.password}
              onChange={passwordHandleChange}
            />
            <br />
            <ErrorMessage name="password" component="div" />

            <label htmlFor="password">Confirm Password: </label>
            <br />
            <Field
              className="field-input"
              id="confirmPassword"
              type="password"
              name="password"
             
              
            />
            <br />
            <ErrorMessage name="password" component="div" />

            

           
             <button type="submit" disabled={isSubmitting} onClick={signUpButton}>
              Sign UP!

            </button>
          </Form>
          </StyledSignUp>
        )}
      </Formik>
    </div>
  );
};

export default SignUp;
