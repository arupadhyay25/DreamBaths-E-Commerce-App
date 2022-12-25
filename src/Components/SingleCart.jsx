import { AddIcon, DeleteIcon, MinusIcon } from "@chakra-ui/icons";
import { Button } from "@chakra-ui/react";
import axios from "axios";
import { async } from "q";
import React, { useState } from "react";
import { useEffect } from "react";
import { apiproduct, apiurl } from "./Api";

export const SingleCart = ({ arr, state, setstate }) => {
  let [page, setpage] = useState(arr.quantity);
  const [image,setImage] =useState("");
  const [title,setTitle] =useState("");
  const [category,setCategory] =useState("");
  const [totalp,setTotalP]=useState(arr.quantity*arr.price);
  let AddQuantocart = () => {
    
    axios({
      method:'post',
      url:`${apiurl}/carts/cart?q=add`,
      data:{
        itemId:arr.itemId,
        quantity:1
      },
      headers:{
        "authorization":`Bearer ${localStorage.getItem('token')}`
      }
    }).then((r)=>{
      setpage(page + 1);
      setTotalP((p)=>p+arr.price);
    }).catch((e)=>{
      alert('something went wrong. please try again.')
    })
  };
  let SubQuantocart = () => {
    
    axios({
      method:'post',
      url:`${apiurl}/carts/cart?q=sub`,
      data:{
        itemId:arr.itemId,
        quantity:1
      },
      headers:{
        "authorization":`Bearer ${localStorage.getItem('token')}`
      }
    }).then((r)=>{
      setpage(page - 1);
      setTotalP((p)=>p-arr.price);
    }).catch((e)=>{
      alert('something went wrong. please try again.')
    })
  };
  let handledelete = async(id) => {
    let payload = { cartquantity: 0 };
    // await axios
    //   .patch(`${apiproduct}/${arr.id}`, payload)
    //   .catch((e) => console.log("singlecart", e));
    await axios({
      method:'delete',
      url:`${apiurl}/carts/cart?itemId=${id}`,
      headers:{
        "authorization":`Bearer ${localStorage.getItem('token')}`
      }
    }).catch((e) => console.log(title, e));
    setstate(state + 1);
  };
  useEffect(()=>{
    axios({
      method:'get',
      url:`${apiurl}/products/${arr.itemId}`
    }).then((r)=>{
      setImage(r.data.image);
      setTitle(r.data.title);
      setCategory(r.data.category);
    })
  },[])

  return (
    <div key={arr.id} className="Product-Cart">
      <div>
        <img src={image} alt={title} width="50px" height="100px" />
      </div>
      <div className="Cart-details">
        <h1>{title}</h1>
        <p>In Stock</p>
        <h3>from {category}</h3>
        <div>
          <Button disabled={page===1} onClick={()=>SubQuantocart()}>
            <MinusIcon />
          </Button>
          &nbsp;&nbsp;
          <Button>{page}</Button>&nbsp;&nbsp;
          <Button onClick={()=>AddQuantocart()}>
            <AddIcon />
          </Button>
          &nbsp;&nbsp;
          <Button onClick={() => handledelete(arr.itemId)}>
            <DeleteIcon />
          </Button>
        </div>
      </div>
      <div>
        <h1 className="Cart-price">
          ₹ {(totalp).toFixed(2)}
        </h1>
      </div>
    </div>
  );
};
