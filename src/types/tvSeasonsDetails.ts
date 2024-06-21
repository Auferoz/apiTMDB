export type TvSeasonsDetails = {
    _id:           string;
    air_date:      Date;
    episodes:      Episode[];
    name:          string;
    overview:      string;
    id:            number;
    poster_path:   string;
    season_number: number;
    vote_average:  number;
}

export type Episode = {
    air_date:        Date;
    episode_number:  number;
    episode_type:    EpisodeType;
    id:              number;
    name:            string;
    overview:        string;
    production_code: string;
    runtime:         number;
    season_number:   number;
    show_id:         number;
    still_path:      string;
    vote_average:    number;
    vote_count:      number;
    crew:            Crew[];
    guest_stars:     Crew[];
}

export type Crew = {
    job?:                 Job;
    department?:          Department;
    credit_id:            string;
    adult:                boolean;
    gender:               number;
    id:                   number;
    known_for_department: Department;
    name:                 string;
    original_name:        string;
    popularity:           number;
    profile_path:         null | string;
    character?:           string;
    order?:               number;
}

export enum Department {
    Acting = "Acting",
    Art = "Art",
    Camera = "Camera",
    Directing = "Directing",
    Production = "Production",
    Sound = "Sound",
    VisualEffects = "Visual Effects",
}

export enum Job {
    AnimationDirector = "Animation Director",
    ArtDirection = "Art Direction",
    AssistantArtDirector = "Assistant Art Director",
    AssistantDirector = "Assistant Director",
    BackgroundDesigner = "Background Designer",
    Director = "Director",
    KeyAnimation = "Key Animation",
    Musician = "Musician",
    ProductionManager = "Production Manager",
    StoryboardArtist = "Storyboard Artist",
    SupervisingArtDirector = "Supervising Art Director",
}

export enum EpisodeType {
    Finale = "finale",
    Standard = "standard",
}
