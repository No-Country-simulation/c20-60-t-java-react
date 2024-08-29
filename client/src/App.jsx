import './App.css'
import { Button } from './components/ui/button'
import Stories from './components/common/Stories'
import Contribute from './components/common/Contribute'
import Footer from './components/common/Footer'

function App() {
  return (
    <>
      <Button>Click Me</Button>
      <Stories/>
      <Contribute/>
      <Footer></Footer>
    </>
  )
}

export default App
