import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
  Heading,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { useRef } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./LoginPage.module.css";

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
  {
    id: 3,
    firstname: "user",
    lastname: "1",
    email: "masai@user.com",
    password: "123",
    role: "user",
  },
  {
    id: 4,
    firstname: "admin",
    lastname: "1",
    email: "masai@admin.com",
    password: "123",
    role: "admin",
  },
];

export const LoginPage = () => {
  const [show, setShow] = useState(true);

  return (
    <div className={styles.loginpage}>
      <div className={styles.main}>
        <div className={styles.pagePart}>
          <div className={styles.ppPart1}>
            <img
              src="/Image/people.jpeg"
              alt="peopleImg"
              width="100%"
              className={styles.loginImg}
            />
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
    </div>
  );
};
const LoginComp = ({ onShow }) => {
  const emailLRef = useRef();
  const passLRef = useRef();
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();

  const handleLogin = () => {
    let user1 = users.filter((el) => {
      return el.email === emailLRef.current.value;
    });
    if (user1.length > 0) {
      if (user1[0].password === passLRef.current.value) {
        //alert
        localStorage.setItem("user", JSON.stringify(user1[0]));
        if (user1[0].role === "user") {
          navigate("/");
        } else {
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
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          zoom: "0.8",
        }}
      >
        <Heading size="2xl" mb={5} className={styles.textColorGradient}>
          Welcome Back
        </Heading>

        <p className={styles.textp}>
          If you already have an account with us, sign in below
        </p>
        <br />
        <div className={styles.formlogin}>
          <div>
            <p style={{ fontSize: "14px" }}>Email Address</p>

            <input type="email" className={styles.inp} ref={emailLRef} />
            <br />
            <br />
            <p style={{ fontSize: "14px" }}>Password</p>

            <input type="password" className={styles.inp} ref={passLRef} />
          </div>
          <p className={styles.colorBlue}>Forgot Password ?</p>
          <>
            <Button className={styles.sub} colorScheme="blue" onClick={onOpen}>
              Login
            </Button>

            <AlertDialog
              isOpen={isOpen}
              leastDestructiveRef={cancelRef}
              onClose={onClose}
            >
              <AlertDialogOverlay>
                <AlertDialogContent>
                  <AlertDialogHeader fontSize="lg" fontWeight="bold">
                    Dear Customer
                  </AlertDialogHeader>

                  <AlertDialogBody>
                    You have Logged In Successfully !!
                  </AlertDialogBody>

                  <AlertDialogFooter>
                    <Button colorScheme="blue" onClick={handleLogin} ml={3}>
                      Ok
                    </Button>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialogOverlay>
            </AlertDialog>
          </>
          {/* <input type="submit" value="Login" className={styles.sub} /> */}
          <div className={styles.linehr}></div>
          <div className={styles.forgotsignFlex}>
            <p className={styles.pointerhover}>
              Don't have an account?{" "}
              <span className={styles.colorBlue} onClick={() => onShow()}>
                SignUp
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
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
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Heading size="lg" className={styles.textColorGradient}>
        Sign Up
      </Heading>
      <br />
      <p className={styles.textp}>Lets get you set Up</p>
      <br />
      <div className={styles.formlogin}>
        <div>
          <p style={{ fontSize: "14px", marginLeft: "5px" }}>First Name</p>
          <input type="text" className={styles.sinp} ref={fNameRef} required />

          <p style={{ fontSize: "14px", marginLeft: "5px" }}>Last Name</p>
          <input type="text" className={styles.sinp} ref={lNameRef} required />
          <p style={{ fontSize: "14px", marginLeft: "5px" }}>Email Address</p>
          <input
            type="email"
            className={styles.sinp}
            ref={sEmailConfRef}
            required
          />
          <p style={{ fontSize: "14px", marginLeft: "5px" }}>Password</p>
          <input
            type="password"
            className={styles.sinp}
            ref={SPassRef}
            required
          />
          <p style={{ fontSize: "14px", marginLeft: "5px" }}>
            Confirm Password
          </p>
          <input
            type="password"
            className={styles.sinp}
            ref={SPassConfRef}
            required
          />
        </div>
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
