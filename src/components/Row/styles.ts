import styled from "styled-components";

export const Container = styled.div`
  display: flex;
`;

export const Posters = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 2rem;
`;

export const Title = styled.h2`
  padding: 1.2rem;
  font-size: 2.6rem;
  color: var(--color-title-in-primary);
`;

export const Card = styled.div`
  display: flex;
  padding: 2rem;

  overflow-y: hidden;
  overflow-x: auto;
`;

export const CardImage = styled.img`
  object-fit: contain;
  width: 100%;
  height: 15rem;
  margin-right: 0.8rem;
  transition: transform 450ms;
  cursor: pointer;

  &:hover {
    transform: scale(1.08);
    opacity: 1;
  }

  &.Originals {
    height: 25rem;

    &:hover {
      transform: scale(1.09);
    }
  }
`;
