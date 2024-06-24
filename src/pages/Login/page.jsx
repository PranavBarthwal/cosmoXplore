"use client";

import React, { useState } from 'react';
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

// Define the form schema using zod
const formSchema = z.object({
  name: z.string().nonempty("*Name is required"),
  email: z.string().email("*Invalid email address"),
  password: z.string().min(6, "*Password should be at least 6 characters"),
});

// Contact form component
export default function SignInSignUp() {
  const [type, setType] = useState('signIn');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const signInForm = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: ""
    }
  });

  const signUpForm = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: ""
    }
  });

  // Handle form submission
  const handleSignInSubmit = (values) => {
    console.log("Sign In:", values);
    // Handle form submission (e.g., send data to the server)
    setIsSubmitted(true);
    signInForm.reset();
    setTimeout(() => setIsSubmitted(false), 3000); // Hide notification after 3 seconds
  };

  const handleSignUpSubmit = (values) => {
    console.log("Sign Up:", values);
    // Handle form submission (e.g., send data to the server)
    setIsSubmitted(true);
    signUpForm.reset();
    setTimeout(() => setIsSubmitted(false), 3000); // Hide notification after 3 seconds
  };

  const handleOnClick = (text) => {
    if (text !== type) {
      setType(text);
    }
  };

  const togglePasswordVisibility = () => {
    setIsVisible(!isVisible);
  };

  const containerClass = `container ${type === 'signUp' ? 'right-panel-active' : ''}`;

  return React.createElement('div', { className: 'App' },
    React.createElement('style', null, `
      @import url('https://fonts.googleapis.com/css?family=Montserrat:400,800');
      @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css');

      * {
        box-sizing: border-box;
      }

      body {
        background: black;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        font-family: 'Montserrat', sans-serif;
        height: 100vh;
        margin: -20px 0 50px;
      }


      h1 {
        font-weight: bold;
        margin: 0;
        color: darkturquoise;
        font-size: 26px;
      }

      h2 {
        text-align: center;
      }

      p {
        font-size: 16px;
        font-weight: 100;
        line-height: 20px;
        letter-spacing: 0.5px;
        margin: 20px 0 30px;
      }

      span {
        font-size: 14px;
        color: #333;
      }

      a {
        color: blue;
        font-size: 14px;
        text-decoration: none;
        margin: 15px 0;
      }

      button {
        border-radius: 20px;
        border: 2px solid yellow;
        background-color: darkturquoise;
        color: #ffffff;
        font-size: 12px;
        font-weight: bold;
        padding: 12px 45px;
        letter-spacing: 1px;
        text-transform: uppercase;
        transition: transform 80ms ease-in;
      }
      button:hover {
        transform: scale(1.1);
      }

      button:active {
        transform: scale(0.95);
      }

      button:focus {
        outline: none;
      }

      button.ghost {
        background-color: transparent;
        border-color: darkturquoise;
      }

      form {
        background-color: #ffffff;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        padding: 0 50px;
        height: 100%;
        text-align: center;
        border: solid 2px darkturquoise;
        
      }

      input {
        background-color: #eee;
        border: dotted 2px darkturquoise;
        padding: 12px 15px;
        margin: 8px 0;
        width: 100%;
        color: darkturquoise;
      }

      .container {
        background-color: #fff;
        border-radius: 10px;
        border: solid 2px darkturquoise;
        box-shadow: 10px 14px 28px rgba(0, 0, 0, 0.25), 10px 10px 10px rgba(0, 0, 0, 0.22);
        position: relative;
        overflow: hidden;
        height: 580px;
        width: 1250px;
        max-width: 100%;
        min-height: 480px;
        
      }

      .form-container {
        position: absolute;
        top: 0;
        height: 100%;
        transition: all 0.6s ease-in-out;
        border: solid 2px darkturquoise;
      }

      .eye-button {
        position: absolute;
        right: -19px;
        top: 9px;
        background: none;
        border: none;
        cursor: pointer;
        color: darkturquoise;
      }

      .sign-in-container {
        left: 0;
        width: 50%;
        z-index: 2;
        border: solid 2px darkturquoise;
      }

      .container.right-panel-active .sign-in-container {
        transform: translateX(100%);
      }

      .sign-up-container {
        left: 0;
        width: 50%;
        opacity: 0;
        z-index: 1;
      }

      .container.right-panel-active .sign-up-container {
        transform: translateX(100%);
        opacity: 1;
        z-index: 5;
        animation: show 0.6s;
      }

      @keyframes show {
        0% {
          opacity: 0;
          transform: translateX(200%);
        }
        100% {
          opacity: 1;
          transform: translateX(0);
        }
      }
      
      .overlay-container {
        position: absolute;
        top: 0;
        left: 50%;
        width: 50%;
        height: 100%;
        overflow: hidden;
        transition: transform 0.6s ease-in-out;
        z-index: 100;
      }

      .container.right-panel-active .overlay-container {
        transform: translateX(-100%);
      }

      .overlay {
        background: #ff416c;
        background: -webkit-linear-gradient(to right, #242533, #242533);
        background: linear-gradient(to right, #242533, #242533);
        background-repeat: no-repeat;
        background-size: cover;
        background-position: 0 0;
        color: #ffffff;
        position: relative;
        left: -100%;
        height: 100%;
        width: 200%;
        transform: translateX(0);
        transition: transform 0.6s ease-in-out;
      }

      .container.right-panel-active .overlay {
        transform: translateX(50%);
      }

      .overlay-panel {
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        padding: 0 40px;
        text-align: center;
        top: 0;
        height: 100%;
        width: 50%;
        transform: translateX(0);
        transition: transform 0.6s ease-in-out;
      }

      .overlay-left {
        transform: translateX(-20%);
      }

      .container.right-panel-active .overlay-left {
        transform: translateX(0);
      }

      .overlay-right {
        right: 0;
        transform: translateX(0);
      }

      .container.right-panel-active .overlay-right {
        transform: translateX(20%);
      }

      /* Styling for social icons */
      .social-container {
        display: flex;
        justify-content: center;
        margin-top: 20px;
      }

      .social-container .social {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 50px;
        width: 50px;
        border-radius: 50%;
        background-color: darkturquoise;
        margin: 0 10px;
        font-size: 20px;
        color: white;
        transition: transform 0.3s ease;
      }

      .social-container .social:hover {
        transform: scale(1.1);
      }
    `),
    React.createElement('div', { className: containerClass, id: 'container' },
      React.createElement('div', { className: 'form-container sign-up-container' },
        React.createElement('form', { onSubmit: signUpForm.handleSubmit(handleSignUpSubmit) },
          React.createElement('h1', null, 'Create Account'),
          React.createElement('div', { className: 'social-container' },
            React.createElement('a', { href: 'https://www.facebook.com', className: 'social' },
              React.createElement('i', { className: 'fab fa-facebook-f' })
            ),
            React.createElement('a', { href: 'https://www.google.com', className: 'social' },
              React.createElement('i', { className: 'fab fa-google-plus-g' })
            ),
            React.createElement('a', { href: 'https://www.linkedin.com', className: 'social' },
              React.createElement('i', { className: 'fab fa-linkedin-in' })
            ),
            React.createElement('a', { href: 'https://www.twitter.com', className: 'social' },
              React.createElement('i', { className: 'fab fa-twitter' })
            )
          ),
          React.createElement('br', null),
          React.createElement('span', null, 'or use your email for registration'),
          React.createElement('input', { type: 'text', placeholder: 'Name', ...signUpForm.register("name") }),
          signUpForm.formState.errors.name && (
            React.createElement('p', { className: 'text-darkturquoise' }, signUpForm.formState.errors.name?.message)
          ),
          React.createElement('input', { type: 'email', placeholder: 'Email', ...signUpForm.register("email") }),
          signUpForm.formState.errors.email && (
            React.createElement('p', { className: 'text-darkturquoise' }, signUpForm.formState.errors.email?.message)
          ),
          React.createElement('div', { style: { position: 'relative', width: '100%' } },
            React.createElement('input', { type: isVisible ? "text" : "password", placeholder: 'Password', ...signUpForm.register("password") }),
            React.createElement('button', { type: 'button', className: 'eye-button', onClick: togglePasswordVisibility },
              React.createElement(FontAwesomeIcon, { icon: isVisible ? faEyeSlash : faEye })
            )
          ),
          signUpForm.formState.errors.password && (
            React.createElement('p', { className: 'text-darkturquoise' }, signUpForm.formState.errors.password?.message)
          ),
          React.createElement('button', { type: 'submit' }, 'Sign Up')
        )
      ),
      React.createElement('div', { className: 'form-container sign-in-container' },
        React.createElement('form', { onSubmit: signInForm.handleSubmit(handleSignInSubmit) },
          React.createElement('h1', null, 'Access your Account'),
          React.createElement('div', { className: 'social-container' },
            React.createElement('a', { href: 'https://www.facebook.com', className: 'social' },
              React.createElement('i', { className: 'fab fa-facebook-f' })
            ),
            React.createElement('a', { href: 'https://www.google.com', className: 'social' },
              React.createElement('i', { className: 'fab fa-google-plus-g' })
            ),
            React.createElement('a', { href: 'https://www.linkedin.com', className: 'social' },
              React.createElement('i', { className: 'fab fa-linkedin-in' })
            ),
            React.createElement('a', { href: 'https://www.twitter.com', className: 'social' },
              React.createElement('i', { className: 'fab fa-twitter' })
            )
          ),
          React.createElement('br', null),
          React.createElement('span', null, 'or Proceed with Your Profile'),
          React.createElement('input', { type: 'email', placeholder: 'Email', ...signInForm.register("email") }),
          signInForm.formState.errors.email && (
            React.createElement('p', { className: 'text-darkturquoise' }, signInForm.formState.errors.email?.message)
          ),
          React.createElement('div', { style: { position: 'relative', width: '100%' } },
            React.createElement('input', { type: isVisible ? "text" : "password", placeholder: 'Password', ...signInForm.register("password") }),
            React.createElement('button', { type: 'button', className: 'eye-button', onClick: togglePasswordVisibility },
              React.createElement(FontAwesomeIcon, { icon: isVisible ? faEyeSlash : faEye })
            )
          ),
          signInForm.formState.errors.password && (
            React.createElement('p', { className: 'text-darkturquoise' }, signInForm.formState.errors.password?.message)
          ),
          React.createElement('span', null,
            React.createElement('a', { href: 'https://cosmoxplore.vercel.app/' }, 'Forgot your password?')
          ),
          React.createElement('br', null),
          React.createElement('button', { type: 'submit' }, 'Sign In')
        )
      ),
      React.createElement('div', { className: 'overlay-container' },
        React.createElement('div', { className: 'overlay' },
          React.createElement('div', { className: 'overlay-panel overlay-left' },
            React.createElement('h1', null, 'Welcome Back!'),
            React.createElement('p', null, 'To keep connected with us please login with your personal info'),
            React.createElement('button', { className: 'ghost', onClick: () => handleOnClick('signIn') }, 'Sign In')
          ),
          React.createElement('div', { className: 'overlay-panel overlay-right' },
            React.createElement('h1', null, 'Welcome aboard!'),
            React.createElement('p', null, 'Share a bit about yourself and let\'s embark on a journey together filled with discovery and excitement.'),
            React.createElement('button', { className: 'ghost', onClick: () => handleOnClick('signUp') }, 'Sign Up')
          )
        )
      )
    ),
    isSubmitted && (
      React.createElement('p', { className: 'mt-4 text-Blue-1000' }, 'Form submitted successfully!')
    )
  );
}
