import express, { Router, Request, Response } from "express";
import Service from "../services/launches.service";

export default class LaunchesController {
  constructor(router: Router) {
    router.get("/launches", async (req: Request, res: Response) => {
      return res.json(await this.getAllLaunches());
    });

    router.post("/launches", (req: Request, res: Response) => {
      const launch = req.body;
      return res.json(this.saveLaunch(launch));
    });
  }

   getAllLaunches() {
    return Service.getAll();
  }

  saveLaunch(launch) {
    return Service.saveOne(launch);
  }
}
