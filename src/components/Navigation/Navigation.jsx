import { NavLink } from "react-router-dom";

import { StyledLink, StyledList, StyledSVG } from "./Navigation.styled";

export const Navigation = () => {
  return (
    <>
      <nav>
        <StyledList>
          <li>
            <NavLink to={"/"}>
              <StyledSVG />
            </NavLink>
          </li>
          <li>
            <StyledLink to={"/catalog"}>Catalog</StyledLink>
          </li>
          <li>
            <StyledLink to={"/favorite"}>Favorites</StyledLink>
          </li>
        </StyledList>
      </nav>
    </>
  );
};
