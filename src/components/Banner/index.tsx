import React, { useEffect, useState } from "react";
import api from "../../services/axios";
import requests from "../../services/requests";

import {
  Container,
  BannerContent,
  Title,
  BannerButtons,
  ButtonPlay,
  ButtonMyList,
  Description,
} from "./styles";

interface Movie {
  name?: string;
  title?: string;
  backdrop_path?: string;
  original_name?: string;
  overview?: string;
}

const Banner: React.FC = () => {
  const [movie, setMovie] = useState<Movie>();

  useEffect(() => {
    async function fetchData() {
      const request = await api.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }

    fetchData();
  }, []);

  function truncate(str: string | undefined, n: number) {
    if (typeof str === "string") {
      if (str.length > n) {
        return str.substr(0, n - 1) + "...";
      }
    } else {
      return "";
    }
  }

  return (
    <Container
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(
        "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
      )`,
        backgroundPosition: "center center",
      }}
    >
      <BannerContent>
        <Title>{movie?.title || movie?.name || movie?.original_name}</Title>

        <BannerButtons>
          <ButtonPlay>Iniciar</ButtonPlay>
          <ButtonMyList>Minha Lista</ButtonMyList>
        </BannerButtons>

        <Description>{truncate(movie?.overview, 250)}</Description>
      </BannerContent>
    </Container>
  );
};

export default Banner;
