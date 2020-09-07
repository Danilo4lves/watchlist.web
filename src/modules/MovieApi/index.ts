// Api
import { api } from '../../config';

function MovieApi() {
  const MAIN_ENDPOINT = '/movie';

  async function getAll() {
    const apiResponse = await api.get(MAIN_ENDPOINT);

    return apiResponse;
  }

  async function remove(id: string) {
    const apiResponse = await api.delete(`${MAIN_ENDPOINT}/${id}`);

    return apiResponse;
  }

  return {
    MAIN_ENDPOINT,
    getAll,
    remove,
  };
}

export default MovieApi();
