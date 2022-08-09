import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-top: 32px;
`;

export const Header = styled.p`
  margin-top: 0;
  margin-bottom: 6px;
  font-size: 16px;
  line-height: 24px;
  font-weight: 600;
  color: ${({ theme }) => theme.textColor};
`;

export const BordersContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const BorderCountry = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  margin-top: 10px;
  width: 96px;
  height: 28px;
  font-size: 12px;
  line-height: 16px;
  font-weight: 300;
  color: ${({ theme }) => theme.textColor};
  background-color: ${({ theme }) => theme.primaryColor};
  box-shadow: 0px 0px 4px 1px rgba(17, 21, 23, 0.25);
  border-radius: 2px;
`;

export const Message = styled.p`
  margin-top: 10px;
  font-size: 14px;
  font-weight: 300;
  color: ${({ theme }) => theme.textColor};
`;
