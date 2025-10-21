import React from "react";
import './BotCollection.css'

function YourBotArmy({army, onDeleteBot, onReleaseBot}) {
 


  return (
    <div className="your-bot-army">
      <h2>Your Bot Army</h2>
      {army.map((bot) => (
        <div key={bot.id} onClick={()=>{onReleaseBot(bot)}}>
          <img src={bot.avatar_url} alt={bot.name} />
          <p>
            Name: {bot.name} {bot.bot_class}
          </p>
          <p>catchphrase: {bot.catchphrase}</p>
          <label>
            stats:
            <select>
              <option>health:{bot.health}</option>
              <option>damage:{bot.damage}</option>
              <option>armor:{bot.armor}</option>
            </select>
          </label>
          <button onClick={(e) => {
            e.stopPropagation(); // Prevent triggering onReleaseBot when deleting 
            onDeleteBot(bot)
          }}
          style={{
            backgroundColor:"red",
            color:"white",
            borderRadius:"25%",
            width:"fit-content",
            height:"40px",
            border:"1px blue",
            cursor:"pointer",
            alignItems:"center",
          
          }}>
            X</button>
        </div>
      ))}
    </div>
  );
}

export default YourBotArmy;
