import axios from 'axios';

class FetchService {
  static client = axios.create({
    baseURL: 'https://www.balldontlie.io/api/v1',
  });

  static async get<T>(path: string, params?: Record<string, any>) {
    const response = await this.client.get<T>(path, {
      params,
    });

    return response.data;
  }
}

export default FetchService;
