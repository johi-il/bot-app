import React,{useState} from 'react'   
import BotCollection from './BotCollection.jsx'
import YourBotArmy from './YourBotArmy.jsx'
import './App.css'

function App() {
  const [army,setArmy]=useState([])

//add a bot to army
  function handleAddBot(bot){
    setArmy([...army,bot])
  }
  return (
    <div className='page'>
      < BotCollection onAddBot={handleAddBot} />
      <YourBotArmy army={army}/>
    </div>
  )
}

export default App