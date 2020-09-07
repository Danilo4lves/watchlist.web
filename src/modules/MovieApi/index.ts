// Api
import { api } from '../../config';

function MovieApi() {
  const MAIN_ENDPOINT = '/movie';

  async function getAll() {
    const apiResponse = await api.get(MAIN_ENDPOINT);

    return apiResponse;
  }

  return {
    MAIN_ENDPOINT,
    getAll,
  };
}

export default MovieApi();
