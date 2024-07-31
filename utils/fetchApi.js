import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
      'x-rapidapi-host': 'bayut.p.rapidapi.com',
      'x-rapidapi-key': 'b51a24e4aamsh287b9a923d05c93p1ee327jsn7940218ae7bb' ,
    },
  });
    
  return data;
}