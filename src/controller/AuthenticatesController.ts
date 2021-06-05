import { Request, Response } from "express";
import { AuthenticatesUserService } from "../services/AuthenticatesUserService";

class AuthenticatesController {
  async create(request: Request, response: Response){
    const authData = request.body;

    const authenticatesUser = new AuthenticatesUserService();

    const auth = await authenticatesUser.execute(authData);

    return response.json(auth);
  };
}

export { AuthenticatesController };