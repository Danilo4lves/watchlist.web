// Module
import { MovieApi } from '../../modules';

function MovieService() {
  async function getAll() {
    const apiResponse = await MovieApi.getAll();

    return apiResponse;
  }

  return {
    getAll,
  };
}

export default MovieService();
