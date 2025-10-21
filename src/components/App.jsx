import React,{useState} from 'react'   
import BotCollection from './BotCollection.jsx'
import YourBotArmy from './YourBotArmy.jsx'
import './App.css'

function App() {
  const [army,setArmy]=useState([])
  const[bots,setBots]=useState([]) //STORE ALL BOTS FROM DB FOR UPDATING PURPOSES


  //delete a bot from army- backend & frontend
  function handleDeleteBot(bot){
    fetch(`http://localhost:3000/bots/${bot.id}`, {
      method: 'DELETE',
    })
    .then((response) => {
      if (response.ok) {
        // Update the army state to remove the deleted bot
        console.log('Bot deleted successfully');
        setArmy(army.filter((deleted) => deleted.id !== deleted.id));
        setBots(bots.filter((b) => b.id !== b.id)); //also update bots state to remove deleted bot
      } else {
        console.error('Failed to delete bot');
      }})


    
  }
  //adding function to handle releasing a bot from yourArmy
  function handleReleaseBot(bot){
    setArmy(army.filter((release) => release.id !== release.id));
  }


//add a bot to army
  function handleAddBot(bot){
    setArmy([...army,bot])
  }
  return (
    <div className='page'>
      < BotCollection onAddBot={handleAddBot} />
      <YourBotArmy onReleaseBot={handleReleaseBot} onDeleteBot={handleDeleteBot} army={army}/>
    </div>
  )
}

export default App