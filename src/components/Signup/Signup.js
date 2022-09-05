import React from "react";
import Input from "../UI/Input/Input";
import Navbar from "../UI/Header/Header";
import "./Signup.css";

const SignUp = props => {
    return (
        <div>
            <Navbar />
            <div className="SignupForm">
                <h3><b>Sign up and start learning</b></h3>
                <form>
                    <Input
                        className="FormInput"
                        id="outlined-basic"
                        label="Enter Full Name"
                        variant="outlined"
                    />
                    <Input
                        className="FormInput"
                        id="outlined-basic"
                        label="Enter Email"
                        variant="outlined"
                    />
                    <Input
                        className="FormInput"
                        id="outlined-basic"
                        label="Enter Password"
                        variant="outlined"
                    />
                </form>
            </div>
        </div>
    );
};


export default SignUp;