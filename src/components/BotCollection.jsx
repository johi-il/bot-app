import React from "react";
import BotCollectionChild from "./BotCollectionChild.jsx";
import botsData from "./db.json";

const Bots = botsData.bots;
function BotCollection({ onAddBot}) {


  const botItems = Bots.map((bot) => (
    <BotCollectionChild key={bot.id} {...bot} onAddBot={() => onAddBot(bot)} /> //callback function to send bot data to parent
  ));

  return <div>{botItems}</div>;
}

export default BotCollection;
