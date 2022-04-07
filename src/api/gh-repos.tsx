import axios from "axios"

const GH_USERNAME = "adrianghub";
const ENDPOINT =
  `https://gh-pinned-repos.egoist.sh/?username=${GH_USERNAME}`

export async function fetchProjects() {
  try {
    const response = await axios.get(ENDPOINT)

    return response
  } catch (error) {
    console.error("There is some issue with the API. Check it first.")
  }
}
