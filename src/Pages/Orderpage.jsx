import { DeleteIcon } from "@chakra-ui/icons";
import {
  Alert,
  AlertIcon,
  Button,
  Table,
  TableContainer,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Orderpage.css";
let apiproducts="https://dreambaths.onrender.com/products"
let apiorders="https://dreambaths.onrender.com/orders"


export const Orderpage = () => {
  let [product, setproduct] = useState([]);
  let getorders = () => {
    axios.get(`${apiorders}`).then((r) => setproduct(r.data));
  };
  let deleteelement = (id) => {
    axios
      .delete(`${apiorders}/${id}`)
      .then((r) => (r.data ? getorders() : getorders()));
  };
  let getsuccess = (id) => {
    axios
      .patch(`${apiorders}/${id}`, {
        cartquantity: 0,
      })
      .then((r) => (r.data ? getorders() : getorders()));
  };
  useEffect(() => {
    getorders();
    return () => {
      getorders();
    };
  }, []);
  return (
    <div className="Order-page">
      <div>
        <Alert status="warning">
          <AlertIcon />
          Order In-process
        </Alert>
        <TableContainer>
          <Table size="lg" textAlign="center">
            <Thead>
              <Tr>
                <Th>Sr No.</Th>
                <Th>order-ID</Th>
                <Th>order-name</Th>
                <Th>order-quantity</Th>
                <Th>order-price</Th>
                <Th>order-status</Th>
              </Tr>
            </Thead>
            <Tbody>
              {product
                .filter((e) => e.cartquantity > 0)
                .map((elem, i) => (
                  <Tr>
                    <Td>{i + 1}</Td>
                    <Td>{elem.id}</Td>
                    <Td>{elem.title}</Td>
                    <Td>{elem.cartquantity}</Td>
                    <Td>
                      ₹&nbsp;{(elem.price * elem.cartquantity).toFixed(2)}
                    </Td>
                    <Td>
                      <Button
                        onClick={() => getsuccess(elem.id)}
                        colorScheme="red"
                      >
                        In-process
                      </Button>
                    </Td>
                  </Tr>
                ))}
            </Tbody>
          </Table>
        </TableContainer>
      </div>
      <div>
        <Alert status="success">
          <AlertIcon />
          Order completed
        </Alert>
        <TableContainer>
          <Table size="lg" textAlign="center">
            <Thead>
              <Tr>
                <Th>Sr No.</Th>
                <Th>order-ID</Th>
                <Th>order-name</Th>
                <Th>order-price</Th>
                <Th>order-status</Th>
                <Th>remove</Th>
              </Tr>
            </Thead>
            <Tbody>
              {product
                .filter((e) => e.cartquantity === 0)
                .map((elem, i) => (
                  <Tr>
                    <Td>{i + 1}</Td>
                    <Td>{elem.id}</Td>
                    <Td>{elem.title}</Td>
                    <Td>₹&nbsp;{elem.price.toFixed(2)}</Td>
                    <Td>
                      <Button colorScheme="green">Delivered</Button>
                    </Td>
                    <Td>
                      <Button
                        onClick={() => deleteelement(elem.id)}
                        colorScheme="red"
                      >
                        <DeleteIcon />
                      </Button>
                    </Td>
                  </Tr>
                ))}
            </Tbody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};
