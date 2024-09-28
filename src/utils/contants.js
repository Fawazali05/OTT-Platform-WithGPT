
export const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: process.env.REACT_APP_API_KEY
    }
}

export const IMAGE_BASE_URL=process.env.REACT_APP_TMDB_IMAGE_BASE_URL