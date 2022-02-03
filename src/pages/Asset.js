import { Table, Card, Button } from 'antd'

import { Wrapper } from '../components/Dashboard/Index.styles'
import { Content, Cards, Heading } from '../components/Dashboard/Asset.styles'
import Sidebar from '../components/layout/DashboardSidebar'

const cardStyle = {
  marginBottom: '20px'
}

const columns = [
  {
    title: 'Holder',
    dataIndex: 'name',
  },
  {
    title: 'Balance',
    dataIndex: 'age',
  }
]
const data = [
  {
    key: '1',
    name: '8hgjkg67868hjkhk',
    age: 32,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'j89sal4234jlkjfds',
    age: 42,
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'tefdfsfs53fsdfs',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
  },
]


const Asset = () => {



  return (
    <Wrapper>
      <Sidebar />
      <Content>
        <Heading>
          <h2>Asset</h2>
          <Button type="primary" size="large" style={{ marginBottom: '20px' }}>
            Add Asset
          </Button>
        </Heading>

        <Table columns={columns} dataSource={data} size="small" />
        <Cards>

          <Card style={cardStyle} size="small" title="Asset Info">
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </Card>
          <Card style={cardStyle} size="small" title="Ownership Distribution">
            <h4>Card content</h4>
            <p>hjh7678tuyhjgjh <span style={{ marginLeft: '30px' }}>50%</span></p>
            <p>hjh7678tuyhjgjh <span style={{ marginLeft: '30px' }}>50%</span></p>
          </Card>
        </Cards>
      </Content>
    </Wrapper>
  )
}

export default Asset