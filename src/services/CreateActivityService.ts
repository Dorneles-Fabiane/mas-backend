import { getRepository } from 'typeorm';

import { Activity } from '../models/Activity';
import { CourseUnit } from '../models/CourseUnit';

interface ActivityData {
  name: string;
  activity_date: string;
  grade: number;
  courseUnitId: string;
}

class CreateActivityService {
  public async execute({name, activity_date, grade ,courseUnitId}: ActivityData): Promise < Activity > {
    
    const activitiesRepository = getRepository(Activity);

    const activity = activitiesRepository.create({
      name,
      activity_date,
      grade,
      courseUnitId
    });

    await activitiesRepository.save(activity);

    return activity;
  }
}

export { CreateActivityService };