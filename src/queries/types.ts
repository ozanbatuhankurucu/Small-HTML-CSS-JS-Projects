export interface Movie {
  adult: boolean
  backdrop_path: string
  genre_ids: number[]
  id: number
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  release_date: string
  title: string
  video: boolean
  vote_average: number
  vote_count: number
}

export interface ContentPlaceholder {
  cardImage: string
  title: string
  description: string
  userName: string
  userImage: string
  userJoiningDate: string
}

export interface FetchContentPlaceholderResponse {
  status: number
  data: ContentPlaceholder
}
