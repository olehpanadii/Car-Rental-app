import {
  ItemContainer,
  StyledBtn,
  StyledImage,
  StyledList,
  StyledListItem,
  StyledName,
  StyledNameContainer,
  StyledSpan,
} from "./CardListItem.styled";

export const CarListItem = ({
  car: {
    make,
    model,
    type,
    img,
    year,
    accessories,

    rentalPrice,
    rentalCompany,
    address,

    mileage,
  },
}) => {
  const city = address ? address.split(",")[1].trim() : "";
  const country = address ? address.split(",")[2].trim() : "";

  return (
    <ItemContainer>
      <StyledImage src={img} alt={make} />
      <StyledNameContainer>
        <StyledName>
          {make} <StyledSpan>{model}</StyledSpan>, {year}
        </StyledName>
        <StyledName>{rentalPrice}</StyledName>
      </StyledNameContainer>

      <StyledList>
        <StyledListItem>{city}</StyledListItem>
        <StyledListItem>{country}</StyledListItem>
        <StyledListItem>{rentalCompany}</StyledListItem>
        <StyledListItem>{type}</StyledListItem>
        <StyledListItem>{model}</StyledListItem>
        <StyledListItem>{mileage}</StyledListItem>
        <StyledListItem>{accessories[0]}</StyledListItem>
      </StyledList>

      <StyledBtn type="button">Learn more</StyledBtn>
    </ItemContainer>
  );
};
