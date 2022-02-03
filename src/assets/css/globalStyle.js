import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
//@import url('https://fonts.googleapis.com/css2?family=Prompt:wght@100&family=Revalia&display=swap');
 
:root {
  --body-bkg: #E5E5E5;
  --brand-color: #FECE4E;
  --brand-sec-color: #20B7EB;
  --app-border: #bbbaba;
}

*{
  box-sizing: border-box;
}

body {
  margin: 0;
  background: var(--body-bkg);
}

h1, h2, h3, h4, h5, h6, p {
  color: dimgray;
}

a {
  text-decoration: none;
}

.ant-input:hover {
  border-color: transparent;
}

.menu-icon{
  display: flex;
  flex-direction: column;
  width: 30px;
  cursor: pointer;
  position: absolute;
  top: 17px;
  right: 17px;
  z-index: 99999;
}

.menu-icon span{
  background: grey;
  border-radius:10px;
  height: 3px;
  margin: 3px 0;
  transition: .4s  cubic-bezier(0.68, -0.6, 0.32, 1.6);

}
.Menu:nth-of-type(1){
  width:50%;
}

.Menu:nth-of-type(2){
  width: 100%;
}

.Menu:nth-of-type(3){
  width: 75%;
}

input[type="checkbox"]{
  display: none;
}

input[type="checkbox"]:checked ~ span:nth-of-type(1){
  transform-origin: bottom;
  transform: rotatez(45deg) translate(6px,0px)
}

input[type="checkbox"]:checked ~ span:nth-of-type(2){
  transform-origin: top;
  transform: rotatez(-45deg)
}

input[type="checkbox"]:checked ~ span:nth-of-type(3){
  transform-origin: bottom;
  width: 55%;
  transform: translate(11px,-6px) rotatez(45deg);
}


@media(min-width: 768px) {
  .menu-icon {
    display: none;
  }
}

`

export  default GlobalStyle