import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.rawg.io/api/',
  params: {
    key: '70eb8daece73482fb73c94bff6fbca67',
  },
});
