import styled from 'styled-components';
import search from '../../../../assets/icons/search.svg';

export const SearchBox = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 40px;
  width: 100%;
  height: 48px;
  background-color: ${({ theme }) => theme.primaryColor};
  box-shadow: 0px 2px 9px rgba(0, 0, 0, 0.0532439);
  border-radius: 5px;
`;

export const Input = styled.input`
  font-size: 12px;
  line-height: 20px;
  color: ${({ theme }) => theme.inputTextColor};
  background-color: transparent;

  &::placeholder {
    color: ${({ theme }) => theme.inputTextColor};
  }
`;

export const Icon = styled.img.attrs({ src: search })`
  padding: 16px 26px 16px 32px;
`;
