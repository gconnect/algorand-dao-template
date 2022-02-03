import { useState, useEffect, useContext } from 'react'
import { message, Steps } from 'antd'
import { useLocation, useNavigate } from 'react-router-dom'

import ConfigureAsset from '../components/ConfigureAsset'
import ConfigureOptin from '../components/ConfigureOptin'
import ConfigureVoting from '../components/ConfigureVoting'

import { Wrapper } from '../components/Configuration/Configuration.styles'

const { Step } = Steps

const Configuration = () => {

  // const navigate = useNavigate()
  const location = useLocation()
  // const dispatch = useDispatch()

  const [current, setCurrent] = useState(0)


  const next = () => {
    setCurrent(current + 1)
  }

  const prev = () => {
    setCurrent(current - 1)
  }

  useEffect(() => {

  }, [location])

  return (

    // <UserContext.Consumer>
    //
    //   {value =>
        <Wrapper>
          <Steps current={current}>
              <Step />
              <Step />
              <Step />
          </Steps>
          { current === 0 && <ConfigureAsset next={next} /> }
          { current === 1 && <ConfigureOptin next={next} /> }
          { current === 2 && <ConfigureVoting /> }

        </Wrapper>
    //   }
    //
    // </UserContext.Consumer>
  )
}

export default Configuration
