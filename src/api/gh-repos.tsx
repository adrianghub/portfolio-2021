import axios from "axios"

const ENDPOINT =
  "https://api.github.com/users/adrianghub/repos?sort=updated&direction=desc&per_page=6"

export async function fetchProjects() {
  try {
    const response = await axios.get(ENDPOINT)

    return response
  } catch (error) {
    console.log(error)
  }
}
