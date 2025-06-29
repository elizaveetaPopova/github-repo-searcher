import axios from 'axios';

export const fetchRepositories = async (value: string, sortBy?: string) => {
  try {
    const url = new URL('https://api.github.com/search/repositories');
    url.searchParams.set('q', value);
    url.searchParams.set('per_page', '50');

    if (sortBy && sortBy !== 'name') {
      url.searchParams.set('sort', sortBy);
      url.searchParams.set('order', 'desc');
    }

    const response = await axios.get(url.toString());
    return response.data;
  } catch (error) {
    console.error('API Error :>> ', error);
    throw error;
  }
};

export const fetchRepositoryById = async (id: number) => {
  try {
    const response = await axios.get(
      `https://api.github.com/repositories/${id}`
    );
    return response.data;
  } catch (error) {
    console.error('API Error :>> ', error);
    throw error;
  }
};
