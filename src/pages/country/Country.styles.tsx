import styled from 'styled-components';
import { DefaultContainer } from '../../components/default-container/DefaultContainer';

interface IFlagProps {
  src: string;
}

export const Wrapper = styled(DefaultContainer)`
  padding: 40px 28px 62px;
  background-color: ${({ theme }) => theme.backgroundColor};
`;

export const Flag = styled.img.attrs(({ src }) => ({ src }))<IFlagProps>`
  width: 100%;
  height: 230px;
  border-radius: 5px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;
