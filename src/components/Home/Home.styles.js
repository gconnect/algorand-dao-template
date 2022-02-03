import styled from 'styled-components'


export const Wrapper = styled.div`
  position: fixed;
  width: 30%;
  min-height: 550px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 50px 30px;
  text-align: center;
  

  @media (max-width: 767px) {
    min-height: 600px;
    width: 90%;
  }
`


export const Button = styled.div`
  background: #fefefe;
  cursor: pointer;
  padding: 20px 30px;
  margin-bottom: 5px;

  `
