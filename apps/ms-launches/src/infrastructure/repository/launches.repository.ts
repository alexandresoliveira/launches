import { AppDataSource } from './data-source';
import { Launches } from '../entities/launches.entity';

export class LaunchesRepository {
    constructor(private repository = AppDataSource.getRepository(Launches)) { }

    async find(): Promise<Launches[]> {
        return this.repository.find();
    }

    async save(launch: Launches) {
        return await this.repository.save(launch);
    }
}

