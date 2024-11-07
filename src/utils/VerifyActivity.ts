import roles from "../data/roles.json";

interface IuseActivityParams {
  activity: string;
  role: string;
  activities: string[];
}

const useIsVerified = ({ activity, role, activities }: IuseActivityParams) => {
  //FILL HERE 3.7
  const acv = activities.filter((a: any) => a.activity == activity)
  if (acv) {
    return true
  }
  return false
};

export default useIsVerified;
