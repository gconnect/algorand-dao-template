import { useState } from 'react'
import { Modal, Tabs, Button, Input, Empty } from 'antd'

import { Wrapper } from '../components/Dashboard/Index.styles'
import { Content, Heading } from '../components/Dashboard/Account.styles'
import Sidebar from '../components/layout/DashboardSidebar'

const { TabPane } = Tabs

const Account = () => {

  const [isModal, setIsModal] = useState(false)

  const openModal = () => {
    setIsModal(true)
  }

  const md = {
    marginBottom: '12px'
  }

  return (
    <Wrapper>
      <Sidebar />
      <Content>
        <Heading>
          <h2>Account</h2>
          <Button onClick={openModal} type="primary" size="large" style={{ marginBottom: '20px' }}>
            New Transfer
          </Button>
        </Heading>
        <Modal footer={null} visible={isModal} onCancel={() => setIsModal(false)} >
          <Tabs defaultActiveKey="1">
            <TabPane tab="Deposit" key="1">
              <Input style={md} placeholder="Recipient Address" />
              <Input style={md} placeholder="Amount" />
              <Input style={md} placeholder="Note" />
              <Button style={{ width: '100%' }} type="primary">Submit Deposit</Button>
            </TabPane>
            <TabPane tab="Withdrawal" key="2">
              <Input style={md} placeholder="Recipient Address" />
              <Input style={md} placeholder="Amount" />
              <Input style={md} placeholder="Note" />
              <Button style={{ width: '100%' }} type="primary">Submit Withdrawal</Button>
            </TabPane>
          </Tabs>
        </Modal>
        <Empty />
      </Content>
    </Wrapper>
  )
}

export default Account