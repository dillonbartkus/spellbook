import React, { useEffect, useState } from 'react';
import SpellBuilder from './SpellBuilder';
import axios from 'axios';

export default function App() {

  useEffect(() => {
    const fetchSpells = async () => {
      const res = await axios.get('http://localhost:8080/spells');
      setSpells(res.data)
    }
    fetchSpells()
  }, [])

  const [spells, setSpells] = useState();

  return(

    <div className = 'App'>

      {spells ? spells.map( spell => <SpellBuilder spell={spell} />) : null }

    </div>

  )
}
