import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import MovieInfo from "./components/MovieInfo";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="movie/:imdbID" element={<MovieInfo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
