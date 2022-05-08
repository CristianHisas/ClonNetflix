
import React from "react";
import {
  BannerButton,
  BannerContainer,
  BannerDescription,
  BannerTitle,
} from "./Banner.styles";

function Banner({ movie }) {
  return (
    <BannerContainer background={movie?.backdrop_path}>
      <BannerTitle>{movie?.name}</BannerTitle>
      <BannerDescription>{movie?.overview}</BannerDescription>
      <BannerButton>Play</BannerButton>
      <BannerButton>My List</BannerButton>
    </BannerContainer>
  );
}

export default Banner;