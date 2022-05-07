import { Request, Response } from "express";
import { getAllProductsService } from "../../services/product";

export const getAllProducts = async (req: Request, res: Response) => {
  try {
    const products = await getAllProductsService();

    return res.status(200).json(products);
  } catch (error) {
    return res.status(404).end();
  }
}