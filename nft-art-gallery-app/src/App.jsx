import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import './App.css'
import {
  AppMainContainer,
  AppHeader,
  AppSubHeader
} from './Components/AppComponents'

function App() {
  const [count, setCount] = useState(0)

  return (
    <AppMainContainer className="App">
      <AppHeader>NFT Art Gallery</AppHeader>
      <AppSubHeader>Double Click on your NFT to pin it!</AppSubHeader>
      {/* <Gallery /> */}
    </AppMainContainer>
  )
}

export default App
