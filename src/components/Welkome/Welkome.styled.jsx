import styled from "styled-components";

import welcomeBackground from "../../images/carental.jpg";

export const WelkomeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  background-image: url(${welcomeBackground});
  background-size: cover; /* або contain, в залежності від вашого вибору */
  background-position: center;
  background-repeat: no-repeat;
`;

export const WelcomeTitle = styled.h1`
  font-size: 36px;
  font-weight: bold;
  color: #121417;
  text-align: center;
  margin-bottom: 20px;
`;

export const Subtitle = styled.p`
  font-size: 18px;
  color: #4d4d4d;
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
`;

export const ServicesList = styled.ul`
  list-style-type: disc;
  padding-left: 20px;
  margin-top: 20px;
`;

export const ServiceItem = styled.li`
  font-size: 16px;
  color: #4d4d4d;
`;
export const TextWrapper = styled.div`
  backdrop-filter: blur(10px);
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 14px;
  padding: 20px;
  max-width: 600px;
  width: 100%;
  text-align: center;
`;
