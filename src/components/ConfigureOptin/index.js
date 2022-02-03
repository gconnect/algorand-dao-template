import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Input, Button, Spin } from 'antd'
import { LoadingOutlined } from '@ant-design/icons'

import { Wrapper } from './ConfigureOptin.styles'

const ConfigureAsset = ({ next }) => {
  const antIcon = <LoadingOutlined style={{ fontSize: 20, color: '#333' }} spin />

  const dispatch = useDispatch()

  const [loading, setLoading] = useState(false)
  const [assetName, setAssetName] = useState('')
  const [unitName, setUnitName] = useState('')
  const [totalUnit, setTotalUnit] = useState('')
  const [note, setNote] = useState('')

  const handleAssetName = e => {
    setAssetName(e.target.value)
  }

  const handleUnitName = e => {
    setUnitName(e.target.value)
  }

  const handleTotalUnit = e => {
    setTotalUnit(e.target.value)
  }


  const createAssetOptin = () => {
    next()
    setLoading(true)
  }


  return (
    <Wrapper>
      <h1>Configure Asset Optin</h1>
      <Input onChange={handleAssetName} size={"large"} placeholder="Receiver Address"/>
      <Input onChange={handleUnitName} size={"large"} placeholder="Asset Index"/>
      <Input onChange={handleTotalUnit} size={"large"} placeholder="Note"/>
      <Button onClick={createAssetOptin} style={{ width: '100%', marginTop: '20px' }} type="primary">
        { loading ? <Spin indicator={antIcon} /> : 'Asset Optin' }
      </Button>
    </Wrapper>
  )
}

export default ConfigureAsset
