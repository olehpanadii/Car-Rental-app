import styled from 'styled-components';
import { HiOutlineXMark } from 'react-icons/hi2';

export const ModalWrapper = styled.div`
  box-sizing: border-box;
  width: 541px;
  height: 752px;
  padding: 40px;
  background-color: #fff;
  border-radius: 24px;

  position: relative;

  &.custom-modal {
    top: 50%;
    left: 50%;
    right: auto;
    bottom: auto;
    margin-right: -50%;
    transform: translate(-50%, -50%);
    z-index: 10000;

    position: fixed;
  }
`;

export const CLoseBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  border: none;
  padding: 0;
  background-color: transparent;

  position: absolute;
  top: 16px;
  right: 16px;
`;

export const IconClose = styled(HiOutlineXMark)`
  width: 24px;
  height: 24px;
  border: none;
  padding: 0;
  stroke: #121417;
  stroke-width: 1.8px;
  transition: 200ms;

  &:hover,
  :focus {
    width: 26px;
    height: 26px;
  }
`;

export const AdvertImg = styled.img`
  border-radius: 14px;
  width: 461px;
  height: 248px;
  background: #f3f3f2;
`;

export const AdvTitle = styled.h2`
  font-family: Manrope;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  margin: 0;
  color: #121417;

  span {
    color: #3470ff;
  }
`;

export const AdvSubDescr = styled.p`
  font-family: Manrope;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;
  margin: 0;
  color: #121417;
  opacity: 50%;
`;

export const Description = styled.p`
  font-family: Manrope;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.4;
  margin: 0;
  color: #121417;
`;

export const AdvSubTitle = styled.h3`
  font-family: Manrope;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.5;
  margin: 0;
  color: #121417;
`;

export const DescriptionContainer = styled.div``;

export const Condition = styled.li`
  border-radius: 35px;
  padding: 7px 14px;
  width: 86px;
  height: 32px;
  background: #f9f9f9;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;
  color: #363535;
`;

export const Btn = styled.button`
  cursor: pointer;
  width: 168px;
  height: 44px;
  background: #3470ff;
  border-radius: 12px;
  border: none;
  padding: 12px;
  color: #fff;
  font-family: Manrope;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.4;

  &:hover,
  :focus {
    background: #0b44cd;
  }
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(18, 20, 23, 0.5);
  z-index: 9999;
`;
