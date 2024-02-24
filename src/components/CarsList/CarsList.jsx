import { CarListItem } from "components/CarListItem/CarListItem";
import { StyledContainer, StyledList } from "./CarsList.styled";

export const CarsList = ({ cars }) => {
  return (
    <StyledContainer>
      <StyledList>
        {cars.map((car) => (
          <li key={car.id}>
            <CarListItem car={car} />
          </li>
        ))}
      </StyledList>
    </StyledContainer>
  );
};
