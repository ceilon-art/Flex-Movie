import React from "react";

import { Container } from "./styles";

import Row from "../../components/Row/Row";

import requests from "../../services/requests";

const HomePage: React.FC = () => {
  return (
    <Container>
      <Row
        title="ORIGINAIS NETFLIX"
        fetchUrl={requests.fetchNetflixOriginals}
      />
      <Row title="Mais Buscados" fetchUrl={requests.fetchTrending} />
      <Row title="Mais Vistos" fetchUrl={requests.fetchTopRated} />
      <Row title="Filmes de Ação" fetchUrl={requests.fetchActionMovies} />
      <Row title="Filmes de Comédia" fetchUrl={requests.fetchComedyMovies} />
      {/* <Row title="Filmes de Terror" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Filmes de Romance" fetchUrl={requests.fetchRomanceMovies} /> */}
      <Row title="Documentários" fetchUrl={requests.fetchDocumentaries} />
    </Container>
  );
};

export default HomePage;
