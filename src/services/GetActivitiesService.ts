import { getRepository } from "typeorm";
import { Activity } from "../models/Activity";

interface UserID {
  id: string;
}


class GetActivitiesService {
  public async execute({id}: UserID) {
    
    const activityRepository = getRepository(Activity);

    const activities = activityRepository.find();

    if(!activities) {
      return {
        message: 'Activity not found...'
      }
    }

    return activities;
  }
}

export { GetActivitiesService };