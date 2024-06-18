export interface Movie {
  title: string; // No TMDb, o título é representado por 'title'
  release_date: string; // Data de lançamento
  genre_ids: number[]; // IDs dos gêneros do filme
  poster_path: string; // Caminho para o pôster do filme
  // Adicione outras propriedades conforme necessário
}
