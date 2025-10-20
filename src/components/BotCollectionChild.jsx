import React from 'react'
import bots from '../components/db.json'
function BotCollectionChild (props){

    return (
        <div>
            <ul>
                <img src={props.avatar_url} alt={props.name} />
                <p>Name: {props.name} {props.bot_class}</p>
                <p>catchphrase: {props.catchphrase}</p>
                <label>
                    stats:
                <select>
                    <option>health:{props.health}</option>
                    <option>damage:{props.damage}</option>
                    <option>armor:{props.armor}</option>
                </select>
                </label>
                    
            </ul>
        </div>

    )

}

export default BotCollectionChild