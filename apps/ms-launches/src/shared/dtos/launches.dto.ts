import { RocketsDTO } from './rockets.dto'

export class LaunchesDTO {
    constructor(
    public id: number,
    public rocket: RocketsDTO,
    public rocketId: number,
    public date: Date,
    public success: boolean,
    public launchCode: string
    ) {}
}
