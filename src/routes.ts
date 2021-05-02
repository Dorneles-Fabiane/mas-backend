import { json, response, Router } from 'express';
import { ActivityController } from './controller/ActivityController';
import { CourseUnitController } from './controller/CourseUnitController';
import { UserController } from './controller/UserController';

interface UserRequest {
    name: string;
    email: string;
    password: string;
}

const userController = new UserController();
const activityController = new ActivityController();
const courseUnitController = new CourseUnitController();

const routes = Router();

routes.get('/user', () => console.log("User route accessed"));
routes.post('/user', userController.create);

routes.get('/activity', () => console.log("Activity route accessed"));
routes.post('/activity', activityController.create);

routes.get('/courseunit', () => console.log("Course Unit route accessed"));
routes.post('/courseunit', courseUnitController.create);

export default routes;