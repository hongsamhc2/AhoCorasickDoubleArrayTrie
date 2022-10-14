import * as core from "@actions/core";
import * as github from "@actions/github";
import { Octokit, App } from "octokit";
const args = process.argv.slice(2);
console.log(args[0].split("=")[1]);
async function start() {
  const octokit = new Octokit({
    auth: args[0].split("=")[1],
  });

  const g = await octokit.request("GET /repos/{owner}/{repo}/pulls?state=all", {
    owner: "HYUNJOON94",
    repo: "lawplatform",
  });
  console.log(g);
}

(async () => {
  await start();
})();
