import React, { useEffect, useState } from 'react';
import SpellBuilder from './SpellBuilder';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

export default function SpellContainer() {

    useEffect(() => {
        const fetchSpells = async () => {
          const res = await axios.get('http://localhost:8080/spells');
          setSpells(res.data)
        }
        fetchSpells()
      }, [])
    
    const [spells, setSpells] = useState();
    const [levelFilter, setLevelFilter] = useState(null);

    const history = useHistory();
    
    return (

        <div className = 'App'>

            <h1>D&D 5E Spellbook</h1>

            <button className = 'new-spell' onClick = {() => history.push('/new-spell') } >Add a custom spell</button>

            <div className = 'filters'>

                <p>Filters:</p>

                <select onChange = { e => {
                    if (e.target.value !== 'Level: All')  {
                        setLevelFilter(e.target.value);
                    } else setLevelFilter(null)
                }}>
                    <option>Level: All</option>
                    <option>0</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                </select>

            </div>

            {levelFilter ?
            spells
            ?.filter( spell => spell.level === parseInt(levelFilter))
                ?.map( spell => <SpellBuilder spell={spell} />)
            :
            spells?.map( spell => <SpellBuilder spell={spell} />)
            }
  
      </div>

    )
}