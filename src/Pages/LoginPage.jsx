import { Heading } from "@chakra-ui/react";
import React from "react";
import { useRef } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./LoginPage.module.css";
// import users from "./users.json";

const users = [
    {
        id: 1,
        firstname: "hello",
        lastname: "world",
        email: "hello@Admin.com",
        password: "123",
        role: "admin",
    },
    {
        id: 2,
        firstname: "sachin",
        lastname: "tendulakar",
        email: "sachin@123.com",
        password: "123",
        role: "user",
    },
];

export const LoginPage = () => {
    const [show, setShow] = useState(true);

    return (
        <div className={styles.main}>
            <div className={styles.pagePart}>
                <div className={styles.ppPart1}>
                    <img src="/Image/people.jpeg" alt='peopleImg' width="100%" className={styles.loginImg} />
                </div>
                <div className={styles.ppPart2}>
            {show ? (
                <LoginComp onShow={() => setShow(false)} />
            ) : (
                <SignupComp onShow={() => setShow(true)} />
            )}
            </div>
            </div>
        </div>
    );
};
const LoginComp = ({ onShow }) => {
    const emailLRef = useRef();
    const passLRef = useRef();
    const navigate = useNavigate();
    const handleLogin = () => {
        let user1 = users.filter((el) => {
            return el.email === emailLRef.current.value;
        });
        if (user1.length > 0) {
            if (user1[0].password === passLRef.current.value) {
                alert("you are logined successfully");
                localStorage.setItem('user',JSON.stringify(user1[0]));
                if(user1[0].role==="user"){
                    navigate("/");
                }else{
                    navigate("/admin");
                }
            } else {
                alert("password is wrong!");
            }
        } else {
            alert("this user is not registred please signup.");
        }
    };
    return (
        <div>
            <Heading size='xl' className={styles.textColorGradient}>Welcome Back</Heading>
            
            <p className={styles.textp}>If you already have an account with us, sign in below</p>
            <br />
            <div className={styles.formlogin}>
                <p style={{fontSize:"14px",marginTop:"-15px",marginBottom:"-15px",marginLeft:"5px"}}>Email Address</p>
                <br/>
                <input
                    type="email"
                    className={styles.inp}
                    ref={emailLRef}
                />
                <br />
                <p style={{fontSize:"14px",marginTop:"-15px",marginBottom:"-15px",marginLeft:"5px"}}>Password</p>
                <br/>
                <input
                    type="password"
                    className={styles.inp}
                    
                    ref={passLRef}
                />
                <br />
                <p className={styles.colorBlue}>Forgot Password ?</p>
                <button className={styles.sub} onClick={handleLogin}>
                    Login
                </button>
                {/* <input type="submit" value="Login" className={styles.sub} /> */}
                <div className={styles.linehr}></div>
                <div className={styles.forgotsignFlex}>
                    
                    <p className={styles.pointerhover}>
                        Don't have an account?{" "}
                        <span
                            className={styles.colorBlue}
                            onClick={() => onShow()}
                        >
                            SignUp
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
};

const SignupComp = ({ onShow }) => {
    const fNameRef = useRef();
    const lNameRef = useRef();
    const sEmailRef = useRef();
    const sEmailConfRef = useRef();
    const SPassRef = useRef();
    const SPassConfRef = useRef();
    const handleSignup = () => {
        // console.log(fNameRef.current.value);
        // console.log(lNameRef.current.value);
        // console.log(sEmailRef.current.value);
        // console.log(sEmailConfRef.current.value);
        // console.log(SPassRef.current.value);
        // console.log(SPassConfRef.current.value);
        if (sEmailRef.current.value !== sEmailConfRef.current.value) {
            alert("email not matched please check details");
        } else if (SPassRef.current.value !== SPassConfRef.current.value) {
            alert("password not matched please check details");
        } else {
            let user1 = users.filter((el) => {
                return el.email === sEmailRef.current.value;
            });
            if (user1.length === 0) {
            } else {
                alert("email already registred. go to login page.");
            }
        }
    };
    return (
        <div>
            <Heading size='lg' className={styles.textColorGradient}>Sign Up</Heading>
            
            <p className={styles.textp}>Lets get you set Up</p>
            <br />
            <div className={styles.formlogin}>
            <p style={{fontSize:"14px",marginLeft:"5px"}}>First Name</p>
                <input
                    type="text"
                    className={styles.sinp}
                    ref={fNameRef}
                    required
                />
                <p style={{fontSize:"14px",marginLeft:"5px"}}>Last Name</p>
                <input
                    type="text"
                    className={styles.sinp}
                    ref={lNameRef}
                    required
                />
                <p style={{fontSize:"14px",marginLeft:"5px"}}>Email Address</p>
                <input
                    type="email"
                    className={styles.sinp}
                    ref={sEmailRef}
                    required
                />
                <p style={{fontSize:"14px",marginLeft:"5px"}}>Confirm Email Address</p>
                <input
                    type="email"
                    className={styles.sinp}
                    ref={sEmailConfRef}
                    required
                />
                <p style={{fontSize:"14px",marginLeft:"5px"}}>Password</p>
                <input
                    type="password"
                    className={styles.sinp}
                    ref={SPassRef}
                    required
                />
                <p style={{fontSize:"14px",marginLeft:"5px"}}>Confirm Password</p>
                <input
                    type="password"
                    className={styles.sinp}
                    ref={SPassConfRef}
                    required
                />
                <button className={styles.ssub} onClick={handleSignup}>
                    Sign Up
                </button>
                {/* <input type="submit" value="Sign Up" className={styles.sub} /> */}
                <div className={styles.linehr}></div>

                <p className={styles.pointerhover} onClick={() => onShow()}>
                    Already Have an account? go to{" "}
                    <span className={styles.colorBlue}>login page.</span>
                </p>
            </div>
        </div>
    );
};
