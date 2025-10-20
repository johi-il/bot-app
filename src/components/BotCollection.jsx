import React from 'react'
import BotCollectionChild from './BotCollectionChild.jsx'
import botsData from '../components/db.json'

const Bots = botsData.bots;

function BotCollection() {
    const botItems = Bots.map((bot) =>
        <BotCollectionChild 
            key={bot.id}
            {...bot}
            props={bot}/>
        );

  return (
    <div>{botItems}</div>
  )
}

export default BotCollection