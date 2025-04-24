import { fetchUserProfile } from '../../api/profile.api';
import { useQuery } from '@tanstack/react-query';
import { Outlet } from 'react-router-dom';

const profileQuery = (profileId: string) => {
  return {
    queryKey: ['profile', profileId],
    queryFn: async () => fetchUserProfile(profileId),
  };
};

export function ProfileLayout() {
  const { data: profile } = useQuery(profileQuery('1'));

  return (
    <div>
      <p>User Profile</p>
      <hr />
      <p>Id: {profile?.id ?? ''}</p>
      <p>Name: {profile?.name}</p>
      <p>Email: {profile?.email}</p>
      <Outlet />
    </div>
  );
}
