import styled from 'styled-components';
import arrow from '../../../../assets/icons/arrow.svg';

const RoundedContainer = styled.div`
  color: ${({ theme }) => theme.textColor};
  background-color: ${({ theme }) => theme.primaryColor};
  box-shadow: 0px 2px 9px rgba(0, 0, 0, 0.0532439);
  border-radius: 5px;
`;

export const Dropdown = styled.div`
  position: relative;
  margin-top: 24px;
  width: 200px;
`;

export const Button = styled(RoundedContainer)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32px;
  padding: 18px 18px 18px 24px;
  height: 48px;
  font-size: 14px;
  line-height: 20px;
  cursor: pointer;
  user-select: none;
`;

export const ArrowIcon = styled.img.attrs({ src: arrow })`
  width: 10px;
  height: 10px;
`;

export const Content = styled(RoundedContainer)`
  position: absolute;
  top: 48px;
  margin-top: 4px;
  padding: 18px 24px;
  width: 100%;
  transition: filter 0.3s;
`;

export const Item = styled.div`
  padding-bottom: 8px;
  cursor: pointer;
  user-select: none;

  &:last-child {
    margin-bottom: 0;
  }

  &:hover {
    filter: brightness(0.7);
  }
`;
