import styled from 'styled-components';

export const Page = styled.div`
  padding: 0px;
`;

export const Header = styled.div`
  text-align: center;
  color: #72AAFF;
  background-color: #1C223A;
  padding: 24px 0;
  margin-bottom: 20px;

  h1, p{
    margin: 0;
  }

  span{
    color: #ffffff80;
  }
`;

export const Body = styled.div`
  background: #1D2D4B;
  color: #eee;
  padding: 30px 30px;
  height: calc(100vh - 112px);
  margin-top: -20px;
`;

export const Section = styled.section``;

export const Label = styled.span`
  position: absolute;
  top: 20px;
  left: 20px;
`;

export const FlexRow = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 50px 30px;
  border: solid 1px #ffffff20;
  border-radius: 6px;
`;