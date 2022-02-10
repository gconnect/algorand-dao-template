/*global AlgoSigner*/
import { useState, useRef } from 'react'
import logo1 from '../../assets/img/myalgo.png'
import logo2 from '../../assets/img/algo.png'
import algosigner from '../../assets/img/algosigner.jpeg'
import { Wrapper, Logo, Button } from './Wallets.styles'

const Wallets = () => {
  const [showAccount, setShowAccount]= useState(false)
  const userAccount = useRef()

  //Connect Algosigner
  const connectAlgoSigner = async () =>{
    let resp = await AlgoSigner.connect()
    console.log(resp)    
    getUserAccount()
    setShowAccount(true)
  }

  const getUserAccount = async () =>{
     userAccount.current =  await AlgoSigner.accounts({
          ledger: 'TestNet'
        })
        if(userAccount.current[0]['address'] !== null){
          setShowAccount(true)
        }
  console.log(userAccount.current[0]['address'])
  // console.log(userAccount.current)
}

  return (
    <Wrapper>
      <h2>Connect to a Wallet</h2>
      <Button onClick={connectAlgoSigner}><Logo src={algosigner} /> AlgoSigner</Button>
      <Button><Logo src={logo1} /> My Algo Wallet</Button>
      <Button><Logo src={logo2} /> Algorand Wallet</Button>
    </Wrapper>
)};

export default Wallets
