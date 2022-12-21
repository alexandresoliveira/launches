import { lauchesRepository } from '../../infrastructure/repository/launches.repository'
import { LaunchesDTO } from './launches.dto';

export function getAll() {
  return lauchesRepository.find();
}

export function saveOne(launch: LaunchesDTO) {
  return lauchesRepository.save(launch);
}

export default { getAll, saveOne }
