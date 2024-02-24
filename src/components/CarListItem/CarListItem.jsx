import { useState } from 'react';
import Modal from 'react-modal';
import {
  ImgContainer,
  ItemContainer,
  StyledBtn,
  StyledHeart,
  StyledIconBtn,
  StyledImage,
  StyledList,
  StyledListItem,
  StyledName,
  StyledNameContainer,
  StyledSpan,
} from './CardListItem.styled';
import { ModalDetails } from 'components/Modal/Modal';

export const CarListItem = ({ car }) => {
  const {
    make,
    model,
    type,
    img,
    year,
    accessories,
    rentalPrice,
    rentalCompany,
    address,
    mileage,
  } = car;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const city = address ? address.split(',')[1].trim() : '';
  const country = address ? address.split(',')[2].trim() : '';
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <ItemContainer>
      <ImgContainer>
        <StyledImage src={img} alt={make} />
        <StyledIconBtn type="button">
          <StyledHeart />
        </StyledIconBtn>
      </ImgContainer>
      <StyledNameContainer>
        <StyledName>
          {make} <StyledSpan>{model}</StyledSpan>, {year}
        </StyledName>
        <StyledName>{rentalPrice}</StyledName>
      </StyledNameContainer>

      <StyledList>
        <StyledListItem>{city}</StyledListItem>
        <StyledListItem>{country}</StyledListItem>
        <StyledListItem>{rentalCompany}</StyledListItem>
        <StyledListItem>{type}</StyledListItem>
        <StyledListItem>{model}</StyledListItem>
        <StyledListItem>{mileage}</StyledListItem>
        <StyledListItem>{accessories[0]}</StyledListItem>
      </StyledList>

      <StyledBtn type="button" onClick={openModal}>
        Learn more
      </StyledBtn>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        overlayClassName={'modal-overlay'}
        className={'modal-content'}
        closeTimeoutMS={300}
      >
        <ModalDetails
          car={car}
          closeModal={closeModal}
          isModalOpen={isModalOpen}
        />
      </Modal>
    </ItemContainer>
  );
};
