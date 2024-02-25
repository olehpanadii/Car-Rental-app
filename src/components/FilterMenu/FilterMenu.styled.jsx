import styled from 'styled-components';

export const FilterConatiner = styled.div`
  margin-top: 28px;
  display: flex;
  max-width: 1184px;
  gap: 18px;
  justify-content: center;
  align-items: end;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: start;
`;
export const StyledLebel = styled.label`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.28571;
  color: #8a8a89;
`;
export const StyledSelect = styled.select`
  font-weight: 500;
  font-size: 18px;
  line-height: 1.11111;
  color: #121417;
  outline: none;
  border: none;
  border-radius: 14px;
  padding: 14px 89px 14px 18px;

  appearance: none;
  background: #f7f7fb
    url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%23121417" width="16px" height="16px" stroke-width="2"><path d="M7 6l5 5 5-5z"/></svg>')
    no-repeat right 23px center;
  background-size: 24px;
`;
export const StyledInput = styled.input`
  font-size: 18px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 8px;
  outline: none;

  border-radius: 14px 0 0 14px;
  width: 160px;
  border: none;
  background: #f7f7fb;
  border-right: 1px solid rgba(138, 138, 137, 0.2);

  padding: 14px 18px 14px 75px;
  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  &[type='number'] {
    -moz-appearance: textfield;
  }
`;
export const StyledInputRight = styled.input`
  font-size: 18px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 8px;
  outline: none;

  border-radius: 0 14px 14px 0;
  padding: 14px 18px 14px 53px;
  width: 160px;
  border: none;

  background: #f7f7fb;
  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  &[type='number'] {
    -moz-appearance: textfield;
  }
`;
export const PositionContainer = styled.div`
  position: relative;
`;
export const StyledPositionLabel = styled.label`
  position: absolute;
  left: 24px;
  right: 93px;
  top: 14px;
  bottom: 14px;
  font-weight: 500;
  font-size: 18px;
  line-height: 1.11111;
  color: #121417;
`;
export const StyledPositionInput = styled.div`
  display: flex;
`;

export const FilterBtn = styled.button`
  border-radius: 12px;
  padding: 14px 44px;
  background: #3470ff;
  font-weight: 600;
  font-size: 14px;
  line-height: 1.42857;
  color: #fff;
  border: none;

  &:hover {
    background: #0b44cd;
  }
`;
