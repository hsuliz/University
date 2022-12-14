import express, {NextFunction, Request, Response} from 'express';
import {verification} from "../../service/auth-service";

const router = express.Router();

router.post(
    '/api/orders',
    async (req: Request, res: Response, next: NextFunction) => {
        const user = await verification(req, next);
        const {name, price} = req.body;
        await user?.updateOne({$push: {orders: {name: name, price: price}}})
        res.status(200).send(JSON.stringify("Added!!"));
    }
);

export {router as orderCreate};