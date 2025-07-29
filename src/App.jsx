import { useState } from 'react'
import './App.css'
import Card from './components/card'
import TitleCard from './components/TitleCard'
import CustomMessageCard from './components/CustomMessageCard'


function App() {

  const [customMessageState,setCustomMessage] = useState("")

  return (
    <div className='mainContainer'>
      <input value={customMessageState} onChange={(e)=>{setCustomMessage(e.target.value)}} placeholder='CustomMessage'/>
      <Card>
        <TitleCard message={"Presentation Card"}/>
        <CustomMessageCard message={customMessageState}/>
      </Card>
    </div>
  )
}

export default App
