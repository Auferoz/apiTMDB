import { getDataPopular } from '../services/tmdbApi';

export const scrollPageView = async () => {
  let pageView = 1;
  let isLoading = false;

  const container = document.getElementById('container');

  const fetchAndAppendPopularData = async () => {
    if (isLoading) return;
    isLoading = true;
    const popular = await getDataPopular({ pageView });
    popular.forEach(data => {
      const article = document.createElement('article');
      article.className = 'border rounded-xl transition hover:scale-105 hover:shadow-md hover:shadow-blue-500/50 cursor-pointer';
      
      const anchor = document.createElement('a');
      anchor.href = `/${data.id}`; 

      const img = document.createElement('img');
      img.src = data.poster_path != null ? `https://image.tmdb.org/t/p/w500${data.poster_path}` : '/public/placeholder-image.webp';
      img.alt = data.original_name;
      img.className = 'rounded-xl h-full object-fill';

      anchor.appendChild(img);
      article.appendChild(anchor);
      container?.appendChild(article);
    });
    isLoading = false;
    pageView += 1;
  };

  const handleScroll = () => {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight && !isLoading) {
      fetchAndAppendPopularData();
    }
  };

  window.addEventListener('scroll', handleScroll);

  fetchAndAppendPopularData();
};