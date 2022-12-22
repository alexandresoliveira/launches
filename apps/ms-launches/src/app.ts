import express, { Request, Response, Router } from 'express'
import LaunchesController from 'src/application/launches/launches.controller'
import LaunchesService from 'src/application/launches/launches.service'
import { AppDataSource } from 'src/infrastructure/repository/data-source'
import { LaunchesRepository } from 'src/infrastructure/repository/launches.repository'


async function initialize() {
    await AppDataSource.initialize().catch((error) => console.log(error))

    const app = express()
    app.use(express.json())

    app.get('/', (req: Request, res: Response) => {
        res.json({ keepAlive: Date.now() })
    })

    const routes: Router = express.Router()
    new LaunchesController(routes, new LaunchesService(new LaunchesRepository()))

    app.use(routes)

    app.listen(3004, () => { console.log('App Running: http://localhost:3004') })
}

initialize()