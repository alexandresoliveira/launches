import { LaunchesDomain } from '@domain/launches/launches.domain';
import { LaunchesRepository } from '@infrastructure/repository/launches.repository';
import ValidationError from '@shared/errors/validation.error';
import { LaunchesDTO } from './launches.dto';

export default class LaunchesService {

  constructor(private lauchesRepository: LaunchesRepository) { }

  async getAll(): Promise<LaunchesDTO[]> {
    const launches = await this.lauchesRepository.find();

    return launches.map((entityLaunch => {
      const { id, rocket, date } = entityLaunch;
      return (new LaunchesDTO(id, rocket, date));
    }))
  }

  saveOne(launch: LaunchesDTO) {
    this.validate(launch);
    return this.lauchesRepository.save(launch);
  }

  validate(launch: LaunchesDTO) {
    const launchDomain = new LaunchesDomain(launch.id, launch.rocket, launch.date);
    launchDomain.validateLaunch();
    return true;
  }
}