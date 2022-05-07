import { Request, Response } from "express";
import { createProductService, getAllProductsService } from "../../services/product";

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
