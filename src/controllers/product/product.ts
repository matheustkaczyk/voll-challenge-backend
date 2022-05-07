import { Request, Response } from "express";
import {
  createProductService,
  editProductByIdService,
  getAllProductsService,
  removeProductByIdService
} from "../../services/product";

export const getAllProducts = async (req: Request, res: Response) => {
  try {
    const products = await getAllProductsService();

    return res.status(200).json(products);
  } catch (error) {
    return res.status(404).end();
  }
}

export const createProduct = async (req: Request, res: Response) => {
  try {
    const product = req.body;
    await createProductService(product);

    return res.status(201).end();
  } catch(error) {
    return res.status(404).end();
  }
}

export const editProductById = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const newProduct = req.body;
    await editProductByIdService(id, newProduct);

    return res.status(200).end();
  } catch(error) {
    return res.status(404).end();
  }
}

export const removeProductById = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    await removeProductByIdService(id);

    return res.status(200).end();
  } catch(error) {
    return res.status(404).end();
  }
}
