import { getRepository } from 'typeorm';

import { Activity } from '../models/Activity';
import { CourseUnit } from '../models/CourseUnit';

interface ActivityData {
  name: string;
  activity_date: string;
  course_unit_id: string;
}

class CreateActivityService {
  public async execute({name, activity_date, course_unit_id}: ActivityData): Promise < Activity > {
    
    const activitiesRepository = getRepository(Activity);

    const activity = activitiesRepository.create({
      name,
      activity_date,
      course_unit_id
    });

    await activitiesRepository.save(activity);

    return activity;
  }
}

export { CreateActivityService };