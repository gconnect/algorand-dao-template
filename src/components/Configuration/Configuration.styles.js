import styled from 'styled-components'


export const Wrapper = styled.div`
  width: 50%;
  min-height: 550px;
  margin: 30px auto;
  padding: 50px 30px;
  position: relative;
  

  @media (max-width: 767px) {
    min-height: 600px;
    width: 90%;
    padding: 40px 10px;
    grid-template-columns: 1fr;
  }
`
