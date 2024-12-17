export interface Genre {
  id: number;
  name: string;
}

export interface Movie {
  id: number;  // ID do filme
  title: string;  // Título do filme
  poster_path: string;  // URL do poster
  release_date: string;  // Data de lançamento
  genre_ids: number[];  // IDs dos gêneros (pode ser ajustado para objetos completos se necessário)
  backdrop_path: string;  // URL da imagem de fundo
  overview: string;  // Sinopse do filme
  vote_average: number;  // Avaliação do filme
  genres: Genre[]; // Define 'genres' como uma lista de 'Genre'
  // outros campos, se necessário
}
