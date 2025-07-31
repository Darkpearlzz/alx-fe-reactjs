import axios from "axios";

const API_KEY = import.meta.env.VITE_APP_GITHUB_API_KEY;
const BASE_URL = "https://api.github.com";

export const getUser = async (username) => {
  try {
    const response = await axios.get(`${BASE_URL}/users/${username}`, {
      headers: {
        Authorization: API_KEY ? `token ${API_KEY}` : undefined,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching GitHub user:", error);
    throw error;
  }
};
