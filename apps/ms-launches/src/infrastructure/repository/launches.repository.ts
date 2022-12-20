import { AppDataSource } from './data-source';
import { Launches } from '../entities/launches.entity';

export const lauchesRepository = AppDataSource.getRepository(Launches);;
