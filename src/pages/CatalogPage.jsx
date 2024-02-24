import { CarsList } from "components/CarsList/CarsList";
import FilterMenu from "components/FilterMenu/FilterMenu";
import { fetchAllCars } from "../redux/operations";
import { selectCars } from "../redux/selectors";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LoadMoreBtn } from "components/LoadMoreBtn/LoadMoreBtn";
import { Helmet } from "react-helmet";
import { StyledContainer } from "./CatalogPage.styled";
export default function CatalogPage() {
  const dispatch = useDispatch();
  const cars = useSelector(selectCars);

  useEffect(() => {
    dispatch(fetchAllCars());
  }, [dispatch]);
  const shouldRenderLoadMoreBtn = cars.length % 12 === 0;
  return (
    <>
      <Helmet>
        <title>Favorite</title>
      </Helmet>
      <StyledContainer>
        <FilterMenu />
        <CarsList cars={cars} />
        {shouldRenderLoadMoreBtn && <LoadMoreBtn />}
      </StyledContainer>
    </>
  );
}
