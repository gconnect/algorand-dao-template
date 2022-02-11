import { Link } from 'react-router-dom'


import logo from '../../../assets/img/logo.png'

import { Wrapper } from './Drawer.styles'
import {LogoImg} from '../Header/Header.styles'



const AppDrawer = ({ isToggle }) => (
  <Wrapper isToggle={isToggle}>
    <Link to='/'>
      <LogoImg src={logo} isToggle={isToggle}/>
    </Link>
    {/* <Ul isToggle={isToggle}>
      {appLinks.map((link, i) => <Li isToggle={isToggle} key={i}>
        <Link to={link.link}>{link.title}</Link>
      </Li>)}
    </Ul> */}
    yuiyiyiyuiyuiyi
    {/*<ConnectButton isToggle={isToggle} />*/}
  </Wrapper>
)

export default AppDrawer
