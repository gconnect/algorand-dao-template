import { useDispatch, useSelector} from 'react-redux'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import 'antd/dist/antd.css'

import { toggleDrawer } from './redux/toggleDrawer'

import {Modal} from 'antd'
import Home from './pages/Home'
import Index from './pages/Index'
import Asset from './pages/Asset'
import Voting from './pages/Voting'
import Voting2 from './pages/Voting2'
import Account from './pages/Account'
import NotFound from './pages/NotFound'
import WalletsBtn from './components/Wallets'
import AppHeader from './components/layout/Header'
import AppDrawer from './components/layout/Drawer'
import Configuration from './pages/Configuration'
import ExistingOrganization from './pages/ExistingOrganization'
import {connectBtnReducer} from './redux/connectWallet'

function App() {
  const { toggle } = useSelector(state => state.toggle)
  const { isConnect } = useSelector(state => state.connectWallet)
  const dispatch = useDispatch()
  const appLinks = [
    { link: '/explore-circles', title: 'Explore Circles' },
    { link: '/enter-bazaar', title: 'Enter Bazaar' },
    { link: '/engage-circles', title: 'Engage Circle' }
  ]

  // const [loading, setLoading] = useState()

  return (
    <Router>
      <AppHeader appLinks={appLinks}/>
      <AppDrawer appLinks={appLinks} isToggle={toggle}/>
      <label className="menu-icon" htmlFor="check">
        <input onClick={() => dispatch(toggleDrawer())} type="checkbox" id="check"/>
        <span className="Menu"></span>
        <span className="Menu"></span>
        <span className="Menu"></span>
      </label>
      <Modal visible={isConnect} onCancel={() => dispatch(connectBtnReducer())} footer={null}>
        <WalletsBtn/>
      </Modal>
      <Routes>
        <Route path='/' element={<Index/>}/>
        <Route path='/configuration' element={<Configuration/>}/>
        <Route path='/existing-organization' element={<ExistingOrganization/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/assets' element={<Asset/>}/>
        <Route path='/voting' element={<Voting/>}/>
        <Route path='/voting2' element={<Voting2/>}/>
        <Route path='/account' element={<Account/>}/>
        <Route path='/*' element={<NotFound/>}/>
      </Routes>
    </Router>

  )
}

export default App
