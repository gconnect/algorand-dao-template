import styled from 'styled-components'


export const Wrapper = styled.div`
  display: grid;
  margin-right: 30px;
  margin-top: 30px;
  height: 100vh;
  grid-template-columns: 20% 80%;
  

  @media (max-width: 767px) {
    
  }
`

export const Heading = styled.h1`
  grid-column: 1 / -1;
  text-align: center;
  margin-bottom: 60px;

  `

export const Content = styled.div`
  display: grid;
  //grid-gap: 34px;
  grid-template-columns: auto auto auto auto;
  align-content: center;
  justify-content: center;

  `

export const Item = styled.div`
  border: 1px solid #b7b3b3;
  height: 180px;
  width: 140px;
  text-align: center;
  padding: 40px 20px;
  margin: 0 20px;
  cursor: pointer;
  `

export const Img = styled.img`
  width: 100%;
  height: auto;
  `
