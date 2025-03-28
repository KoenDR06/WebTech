import express, { Request, Response } from 'express';
import { CourseService } from '../../db/course';
import { FriendService } from '../../db/friend';
import { MessageService } from '../../db/message';
import { UserService } from '../../db/user';

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

webRouter.get('/social', async (req: Request, res: Response) => {
    const friends = await FriendService.readAll(1);
    const friendRequests = await FriendService.readRequests(1);
    const messagesFriend = await MessageService.readTenMessages(1);

    const friends1 = [
        {name: UserService.read(1)},
        {amoutUnopendMessages: MessageService.readUnopendAmount(1)}
    ]

    const message1 = [
        {name: UserService.read(1)},
        {content: MessageService.readContent(1)}
    ]

    res.render('social', { title: 'Social',  friends: friends, friendRequests: friendRequests, messagesFriend: messagesFriend });
});