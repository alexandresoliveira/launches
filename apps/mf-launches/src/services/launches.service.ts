export type ILaunchProperties = {
  success?: boolean;
  date_utc?: string;
  id?: string;
  rocket?: string;
};

export const getLaunches = (props: ILaunchProperties): ILaunchProperties => {
  return props;
};
