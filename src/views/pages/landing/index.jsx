import React, { useState, useContext } from "react";
import { UserContextToken } from "../../components/context/showContext";
import SignIn from "../akun/signin";
import SignUp from "../akun/singup";
import "./landing.css";


function Landing() {

    const [state] = useContext(UserContextToken);

    console.log(state);

    const [isRegister, setIsRegister] = useState(false);

    const switchLogin = () => {
        setIsRegister(false);
    };

    const switchRegister = () => {
        setIsRegister(true);
    };
    return (
        <div className="container-landing">
            <div /* className="content-landing" */>
                <div className="mx-5 col-8">
                    <p>
                        Sign-up now and subscribe to enjoy all the cool and latest books -
                        The best book rental service provider in Indonesia
                    </p>
                    <div className="mx-5 mt-5">
                        <button onClick={switchLogin} className="btn  bg-danger btn-login px-5">
                            Login
                        </button>
                        <button
                            onClick={switchRegister}
                            className="btn btn-register px-5"
                        >
                            Register
                        </button>
                    </div>
                </div>
            </div>
            <div className=" mx-5 col-3">{isRegister ? <SignUp /> : <SignIn />}
            </div>
        </div>
    );
}

export default Landing;
