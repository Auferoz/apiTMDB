import { type APIListDetails } from '../types/apiListDetails'
import { type TvSeasonsDetails } from '../types/tvSeasonsDetails'
import { type TvPopular } from '../types/tvPopular'
import { type TvSerieDetails } from '../types/tvSerieDetails'

let auth = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NTc2NDNjNzU4MzJiNWQ2ZjZjNjZlMTBmMjYwNjE4YiIsInN1YiI6IjYwOWU4ZWFiZTYzNTcxMDAyYTZkODQ5MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.u3Z_Oqp5hEk1YWnYKoTFQa9lZPPWS8-EUm018oeZxjI'

let Language = 'en' // es -> Español - en -> English

export const getDataList24 = async () => {
  const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: auth
      }
    };
    
    const resList = await fetch('https://api.themoviedb.org/3/list/8303894?language=en&page=1', options);
    const { items: list24 } = await resList.json() as APIListDetails
    return list24
}

export const getDataPopular = async ({pageView}: { pageView: number}) => {
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: auth
        }
      };
      
      const resPopular = await fetch(`https://api.themoviedb.org/3/tv/popular?language=${Language}&page=${pageView}`, options);
      const { results: popular } = await resPopular.json() as TvPopular
      return popular
}

export const getDataby = async ({id}: { id: string}) => {
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: auth
        }
      };
      
      const resSerie = await fetch(`https://api.themoviedb.org/3/tv/${id}?language=${Language}`, options);
      const datos = await resSerie.json()
      return datos
}

export const getTVSeasons = async ({id, season}: { id: string, season: string}) => {
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: auth
        }
      };
      
      const resSeason = await fetch(`https://api.themoviedb.org/3/tv/${id}/season/${season}?language=${Language}`, options);
      const { episodes: episodes } = await resSeason.json() as TvSeasonsDetails
      return episodes
}

