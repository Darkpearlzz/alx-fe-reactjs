import axios from "axios";

const BASE_URL = "https://api.github.com";
const API_KEY = import.meta.env.VITE_APP_GITHUB_API_KEY;

/**
 * Search for GitHub users with advanced filters
 * @param {string} username - GitHub username search term
 * @param {string} location - Optional location filter
 * @param {number} minRepos - Optional minimum repository count
 * @param {number} page - Page number for pagination
 * @returns {Promise<Object>} - { items: [], total_count: number }
 */
export const searchUsers = async (
  username,
  location = "",
  minRepos = "",
  page = 1
) => {
  try {
    let query = username;

    if (location) query += `+location:${location}`;
    if (minRepos) query += `+repos:>=${minRepos}`;

    const response = await axios.get(
      `${BASE_URL}/search/users?q=${query}&page=${page}&per_page=10`,
      {
        headers: {
          Authorization: API_KEY ? `token ${API_KEY}` : undefined,
        },
      }
    );

    return {
      items: response.data.items,
      total_count: response.data.total_count,
    };
  } catch {
    throw new Error("Failed to fetch GitHub search results");
  }
};

export const fetchUserDetails = async (username) => {
  try {
    const response = await axios.get(`${BASE_URL}/users/${username}`, {
      headers: {
        Authorization: API_KEY ? `token ${API_KEY}` : undefined,
      },
    });
    return response.data;
  } catch {
    return null;
  }
};
