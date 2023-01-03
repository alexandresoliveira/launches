import { useEffect, useState } from 'react';
import LaunchesService, { ILaunchProperties } from '../../services/launches.service';

//TODO #TASK-FRONTEND-02 Create a method with service callback with a ASC Alphabetical order

const Home = () => {
  const [launches, setLaunches] = useState<ILaunchProperties[]>();
  const fetchLaunches = () => {
    setLaunches(LaunchesService.getLaunches());
  };

  useEffect(() => {
    fetchLaunches();
  }, []);

  return (
    <div className='index-page'>
      <h1 data-testid='home-title'>Home</h1>
      <p>{JSON.stringify(launches)}</p>
    </div>
  );
};

export default Home;
