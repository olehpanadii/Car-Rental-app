import styled from 'styled-components';
import { IoMdHeartEmpty } from 'react-icons/io';
import { IoMdHeart } from 'react-icons/io';

export const StyledHeart = styled(IoMdHeartEmpty)`
  width: 18px;
  height: 18px;
  stroke-width: 1.5px;

  fill: rgba(240, 228, 228, 0.8);
`;
export const StyledFillHeart = styled(IoMdHeart)`
  width: 18px;
  height: 18px;
  stroke-width: 1.5px;
  stroke: #3470ff;
  fill: #3470ff;
`;
export const StyledIconBtn = styled.button`
  border: none;
  background: transparent;
  position: absolute;
  top: 16px;
  right: 16px;
`;
export const ImgContainer = styled.div`
  position: relative;
`;

export const ItemContainer = styled.div`
  width: 274px;
  height: 435px;
  display: flex;
  flex-direction: column;
`;

export const StyledImage = styled.img`
  border-radius: 14px;
  width: 274px;
  height: 268px;
  object-fit: cover;
  object-position: center;
  margin-bottom: 14px;
`;
export const StyledList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  row-gap: 4px;
  align-items: start;
  margin-bottom: auto;
`;

export const StyledListItem = styled.li`
  font-weight: 400;
  font-size: 12px;
  color: #12141780;

  position: relative;

  &::after {
    content: ' ';
    position: static;
    width: 16px;
    height: 0;
    flex: none;
    order: 3;
    flex-grow: 0;
    margin: 0px 6px;
    transform: rotate(90deg);
    border: 1px solid rgba(18, 20, 23, 0.1);
  }

  &:last-child::after {
    display: none;
  }
`;

export const StyledBtn = styled.button`
  //button text styles
  color: rgb(255, 255, 255);

  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 0%;
  border: none;
  //bttn styles
  padding: 12px 99px;
  border-radius: 12px;
  margin-top: auto;

  background: rgb(52, 112, 255);
  &:hover {
    background: rgb(11, 68, 205);
  }
`;
export const StyledName = styled.h3`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: #121417;
`;

export const StyledSpan = styled.span`
  color: #3470ff;
`;
export const StyledNameContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 8px;
`;
