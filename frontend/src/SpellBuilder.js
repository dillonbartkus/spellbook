import React, { useState } from 'react';
import axios from 'axios';

export default function SpellBuilder({ spell }) {

    const [showMaterial, setShowMaterial] = useState(false);

    const [isEdit, setIsEdit] = useState(false);
    const [spellName, setSpellName] = useState()

    const deleteSpell = async () => {
        await axios.delete(`http://localhost:8080/spells/${spell.id}`)
        window.location.reload();
    }

    const editSpell = async () => {
        await axios.put(`http://localhost:8080/spells/${spell.id}`, {
            name: spellName
        })
        window.location.reload();
    }

    const renderDamageTypeColor = dmgType => {
        switch(dmgType) {
            case 'Piercing':
            case 'Slashing':
            case 'Blunt':
                return <span style = {{ color: 'grey'}} >{dmgType}</span>
            case 'Fire':
                return <span style = {{ color: 'red'}} >Fire</span>
            case 'Cold':
                return <span style = {{ color: 'blue'}} >Cold</span>
            case 'Acid':
                return <span style = {{ color: 'green'}} >Acid</span>
            case 'Lightning':
            case 'Thunder':
                return <span style = {{ color: 'orange'}} >{dmgType}</span>
            case 'Necrotic':
                return <span style = {{ color: 'black'}} >Necrotic</span>
            case 'Radiant':
                return <span style = {{ color: 'gold'}} >Radiant</span>
            case 'Force':
                return <span style = {{ color: 'purple'}} >Force</span>
            default:
                return <span>{dmgType}</span>
        }
    }

    return (

        <div className = 'spell-container'>

            <button className = 'delete-spell' onClick = { () => deleteSpell() }>Delete</button>

            { isEdit ? <button className = 'edit-spell' onClick = { () => editSpell() }>Submit</button>
            :
            <button className = 'edit-spell' onClick = { () => setIsEdit(!isEdit) }>Edit</button> }

            { isEdit ?  <input onChange = { e => setSpellName(e.target.value) } defaultValue={spell.name}></input> : <h2>{spell?.name}</h2>}

            <div className = 'major-details'>
                <p>Level: {spell?.level}</p>
                <p>Range: {spell?.range}</p>
                <p>School: {spell?.school?.name}</p>
                { spell?.ritual && <p className = 'ritual'>Ritual</p> }
                { spell?.concentration && <p className = 'concentration'>Concentration</p> }
                <p
                className = 'components'
                onMouseEnter = {() => setShowMaterial(true) }
                onMouseLeave = {() => setShowMaterial(false) } >
                    Components: {spell?.components}
                    { showMaterial && spell?.material && <p className = 'material'>Material: {spell?.material}</p> }
                </p>
            </div>

            { isEdit ? <textarea defaultValue={spell.desc}></textarea> : <p className = 'spell-desc'>{spell?.desc}</p> }
            { isEdit ? <textarea defaultValue={spell.higherLevel}></textarea> : <p>{spell?.higherLevel}</p> }

            <div className = 'minor-details'>
                <p>Cast time: {spell?.castingTime}</p>
                { spell?.damage && <p>Damage type: {renderDamageTypeColor(spell?.damage?.damage_type?.name)}</p> }
                <p>Duration: {spell?.duration}</p>
                <p>Classes: {spell?.classes?.map( clss => <span>{clss.name} </span> )}</p>
            </div>

        </div>
    )
}