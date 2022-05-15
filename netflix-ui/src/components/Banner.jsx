import React from "react";
import { useGetMovies } from "../hooks/useGetMovies";
import {
  BannerButton,
  BannerContainer,
  BannerDescription,
  BannerTitle,
} from "./styles/Banner.styles";

// Spinner
import { RotatingLines } from 'react-loader-spinner';

function Banner({ endpoint }) {

  const [random, loading, error] = useGetMovies(endpoint);

  // PENDIENTE: Intentar que se aplique cada 15 segundos
  const randomMovie = random[Math.floor(Math.random() * random.length)]

  return (
    <BannerContainer background={loading ? randomMovie.backdrop_path : ''}>
      {
        loading ? (
          <>
            <BannerTitle>{ randomMovie?.name }</BannerTitle>
            <BannerDescription>{ randomMovie?.overview }</BannerDescription>
            <BannerButton>Play</BannerButton>
            <BannerButton>My List</BannerButton>
          </>
        ) : (
          error == null ? (
            <BannerTitle>
              <RotatingLines width="100"/>
            </BannerTitle>
          ) : (
            <BannerDescription>{ error }</BannerDescription>
          )
        )
      }          
    </BannerContainer>
  );
}

export default Banner;