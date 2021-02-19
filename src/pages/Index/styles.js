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
  min-height: calc(100vh - 100px);
  height: 100%;
  margin-top: -20px;
`;

export const Section = styled.section`
  width: 100%;
`;

export const Button = styled.button`
  padding: 10px 35px;
  background: #72AAFF;
  color: #1C223A;
  font-weight: bold;
  border: none;
  border-radius: 2px;
  margin: 20px auto;
`;

export const Step = styled.div`
  margin-top: 30px;
  background: #192741;
  border-radius: 8px;
  padding: 30px;
  h4{
    margin: 0;
  }

`;

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