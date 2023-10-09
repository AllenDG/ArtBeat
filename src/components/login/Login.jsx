import React from "react";
import '../login/Login.css'
import Form from "./form/form";

export default function SignIn (){


    return(
        <>
        <div className="login-page">
        <div className="login-header">
        <h1>Sign In</h1>
        <p>for a wonderful experience</p>
        </div>

        <Form/>
        </div>
        </>
    )
}