import { StarIcon } from "@chakra-ui/icons";
import {
  Badge,
  Box,
  Button,
  Center,
  Flex,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import "./SingleProduct.css";

export const Singleproduct = ({
  image,
  title,
  titledesp,
  price,
  category,
  rating,
  reviewCount,
}) => {
  return (
    <Flex
      maxW=""
      borderWidth="2px"
      borderRadius="lg"
      overflow="hidden"
      justifyContent="center"
      alignItems="center"
      textAlign="left"
    >
      <VStack>
=          <Box>
            <Image
              src={image}
              alt={title}
              w="200px"
              h="350px"
              margin="auto"
              p={10}
            />
          </Box>
=      </VStack>
      <VStack>
        <Box p="6">
          <Badge borderRadius="full" px="2" colorScheme="teal">
            {category}
          </Badge>

          <Box
            mt="1"
            fontSize="2xl"
            fontWeight="bold"
            as="h2"
            lineHeight="tight"
            noOfLines={1}
          >
            {title}
          </Box>
          <Box
            mt="1"
            fontWeight="light"
            as="p"
            lineHeight="tight"
            noOfLines={2}
          >
            {titledesp}
          </Box>

          <Box>
            <Box as="span" color="gray.600" fontSize="xl">
              <Text as="s">₹{((price + price / 10) * 50).toFixed(2)}</Text>
            </Box>
            &nbsp; &nbsp;
            <Box as="span" color="gray.600" fontSize="2xl" fontWeight="bold">
              ₹{(price * 50.2).toFixed(2)}
            </Box>
          </Box>

          <Box display="flex" mt="2" alignItems="center">
            {Array(5)
              .fill("")
              .map((_, i) => (
                <StarIcon
                  key={i}
                  color={i < rating ? "teal.500" : "gray.300"}
                />
              ))}
            <Box as="span" ml="2" color="gray.600" fontSize="sm">
              {reviewCount} reviews
            </Box>
          </Box>
        </Box>
        <Box>
          <Button>ADD TO CART</Button>
        </Box>
      </VStack>
    </Flex>
  );
};

/*    <div>
      <img src={image} alt="title" />
      <h3>{title}</h3>
      <p>{titledesp}</p>
      <p>{category}</p>
      <p>
        <span className="single-product-price">$ {price + price / 10}</span>{" "}
        &nbsp; $ {price}
      </p>
      <span className="single-product-starrating">
        Rating :
        {Array(Math.floor(Math.random() * 5) + 1)
          .fill("")
          .map((_, i) => (
            <span>
              <img
                src="/Image/star.jpg"
                alt="dhfjkdh"
                width="30px"
                height="35px"
              />
            </span>
          ))}
      </span>
    </div>*/
