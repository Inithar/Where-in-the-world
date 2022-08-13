import styled from 'styled-components';
import { device } from '../../../../styles/responsive';

interface IDataSectionProps {
  marginTop?: string;
  isRightSection?: boolean;
  isLeftSection?: boolean;
}

export const DataContainer = styled.div`
  margin-top: 44px;

  ${device.desktop} {
    margin-top: 0;
  }
`;

export const CountryName = styled.p`
  margin: 0;
  font-size: 22px;
  line-height: 30px;
  font-weight: 800;
  color: ${({ theme }) => theme.textColor};

  ${device.tablet} {
    font-size: 32px;
    line-height: 43px;
    text-align: center;
  }

  ${device.desktop} {
    text-align: start;
  }
`;

export const DataSectionsContainer = styled.div`
  ${device.mobile} {
    display: flex;
  }

  ${device.tablet} {
    justify-content: center;
  }

  ${device.desktop} {
    justify-content: start;
  }
`;

export const DataSection = styled.div<IDataSectionProps>`
  margin-top: ${({ marginTop }) => (marginTop ? marginTop : '0')};

  ${device.mobile} {
    margin-top: 16px;
    margin-left: ${({ isRightSection }) => (isRightSection ? '20%' : '0')};
  }

  ${device.tablet} {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 32px;
    margin-left: ${({ isRightSection }) => (isRightSection ? '10%' : '0')};
  }

  ${device.desktop} {
    align-items: start;
    margin-top: 23px;
    margin-left: 0;
    margin-right: ${({ isLeftSection }) => (isLeftSection ? '117px' : '0')};
  }
`;

export const Property = styled.p`
  margin: 0;
  font-size: 14px;
  line-height: 32px;
  font-weight: 600;
  color: ${({ theme }) => theme.textColor};

  ${device.tablet} {
    text-align: center;
    font-size: 16px;
  }

  ${device.desktop} {
    text-align: start;
  }
`;

export const PropertyValue = styled.span`
  font-weight: 300;
`;
