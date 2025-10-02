import express from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createProducts = async (request, response) => {
  const { name, price, code, idCategory } = request.body;

  const product = await prisma.product.create({
    data: {
      name: name,
      price: price,
      code: code,
      idCategory: idCategory,
    },
  });
  return response
    .status(201)
    .json(product, { message: "Product created successfully!" });
};

export const getProducts = async (request, response) => {
  const product = await prisma.product.findMany();
  return response
    .status(200)
    .json(product, { message: "Products retrieved successfully!" });
};

export const updateProducts = async (request, response) => {
  const { name, price, code, idCategory } = request.body;
  const product = await prisma.product.update({
    where: {
      id: request.params.id,
    },
    data: {
      name: name,
      price: price,
      code: code,
      idCatecogry: idCategory,
    },
  });
  return response
    .status(200)
    .json(product, { message: "Product updated successfully!" });
};

export const deleteProducts = async (request, response) => {
  const { name, price, code, idCategory } = request.body;
  const product = await prisma.product.delete({
    where: {
      id: request.params.id,
    },
  });
  return response
    .status(200)
    .json(product, { message: "Product deleted successfully!" });
};