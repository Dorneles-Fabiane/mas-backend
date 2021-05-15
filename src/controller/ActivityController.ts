import { Request, Response } from 'express';

import { CreateActivityService } from '../services/CreateActivityService';
import { GetActivitiesService } from '../services/GetActivitiesService';

class ActivityController {
  async create(request: Request, response: Response) {
    const activityData = request.body;

    const createActivity = new CreateActivityService();

    const activity = createActivity.execute(activityData);

    return response.json(activity);
  }

  async show(request: Request, response: Response) {
    const userID = request.body.user;

    const getActivity = new GetActivitiesService();

    const activities = await getActivity.execute(userID);

    return response.json(activities);
  }
}

export { ActivityController };