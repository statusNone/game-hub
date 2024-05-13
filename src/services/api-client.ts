import axios from 'axios';

export interface FetchResponse<T> {
  count: number;
  results: T[];
}
export default axios.create({
  baseURL: 'https://api.rawg.io/api/',
  params: {
    key: '70eb8daece73482fb73c94bff6fbca67',
  },
});
