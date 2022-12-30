import 'reflect-metadata'
import { DataSource } from 'typeorm'
import { Launches } from '../entities/launches.entity'
import { Rocket } from '../entities/rocket.entity'

export const AppDataSource = new DataSource({
    type: 'sqlite',
    database: 'database.sqlite',
    synchronize: true,
    logging: false,
    entities: [Launches, Rocket],
    migrations: [],
    subscribers: [],
})
