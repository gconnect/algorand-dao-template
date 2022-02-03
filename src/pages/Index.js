import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { Wrapper, Button } from '../components/Home/Home.styles'

const Home = () => {
  let location = useLocation()

  const dispatch = useDispatch()



  useEffect(() => {
    // if (toggle) {
    //   dispatch(toggleDrawer())
    // }
  }, [location])

  return (
    <Wrapper>
        <div>
          <h1>Welcome to Algorand</h1>
          <p>Create your own organization in a few minutes!</p>
          <Button>
            <h2>Create an organization</h2>
            <p>Start your organization with Algorand</p>
          </Button>
          <Button>
            <h2>Existing organization</h2>
            <p>Open an Existing Organization</p>
          </Button>
          <p style={{marginTop: '50px'}}>
            To learn more about Algorand visit <a href="https://algorand.com">Algorand homepage</a>
          </p>
        </div>

    </Wrapper>
  )
}

export default Home;
