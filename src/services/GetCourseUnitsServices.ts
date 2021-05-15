import { getRepository } from "typeorm";

import { CourseUnit } from "../models/CourseUnit";

interface UserID {
  id: string;
}


class GetCourseUnitsServices {
  public async execute({id}: UserID) {
    
    const courseUnitRepository = getRepository(CourseUnit);

    const courseUnits = courseUnitRepository.find();

    if(!courseUnits) {
      return {
        message: 'Course Unit not found...'
      }
    }

    return courseUnits;
  }
}

export { GetCourseUnitsServices };