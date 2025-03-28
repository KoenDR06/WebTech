import express, { Request, Response } from 'express';
import { CourseService } from '../../db/course';

export const webRouter = express.Router();

webRouter.get('/register', async (req: Request, res: Response) => {
    const courses = await CourseService.readAll();

    res.render('register', { title: 'Register', courses: courses });
});

webRouter.get('/login', async (req: Request, res: Response) => {
    res.render('login', { title: 'Login' });
});

webRouter.get('/courses', async (req: Request, res: Response) => {
    const courses = await CourseService.readAll();

    res.render('courses', { title: 'Courses', courses: courses });
});
