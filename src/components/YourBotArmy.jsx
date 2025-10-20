import React from "react";
import './BotCollection.css'

function YourBotArmy(props) {
  const { army } = props;

  return (
    <div className="your-bot-army">
      <h2>Your Bot Army</h2>
      {army.map((bot) => (
        <div key={bot.id}>
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
        </div>
      ))}
    </div>
  );
}

export default YourBotArmy;
