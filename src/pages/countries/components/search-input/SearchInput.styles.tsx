import styled from 'styled-components';
import searchLight from '../../../../assets/icons/search-light.svg';
import searchDark from '../../../../assets/icons/search-dark.svg';
import { device } from '../../../../styles/responsive';
interface IIconProps {
  currentTheme: string;
}

export const SearchBox = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 40px;
  width: 100%;
  height: 48px;
  background-color: ${({ theme }) => theme.primaryColor};
  box-shadow: 0px 2px 9px rgba(0, 0, 0, 0.0532439);
  border-radius: 5px;

  ${device.tablet} {
    margin: 24px auto 48px 0;
    width: 380px;
  }

  ${device.smallDesktop} {
    width: 480px;
  }
`;

export const Input = styled.input`
  width: 100%;
  font-size: 12px;
  line-height: 20px;
  color: ${({ theme }) => theme.inputTextColor};
  background-color: transparent;

  &::placeholder {
    color: ${({ theme }) => theme.inputTextColor};
  }
`;

export const Icon = styled.img.attrs<IIconProps>(({ currentTheme }) => ({
  src: currentTheme === 'dark theme' ? searchLight : searchDark,
}))<IIconProps>`
  padding: 16px 26px 16px 32px;
`;
