type SearchType = {
    Title: string,
    Year: string,
    Poster: string,
}

export type SearchQuery = {
    Search: SearchType[],
    totalResults: string,
}

export type SearchPayload = {
    title: string,
    page: number,
}