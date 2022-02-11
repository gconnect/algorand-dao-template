import {
  DatePicker,
  Card,
  Button,
  Select,
  Progress
} from 'antd'

import { Wrapper } from '../components/Dashboard/Index.styles'
import { Content, Cards, Heading } from '../components/Dashboard/Voting.styles'
import Sidebar from '../components/layout/DashboardSidebar'

const { Option } = Select

const cardStyle = {
  marginBottom: '20px',
  width: '200px',
  marginRight: '20px'
}

const filterStyle = {
  width: '40%',
  display: 'flex',
  justifyContent: 'space between',
  marginBottom: '20px'
}


const Voting = () => {

  return (
    <Wrapper>
      <Sidebar />
      <Content>
        <Heading>
          <h2>Voting</h2>
          <Button type="primary" size="large" style={{ marginBottom: '20px' }}>
            Add Vote
          </Button>
        </Heading>
        <div style={filterStyle}>
          <Select defaultValue="Open" style={{ width: 120 }}>
            <Option value="Open">Open</Option>
            <Option value="Yiminghe">yiminghe</Option>
          </Select>
          <DatePicker />
          <DatePicker />
        </div>
        <Cards>
          <Card style={cardStyle} size="small" title="Assets">
            <p>hjh7678tuyhjgjh <span style={{ marginLeft: '30px' }}>50%</span></p>
            <p>hjh7678tuyhjgjh <span style={{ marginLeft: '30px' }}>50%</span></p>
            <h4>Yes</h4>
            <Progress percent={30} />
            <h4>No</h4>
            <Progress percent={80} />
            <small>14M 20s</small>
          </Card>
        </Cards>
      </Content>
    </Wrapper>
  )
}

export default Voting