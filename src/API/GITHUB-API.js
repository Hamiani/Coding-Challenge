import axios from "axios";

export function getRepositories(diff, page, per) {
  const url =
    "https://api.github.com/search/repositories?q=created:>" +
    diff +
    "&sort=stars&order=desc&page=" +
    page +
    "&per_page=" +
    per;
  return axios.get(url);
}

