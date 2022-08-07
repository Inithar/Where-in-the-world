import styled from 'styled-components';
import moon from '../../assets/icons/moon.svg';
import { device } from '../../styles/responsive';
import { DefaultContainer } from '../default-container/DefaultContainer';

export const Wrapper = styled.div`
  width: 100%;
  height: 80px;
  background-color: ${({ theme }) => theme.primaryColor};
`;

export const Container = styled(DefaultContainer)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;

  ${device.smallDesktop} {
    padding: 0 80px;
  }
`;

export const Slogan = styled.h1`
  font-size: 14px;
  line-height: 20px;
  font-weight: 800;
  color: ${({ theme }) => theme.textColor};

  ${device.tablet} {
    font-size: 24px;
    line-height: 33px;
  }
`;

export const ThemeButton = styled.button`
  display: flex;
  align-items: center;
  font-size: 12px;
  line-height: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.textColor};
  cursor: pointer;

  ${device.tablet} {
    font-size: 16px;
    line-height: 22px;
  }
`;

export const Icon = styled.img.attrs({
  src: moon,
})`
  margin-right: 10px;
  margin-bottom: 3px;
  width: 16px;
  height: 16px;

  ${device.tablet} {
    width: 20px;
    height: 20px;
  }
`;
