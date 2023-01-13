import { AppDataSource } from "./data-source";
import { Launches } from "../entities/launches.entity";
import { LaunchesDTO } from "@shared/dtos/launches.dto";
import { Like } from "typeorm";

export class LaunchesRepository {
  constructor(private repository = AppDataSource.getRepository(Launches)) {}

  /*
    #TASK-BACKEND-1 (ORM) - WRITE A FUNCTION TO FIND IN THE SQLITE(database.sqlite) THE LAUNCHES BY THE ROCKET NAME, IT ALSO SHOULD INCLUDE 
    THE ASSOCIATION WITH ROCKET ENTITY. YOU MAY CHECK TYPEORM DOCUMENTATION IF NEEDED
    */
  async findByName(rocketName: string): Promise<LaunchesDTO[]> {
    const launches = await this.repository.find({
      relations: {
        rocket: true,
      },
      where: {
        rocket: {
          name: Like(`%${rocketName}%`),
        },
      },
      order: {
        date: "DESC",
      },
    });

    return launches.map((launch) => this.parseEntityToDto(launch));
  }

  async save(launch: LaunchesDTO) {
    return this.parseEntityToDto(
      await this.repository.save(this.parseDtoToEntity(launch))
    );
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
    };
    return launch;
  }

  parseEntityToDto(launch: LaunchesDTO) {
    const launchDto: Launches = {
      id: launch.id,
      date: launch.date,
      rocket: { id: launch.rocket.id, name: launch.rocket.name },
      success: launch.success,
      rocketId: launch.rocketId,
      launchCode: launch.launchCode,
    };
    return launchDto;
  }
}
