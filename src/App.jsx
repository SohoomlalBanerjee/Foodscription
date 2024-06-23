import Up from './components/Upper_part.jsx' 
import Down from './components/Middle_part.jsx'
import Bottom from './components/Bottom.jsx'
import Nav from './components/Nav.jsx'

import './App.css'

function App() 
{
  return(
    <div style={{ backgroundColor: '#F7FDED' }} className='h-screen w-screen'>
      <Nav/>
      <Up/>
      <Down/>
      <Bottom/>
    </div>
  )
}

export default App
