import { createGlobalStyle } from "styled-components";
import "modern-normalize";
import "./fonts.css";

export const GlobalStyle = createGlobalStyle`

html {
  box-sizing: border-box;
  width: 100vw;
  overflow-x: hidden;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

body {
  margin: 0;
  font-family: Manrope, sans-serif;
  color: #212121;
  background-color: #fff;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

img {
  display: block;
  max-width: 100%; 
  max-height: 100%;
  object-fit: cover;
  object-position: center center;


}
ul{
list-style:none;
padding: 0 ;

}
p{
margin:0;
padding:0;
}
h1,h2,h3{
margin:0;
padding:0;
}
a{
text-decoration:none;
color: black;}
button{
cursor: pointer;
font-family: inherit;}

`;
