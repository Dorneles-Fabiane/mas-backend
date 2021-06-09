import { getRepository } from "typeorm";
import { Activity } from "../models/Activity";

interface UserID {
  id?: string;
}


class GetActivitiesService {
  public async execute({id}: UserID) {

    console.log('Activity user id: ' + id);
    
    const activityRepository = getRepository(Activity);

    const activities = await activityRepository.find(
      {
        relations: ["course_unit"],
      }
    );

    if(!activities) {
      return {
        message: 'Activity not found...'
      }
    }

    return activities;
  }
}

export { GetActivitiesService };