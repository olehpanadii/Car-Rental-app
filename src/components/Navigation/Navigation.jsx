import { NavLink } from "react-router-dom";

export const Navigation = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink to={"/"}>Catalog</NavLink>
          </li>
          <li>
            <NavLink to={"/"}>Favorites</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};
