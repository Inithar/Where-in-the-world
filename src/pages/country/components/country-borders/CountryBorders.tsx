import { ICountryData } from '../../../../redux/countriesApiSlice';
import { BorderCountry, BordersContainer, Header, Message, Wrapper } from './CountryBorders.style';
interface ICountryBordersProps {
  data: ICountryData;
}

export const CountryBorders = ({ data }: ICountryBordersProps) => {
  const { borders } = data;

  return (
    <Wrapper>
      <Header>Border Countries:</Header>
      <BordersContainer>
        {borders.length ? (
          borders.map((border, index) => {
            return <BorderCountry key={index}>{border}</BorderCountry>;
          })
        ) : (
          <Message>No border states</Message>
        )}
      </BordersContainer>
    </Wrapper>
  );
};
