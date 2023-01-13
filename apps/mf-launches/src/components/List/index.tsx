import { ILaunchProperties } from 'src/services/launches.service';
import style from './index.module.scss';

interface ListProps {
  models: ILaunchProperties[];
}

const List = ({ models }: ListProps) => {
  return (
    <table className={style.launches}>
      <thead>
        <tr>
          <th>Date</th>
          <th>Rocket</th>
          <th>Success?</th>
          <th>Launch Code</th>
        </tr>
      </thead>
      <tbody>
        {models.map((item) => (
          <tr key={`${item.id}`}>
            <td>{item.date}</td>
            <td>{item.rocket?.name}</td>
            <td>{item.success ? 'Yes' : 'No'}</td>
            <td>{item.launchCode}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default List;
