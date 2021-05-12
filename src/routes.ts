import { Router } from 'express';

import { ActivityController } from './controller/ActivityController';
import { CourseUnitController } from './controller/CourseUnitController';
import { AuthenticatesController }from './controller/AuthenticatesController';
import { UserController } from './controller/UserController';

import authenticated from './middlewares/authenticated';

const userController = new UserController();
const activityController = new ActivityController();
const courseUnitController = new CourseUnitController();
const authenticatesController = new AuthenticatesController();

const routes = Router();

routes.post('/user', userController.create);
routes.get('/user', authenticated, userController.show);

routes.post('/auth', authenticatesController.create);

routes.post('/activity', activityController.create);

routes.post('/courseunit', authenticated, courseUnitController.create);

export default routes;