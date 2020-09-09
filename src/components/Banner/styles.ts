import styled from "styled-components";

export const Container = styled.header`
  color: var(--color-title-in-primary);
  object-fit: contain;
  height: 44.8rem;
`;

export const BannerContent = styled.div`
  margin-left: 3rem;
  padding-top: 14rem;
  height: 19rem;
  /* display: flex;
  flex-direction: column; */
`;

export const Title = styled.h1`
  font-size: 5rem;
  font-weight: 800;
  padding-bottom: 1.8rem;
`;

export const BannerButtons = styled.div`
  display: flex;
  align-items: center;
`;

export const ButtonPlay = styled.button`
  cursor: pointer;
  color: var(--color-title-in-primary);
  height: 4rem;
  outline: none;
  border: none;
  font-weight: 700;
  border-radius: 0.2vw;
  padding-left: 2rem;
  padding-right: 2rem;
  margin-right: 1rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  background-color: rgba(51, 51, 51, 0.5);

  &:hover {
    color: var(--color-background);
    background-color: #e6e6e6;
    transition: all 0.2s;
  }
`;

export const ButtonMyList = styled.button`
  cursor: pointer;
  color: var(--color-title-in-primary);
  height: 4rem;
  outline: none;
  border: none;
  font-weight: 700;
  border-radius: 0.2vw;
  padding-left: 2rem;
  padding-right: 2rem;
  margin-right: 1rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  background-color: rgba(51, 51, 51, 0.5);

  &:hover {
    color: var(--color-background);
    background-color: #e6e6e6;
    transition: all 0.2s;
  }
`;

export const Description = styled.h1`
  width: 45rem;
  line-height: 2.3rem;
  padding-top: 1rem;
  font-size: 1.8rem;
  max-width: 36rem;
  height: 8rem;
`;
