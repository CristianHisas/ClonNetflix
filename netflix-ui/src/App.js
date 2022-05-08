
import { useState, useEffect } from 'react';
import axios from 'axios';
import Movies from "./components/Movies";

const URL = "https://api.themoviedb.org/3";
const API_KEY = "780f20853bb18d77da6b6af9f044cc5c";

const endpoints = {
  originals: "/discover/tv",
  trending: "/trending/all/week",
  now_playing: "/movie/now_playing",
  popular: "/movie/popular",
  top_rated: "/movie/top_rated",
  upcoming: "/movie/upcoming",
};

function App() {

  const [originals, setOriginals] = useState([]);
  const [trending, setTrending] = useState([]);
  const [nowPlaying, setNowPlaying] = useState([]);
  const [popular, setPopular] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [upcoming, setUpcoming] = useState([]);  
  
  useEffect(() => {
    // Load Originals
    axios
      .get(`${URL}${endpoints.originals}`, {
        params: {
          api_key: API_KEY,
        },
      })
      .then((res) => setOriginals(res.data.results));
  
    // Get other categories with the same pattern here
  
  }, []);

  return (
    <>
      <Movies title="Netflix originals" movies={originals}/>
    </>
  );
}

export default App;
