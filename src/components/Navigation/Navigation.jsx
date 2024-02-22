import { NavLink } from "react-router-dom";

export const Navigation = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink>Home</NavLink>
          </li>
          <li>
            <NavLink>Favorites</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};
