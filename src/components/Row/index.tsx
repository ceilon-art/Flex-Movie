import React, { useState, useEffect } from "react";
import YouTube from "react-youtube";
// @ts-ignore
import movieTrailer from "movie-trailer";

import api from "../../services/axios";

import { Container, Title, Card, CardImage, Posters } from "./styles";

const base_url = "https://image.tmdb.org/t/p/original/";

interface Row {
  title: string;
  fetchUrl: string;
  isLargeRow?: boolean;
  className?: string;
}

interface Movie {
  id: number;
  name: string;
  poster_path: string;
  backdrop_path: string;
}

const Row: React.FC<Row> = ({ title, fetchUrl, isLargeRow, className }) => {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState<string | null>();

  useEffect(() => {
    async function fetchData() {
      const request = await api.get(fetchUrl);
      setMovies(request.data.results);

      return request;
    }

    fetchData();
  }, [fetchUrl]);

  type Options = {
    height: string;
    width: string;
    playerVars: {
      autoplay: 1;
    };
  };

  const opts: Options = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const handleClick = (movie: Movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.name || "")
        .then((url: string) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error: Error) => console.log(error));
    }
  };

  return (
    <Container>
      <Posters>
        <Title>{title}</Title>
        <Card>
          {movies.map((movie: Movie) => (
            <CardImage
              key={movie.id}
              onClick={() => handleClick(movie)}
              className={className}
              src={`${base_url}${
                isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.name}
            />
          ))}
        </Card>
        {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
      </Posters>
    </Container>
  );
};

export default Row;
