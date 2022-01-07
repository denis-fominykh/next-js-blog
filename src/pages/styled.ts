import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 2rem;
`;

export const Main = styled.main`
  flex: 1;
  display: flex;
  padding: 4rem 0;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

export const Footer = styled.footer`
  flex: 1;
  display: flex;
  padding: 2rem 0;
  align-items: center;
  justify-content: center;
  border-top: 1px solid #eaeaea;

  && a {
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const Title = styled.h1`
  margin: 0;
  font-size: 4rem;
  line-height: 1.15;
  text-align: center;

  && a {
    color: #0070f3;
    text-decoration: none;

    &:hover,
    &:focus,
    &:active {
      text-decoration: underline;
    }
  }
`;

export const Description = styled.p`
  margin: 4rem 0;
  line-height: 1.5;
  font-size: 1.5rem;
  text-align: center;
`;

export const Code = styled.code`
  padding: 0.75rem;
  font-size: 1.1rem;
  border-radius: 5px;
  background: #fafafa;
  font-family: Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono,
    Bitstream Vera Sans Mono, Courier New, monospace;
`;

export const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 800px;
  align-items: center;
  justify-content: center;

  @media (max-width: 600px) {
    width: 100%;
    flex-direction: column;
  }
`;

export const Card = styled.a`
  margin: 1rem;
  color: inherit;
  padding: 1.5rem;
  text-align: left;
  max-width: 300px;
  border-radius: 10px;
  text-decoration: none;
  border: 1px solid #eaeaea;
  transition: color 0.15s ease, border-color 0.15s ease;

  &:hover,
  &:focus,
  &:active {
    color: #0070f3;
    border-color: #0070f3;
  }

  && h2 {
    font-size: 1.5rem;
    margin: 0 0 1rem 0;
  }

  && p {
    margin: 0;
    line-height: 1.5;
    font-size: 1.25rem;
  }
`;

export const Logo = styled.span`
  height: 1em;
  margin-left: 0.5rem;
`;
