import React, { useState, useEffect } from "react";

import api from "../../services/axios";

import { Container, Title, Card, CardImage, Posters } from "./styles";

const base_url = "https://image.tmdb.org/t/p/original/";

interface Row {
  title: string;
  fetchUrl: string;
}

interface Movie {
  id: number;
  name: string;
  poster_path: string;
}

const Row: React.FC<Row> = ({ title, fetchUrl }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await api.get(fetchUrl);
      setMovies(request.data.results);

      return request;
    }

    fetchData();
  }, [fetchUrl]);

  return (
    <Container>
      <Posters>
        <Title>{title}</Title>
        <Card>
          {movies.map((movie: Movie) => (
            <CardImage
              key={movie.id}
              src={`${base_url}${movie.poster_path}`}
              alt={movie.name}
            />
          ))}
        </Card>
      </Posters>
    </Container>
  );
};

export default Row;
