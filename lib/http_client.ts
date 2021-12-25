import axios from 'axios';

type Props = {
  url: string;
  method: 'GET';
};

export const HttpClient = async ({ url, method }: Props) => {
  const instance = axios.create();

  // logger
  console.log(`Request to ${url}`);

  switch (method) {
    case 'GET':
      return await instance.get(url);
  }
}
