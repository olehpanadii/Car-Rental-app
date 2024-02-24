import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchMoreCars } from "../../redux/operations";
import { StyledMainBtn } from "./LoadMoreBtn.styled";

export const LoadMoreBtn = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const handleOnClick = () => {
    dispatch(fetchMoreCars(page + 1));

    setPage(page + 1);
  };
  return (
    <>
      <StyledMainBtn onClick={handleOnClick}>Load More</StyledMainBtn>
    </>
  );
};
