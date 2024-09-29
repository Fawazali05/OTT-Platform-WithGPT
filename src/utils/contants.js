
export const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: process.env.REACT_APP_API_KEY
    }
}

export const IMAGE_BASE_URL=process.env.REACT_APP_TMDB_IMAGE_BASE_URL
export const TMDB_SEARCH_MOVIE_API=process.env.REACT_APP_TMDB_API

export const OPEN_AI_KEY=process.env.REACT_APP_OPEN_AI_KEY