import {Card, Button, Progress, Alert} from 'antd'

import { Wrapper } from '../components/Dashboard/Index.styles'
import { Content, Cards, Heading } from '../components/Dashboard/Asset.styles'
import Sidebar from '../components/layout/DashboardSidebar'

const cardStyle = {
  marginBottom: '20px'
}
const votingDetailsStyle = {
  display: 'flex',
  justifyContent: 'space-between'
}
const yes = {
  width: '10px',
  height: '10px',
  borderRadius: '50%',
  background: 'green',
  position: 'absolute',
  top: '6px'
}
const no = {
  width: '10px',
  height: '10px',
  borderRadius: '50%',
  background: 'red',
  position: 'absolute',
  top: '6px'
}

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
        <Card style={cardStyle} size="small" title="Assets">
          <h3>Vote #0</h3>
          <div style={votingDetailsStyle}>
            <div>
              <h5>DESCRIPTION</h5>
              <p>#0</p>
            </div>
            <div>
              <h5>CREATED BY</h5>
              <p>7686CX868ZZZC</p>
            </div>
          </div>
          <Progress percent={100} />
          <p style={{position: 'relative'}}>
            <div style={yes}></div>
            <span style={{ marginLeft: '20px' }}>YES 100% 100 COM</span>
          </p>
          <p style={{position: 'relative'}}>
            <div style={no}></div>
            <span style={{ marginLeft: '20px' }}>NO 0% 0 COM</span>
          </p>
          <Alert message="Your vote was cast successfully" type="success" showIcon />
        </Card>
        <Cards>

          <Card style={cardStyle} size="small" title="STATUS">
            <small style={{ color: 'green' }}>Passed</small>
            <p>22nd Jan 16:14 UTC</p>
            <p>jhkhjkewuiy78</p>
          </Card>
          <Card style={cardStyle} size="small" title="RELATIVE SUPPORT %">
            <p>0% (50% support needed)</p>
          </Card>
          <Card style={cardStyle} size="small" title="MINIMAL APPROVAL %">
            <p>0% (15% approval needed)</p>
          </Card>
        </Cards>
      </Content>
    </Wrapper>
  )
}

export default Asset