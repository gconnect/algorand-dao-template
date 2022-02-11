import { Link } from 'react-router-dom'
import { Wrapper, Ul, Li } from './DashboardSidebar.styles'



const Sidebar = () => {
  return (
    <Wrapper>
      <Ul>
        <Li><Link to="/home">Home</Link></Li>
        <Li><Link to="/assets">Assets</Link></Li>
        <Li><Link to="/voting">Voting</Link></Li>
        <Li><Link to="/account">Account</Link></Li>
      </Ul>
    </Wrapper>
  )
}

export default Sidebar
