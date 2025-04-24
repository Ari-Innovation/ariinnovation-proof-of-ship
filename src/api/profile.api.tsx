import axios from 'axios';

export type UserProfile = {
  id: string;
  name: string;
  email: string;
};

export async function fetchUserProfile(id: string): Promise<UserProfile> {
  return axios.get<UserProfile>(`https://jsonplaceholder.typicode.com/users/${id}`).then((response) => {
    return {
      id: response.data.id,
      name: response.data.name,
      email: response.data.email,
    };
  });
}
