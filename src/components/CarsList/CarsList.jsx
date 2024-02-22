import { CarListItem } from "components/CarListItem/CarListItem";

export const CarsList = ({ cars }) => {
  return (
    <div>
      <ul>
        {cars.map((car) => (
          <li key={car.id}>
            <CarListItem car={car} />
          </li>
        ))}
      </ul>
    </div>
  );
};
