import styled from "styled-components";
import { MdDirectionsCar } from "react-icons/md";
import { NavLink } from "react-router-dom";

export const StyledSVG = styled(MdDirectionsCar)`
  width: 30px;
  height: 30px;
  fill: #121417;

  &:hover {
    fill: #0b44cd;
  }
`;
export const StyledLink = styled(NavLink)`
  font-weight: 600;
  font-size: 26px;
  line-height: 1.5;
  color: #121417;
  position: relative;

  &:hover {
    color: #0b44cd;
  }
  &.active {
    &:after {
      content: " ";
      position: absolute;
      width: 100%;
      height: 2px;
      bottom: -2px;
      left: 0;
      background-color: #121417;
      filter: blur(2px);
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    }
  }
`;

export const StyledList = styled.ul`
  display: flex;
  align-items: center;
  gap: 40px;
  margin-left: 300px;
`;
