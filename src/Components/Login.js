import React, {useState} from "react";
import Hero from "../images/gym.jpg";
import LoginLogo from "../images/WJ-Hero.png";
import { Formik, Form, Field, ErrorMessage } from "formik";
import "../App.css";

const Login = props => {
  const [set, setter] = useState({
    credentials: {
      username: '',
      password: ''
    },
    isFetching: false
  }
  )
  
  const handleChange = e => {
    // @ts-ignore
    setter(prev =>({
        prev: {
          ...prev,
         [e.target.name]: e.target.value
        }
    }))

    


  }
  
 
  
  console.log(set)
 


  return (
    <div className="login-page">
      <img className="hero-img" src={Hero} alt="gym" />
      <div className="login-rt">
        <img src={LoginLogo} className="login-img" alt="logo" />
        <h1>Login Page</h1>

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
              // alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          {({ isSubmitting }) => (
            <Form className="form-field">
              <label htmlFor="email">Email: </label>
              <br />
              <Field
                className="field-input"
                id="email"
                type="email"
                name="email"
                onChange={handleChange}
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
                onChange={ handleChange }
              />
              <br />
              <br />
              <ErrorMessage name="password" component="div" />
              <button 
              
              type="submit" disabled={isSubmitting}>
                Sign In
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Login;
