export type Repo = {
  link: string;
  owner: string;
  repo: string;
  description?: string;
  languageColor: string;
  language?: string;
  stars?: number;
  forks?: number;
};

export async function fetchPinnedRepos(username: string): Promise<Repo[]> {
  const response = await fetch(`https://gh-pinned-repos-tsj7ta5xfhep.deno.dev/?username=${username}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch pinned repositories. Status: ${response.status}`);
  }
  let repos: Repo[] = await response.json();
  repos = repos.map(repo => ({
    ...repo,
    owner: repo.owner.endsWith('/') ? repo.owner.slice(0, -1) : repo.owner,
    repo: repo.repo.trim(),
    description: repo.description?.trim(),
    link: repo.link.trim(),
  }));
  return repos;
}