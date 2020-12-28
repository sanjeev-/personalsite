import { textStyle } from "styled-system";

const GITHUB_PERSONAL_TOKEN = "f9680af5e9a2f4b33f3c9e0415515e90c9dda4b9";

export const getFileFromGithub = (filename) => {
  // const baseGitUrl = 'https://api.github.com/repos/owner/repo/contents/path'
  const baseGitUrl = "https://api.github.com/repos/sanjeev-/snippets/contents/";
  const gitUrl = `${baseGitUrl}${filename}`;
  const response = fetch(gitUrl, {
    headers: {
      Authorization: GITHUB_PERSONAL_TOKEN,
      Accept: "application/vnd.github.v4.raw",
    },
  })
    .then((res) => res.text())
    .then((data) => {
      return data;
    });

  return response;
};
