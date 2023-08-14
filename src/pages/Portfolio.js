import React, { useState, useEffect } from "react";

function Portfolio() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    async function fetchRepos() {
      const response = await fetch("https://api.github.com/users/Hash33m/repos");
      const data = await response.json();
      setRepos(data);
    }

    fetchRepos();
  }, []);

  return (
    <>
      <h1>Portfolio</h1>
      <div>
        <h2>My GitHub Repositories</h2>
        <ul>
          {repos.slice(0, 5).map((repo) => (
            <li key={repo.id}>
              <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                {repo.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Portfolio;
