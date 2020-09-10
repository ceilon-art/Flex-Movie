import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  padding: 2rem;
  height: 7rem;
  z-index: 1;

  display: flex;
  justify-content: space-between;
  align-items: center;

  transition-timing-function: ease-in;
  transition: all 0.3s;

  &.nav-black {
    background-color: var(--color-background);
  }
`;

export const Brand = styled.img`
  position: fixed;
  left: 2rem;
  width: 10rem;
  object-fit: contain;
`;

export const ProfileImg = styled.img`
  position: fixed;
  right: 2rem;
  width: 3rem;
  object-fit: contain;
`;
