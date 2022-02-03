import { useState, useEffect } from 'react'
import { Input, Button, Alert } from 'antd'
import { useLocation } from 'react-router-dom'


const ExistingOrganization = () => {

  const location = useLocation()

  const [address, setAddress] = useState('')
  const wrapper =  {
    width: '30%',
    margin: '150px auto',
    textAlign: 'center'
  }


  const handleAddress = e => {
    setAddress(e.target.value)
  }

  useEffect(() => {

  }, [location])

  return (

    <div style={wrapper}>
      <h1>Welcome to Algorand</h1>
      <p>Create your own organization in a few minutes!</p>
      <Input onChange={handleAddress} size="large" placeholder="Address of existing organization"/>
      <Button style={{ width: '100%', marginTop: '30px' }} type="primary">Open Organization</Button>
      <Alert
        message="Error"
        description="This organization doesn’t seem to exist."
        type="error"
        showIcon
        style={{ textAlign: 'left', marginTop: '20px' }}
      />
      <p style={{marginTop: '50px'}}>
        To learn more about Algorand visit <a href="https://algorand.com">Algorand homepage</a>
      </p>
    </div>

  )
}

export default ExistingOrganization
