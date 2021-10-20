import styled from 'styled-components';

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  max-width: 1180px;
  margin: 0 auto;
  padding: 0 20px;
`;

export const HeaderLogo = styled.div`
    width: 45%;
    height:auto;
`;

export const HeaderTitle = styled.div`
    display:block;
    margin:auto;

    h1 {
      font-size:6rem;
      margin-bottom:10px;
    }
    h2 {
      font-size:2.9rem;
      letter-spacing:5px;
    }
`;
