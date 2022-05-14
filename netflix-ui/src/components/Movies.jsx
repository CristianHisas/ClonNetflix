import { 
  MoviesContainer, 
  MoviesTitle, 
  MoviesRow, 
  MoviesPoster,
  MoviesErrorPoster} from "./styles/Movies.styles";
import { useGetMovies } from "../hooks/useGetMovies";

function Movies({endpoints}) {

  const [originals, originalsLoading, originalsError] = useGetMovies(endpoints.originals);
  const [trending, trendingLoading, trendingError] = useGetMovies(endpoints.trending);
  const [nowPlaying, nowPlayingLoading, nowPlayingError] = useGetMovies(endpoints.nowPlaying);
  const [popular, popularLoading, popularError] = useGetMovies(endpoints.popular);
  const [topRated, topRatedLoading, topRatedError] = useGetMovies(endpoints.topRated);
  const [upcoming, upcomingLoading, upcomingError] = useGetMovies(endpoints.upcoming);

  const movies = {
    "originals": {
      "title": "Netflix Originals",
      "data": originals,
      "loading": originalsLoading,
      "error": originalsError
    },
    "trending": {
      "title": "Trending",
      "data": trending,
      "loading": trendingLoading,
      "error": trendingError
    },
    "nowPlaying": {
      "title": "Now Playing",
      "data": nowPlaying,
      "loading": nowPlayingLoading,
      "error": nowPlayingError
    },
    "popular": {
      "title": "Popular",
      "data": popular,
      "loading": popularLoading,
      "error": popularError
    },
    "topRated": {
      "title": "Top Rated",
      "data": topRated,
      "loading": topRatedLoading,
      "error": topRatedError
    },
    "upcoming": {
      "title": "Upcoming",
      "data": upcoming,
      "loading": upcomingLoading,
      "error": upcomingError
    }
  }

  return (
    <MoviesContainer>
      <MoviesTitle>{movies.originals.title}</MoviesTitle>
      <MoviesRow>
        {movies.originals.loading ? (
          movies.originals.data.map((originals) => (
            <MoviesPoster
              key={originals.id}
              src={"https://image.tmdb.org/t/p/w300" + originals.poster_path}
              alt={originals.name}
            />
          ))
          ) : (
            <MoviesErrorPoster>
              Ups! Something went wrong :( 
              <br />
              {movies.originals.error}
            </MoviesErrorPoster>
          )
        }
      </MoviesRow> 

      <MoviesTitle>{movies.trending.title}</MoviesTitle>
      <MoviesRow>
        {movies.trending.loading ? (
          movies.trending.data.map((trending) => (
            <MoviesPoster
              key={trending.id}
              src={"https://image.tmdb.org/t/p/w300" + trending.poster_path}
              alt={trending.name}
            />
          ))
          ) : (
            <MoviesErrorPoster>
              Ups! Something went wrong :( 
              <br />
              {movies.trending.error}
            </MoviesErrorPoster>
          )
        }
      </MoviesRow> 

      <MoviesTitle>{movies.nowPlaying.title}</MoviesTitle>
      <MoviesRow>
        {movies.nowPlaying.loading ? (
          movies.nowPlaying.data.map((nowPlaying) => (
            <MoviesPoster
              key={nowPlaying.id}
              src={"https://image.tmdb.org/t/p/w300" + nowPlaying.poster_path}
              alt={nowPlaying.name}
            />
          ))
          ) : (
            <MoviesErrorPoster>
              Ups! Something went wrong :( 
              <br />
              {movies.nowPlaying.error}
            </MoviesErrorPoster>
          )
        }
      </MoviesRow> 

      <MoviesTitle>{movies.popular.title}</MoviesTitle>
      <MoviesRow>
        {movies.popular.loading ? (
          movies.popular.data.map((popular) => (
            <MoviesPoster
              key={popular.id}
              src={"https://image.tmdb.org/t/p/w300" + popular.poster_path}
              alt={popular.name}
            />
          ))
          ) : (
            <MoviesErrorPoster>
              Ups! Something went wrong :( 
              <br />
              {movies.popular.error}
            </MoviesErrorPoster>
          )
        }
      </MoviesRow> 

      <MoviesTitle>{movies.topRated.title}</MoviesTitle>
      <MoviesRow>
        {movies.topRated.loading ? (
          movies.topRated.data.map((topRated) => (
            <MoviesPoster
              key={topRated.id}
              src={"https://image.tmdb.org/t/p/w300" + topRated.poster_path}
              alt={topRated.name}
            />
          ))
          ) : (
            <MoviesErrorPoster>
              Ups! Something went wrong :( 
              <br />
              {movies.topRated.error}
            </MoviesErrorPoster>
          )
        }
      </MoviesRow> 

      <MoviesTitle>{movies.upcoming.title}</MoviesTitle>
      <MoviesRow>
        {movies.upcoming.loading ? (
          movies.upcoming.data.map((upcoming) => (
            <MoviesPoster
              key={upcoming.id}
              src={"https://image.tmdb.org/t/p/w300" + upcoming.poster_path}
              alt={upcoming.name}
            />
          ))
          ) : (
            <MoviesErrorPoster>
              Ups! Something went wrong :( 
              <br />
              {movies.upcoming.error}
            </MoviesErrorPoster>
          )
        }
      </MoviesRow>     
    </MoviesContainer>
  );
}

export default Movies;
