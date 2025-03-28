import express, { Request, Response } from 'express';

export const apiRouter = express.Router();

apiRouter.post('/user', async (req: Request, res: Response) => {
    console.log(req.body);
    let firstName = req.body.firstName;
    let lastName = req.body.lastName;
    res.status(201).send(
        'Dear ' +
            firstName +
            ' ' +
            lastName +
            ', thank you for submitting your contact info\n',
    );
});
