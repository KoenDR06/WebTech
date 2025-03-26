import express, { Request, Response } from 'express';

export const webRouter = express.Router();

webRouter.get('/register', async (req: Request, res: Response) => {
    res.render('register', { title: 'Register' });
});

webRouter.get('/login', async (req: Request, res: Response) => {
    res.render('login', { title: 'Login' });
});
