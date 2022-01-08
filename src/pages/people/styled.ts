import styled from 'styled-components';

export const PageHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
  justify-content: space-between;
`;

export const ItemsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  justify-content: space-between;
  align-items: flex-start;

  li {
    padding: 20px;
    border: 1px #333 solid;
    border-radius: 5px;

    h3 {
      margin-bottom: 5px;
    }
  }
`;
