import React, { useEffect } from "react";
import Footer from "./Footer";
import Movies from "./Movies";
import { useDispatch } from "react-redux";
import { addMovies, fetchAsyncShows } from "../features/MovieReducers";
import axios from "axios";
import Hero from "./Hero";
import { useState } from "react";

const Home = () => {
  const [query, setQuery] = useState("");

  const dispatch = useDispatch();

  const fetchApi = async () => {
    // &s => for the search word
    // &type => for the type of data "movie, series, episode etc..."
    const response = await axios.get(
      `http://www.omdbapi.com/?apikey=6453f1bc&s="batman"&type=movie`
    );

    // const data = await response.json();
    console.log(response.data);
    dispatch(addMovies(response.data));
  };

  const fetchShowsApi = async () => {
    // &s => for the search word
    // &type => for the type of data "movie, series, episode etc..."
    const response = await axios.get(`?apiKey=6453f1bc&s=${query}&type=series`);

    // const data = await response.json();
    console.log(response.data);
    dispatch(addShows(response.data));
  };

  useEffect(() => {
    fetchApi();
    fetchShowsApi();
  }, [query]);

  useEffect(() => {
    dispatch(fetchAsyncShows());
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setQuery(e.target.value);
  };

  return (
    <div>
      <div class="input-group flex-nowrap">
        <div className="w-70 container text-center d-flex justify-content-center align-items-enter">
          <div className="d-flex justify-content-center align-items-center">
            <form class="example" action="action_page.php">
              <input
                onChange={(e) => setQuery(e.target)}
                type="text"
                placeholder="Search.."
                name="search"
              />
              <button onSubmit={handleSubmit} type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </div>
      {/* <Hero /> */}
      <Movies />
      <Footer />
    </div>
  );
};

export default Home;
