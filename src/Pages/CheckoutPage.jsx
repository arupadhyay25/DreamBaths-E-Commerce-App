import { Button, Center, Heading, Input, Select, Text } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Footer } from "../Components/Footer";
import { Navbar } from "../Components/Navbar";

export const CheckoutPage = () => {
  let Navigate = useNavigate();
  let handleaddress = () => {
    Navigate("/payment");
  };
  return (
    <>
      <Navbar />
      <br />
      <div
        style={{
          width: "80%",
          margin: "auto",
          backgroundColor: "whitesmoke",
          padding: "20px",
        }}
      >
        <Heading>Select a delivery address</Heading>
        <br />
        <Text fontSize="xs">
          Is the address you'd like to use displayed below? If so, click the
          corresponding "Deliver to this address" button. Or you can enter a new
          delivery address.
        </Text>
        <hr />
        <div style={{textAlign:"left"}}>
          <br />
          <Text fontWeight="normal">
            <Text fontSize="md" fontWeight="bold">
              loyal horse
            </Text>
            <Text fontSize="xs" fontWeight="normal">
              5th Floor,
              <br />
              SJR Primus, 20th Main Rd, next to Siddam Setty Complex, 5th Block,
              Koramangala, Bengaluru,
              <br />
              Karnataka, Pincode : 560034
              <br />
              India <br />
              Add delivery instructions
            </Text>
            <br />
            <Button
              ml={10}
              colorScheme="blue"
              onClick={handleaddress}
              size="sm"
              fontSize="sm"
            >
              Use this Address
            </Button>
          </Text>
          <br />
        </div>
        <hr />
        <div style={{ width: "60%", textAlign: "left", padding: "20px" }}>
          <Text fontSize="xl" fontWeight="bold">
            Add a new address
          </Text>
          <br />
          <div>
            <label style={{ fontSize: "14px", fontWeight: "bold" }}>
              Country/Region
            </label>
            <Select
              size="sm"
              placeholder="Select option"
              //   onChange={(e) => setkey(e.target.value)}
            >
              <option value="India">India</option>
              <option value="China">China</option>
              <option value="USA">USA</option>
              <option value="Russia">Russia</option>
              <option value="japan">japan</option>
              <option value="Dubai">Dubai</option>
            </Select>
            <br />
          </div>
          <div>
            <label style={{ fontSize: "14px", fontWeight: "bold" }}>
              Full name
            </label>
            <Input size="sm" />
            <br />
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>
              <label style={{ fontSize: "14px", fontWeight: "bold" }}>
                Mobile number
              </label>
              <Input size="sm" />
              <br />
            </div>
            <div>
              <label style={{ fontSize: "14px", fontWeight: "bold" }}>
                Pincode
              </label>
              <Input size="sm" />
              <br />
            </div>
          </div>
          <div>
            <label style={{ fontSize: "14px", fontWeight: "bold" }}>
              Full Address
            </label>
            <Input size="sm" />
            <br />
          </div>
          <div>
            <label style={{ fontSize: "14px", fontWeight: "bold" }}>
              Landmark
            </label>
            <Input size="sm" />
            <br />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: "20px",
            }}
          >
            <div style={{ width: "50%" }}>
              <label style={{ fontSize: "14px", fontWeight: "bold" }}>
                Town/City
              </label>
              <Input size="sm" />
            </div>
            <div style={{ width: "50%" }}>
              <label style={{ fontSize: "14px", fontWeight: "bold" }}>
                State
              </label>
              <Select
                size="sm"
                w="100%"
                placeholder="Select option"
                //   onChange={(e) => setkey(e.target.value)}
              >
                <option value="Maharashtra">Maharashtra</option>
                <option value="Delhi">Delhi</option>
                <option value="Mumbai">Mumbai</option>
                <option value="Chennai">Chennai</option>
                <option value="Karnataka">Karnataka</option>
                <option value="Bengaluru">Bengaluru</option>
              </Select>
            </div>
          </div>
          <div>
            <label style={{ fontSize: "14px", fontWeight: "bold" }}>
              Landmark
            </label>
            <Select
              size="sm"
              w="100%"
              placeholder="Select an Address Type "
              //   onChange={(e) => setkey(e.target.value)}
            >
              <option value="Home">Home (7 am —9 pm delivery)</option>
              <option value="Office">
                Office/Commercial (10 AM - 6 PM delivery)
              </option>
            </Select>
            <br />
          </div>
          <div>
            <Button
              ml={10}
              colorScheme="blue"
              onClick={handleaddress}
              size="sm"
              fontSize="sm"
            >
              Use this Address
            </Button>
          </div>
          <br />
        </div>
      </div>
      <Footer />
    </>
  );
};
