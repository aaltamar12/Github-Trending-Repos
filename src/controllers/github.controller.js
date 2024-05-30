const axios = require("axios");

const getPopularRepositories = async (req, res) => {
  const { username } = req.query;
  const token = process.env.GITHUB_TOKEN;
  try {
    const response = await axios.get(
      `https://api.github.com/users/${username}/repos`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "X-GitHub-Api-Version": "2022-11-28",
        },
        params: {
          sort: "stars",
          per_page: 100,
        },
      }
    );

    const repos = response.data;

    const formattedRepos = repos.map((repo, index) => ({
      id: index,
      name: repo.name,
      stars: repo.stargazers_count,
    }));

    formattedRepos.sort((a, b) => b.stars - a.stars);
    const top10Repos = formattedRepos.slice(0, 10);

    res.json(top10Repos);
  } catch (error) {
    res.status(500).json({ message: "Request Api Failed", err: error });
  }
};

module.exports = { getPopularRepositories };
