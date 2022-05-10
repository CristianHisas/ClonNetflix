import { 
  MoviesContainer, 
  MoviesTitle, 
  MoviesRow, 
  MoviesPoster } from "./styles/Movies.styles";

function Movies({ movies }) {
  return (
    <MoviesContainer>
      <MoviesTitle>{movies.originals.title}</MoviesTitle>
      <MoviesRow>
        {movies.originals.data.map((originals) => (
          <MoviesPoster
            key={originals.id}
            src={"https://image.tmdb.org/t/p/w300" + originals.poster_path}
            alt={originals.name}
          />
        ))}
      </MoviesRow> 

      <MoviesTitle>{movies.trending.title}</MoviesTitle>
      <MoviesRow>
        {movies.trending.data.map((trending) => (
          <MoviesPoster
            key={trending.id}
            src={"https://image.tmdb.org/t/p/w300" + trending.poster_path}
            alt={trending.name}
          />
        ))}
      </MoviesRow>  

      <MoviesTitle>{movies.nowPlaying.title}</MoviesTitle>
      <MoviesRow>
        {movies.nowPlaying.data.map((nowPlaying) => (
          <MoviesPoster
            key={nowPlaying.id}
            src={"https://image.tmdb.org/t/p/w300" + nowPlaying.poster_path}
            alt={nowPlaying.name}
          />
        ))}
      </MoviesRow>  

      <MoviesTitle>{movies.popular.title}</MoviesTitle>
      <MoviesRow>
        {movies.popular.data.map((popular) => (
          <MoviesPoster
            key={popular.id}
            src={"https://image.tmdb.org/t/p/w300" + popular.poster_path}
            alt={popular.name}
          />
        ))}
      </MoviesRow>  

      <MoviesTitle>{movies.topRated.title}</MoviesTitle>
      <MoviesRow>
        {movies.topRated.data.map((topRated) => (
          <MoviesPoster
            key={topRated.id}
            src={"https://image.tmdb.org/t/p/w300" + topRated.poster_path}
            alt={topRated.name}
          />
        ))}
      </MoviesRow>  

      <MoviesTitle>{movies.upcoming.title}</MoviesTitle>   
      <MoviesRow>
        {movies.upcoming.data.map((upcoming) => (
          <MoviesPoster
            key={upcoming.id}
            src={"https://image.tmdb.org/t/p/w300" + upcoming.poster_path}
            alt={upcoming.name}
          />
        ))}
      </MoviesRow>       
    </MoviesContainer>
  );
}

export default Movies;
