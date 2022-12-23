import {
    Heading,
    VStack,
    Text,
    Grid,
    GridItem,
    FormControl,
    FormLabel,
    Input,
    Button,
    Checkbox,
  } from "@chakra-ui/react";
import axios from "axios";
  import React from "react";
import { useRef } from "react";
import { useState } from "react";
import {useNavigate } from "react-router-dom";
import validator from 'validator'

const isUserExist = async (email)=>{
  let flag=false;
  await axios({
    method:'get',
    url:`https://real-blue-pigeon-belt.cyclic.app/users?email=${email}`
  }).then((res)=>{
    if(res.data.length!==0){
      flag=true;
    }
  }).catch((e)=>{
    flag=true;
    console.log(e)
  })

  return flag;
}


  
  const SignupProfileForm = () => {
    const navigate = useNavigate();
    const [showPass,setShowPass]=useState(false);
    const [showStrong,setShowStrong]=useState(false);
    const unameRef = useRef();
    const emailRef = useRef();
    const passRef = useRef();
    const handleAddUser=()=>{
        let pass=passRef.current.value;
        let strong = validator.isStrongPassword(pass,{
            minLength: 8, minLowercase: 1,
      minUppercase: 1, minNumbers: 1, minSymbols: 1
        })
        if(!strong){
            setShowStrong(true);
            return;
        }else{
            setShowStrong(false);
        }
        let user ={
            "name":unameRef.current.value,
            "email":emailRef.current.value,
            "password":passRef.current.value,
            "role":'user'
        }
        if(isUserExist(emailRef.current.value)){
          alert('user already exist, do login.');
          return;
        }
        axios({
            method:'post',
            url:'https://real-blue-pigeon-belt.cyclic.app/users',
            data:JSON.stringify(user),
            headers:{
                "Content-Type":"application/json"
            }
        }).then((res)=>{console.log(res.json);alert('user created successfully.\npage is going to redirected to login.');navigate('/login')})
        .catch((err)=>{
            alert('something went wrong.\nplease try again.')
            console.log(err);
        })
    }
    return (
      <VStack
        w="full"
        h="full"
        spacing={5}
        bg="white"
        alignItems="flex-start"
        p={30}
        pl={10}
        pt={20}
      >
        <Heading
          bgGradient="linear(to-r, blue.500, blue.200)"
          bgClip="text"
          fontSize="5xl"
          fontWeight="extrabold"
        >
          Welcome New User
        </Heading>
        <Text>Create your Account</Text>
        <Grid templateColumns="repeat(3, 1fr)" gap={3} w="70%">
        <GridItem colSpan={5}>
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input
                ref={unameRef}
                focusBorderColor="blue.400"
                placeholder="username"
                type="text"
                required
              />
            </FormControl>
          </GridItem>
          <GridItem colSpan={5}>
            <FormControl>
              <FormLabel>Email address</FormLabel>
              <Input
              ref={emailRef}
                focusBorderColor="blue.400"
                placeholder="Email"
                type="email"
                required
              />
            </FormControl>
          </GridItem>
          <GridItem colSpan={5}>
            <FormControl>
              <FormLabel>Password</FormLabel>
              <Input
                ref={passRef}
                focusBorderColor="blue.400"
                placeholder="password"
                type={showPass?"text":"password"}
                required
              />
            </FormControl>
          </GridItem>
          <GridItem colSpan={5}>
            <FormControl>
                <Checkbox onChange={(e)=>{setShowPass(e.target.checked)}}>show password</Checkbox>
                {showStrong&&<Text color={'red'}>password min length should be 8, password contains 1 uppercase, 1 lowercase, 1 symbol, 1 number at least</Text>}
              <FormLabel fontSize={13}>&nbsp;</FormLabel>
             
              <Button
                onClick={handleAddUser}
                variant="outline"
                colorScheme="blue"
                w="full"
              >
                Signup
              </Button>
              <FormLabel fontSize={5}>&nbsp;</FormLabel>
              <Text paddingBottom={'5px'}>Already Have an Account? go to login page.</Text>
              <Button
                onClick={()=>{navigate('/login')}}
                variant="outline"
                colorScheme="blue"
                w="full"
              >
                Login
              </Button>
            </FormControl>
          </GridItem>
        </Grid>
      </VStack>
    );
  };
  
  export default SignupProfileForm;
  