import express, { Request, Response, Router } from 'express'
import LaunchesController from './src/application/controllers/launches.controller';
const app = express();

app.get("/", (req: Request, res: Response) => {
    res.json({ keepAlive: Date.now() })
})

const routes: Router = express.Router();

const launchesController: LaunchesController = new LaunchesController(routes);

app.use(routes);


app.listen(3003, () => { console.log("App Running: http://localhost:3003") })