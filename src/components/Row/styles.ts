import { title } from "process";
import styled from "styled-components";

export const Container = styled.div`
  margin-top: 4rem;
  display: flex;
`;

export const Posters = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Title = styled.h2``;

export const Card = styled.div`
  display: flex;
  padding: 2rem;

  overflow-y: hidden;
  overflow-x: scroll;
`;

export const CardImage = styled.img`
  object-fit: contain;
  width: 100%;
  height: 15rem;
  /* max-height: 40rem; */
  margin-right: 0.9rem;
  transition: transform 450ms;
  cursor: pointer;

  &:hover {
    transform: scale(1.08);
    opacity: 1;
  }
`;
