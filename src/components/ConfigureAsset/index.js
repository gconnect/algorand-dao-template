import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Input, Button, Spin } from 'antd'
import { LoadingOutlined } from '@ant-design/icons'

import { Wrapper } from './ConfigureAsset.styles'

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

  const handleNote = e => {
    setNote(e.target.value)
  }

  const createAsset = () => {
    next()
    setLoading(true)
  }


  return (
    <Wrapper>
      <h1>Configure Asset</h1>
      <Input onChange={handleAssetName} size={"large"} placeholder="Asset name"/>
      <Input onChange={handleUnitName} size={"large"} placeholder="Unit name"/>
      <Input onChange={handleTotalUnit} size={"large"} placeholder="Total units"/>
      <Input onChange={handleNote} size={"large"} placeholder="Note"/>
      <Button onClick={createAsset} style={{ width: '100%', marginTop: '20px' }} type="primary">
        { loading ? <Spin indicator={antIcon} /> : 'Create Asset' }
      </Button>
    </Wrapper>
  )
}

export default ConfigureAsset
