import axios from "axios"

export const fetchRepos = async (value: string) => {
  try {
    const response = await axios.get(`https://api.github.com/search/repositories?q=${value}`)
    return response.data
  } catch (error) {
    console.error('API Error :>> ', error);
    throw error
  }
}