import { CarsList } from "components/CarsList/CarsList";
import FilterMenu from "components/FilterMenu/FilterMenu";
import { fetchAllCars } from "components/redux/operations";
import { selectCars } from "components/redux/selectors";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function HomePage() {
  const dispatch = useDispatch();
  const cars = useSelector(selectCars);

  useEffect(() => {
    dispatch(fetchAllCars());
  });

  return (
    <div>
      <FilterMenu />
      <CarsList cars={cars} />
    </div>
  );
}
