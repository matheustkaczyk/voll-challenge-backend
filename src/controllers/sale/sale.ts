import { Request, Response } from "express";
import { createSaleService } from "../../services/sale"; 

export const createSale = async (req: Request, res: Response) => {
  try {
    await createSaleService(
      req.body.user,
      req.body.products
    );

    res.status(201).end();
  } catch (error) {
    res.status(400).json((error as Error).message);
  }
}
 