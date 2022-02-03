import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Input, Button, Spin, Slider, Alert } from 'antd'
import { LoadingOutlined } from '@ant-design/icons'

import { Wrapper, Duration } from './ConfigureVoting.styles'

const ConfigureAsset = () => {
  const antIcon = <LoadingOutlined style={{ fontSize: 20, color: '#333' }} spin />

  const dispatch = useDispatch()

  const [loading, setLoading] = useState(false)
  const [support, setSupport] = useState(0)
  const [minApproval, setMinApproval] = useState(0)
  const [days, setDays] = useState(0)
  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0)

  const handleSupport = e => {
    setSupport(e.target.value)
  }

  const handleMinApproval = e => {
    setMinApproval(e.target.value)
  }

  const handleDays = e => {
    setDays(e.target.value)
  }

  const handleHours = e => {
    setHours(e.target.value)
  }

  const handleMinutes = e => {
    setMinutes(e.target.value)
  }


  const createAsset = () => {
    setLoading(true)
  }


  return (
    <Wrapper>
      <h1>Configure Voting</h1>
      <h4 style={{textAlign: 'left'}}>SUPPORT</h4>
      <Slider onChange={handleSupport} defaultValue={30}  />
      <h4 style={{textAlign: 'left'}}>MINIMUM APPROVAL</h4>
      <Slider onChange={handleMinApproval} defaultValue={30}  />
      <h4 style={{textAlign: 'left'}}>VOTE DURATION</h4>
      <Duration>
        <Input onChange={handleDays} placeholder="Days" />
        <Input onChange={handleHours} placeholder="Hours" />
        <Input onChange={handleMinutes} placeholder="Minutes" />
      </Duration>
      <Alert
        style={{ marginTop: '20px', textAlign: 'left' }}
        message="The support and minimum approval are strict requirements such that
        vote will only pass if they achieve approval greater than these thresshold"
        type="info"
        showIcon
      />
      <Button onClick={createAsset} style={{ width: '100%', marginTop: '20px' }} type="primary">
        { loading ? <Spin indicator={antIcon} /> : 'Launch Organization' }
      </Button>
    </Wrapper>
  )
}

export default ConfigureAsset
