import { Request, Response } from "express";
import { createSaleService } from "../../services/sale"; 

export const createSale = async (req: Request, res: Response) => {
  try {
    await createSaleService(
      req.user,
      req.body.products
    );

    res.status(201).send();
  } catch (error) {
    res.status(400).end();
  }
}