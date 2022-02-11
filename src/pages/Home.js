import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import Sidebar from '../components/layout/DashboardSidebar'
import { Wrapper, Heading, Content, Item, Img } from '../components/Dashboard/Index.styles'
import asset from '../assets/img/assign-asset.png'
import account from '../assets/img/account.png'
import payment from '../assets/img/payment.png'
import vote from '../assets/img/vote.png'


const Dashboard = () => {

  const location = useLocation()

  // const [address, setAddress] = useState('')

  // const handleAddress = e => {
  //   setAddress(e.target.value)
  // }

  useEffect(() => {

  }, [location])

  return (

    <Wrapper>
      <Sidebar />
      <Content>
        <Heading>What do you want to do?</Heading>
        <Item>
          <Img src={asset} />
          <p>Assign Asset</p>
        </Item>
        <Item>
          <Img src={vote} />
          <p>Vote</p>
        </Item>
        <Item>
          <Img src={account} />
          <p>Account</p>
        </Item>
        <Item>
          <Img src={payment} />
          <p>Make Payment</p>
        </Item>
      </Content>
    </Wrapper>

  )
}

export default Dashboard
