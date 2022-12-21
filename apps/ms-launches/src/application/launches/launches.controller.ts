import { Router, Request, Response } from "express";
import ValidationError from "@shared/errors/validation.error";

import { LaunchesDTO } from "./launches.dto";
import LaunchesService from "./launches.service";

export default class LaunchesController {

  constructor(router: Router, private launchesService: LaunchesService) {
    router?.get("/launches", async (req: Request, res: Response) => {
      try {
        return res.json(await this.getAllLaunches());
      }
      catch (error) {
        return (error instanceof ValidationError) ? res.status(400).send(error) : res.status(500).send(error);
      }

    });

    router?.post("/launches", (req: Request, res: Response) => {
      try {
        const launch = req.body;
        return res.json(this.saveLaunch(launch));
      }
      catch (error) {
        return (error instanceof ValidationError) ? res.status(400).send(error) : res.status(500).send(error);
      }
    });
  }

  async getAllLaunches(): Promise<LaunchesDTO[]> {
    return await this.launchesService.getAll();
  }

  saveLaunch(launch: LaunchesDTO) {
    return this.launchesService.saveOne(launch);
  }
}
