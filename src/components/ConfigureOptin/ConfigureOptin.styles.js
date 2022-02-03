import styled from 'styled-components'


export const Wrapper = styled.div`
  position: fixed;
  width: 30%;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 50px 30px;
  text-align: center;
  border: none;
  

  @media (max-width: 767px) {
    width: 90%;
  }
`

export const Input = styled.input`
  background: #fefefe;
  cursor: pointer;
  padding: 20px 30px;
  margin-bottom: 5px;

  `


export const Button = styled.div`
  background: #fefefe;
  cursor: pointer;
  padding: 20px 30px;
  margin-bottom: 5px;

  `
