import styled from 'styled-components';
import arrow from '../../../../assets/icons/left-arrow.svg';
import { device } from '../../../../styles/responsive';

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 64px;
  width: 104px;
  height: 32px;
  font-size: 14px;
  line-height: 20px;
  font-weight: 300;
  color: ${({ theme }) => theme.textColor};
  background-color: ${({ theme }) => theme.primaryColor};
  box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.3);
  border-radius: 2px;
  transition: filter 0.2s;

  &:hover {
    color: ${({ theme }) => theme.textColor};
    background-color: ${({ theme }) => theme.primaryColor};
    filter: brightness(1.1);
    cursor: pointer;
  }

  ${device.tablet} {
    margin-bottom: 100px;
  }
`;

export const ArrowIcon = styled.img.attrs({
  src: arrow,
})`
  margin-right: 10px;
`;
