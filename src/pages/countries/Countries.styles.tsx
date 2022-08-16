import styled from 'styled-components';
import { device } from '../../styles/responsive';

export const Wrapper = styled.div`
  padding: 24px 0 65px;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.backgroundColor};
`;

export const CountriesContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 40px;

  ${device.smallDesktop} {
    gap: 75px;
  }
`;

export const FilteringElementsContainer = styled.div`
  ${device.tablet} {
    display: flex;
  }
`;
