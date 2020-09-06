import React, { useEffect, useState } from "react";
import api from "../../services/axios";
import requests from "../../services/requests";

import { Container, BannerContent, Title, BannerButtons } from "./styles";

interface Movie {
  name?: string;
  title?: string;
  backdrop_path?: string;
  original_name?: string;
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

  return (
    // <Container>
    //   {movies.map((movie: Movie) => {
    //     return (
    //       <div
    //         style={{
    //           backgroundSize: "cover",
    //           backgroundImage: `url(
    //           "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
    //         )`,
    //           backgroundPosition: "center center",
    //         }}
    //       >
    //         <BannerContent>
    //           <Title>
    //             {movie?.title || movie?.name || movie?.original_name}
    //           </Title>

    //           <BannerButtons></BannerButtons>
    //         </BannerContent>
    //       </div>
    //     );
    //   })}
    // </Container>

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

        <BannerButtons></BannerButtons>
      </BannerContent>
    </Container>
  );
};

export default Banner;
