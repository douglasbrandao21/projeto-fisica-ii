import styled from 'styled-components';

export const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin: 0 20px;
`;

export const Name = styled.h4`
  margin-top: -10px;
`;

export const RangeInput = styled.input``;

export const InputNumber = styled.input`
  height: 30px;
  border: solid 1px #00000020;
  background: #192741;
  color: #fff;
  padding-left: 12px;
  padding-right: 12px;
  margin-top: 10px;
  outline: none;
  border-radius: 4px;
  transition: all 0.3s;

  &:focus {
    border: solid 1px #72AAFF;
  }
`;