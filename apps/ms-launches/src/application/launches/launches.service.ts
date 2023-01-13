import { LaunchesDomain } from "@domain/launches/launches.domain";
import { RocketDomain } from "@domain/rockets/rockets.domain";
import { LaunchesRepository } from "@infrastructure/repository/launches.repository";
import { createHash } from "crypto";
import { LaunchesDTO } from "../../shared/dtos/launches.dto";

export default class LaunchesService {
  constructor(private lauchesRepository: LaunchesRepository) {}

  /*
    #TASK-BACKEND-2 (JAVASCRIPT/TYPESCRIPT)- WRITE A FUNCTION TO SORT THE LIST OF LAUNCHES BY DATE FROM LATEST TO THE OLDEST.
    AND YOU MUST ENSURE THAT THE LAUNCH CODE DO NOT BE RETURNED BY THE API AS IT IS, APPLY ANY ENCRYPTATION METHOD BEFORE RETURN IT.
    YOU MAY GOOGLE IT IF NEEDED
   */
  async getByName(name: string): Promise<LaunchesDTO[]> {
    const launches = await this.lauchesRepository.findByName(name);
    return launches.map((launch) =>
      Object.assign(launch, {
        launchCode: createHash("sha256")
          .update(launch.launchCode)
          .digest("hex"),
      })
    );
  }

  async saveOne(launch: LaunchesDTO) {
    this.validate(launch);
    return await this.lauchesRepository.save(launch);
  }

  validate(launch: LaunchesDTO) {
    const rocket: RocketDomain = new RocketDomain(
      launch.rocket?.id,
      launch.rocket?.name
    );
    const launchDomain = new LaunchesDomain(
      launch.id,
      rocket,
      launch.rocketId,
      launch.date,
      launch.success,
      launch.launchCode
    );
    launchDomain.validate();
    return true;
  }
}
