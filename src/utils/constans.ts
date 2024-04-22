const drama = 'src/public/drama.png'
const action = 'src/public/images/action.png'
const comedy = 'src/public/images/comedy.png'
const science = 'src/public/images/science.png'
const thriller = 'src/public/images/thriller.png'
export const notFound = 'src/public/images/not-found.jpg'
export const noPoster = 'src/public/images/no-poster.png'

export const API_KEY = '656901fe'
export const BASE_URL = 'https://www.omdbapi.com'

export const STEP = 1

export const PAGE = 1

export const TOTAL_RESULTS = 9

export enum STEPS {
    'first' = 1,
    'second' = 2,
    'third' = 3,
    'fourth' = 4
}

export const INPUT_PATTERN = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/

export const NOT_AVAILABLE_URL = 'N/A'

type genreListType = {
    genre: string;
    icon: string;
}

export const genreList:genreListType[] = [
    {
        genre: 'Drama',
        icon: drama,
    },
    {
        genre: 'Comedy',
        icon: comedy,
    },
    {
        genre: 'Action',
        icon: action,
    },
    {
        genre: 'Thriller',
        icon: thriller,
    },
    {
        genre: 'Science fiction',
        icon: science,
    },
]