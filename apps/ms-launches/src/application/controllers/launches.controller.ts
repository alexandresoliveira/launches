import express, { Router, Request, Response } from 'express'

export default class LaunchesController {


    constructor(private router: Router) {
        router.get("/launches", (req: Request, res: Response) => {
            return res.json(this.getAllLaunches())
        });
    }

    private getAllLaunches() {
        return {};
    }
}
