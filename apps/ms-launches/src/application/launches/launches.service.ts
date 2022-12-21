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
    if (!launch.rocket && !launch.date) throw new ValidationError("Validation Error", "Launch must have a date and a rocket");
    return true;
  }
}