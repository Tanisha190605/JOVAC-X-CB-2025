const username = "tanisha190605"; //GitHub username
const repo = "JOVAC-X-CB-2025";  //specific repo
const profileDiv = document.getElementById("profile");

// Fetch user profile
fetch(`https://api.github.com/users/${username}`)
  .then(response => response.json())
  .then(userData => {
    // After profile is fetched, fetch repo data
    fetch(`https://api.github.com/repos/${username}/${repo}`)
      .then(response => response.json())
      .then(repoData => {
        // Combine user and repo data in the HTML
        profileDiv.innerHTML = `
          <img src="${userData.avatar_url}" alt="${userData.name}">
          <h2>${userData.name}</h2>
          <p><strong>Public Repositories:</strong> ${userData.public_repos}</p>
          <a href="${userData.html_url}" target="_blank">View GitHub Profile</a>
          <hr>
          <h3>Repository: ${repoData.name}</h3>
          <p>${repoData.description || "No description available."}</p>
          <p><strong>Stars:</strong> ${repoData.stargazers_count}</p>
          <a href="${repoData.html_url}" target="_blank">View Repository on GitHub</a>
        `;
      })
      .catch(error => {
        console.error("Repo fetch error:", error);
        profileDiv.innerHTML += `<p>Failed to load repository info.</p>`;
      });
  })
  .catch(error => {
    console.error("Profile fetch error:", error);
    profileDiv.innerHTML = "Failed to load profile.";
  });
