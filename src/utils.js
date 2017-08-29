import axios from 'axios';
import params from './params';

const { server: { host, port } } = params;

export const requestJson = ({ method, url, body }) => {
  const path = `${host}:${port}${url}`;
  return axios({
    method,
    url: path,
    params: body,
  })
  .then(({ data }) => data);
};
