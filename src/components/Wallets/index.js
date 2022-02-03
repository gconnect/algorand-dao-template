// import { Link } from 'react-router-dom'

import logo1 from '../../assets/img/myalgo.png'
import logo2 from '../../assets/img/algo.png'
import { Wrapper, Logo, Button } from './Wallets.styles'

const Wallets = () => {
  return (
    <Wrapper>
      <h2>Connect to a Wallet</h2>
      <Button><Logo src={logo1} /> My Algo Wallet</Button>
      <Button><Logo src={logo2} /> Algorand Wallet</Button>
    </Wrapper>
)};

export default Wallets
