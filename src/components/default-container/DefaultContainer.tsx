import styled from 'styled-components';
import { device } from '../../styles/responsive';

export const DefaultContainer = styled.div`
  position: relative;
  margin: 0 auto;
  padding: 0 16px;
  max-width: 1440px;

  ${device.smallDesktop} {
    padding: 0 79px;
  }
`;
