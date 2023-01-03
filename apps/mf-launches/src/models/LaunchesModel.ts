import { ILaunchProperties } from '../services/launches.service';

export const launches: ILaunchProperties[] = [
  {
    date: '2022-04-22',
    id: 1,
    rocketId: 1,
    rocket: { id: 1, name: 'SpaceX' },
    success: true,
    launchCode: '123456',
  },
  {
    date: '2022-05-10',
    id: 2,
    rocketId: 2,
    rocket: {
      id: 2,
      name: 'SpaceX2',
    },
    success: true,
    launchCode: '123456',
  },
  {
    date: '2022-07-18',
    id: 3,
    rocketId: 3,
    rocket: {
      id: 3,
      name: 'SpaceX3',
    },
    success: false,
    launchCode: '123456',
  },
  {
    date: '2022-03-21',
    id: 4,
    rocketId: 4,
    rocket: { id: 4, name: 'SpaceX4' },
    success: true,
    launchCode: '123456',
  },
  {
    date: '2022-01-22',
    id: 5,
    rocketId: 5,
    rocket: { id: 5, name: 'SpaceX5' },
    success: false,
    launchCode: '123456',
  },
];
