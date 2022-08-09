import styled from 'styled-components';

interface IDataSectionProps {
  marginTop?: string;
}

export const DataContainer = styled.div`
  margin-top: 44px;
`;

export const CountryName = styled.p`
  margin: 0;
  font-size: 22px;
  line-height: 30px;
  font-weight: 800;
  color: ${({ theme }) => theme.textColor};
`;

export const DataSection = styled.div<IDataSectionProps>`
  margin-top: ${({ marginTop }) => (marginTop ? marginTop : '0')};
`;

export const Property = styled.p`
  margin: 0;
  font-size: 14px;
  line-height: 32px;
  font-weight: 600;
  color: ${({ theme }) => theme.textColor};
`;

export const PropertyValue = styled.span`
  font-weight: 300;
`;
