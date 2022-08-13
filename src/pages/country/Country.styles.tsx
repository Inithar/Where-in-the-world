import styled from 'styled-components';
import { device } from '../../styles/responsive';

interface IFlagProps {
  src: string;
}

export const Wrapper = styled.div`
  padding: 40px 28px 62px;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.backgroundColor};
`;

export const Flag = styled.img.attrs(({ src }) => ({ src }))<IFlagProps>`
  width: 100%;
  height: 230px;
  border-radius: 5px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

  ${device.mobile} {
    height: 300px;
  }

  ${device.tablet} {
    display: block;
    margin: 0 auto;
    width: 60%;
    height: auto;
  }

  ${device.desktop} {
    margin-right: 144px;
    margin-left: 0;
    width: 560px;
    height: 400px;
  }
`;

export const CountryDataContainer = styled.div``;
export const CountryContainer = styled.div`
  ${device.desktop} {
    display: flex;
    align-items: center;
  }
`;
