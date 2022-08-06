import styled from 'styled-components';

interface FlagProps {
  src: string;
}

export const Wrapper = styled.div`
  margin-bottom: 40px;
  width: 100%;
  height: 336px;
  background-color: ${({ theme }) => theme.primaryColor};
  box-shadow: 0px 0px 7px 2px rgba(0, 0, 0, 0.03);
  border-radius: 5px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const CountryData = styled.div`
  padding: 24px 0 46px 24px;
`;

export const Flag = styled.img.attrs(({ src }) => ({ src }))<FlagProps>`
  width: 264px;
  height: 160px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`;

export const CountryName = styled.h2`
  margin: 0 0 16px;
  font-size: 18px;
  line-height: 26px;
  font-weight: 800;
  color: ${({ theme }) => theme.textColor};
`;

export const Property = styled.p`
  margin: 8px 0;
  font-size: 14px;
  line-height: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.textColor};

  &:last-child {
    margin-bottom: 0;
  }
`;

export const PropertyValue = styled.span`
  font-weight: 300;
`;
