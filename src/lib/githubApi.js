export const fetchGitHubProjects = async (username) => {
    const response = await fetch(`https://api.github.com/users/${username}/repos`);
    if (!response.ok) {
        throw new Error('Error fetching projects');
    }
    return response.json();
};
