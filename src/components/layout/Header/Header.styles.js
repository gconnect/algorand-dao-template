import styled from 'styled-components'

export const Header = styled.header`
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: var(--body-bkg);
  padding: 32px 40px;
  
   @media screen and (max-width: 767px) {
     padding: 32px 18px;   
  }

`

export const Button = styled.button`
  border-color: transparent;
  padding: 15px 35px;
  cursor: pointer;
`

export const Links = styled.div`
  display: flex;
  align-items: center;
`

export const Icons = styled.div`
  display: flex;
  align-items: center;
  
   @media screen and (max-width: 767px) {
    display: ${({isToggle}) => isToggle ? 'block' : 'none'
  };
`

export const LogoImg = styled.img`
  width: 120px;
  display: flex;
  justify-self: center;

  @media screen and (max-width: 767px) {
    ${({isToggle}) => {
      if (isToggle) {
        return {
          width: '40%',
        
          marginBottom: '30px',
          marginRight: 'auto',
          marginLeft: 'auto'
        }
      }
      return {
        width: '100px'
      }
    }
  }
`

export const Ul = styled.ul`
  margin-bottom: 0;
  padding: 0;
  display: inline;
  
  @media screen and (max-width: 767px) {
    display: ${({isToggle}) => isToggle ? 'block' : 'none'};
  
`

export const Li = styled.li`
  display: ${({isToggle}) => isToggle ? 'block' : 'inline'};
  margin: ${({isToggle}) => isToggle ? '20px 26px' : '0 26px'};
  color: black;
  text-align: center;
  
  a {
    color: black;
  }
`


