import {
  Alert,
  AlertIcon,
  Button,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Select,
  Text,
} from "@chakra-ui/react";
import { apiproduct, apiurl } from "./Api";
import { Singleproduct } from "./Singleproduct";
import React, { useEffect, useState } from "react";
import axios from "axios";

let initState = {
  title: "[title here]",
  image:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkd_U1uTQ_vUOlaHVGdpPLYZCq_uQgyWrsuA&usqp=CAU",
  price: 0,
  titledesp: "[sub-categort here]",
  cartquantity: 0,
  category: "[category here]",
  reviewCount: 0,
  rating: 4,
};
export const EditPage = () => {
  let [patchdata, setpatchdata] = useState({
    mbh: "",
  });
  let [id, setid] = useState(1);
  let [key, setkey] = useState("");
  let [value, setvalue] = useState("");
  let [flag, setflag] = useState(false);
  let [showdata, setshowdata] = useState(initState);

  let getproductbyid = () => {
    axios.get(`${apiurl}/products/${id}`).then((r) => setshowdata(r.data));
  };

  let addpatch = () => {
    axios.patch(`${apiurl}/products/${id}`, patchdata);
    setkey("");
    setvalue("");
    setflag(true);
    console.log(patchdata);
  };

  useEffect(() => {
    let newval = value;
    if (key === "price" || key === "rating") {
      newval = Number(value);
    }
    setpatchdata({
      [key]: newval,
    });
    getproductbyid();
  }, [key, value]);
  return (
    <div>
      {flag ? (
        <div>
          <Alert
            borderRadius="10px"
            mt={-2}
            mb={4}
            status="success"
            variant="solid"
          >
            <AlertIcon />
            Product added and uploaded to the server ! ! !
          </Alert>
        </div>
      ) : (
        false
      )}
      <div>
        <div style={{ display: "flex", padding: "0px 0px" }}>
          <div
            style={{
              width: "50%",
              borderRadius: "10px",
              padding: "10px 50px",
            }}
          >
            <Heading textAlign="center">Edit Product</Heading>
            <br />
            <div>
              <Select
                placeholder="Select option"
                onChange={(e) => setkey(e.target.value)}
              >
                <option value="title">Title</option>
                <option value="image">Change Product Image</option>
                <option value="category">Category</option>
                <option value="titledesp">Sub-Category</option>
                <option value="price">Product Price</option>
                <option value="rating">Product Rating</option>
              </Select>
              <Text mb={2}>Input</Text>
              <Input
                variant="outline"
                outlineColor="blue"
                placeholder="Product Name"
                type="text"
                value={value}
                onChange={(e) => setvalue(e.target.value)}
              />
              <br />
              <br />
            </div>
            <div>
              <Button colorScheme="blue" onClick={addpatch}>
                Submit
              </Button>
              <br />
              <br />
            </div>
          </div>
          <div
            style={{
              width: "50%",
              height: "auto",
              padding: "10px 50px",
              borderRadius: "10px",
              marginLeft: "2px",
            }}
          >
            <Heading mb={12} textAlign="center">
              Product to Edited
            </Heading>
            <div style={{ textAlign: "left" }}>
              <Text mt={-7} mb={2}>
                Product ID
              </Text>
              <InputGroup size="md">
                <Input
                  pr="4.5rem"
                  outlineColor="blue"
                  type="text"
                  placeholder=" enter Id"
                  value={id}
                  onChange={(e) => setid(e.target.value)}
                />
                <InputRightElement width="4.5rem">
                  <Button h="1.75rem" size="sm" onClick={getproductbyid}>
                    Get
                  </Button>
                </InputRightElement>
              </InputGroup>
              <br />
            </div>
            <Singleproduct
              title={showdata.title}
              titledesp={showdata.titledesp}
              category={showdata.category}
              price={showdata.price}
              image={showdata.image}
              rating={showdata.rating}
              reviewCount={showdata.reviewCount}
              cartquantity={showdata.cartquantity}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
