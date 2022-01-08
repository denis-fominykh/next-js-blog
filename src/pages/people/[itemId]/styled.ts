import Link from 'next/link';
import styled from 'styled-components';

export const PageHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
  justify-content: space-between;
`;

export const ButtonLink = styled(Link)`
  color: #fff;
  margin: 5px;
  border: none;
  cursor: pointer;
  font-size: 15px;
  background: #000;
  padding: 10px 20px;
  border-radius: 5px;
  font-family: inherit;
  display: inline-block;
  text-decoration: none;

  &:focus {
    outline: none;
  }

  &:active {
    transform: scale(0.98);
  }
`;

export const ButtonReverseLink = styled(ButtonLink)`
  color: #000;
  background: #fff;
  border-color: #000;
`;

export const PageContent = styled.div``;
