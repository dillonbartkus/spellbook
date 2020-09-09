import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

export default function NewSpell() {

    const [name, setName] = useState();
    const [desc, setDesc] = useState();
    const [level, setLevel] = useState(0);
    const [ritual, setRitual] = useState(false);
    const [concentration, setConcentration] = useState(false);
    const [range, setRange] = useState(0);
    const [dmgtype, setDmgtype] = useState('Fire');
    const [school, setSchool] = useState('Evocation');
    const [classes, setClasses] = useState([]);

    const history = useHistory();

    const saveSpell = async e => {
        e.preventDefault();
        const classesObj = classes.map( cls => {
            return { name: cls }
        })
        await axios.post('http://localhost:8080/spells', {
            name,
            desc,
            level,
            range,
            ritual,
            concentration,
            damage: {
                damage_type: { name: dmgtype }
            },
            school: { name: school },
            classes: classesObj
        });
        history.push('/');
    };

    return (
            
        <form className = 'new-spell-form'
        onSubmit = { e => saveSpell(e) }
        >

            <p>Name:</p>
            <input required onChange = { e => setName(e.target.value) } ></input>

            <p>Description:</p>
            <textarea required onChange = { e => setDesc(e.target.value) }></textarea>

            <select onChange = { e => setLevel(e.target.value) }>
                <option>Level:</option>
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

            <p>Range</p>
            <input type = 'number' onChange = { e => setRange(e.target.value) } ></input>

            <p>Ritual?</p>
            <div>
                <label>Yes</label><input type = 'radio' checked = {ritual} onChange = { () => setRitual(true) }></input>
            </div>
            <div>
                <label>No</label><input type = 'radio' checked = {!ritual} onChange = { () => setRitual(false) }></input>
            </div>

            <p>Concentration?</p>
            <div>
                <label>Yes</label><input type = 'radio' checked = {concentration} onChange = { () => setConcentration(true) }></input>
            </div>
            <div>
                <label>No</label><input type = 'radio' checked = {!concentration} onChange = { () => setConcentration(false) }></input>
            </div>

            <select onChange = { e => setDmgtype(e.target.value) }>
                <option>Damage Type:</option>
                <option>Fire</option>
                <option>Cold</option>
                <option>Lightning</option>
                <option>Thunder</option>
                <option>Force</option>
                <option>Acid</option>
            </select>

            <select onChange = { e => setSchool(e.target.value) }>
                <option>School:</option>
                <option>Evocation</option>
                <option>Divination</option>
                <option>Transmutation</option>
                <option>Conjuration</option>
                <option>Necromancy</option>
                <option>Abjuration</option>
            </select>

            <p>Classes</p>
            <div>
                <div><label>Bard</label><input type = 'checkbox' checked = {classes.includes('Bard')} onChange = { () => setClasses( [...classes, 'Bard']) }></input></div>
                <div><label>Cleric</label><input type = 'checkbox' checked = {classes.includes('Cleric')} onChange = { () => setClasses([...classes, 'Cleric']) }></input></div>
                <div><label>Druid</label><input type = 'checkbox' checked = {classes.includes('Druid')} onChange = { () => setClasses([...classes, 'Druid']) }></input></div>
                <div><label>Paladin</label><input type = 'checkbox' checked = {classes.includes('Paladin')} onChange = { () => setClasses([...classes, 'Paladin']) }></input></div>
                <div><label>Sorcerer</label><input type = 'checkbox' checked = {classes.includes('Sorcerer')} onChange = { () => setClasses([...classes, 'Sorcerer']) }></input></div>
                <div><label>Wizard</label><input type = 'checkbox' checked = {classes.includes('Wizard')} onChange = { () => setClasses([...classes, 'Wizard']) }></input></div>
            </div>

            <button>Add spell</button>

        </form>
    )
}