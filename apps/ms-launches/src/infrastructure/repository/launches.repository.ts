import { AppDataSource } from './data-source'
import { Launches } from '../entities/launches.entity'
import { LaunchesDTO } from '@shared/dtos/launches.dto'

export class LaunchesRepository {
    constructor(private repository = AppDataSource.getRepository(Launches)) {}

    /*
    #TASK-BACKEND-1 (ORM) - WRITE A FUNCTION TO FIND IN THE SQLITE(database.sqlite) THE LAUNCHES BY THE ROCKET NAME, IT ALSO SHOULD INCLUDE 
    THE ASSOCIATION WITH ROCKET ENTITY. YOU MAY CHECK TYPEORM DOCUMENTATION IF NEEDED
    */
    async findByName(rocketName: string): Promise<LaunchesDTO[]> {
        const launches: LaunchesDTO[] = [
            {
                date: new Date(2022, 1, 1),
                id: 1,
                rocketId: 1,
                rocket: { id: 1, name: 'SpaceX1' },
                success: true,
                launchCode: '123456',
            },
            {
                date: new Date(2022, 3, 1),
                id: 2,
                rocketId: 2,
                rocket: { id: 2, name: 'SpaceX2' },
                success: true,
                launchCode: '123456',
            },
            {
                date: new Date(2022, 4, 10),
                id: 3,
                rocketId: 3,
                rocket: { id: 3, name: 'SpaceX3' },
                success: false,
                launchCode: '123456',
            },
            {
                date: new Date(2022, 6, 15),
                id: 4,
                rocketId: 4,
                rocket: { id: 4, name: 'SpaceX4' },
                success: true,
                launchCode: '123456',
            },
            {
                date: new Date(2022, 9, 30),
                id: 5,
                rocketId: 5,
                rocket: { id: 5, name: 'SpaceX5' },
                success: false,
                launchCode: '123456',
            },
        ]

        return launches.map((launch) => this.parseEntityToDto(launch))
    }

    async save(launch: LaunchesDTO) {
        return this.parseEntityToDto(
            await this.repository.save(this.parseDtoToEntity(launch))
        )
    }

    parseDtoToEntity(launchDto: LaunchesDTO) {
        const launch: Launches = {
            id: launchDto.id,
            date: launchDto.date,
            rocket: launchDto.rocket
                ? { id: launchDto.rocket?.id, name: launchDto.rocket?.name }
                : null,
            success: launchDto.success,
            rocketId: launchDto.rocketId,
            launchCode: launchDto.launchCode,
        }
        return launch
    }

    parseEntityToDto(launch: LaunchesDTO) {
        const launchDto: Launches = {
            id: launch.id,
            date: launch.date,
            rocket: { id: launch.rocket.id, name: launch.rocket.name },
            success: launch.success,
            rocketId: launch.rocketId,
            launchCode: launch.launchCode,
        }
        return launchDto
    }
}
