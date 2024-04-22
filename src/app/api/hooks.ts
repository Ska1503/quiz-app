import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { SearchPayload, SearchQuery } from './types'
import { API_KEY, BASE_URL } from '../../utils/constans'

export const moviesApi = createApi({
    reducerPath: 'moviesApi',
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
    endpoints: (build) => ({
        getMovies: build.query<SearchQuery, SearchPayload>({
            query: ({ title, page }) => ({
                url: '/',
                method: 'get',
                params: {
                    s: title,
                    page,
                    apiKey: API_KEY
                },
            }),
        }),
    }),
})

export const { useGetMoviesQuery } = moviesApi