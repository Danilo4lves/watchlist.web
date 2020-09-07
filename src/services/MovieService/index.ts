// Module
import { MovieApi } from '../../modules';

function MovieService() {
  async function getAll() {
    const apiResponse = await MovieApi.getAll();

    return apiResponse;
  }

  async function remove(id: string) {
    const apiResponse = await MovieApi.remove(id);

    return apiResponse;
  }

  return {
    getAll,
    remove,
  };
}

export default MovieService();
