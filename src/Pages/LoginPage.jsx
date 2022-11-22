import { Box} from "@chakra-ui/react";
import { NavbarLogin } from "../Components/NavbarLogin";
import Profile from "../Components/Profile";
import ProfileForm from "../Components/ProfileForm";
import React from "react";
import styles from "../Components/Footer.module.css";

export const LoginPage = () => {
  const bhai = [
    "Terms Of Use",
    "Privacy Policy",
    "Security Bug Report",
    "States Privacy Rights Notice (Certain States)",
    "Do Not Sell or Share My Personal Information (Certain States)",
    "Transparency in Supply Chains",
  ];
  return (
    <div style={{ zoom: 0.85,backgroundColor: "#EAF8FF"  }}>
      <NavbarLogin />
      <Box
        display={{ md: "flex" }}
        pt={50}
        pr={150}
        pl={150}
        bg="blue.50"
      >
        <Box w="50%">
          <Profile />
        </Box>

        <Box w="50%">
          <ProfileForm />
        </Box>
      </Box>
      <Box m={0} w="100%" p="0px">
        <div
          style={{ backgroundColor: "#EAF8FF" }}
          className={styles.Footer_Main2}
        >
          <div>
            <div className={styles.Footer_Main21}>
              {bhai.map((el, i) => (
                <div key={i} className={styles.Footer_Main2_child}>
                  {el}
                </div>
              ))}
            </div>
          </div>

          <div className={styles.Footer_Main3}>
            © 2022 Bath & Body Works Direct, Inc. All Rights Reserved
          </div>
        </div>
      </Box>
    </div>
  );
};
