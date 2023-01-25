import {BrickDataAPIResponse} from "./types";

export const fetchBrickData = async (): Promise<BrickDataAPIResponse> => {
  const response = await fetch('http://localhost:8000/bricks');

  if (!response.ok) {
    throw Error("something went wrong")
  }

  return response.json();
}

export const postData = async () => {
  const response = await fetch('http://localhost:8000/bricks', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({status: "YELLOW"})
  });

  if (!response.ok) {
    throw Error("something went wrong")
  }

  return response.json();
}
