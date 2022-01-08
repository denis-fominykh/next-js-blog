import Link from 'next/link';
import styled from 'styled-components';

export const Navbar = styled.nav`
  display: flex;
  padding: 10px 30px;
  align-items: center;
  margin-bottom: 30px;
  background-color: #f4f4f4;
  text-transform: uppercase;
  justify-content: space-between;

  ul {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  li {
    margin-left: 20px;
  }

  ul {
    li {
      a {
        color: #000;
        font-size: 14px;
        font-weight: bold;
        text-transform: uppercase;

        &:hover {
          color: #333;
          border-bottom: 1px solid #333;
        }
      }
    }
  }
`;

export const LogoLink = styled(Link)`
  font-size: x-large;
  text-transform: uppercase;
`;

export const Container = styled.div`
  width: 100%;
  margin: auto;
  padding: 0 30px;
  max-width: 960px;
`;
