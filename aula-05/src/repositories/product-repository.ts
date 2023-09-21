import prisma from "../database/database";
import { Product } from "@prisma/client";

const TABLE_NAME = "products";

async function getProducts() {
  return await prisma.product.findMany();

async function getProduct(id: number) {
  // TODO
}

async function createProduct(product: Product) {
  // TODO
}

const productRepository = {
  getProduct,
  getProducts,
  createProduct,
};

export default productRepository;
