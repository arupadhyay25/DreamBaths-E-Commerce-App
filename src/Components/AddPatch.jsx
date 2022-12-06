import {
  Alert,
  AlertIcon,
  Button,
  Heading,
  Input,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Singleproduct } from "./Singleproduct";
let api="https://dreambaths.onrender.com/products"


let initState = {
  title: "Classic Flannel",
  image:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkd_U1uTQ_vUOlaHVGdpPLYZCq_uQgyWrsuA&usqp=CAU",
  price: 0,
  titledesp: "",
  cartquantity: 0,
  category: "bodycare",
  reviewCount: 0,
  rating: 4,
};
export const AddPatch = () => {
  let [patchdata, setpatchdata] = useState(initState);
  let [pname, setpname] = useState("");
  let [pimg, setpimg] = useState("");
  let [pcat, setpcat] = useState("");
  let [psubcat, setpsubcat] = useState("");
  let [pprice, setprice] = useState(0);
  let [flag, setflag] = useState(false);

  let addpatch = () => {
    setpatchdata({
      title: pname,
      image: pimg,
      price: Number(pprice),
      titledesp: psubcat,
      cartquantity: 0,
      category: pcat,
      reviewCount: 264,
      rating: 4,
    });
    axios.post(`${api}`, patchdata);
    setpcat("");
    setpsubcat("");
    setpcat("");
    setprice("");
    setpimg("");
    setflag(true);
  };

  useEffect(() => {
    setpatchdata({
      title: pname.length > 0 ? pname : "[title here]",
      image: pimg || initState.image,
      price: Number(pprice) || initState.price,
      titledesp: psubcat || "[sub-categort here]",
      cartquantity: 0,
      category: pcat || "[category here]",
      reviewCount: 0,
      rating: 4,
    });
  }, [pname, pprice, pcat, psubcat, pimg]);
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
            <Heading textAlign="center">Add New Product</Heading>
            <br />
            <div style={{ textAlign: "left" }}>
              <Text mb={2}>Product Name</Text>
              <Input
                variant="outline"
                outlineColor="blue"
                placeholder="Product Name"
                type="text"
                value={pname}
                onChange={(e) => setpname(e.target.value)}
              />
              <br />
              <br />
            </div>
            <div  style={{ textAlign: "left" }}>
              <Text mb={2}>Product Category</Text>
              <Input
                variant="outline"
                outlineColor="blue"
                placeholder="Product Category"
                type="text"
                value={pcat}
                onChange={(e) => setpcat(e.target.value)}
              />
              <br />
              <br />
            </div>
            <div style={{ textAlign: "left" }}>
              <Text mb={2}>Product SubCategory</Text>
              <Input
                variant="outline"
                outlineColor="blue"
                placeholder="Product SubCategory"
                type="text"
                value={psubcat}
                onChange={(e) => setpsubcat(e.target.value)}
              />
              <br />
              <br />
            </div>
            <div style={{ textAlign: "left" }}>
              <Text mb={2}>Product ImageURL</Text>
              <Input
                variant="outline"
                outlineColor="blue"
                placeholder="Product ImageURL"
                type="text"
                value={pimg}
                onChange={(e) => setpimg(e.target.value)}
              />
              <br />
              <br />
            </div>
            <div style={{ textAlign: "left" }}>
              <Text mb={2}>Product Price</Text>
              <Input
                variant="outline"
                outlineColor="blue"
                placeholder="Product Price in rupees"
                type="number"
                value={pprice}
                onChange={(e) => setprice(e.target.value)}
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
              zoom: "0.95",
            }}
          >
            <Heading mb={12} textAlign="center">
              Product Preview
            </Heading>
            <Singleproduct
              title={patchdata.title}
              titledesp={patchdata.titledesp}
              category={patchdata.category}
              price={patchdata.price}
              image={patchdata.image}
              rating={patchdata.rating}
              reviewCount={patchdata.reviewCount}
              cartquantity={patchdata.cartquantity}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
