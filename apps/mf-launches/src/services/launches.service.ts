import { launches } from '../models/LaunchesModel';

export type ILaunchProperties = {
  id: number;
  date?: string;
  rocketId: number;
  rocket?: IRocketProperties;
  success?: boolean;
  launchCode?: string;
};

export type IRocketProperties = {
  id: number;
  name: string;
};

class LaunchesService {
  getLaunches = (): ILaunchProperties[] => {
    //TODO #TASK-FRONTEND-01 choose an http api to make a call to a endpoint http://localhost:3004/launches
    return launches;
  };
}

export default new LaunchesService();
