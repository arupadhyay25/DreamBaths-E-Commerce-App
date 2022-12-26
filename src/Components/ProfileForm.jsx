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
  Spinner,
} from "@chakra-ui/react";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { useState } from "react";
import { AuthContext } from "../Context/AuthContext/AuthContextProvider";

let initstate = {
  username: "",
  password: "",
};
const ProfileForm = () => {
  const navigate = useNavigate();
  const { state, handleLogin } = React.useContext(AuthContext);

  let [formdata, setformdata] = useState(initstate);

  let handleChange = (e) => {
    let { name, value } = e.target;
    setformdata({ ...formdata, [name]: value });
  };

  let { username, password } = formdata;

  const onSubmit = (e) => {
    let { username, password } = formdata;
    handleLogin(username, password);
  };
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
        Welcome Back
      </Heading>
      <Text>Please Login to your Account</Text>
      <Grid templateColumns="repeat(2, 1fr)" gap={2} w="70%">
        <GridItem colSpan={2}>
          <FormControl>
            <FormLabel>Email address</FormLabel>
            <Input
              focusBorderColor="blue.400"
              name="username"
              value={username}
              onChange={handleChange}
              type="email"
            />
          </FormControl>
        </GridItem>
        <GridItem colSpan={2}>
          <FormControl>
            <FormLabel>Password</FormLabel>
            <Input
              focusBorderColor="blue.400"
              name="password"
              value={password}
              onChange={handleChange}
              type="password"
            />
          </FormControl>
        </GridItem>
        <GridItem colSpan={2}>
          <FormControl>
            <FormLabel fontSize={13}>&nbsp;</FormLabel>
            <FormLabel fontSize={13}>
              <Link href="https://chakra-ui.com">
                forget Password?
                <ExternalLinkIcon mx="2px" />
              </Link>
            </FormLabel>
            <Button
              onClick={onSubmit}
              variant="outline"
              colorScheme="blue"
              w="full"
              // disabled={state.loading === true}
            >
              Login
            </Button>
            <FormLabel fontSize={13}>&nbsp;</FormLabel>
            <FormLabel fontSize={13}>
              <Link href="https://chakra-ui.com">
                you dont have account please go signup first.
                <ExternalLinkIcon mx="2px" />
              </Link>
            </FormLabel>
            <Button
              onClick={() => {
                navigate("/signup");
              }}
              variant="outline"
              colorScheme="blue"
              w="full"
              // disabled={state.loading === true}
            >
              Signup
            </Button>
          </FormControl>
        </GridItem>
      </Grid>
    </VStack>
  );
};

export default ProfileForm;
