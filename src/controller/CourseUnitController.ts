import { Request, Response } from 'express';

import { CreateCourseUnitService } from '../services/CreateCourseUnitService';
import { GetCourseUnitsServices } from '../services/GetCourseUnitsServices';

class CourseUnitController {
  async create(request: Request, response: Response) {
    const courseUnitData = request.body;

    const createCourseUnit = new CreateCourseUnitService();

    const courseUnit = createCourseUnit.execute(courseUnitData);

    return response.json(courseUnit);
  }

  async show(request: Request, response: Response) {
    const userID = request.body.user;

    const getCourseUnits = new GetCourseUnitsServices();

    const courseUnits = await getCourseUnits.execute(userID);

    return response.json(courseUnits);
  }
}

export { CourseUnitController };