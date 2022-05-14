import { useState, useEffect } from 'react';
import axios from 'axios';
import {URL, API_KEY} from "../constants/Constants";

export const useGetMovies = (endpoint) => {
  const [movies, setMovies] = useState({
    data: [],
    loading: false,
    error: null
  });

  useEffect(() =>  {
    getMovies();
  }, []);

  const getMovies = async () => {
    try {
      await axios
              .get(`${URL}${endpoint}`, {params: { api_key: API_KEY }})
              .then((res) => setMovies({
                data: res.data.results,
                loading: true,
                error: null
              }));
    } catch (e) {
      setMovies({
        data: [],
        loading: false,
        error: e
      })
    }
  }

  return [movies.data, movies.loading, movies.error];
}