import React from "react";
import { useGetMovies } from "../hooks/useGetMovies";
import {
  BannerButton,
  BannerContainer,
  BannerDescription,
  BannerTitle,
} from "./styles/Banner.styles";

function Banner({ endpoint }) {

  // hacer esta llamada cada 15 segundos para mostrar una transicion de originals
  const [random, loading, error] = useGetMovies(endpoint);

  const randomMovie = random[Math.floor(Math.random() * random.length)]

  return (
    <BannerContainer background={loading ? randomMovie.backdrop_path : ''}>
      <BannerTitle>{loading ? randomMovie.name : 'Ups! Something went wrong :('}</BannerTitle>
      <BannerDescription>{loading ? randomMovie.overview : error}</BannerDescription>
      {
        loading ? (
          <>
          <BannerButton>Play</BannerButton>
          <BannerButton>My List</BannerButton>
          </>
        ) : 
        (
          <></>
        )
      }
    </BannerContainer>
  );
}

export default Banner;