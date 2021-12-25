import { API_HOST } from '../../.env';
import { HttpClient } from '../http_client';

export const Sample = async () => {
  const response = await HttpClient({
    url: API_HOST,
    method: 'GET',
  });
  console.log(response);

  return response;
}
