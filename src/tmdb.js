const apiKey = "43d743a21565d36c971ca04b01b78a02";
const apiBase = "https://api.themoviedb.org/3";

const basicFetch = async (endpoint) => {
  const req = await fetch(apiBase + endpoint);
  const json = await req.json();
  return json;
}

export default {
  getHomeList: async () => {
    return [
      {
        slug: 'popular',
        title: 'Em Alta',
        items: await basicFetch("/movie/popular?language=pt-BR&api_key=" + apiKey)
      },
      {
        slug: 'upcoming',
        title: 'Lançamento',
        items: await basicFetch("/movie/upcoming?language=pt-BR&api_key=" + apiKey)
      },
      {
        slug: 'top rated',
        title: 'Melhor Avaliado',
        items: await basicFetch("/movie/top_rated?language=pt-BR&api_key=" + apiKey)
      },
      {
        slug: 'action',
        title: 'Ação',
        items: await basicFetch("/discover/movie?with_genre=28s&language=pt-BR&api_key=" + apiKey)
      },
      {
        slug: 'comedy',
        title: 'Comédia',
        items: await basicFetch("/discover/movie?with_genres=35&language=pt-BR&api_key=" + apiKey)
      },
      {
        slug: 'romance',
        title: 'Romance',
        items: await basicFetch("/discover/movie?with_genres=10749&language=pt-BR&api_key=" + apiKey)
      }
    ];
  }
}