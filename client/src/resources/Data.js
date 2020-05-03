import { Product, Supplier, Order, User, Photo } from "./Objects";
import circlePic from "../img/circle.png";
import React, { Fragment } from "react";

const product = new Product("White Bread", "Brennan's", "kg", "Brennan's LTD");
const product1 = new Product("Brown Bread", "Brennan's", "kg", "Brennan's LTD");
const product2 = new Product("Wheat Bread", "Brennan's", "kg", "Brennan's LTD");
export const Products = [product, product1, product2];

const supplier = new Supplier("Brennan's LTD", "John Doe", "John@hmail.com");
const supplier1 = new Supplier("Alcohol LTD", "Maria Doa", "Maria@hmail.com");
const supplier2 = new Supplier(
  "Sweet's LTD",
  "Willie Wonka",
  "Willie@hmail.com"
);
export const Suppliers = [supplier, supplier1, supplier2];

const order = new Order("01/01/2019", "sent");
const order1 = new Order("01/01/2019", "not sent");
const order2 = new Order("01/01/2019", "sent");
export const Orders = [order, order1, order2];

export const user = new User("Company LTD", "User Doe", "User@hmail.com");



