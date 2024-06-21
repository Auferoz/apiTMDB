export type TvSerieDetails = {
    adult:                boolean;
    backdrop_path:        string;
    created_by:           CreatedBy[];
    episode_run_time:     any[];
    first_air_date:       Date;
    genres:               Genre[];
    homepage:             string;
    id:                   number;
    in_production:        boolean;
    languages:            string[];
    last_air_date:        Date;
    last_episode_to_air:  TEpisodeToAir;
    name:                 string;
    next_episode_to_air:  TEpisodeToAir;
    networks:             Network[];
    number_of_episodes:   number;
    number_of_seasons:    number;
    origin_country:       string[];
    original_language:    string;
    original_name:        string;
    overview:             string;
    popularity:           number;
    poster_path:          string;
    production_companies: Network[];
    production_countries: ProductionCountry[];
    seasons:              Season[];
    spoken_languages:     SpokenLanguage[];
    status:               string;
    tagline:              string;
    type:                 string;
    vote_average:         number;
    vote_count:           number;
}

export type CreatedBy = {
    id:            number;
    credit_id:     string;
    name:          string;
    original_name: string;
    gender:        number;
    profile_path:  null | string;
}

export type Genre = {
    id:   number;
    name: string;
}

export type TEpisodeToAir = {
    id:              number;
    overview:        string;
    name:            string;
    vote_average:    number;
    vote_count:      number;
    air_date:        Date;
    episode_number:  number;
    episode_type:    string;
    production_code: string;
    runtime:         number | null;
    season_number:   number;
    show_id:         number;
    still_path:      string;
}

export type Network = {
    id:             number;
    logo_path:      null | string;
    name:           string;
    origin_country: string;
}

export type ProductionCountry = {
    iso_3166_1: string;
    name:       string;
}

export type Season = {
    air_date:      Date;
    episode_count: number;
    id:            number;
    name:          string;
    overview:      string;
    poster_path:   string;
    season_number: number;
    vote_average:  number;
}

export type SpokenLanguage = {
    english_name: string;
    iso_639_1:    string;
    name:         string;
}
