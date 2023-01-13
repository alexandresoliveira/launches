import List from '@/components/List';
import { useEffect, useState } from 'react';
import LaunchesService, { ILaunchProperties } from '../../services/launches.service';

//TODO #TASK-FRONTEND-02 Create a method with service callback, create a list component to receive de object retrieved from the api call

const Home = () => {
  const [launches, setLaunches] = useState<ILaunchProperties[]>();
  const fetchLaunches = async () => {
    setLaunches(await LaunchesService.getLaunches());
  };

  useEffect(() => {
    fetchLaunches();
  }, []);

  return (
    <div className='index-page'>
      <h1 data-testid='home-title'>Home</h1>
      <List models={launches ?? []} />
    </div>
  );
};

export default Home;
