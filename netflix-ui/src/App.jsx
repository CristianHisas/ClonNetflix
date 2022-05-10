import { useState, useEffect } from 'react';
import axios from 'axios';
import Movies from "./components/Movies";
import Banner from "./components/Banner";
import Header from './components/Header';
import {URL, API_KEY} from "./constants/Constants";
import {endpoints} from "./endpoints/Endpoints";

function App() {

  const [originals, setOriginals] = useState([]);
  const [trending, setTrending] = useState([]);
  const [nowPlaying, setNowPlaying] = useState([]);
  const [popular, setPopular] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [upcoming, setUpcoming] = useState([]);  
  
  useEffect( () => {
    // Load Originals
    axios
      .get(`${URL}${endpoints.originals}`, {
        params: {
          api_key: API_KEY,
        },
      })
      .then((res) => setOriginals(res.data.results));

    // Load Trending
    axios
    .get(`${URL}${endpoints.trending}`, {
      params: {
        api_key: API_KEY,
      },
    })
    .then((res) => setTrending(res.data.results));

    // Load Now Playing
    axios
    .get(`${URL}${endpoints.nowPlaying}`, {
      params: {
        api_key: API_KEY,
      },
    })
    .then((res) => setNowPlaying(res.data.results));

    // Load Popular
    axios
    .get(`${URL}${endpoints.popular}`, {
      params: {
        api_key: API_KEY,
      },
    })
    .then((res) => setPopular(res.data.results));

    // Load Top Rated
    axios
    .get(`${URL}${endpoints.topRated}`, {
      params: {
        api_key: API_KEY,
      },
    })
    .then((res) => setTopRated(res.data.results));

    // Load Set Upcoming
    axios
    .get(`${URL}${endpoints.upcoming}`, {
      params: {
        api_key: API_KEY,
      },
    })
    .then((res) => setUpcoming(res.data.results));

  }, []);

  const movieObj = {
    "originals": {
      "title": "Netflix Originals",
      "data": originals
    },
    "trending": {
      "title": "Trending",
      "data": trending,
    },
    "nowPlaying": {
      "title": "Now Playing",
      "data": nowPlaying,

    },
    "popular": {
      "title": "Popular",
      "data": popular,

    },
    "topRated": {
      "title": "Top Rated",
      "data": topRated,
    },
    "upcoming": {
      "title": "Upcoming",
      "data": upcoming
    }
  }

  const randomOriginals = movieObj.originals.data[Math.floor(Math.random() * movieObj.originals.data.length)]

  return (
    <>
    <Header />
    <Banner movie={randomOriginals} />
    <Movies movies={movieObj}/>
    </>
  );
}

export default App;
