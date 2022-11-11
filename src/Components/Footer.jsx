import React from "react";
import styles from "./Footer.module.css";
import { FaFacebook, FaPinterest, FaInfo } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { IoLogoInstagram } from "react-icons/io";
import { FaTiktok } from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";
import {
  Menu,
  Button,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons';
export const Footer = () => {
  const column_1 = [
    "Help & FAQs",
    "Shipping",
    "Returns & Exchanges",
    "Order Tracking",
    "Corporate Sales & Gifts",
    "Contact Us",
  ];
  const column_2 = [
    "Sign In or Sign Up",
    "Order Tracking",
    "My Auto Refresh",
    "My Love-It List",
  ];
  const column_3 = [
    "About Us",
    "Careers",
    "Gift Cards",
    "Shop by Fragrance",
    "Product Ingredients",
    "Get Inspired",
    "Diversity, Equity & Inclusion",
  ];
  const column_4 = ["Store Locator", "Global Locations"];
  const bhai = [
    "Terms Of Use",
    "Privacy Policy",
    "Security Bug Report",
    "States Privacy Rights Notice (Certain States)",
    "Do Not Sell or Share My Personal Information (Certain States)",
    "Transparency in Supply Chains",
  ];
  const bhai2 = [
    "Targeted Ad Preferences (Certain States)",
    " Limit the Use of My Sensitive Personal Information (California)",
  ];
  const FooterColumn = (props) => {
    const { head, arr } = props;
    return (
      <div className={styles.Footer_Two_column}>
        <div className={styles.Footer_Two_columnHead}>{head}</div>
        {arr.map((el,i) => (
          <div key={i} className={styles.Footer_Two_columnChild}>{el}</div>
        ))}
      </div>
    );
  };
  return (
    <div className={styles.Footer}>
      <hr />
      <div className={styles.Footer_Main}>
        <div className={styles.Footer_One}>
          <div className={styles.Footer_One_Head}>
            GET EMAIL OFFERS & THE LATEST NEWS FROM BATH & BODY WORKS!
          </div>
          <div>
            <div className={styles.Footer_One_Child}>Enter Email</div>
            <div className={styles.Footer_One_Child_box}>
              <div>
                <input type="text" />
              </div>
              <div>
                <FaInfo className={styles.Footer_info} />
              </div>
            </div>
          </div>
          <div>
            <div className={styles.Footer_One_Child}>Confirm Email</div>
            <div className={styles.Footer_One_Child_box2}>
              <div>
                <input type="text" />
              </div>
              <div>
              <button className={styles.Footer_One_Child_submit}>SUBMIT</button>
              </div>
            </div>
            
          </div>
          <div>
            <div className={styles.Footer_One_Icons_Main}>Get Connected</div>
            <div className={styles.Footer_One_Icons}>
              <FaFacebook className={styles.Facebook} />
              <AiFillTwitterCircle className={styles.Twitter} />
              <IoLogoInstagram className={styles.Instagram} />
              <FaTiktok className={styles.TikTok} />
              <TfiYoutube className={styles.Youtube} />
              <FaPinterest className={styles.pin} />
            </div>
          </div>
        </div>
        <div className={styles.Footer_Two}>
          <FooterColumn head="CUSTOMER CARE" arr={column_1} />
          <FooterColumn head="MY ACCOUNT" arr={column_2} />
          <FooterColumn head="DISCOVER" arr={column_3} />
          <FooterColumn head="FIND US" arr={column_4} />
        </div>
      </div>
      <div className={styles.Footer_media_columns}>
        <Menu>
  <MenuButton as={Button} rightIcon={<ChevronDownIcon />}
    px={20}
    py={5}
    colorScheme='#F2F2F2'
    transition='all 0.2s'
    borderRadius='lg'
    borderWidth='1px'
    _hover={{ bg: 'gray.400' }}
    _expanded={{ bg: 'blue.400' }}
    _focus={{ boxShadow: 'outline' }}
  >
   LET US HELP !
  </MenuButton>
  < MenuList>
  <MenuItem>CUSTOMER CARE</MenuItem>
  <MenuItem>MY ACCOUNT</MenuItem>
  <MenuItem>DISCOVER</MenuItem>
  <MenuItem>FIND US</MenuItem>
  </ MenuList>
  </Menu>
        </div>
      <div className={styles.Footer_Main2}>
        <div>
          <div className={styles.Footer_Main21}>
            {bhai.map((el,i) => (
              <div key={i} className={styles.Footer_Main2_child}>{el}</div>
            ))}
          </div>
        </div>
        <div>
          <div className={styles.Footer_Main22}>
            {bhai2.map((el,i) => (
              <div key={i} className={styles.Footer_Main2_child}>{el}</div>
            ))}
          </div>
        </div>
        <div className={styles.Footer_Main3}>
          © 2022 Bath & Body Works Direct, Inc. All Rights Reserved
        </div>
      </div>
    </div>
  );
};
