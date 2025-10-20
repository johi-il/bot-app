import React, { useState } from 'react';
import './BotCollection.css';
function BotCollectionChild (props){
     const [inArmy, setInArmy] = useState(true); //in army state tracks if already enlisted

     function handleClick() {
        props.onAddBot()   //send bot data to parent component
       setInArmy(!inArmy);
     }

    return (
      <div className='card'>
        <ul>
          <img src={props.avatar_url} alt={props.name} />
          <p>
            Name: {props.name} {props.bot_class}
          </p>
          <p>catchphrase:{props.catchphrase}</p>
          <label>
            stats:
            <select>
              <option>health:{props.health}</option>
              <option>damage:{props.damage}</option>
              <option>armor:{props.armor}</option>
            </select>
          </label>
        </ul>
        {inArmy ? (
          <button onClick={handleClick}>Add to Army</button>
        ) : (
          <button disabled>Already Enlisted</button>
        )}
      </div>
    );

}

export default BotCollectionChild