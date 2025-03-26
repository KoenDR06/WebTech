import express, { NextFunction } from 'express';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';

import { webRouter } from './routing/web';
import * as dotenv from 'dotenv';

dotenv.config();

const port = process.env.PORT;
const app = express();

// --- Middleware ---
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/static', express.static('src/public'));

// --- Routing ---
app.use('/', webRouter);
app.use((_, res) => {
    res.status(404).send('404 Not Found');
});

// --- Error Handler ---
app.use((err: Error, req: any, res: any, next: NextFunction) => {
    console.error(err.stack);
    res.status(500).send('500 Internal Server Error');
    next(err);
});

app.listen(port, () => {
    console.log(`listening on http://localhost:${port}`);
});
