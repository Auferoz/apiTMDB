export type APIListDetails = {
    created_by:     string;
    description:    string;
    favorite_count: number;
    id:             number;
    iso_639_1:      string;
    item_count:     number;
    items:          Item[];
    name:           string;
    page:           number;
    poster_path:    null;
    total_pages:    number;
    total_results:  number;
}

export type Item = {
    backdrop_path:     string;
    id:                number;
    original_name:     string;
    overview:          string;
    poster_path:       string;
    media_type:        string;
    adult:             boolean;
    name:              string;
    original_language: string;
    genre_ids:         number[];
    popularity:        number;
    first_air_date:    Date;
    vote_average:      number;
    vote_count:        number;
    origin_country:    string[];
}
