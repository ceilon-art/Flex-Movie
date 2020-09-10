import React, { useState, useEffect } from "react";
import YouTube from "react-youtube";

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

// interface Youtube {
//   trailerUrl: string;
//   opts: string;
// }

const Row: React.FC<Row> = ({ title, fetchUrl, isLargeRow, className }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await api.get(fetchUrl);
      setMovies(request.data.results);

      return request;
    }

    fetchData();
  }, [fetchUrl]);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters,
      autoplay: 1,
    },
  };

  return (
    <Container>
      <Posters>
        <Title>{title}</Title>
        <Card>
          {movies.map((movie: Movie) => (
            <CardImage
              key={movie.id}
              className={className}
              src={`${base_url}${
                isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.name}
            />
          ))}
        </Card>
        {/* <YouTube videoId={trailerUrl} opts={opts} /> */}
      </Posters>
    </Container>
  );
};

export default Row;
