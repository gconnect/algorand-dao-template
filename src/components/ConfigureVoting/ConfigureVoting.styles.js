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

export const Duration = styled.div`
  display: flex;

`
