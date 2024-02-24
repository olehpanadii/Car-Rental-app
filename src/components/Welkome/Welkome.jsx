import {
  WelkomeContainer,
  WelcomeTitle,
  Subtitle,
  ServicesList,
  ServiceItem,
  TextWrapper,
} from "./Welkome.styled";

export const Welkome = () => {
  return (
    <WelkomeContainer>
      <TextWrapper>
        <WelcomeTitle>Experience Premium Car Rental Services</WelcomeTitle>
        <Subtitle>
          Discover the world on your terms with our diverse fleet of
          high-quality vehicles. We prioritize reliability, comfort, and
          exceptional service to ensure your journey is memorable.
        </Subtitle>
        <ServicesList>
          <ServiceItem>Wide range of top-tier vehicles</ServiceItem>
          <ServiceItem>Flexible rental plans</ServiceItem>
          <ServiceItem>24/7 customer support</ServiceItem>
          <ServiceItem>Easy online booking</ServiceItem>
        </ServicesList>
      </TextWrapper>
    </WelkomeContainer>
  );
};
