import { lauchesRepository } from '../../infrastructure/repository/launches.repository'

export function getAll() {
  return lauchesRepository.find();
}

export function saveOne(launch) {
  return lauchesRepository.save(launch);
}

export default { getAll, saveOne }
