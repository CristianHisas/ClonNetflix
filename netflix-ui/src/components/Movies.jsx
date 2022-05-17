import { 
  MoviesContainer, 
  MoviesTitle, 
  MoviesRow, 
  MoviesPoster,
  ErrorPoster} from "./styles/Movies.styles";
import { useGetMovies } from "../hooks/useGetMovies";

// Swiper ---------------------
import { SwiperProps } from "./settings/Movies.settings";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
// ----------------------------

// Spinner
import { RotatingLines } from 'react-loader-spinner';

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
        {
          movies.originals.loading ? (
            <Swiper
              {...SwiperProps} 
            >
              {movies.originals.data.map((originals) => (
                  <SwiperSlide> 
                    <MoviesPoster
                      key={originals.id}
                      src={"https://image.tmdb.org/t/p/w300" + originals.poster_path}
                      alt={originals.name}
                    />
                  </SwiperSlide>
                ))}
            </Swiper>
          ) : 
          ( 
            movies.originals.error == null ? (
              <RotatingLines width="60"/>
            ) : (
              <ErrorPoster>
                Ups! Something went wrong :( 
                <br />
                {movies.originals.error}
              </ErrorPoster>     
            )      
          )
        }
      </MoviesRow>

      <MoviesTitle>{movies.trending.title}</MoviesTitle>
      <MoviesRow>
        {
          movies.trending.loading ? (
            <Swiper
              {...SwiperProps}      
            >
              {movies.trending.data.map((trending) => (
                  <SwiperSlide> 
                    <MoviesPoster
                      key={trending.id}
                      src={"https://image.tmdb.org/t/p/w300" + trending.poster_path}
                      alt={trending.name}
                    />
                  </SwiperSlide>
                ))}
            </Swiper>
          ) : 
          ( 
            movies.trending.error == null ? (
              <RotatingLines width="60"/>
            ) : (
              <ErrorPoster>
                Ups! Something went wrong :( 
                <br />
                {movies.trending.error}
              </ErrorPoster>     
            )      
          )
        }
      </MoviesRow>      

      <MoviesTitle>{movies.nowPlaying.title}</MoviesTitle>
      <MoviesRow>
        {
          movies.nowPlaying.loading ? (
            <Swiper
              {...SwiperProps}          
            >
              {movies.nowPlaying.data.map((nowPlaying) => (
                  <SwiperSlide> 
                    <MoviesPoster
                      key={nowPlaying.id}
                      src={"https://image.tmdb.org/t/p/w300" + nowPlaying.poster_path}
                      alt={nowPlaying.name}
                    />
                  </SwiperSlide>
                ))}
            </Swiper>
          ) : 
          ( 
            movies.nowPlaying.error == null ? (
              <RotatingLines width="60"/>
            ) : (
              <ErrorPoster>
                Ups! Something went wrong :( 
                <br />
                {movies.nowPlaying.error}
              </ErrorPoster>     
            )      
          )
        }
      </MoviesRow>

      <MoviesTitle>{movies.popular.title}</MoviesTitle>
      <MoviesRow>
        {
          movies.popular.loading ? (
            <Swiper
              {...SwiperProps}         
            >
              {movies.popular.data.map((popular) => (
                  <SwiperSlide> 
                    <MoviesPoster
                      key={popular.id}
                      src={"https://image.tmdb.org/t/p/w300" + popular.poster_path}
                      alt={popular.name}
                    />
                  </SwiperSlide>
                ))}
            </Swiper>
          ) : 
          ( 
            movies.popular.error == null ? (
              <RotatingLines width="60"/>
            ) : (
              <ErrorPoster>
                Ups! Something went wrong :( 
                <br />
                {movies.popular.error}
              </ErrorPoster>     
            )      
          )
        }
      </MoviesRow>

      <MoviesTitle>{movies.topRated.title}</MoviesTitle>
      <MoviesRow>
        {
          movies.topRated.loading ? (
            <Swiper
              {...SwiperProps}         
            >
              {movies.topRated.data.map((topRated) => (
                  <SwiperSlide> 
                    <MoviesPoster
                      key={topRated.id}
                      src={"https://image.tmdb.org/t/p/w300" + topRated.poster_path}
                      alt={topRated.name}
                    />
                  </SwiperSlide>
                ))}
            </Swiper>
          ) : 
          ( 
            movies.topRated.error == null ? (
              <RotatingLines width="60"/>
            ) : (
              <ErrorPoster>
                Ups! Something went wrong :( 
                <br />
                {movies.topRated.error}
              </ErrorPoster>     
            )      
          )
        }
      </MoviesRow>

      <MoviesTitle>{movies.upcoming.title}</MoviesTitle>
      <MoviesRow>
        {
          movies.upcoming.loading ? (
            <Swiper
              {...SwiperProps}          
            >
              {movies.upcoming.data.map((upcoming) => (
                  <SwiperSlide> 
                    <MoviesPoster
                      key={upcoming.id}
                      src={"https://image.tmdb.org/t/p/w300" + upcoming.poster_path}
                      alt={upcoming.name}
                    />
                  </SwiperSlide>
                ))}
            </Swiper>
          ) : 
          ( 
            movies.upcoming.error == null ? (
              <RotatingLines width="60"/>
            ) : (
              <ErrorPoster>
                Ups! Something went wrong :( 
                <br />
                {movies.upcoming.error}
              </ErrorPoster>     
            )      
          )
        }
      </MoviesRow>
    </MoviesContainer>
  );
}

export default Movies;
