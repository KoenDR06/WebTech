import express, { Request, Response } from 'express';

export const webRouter = express.Router();

webRouter.route('/').get((req: Request, res: Response) => {
    res.json({ message: 'Welcome to the Express + TypeScript Server!' });
});
