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

routes.post('/auth', authenticatesController.create);

routes.get('/user', authenticated, userController.show);
routes.get('/courseunit', authenticated, courseUnitController.show);
routes.get('/activity', authenticated, activityController.show);

routes.post('/user', userController.create);
routes.post('/courseunit', authenticated, courseUnitController.create);
routes.post('/activity', authenticated, activityController.create);

export default routes;