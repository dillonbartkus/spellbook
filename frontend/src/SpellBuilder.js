import React from 'react';

export default function SpellBuilder({ spell }) {

    return (

        <div className = 'spell-container'>

            <h2>{spell?.name}</h2>
            <p>{spell?.desc}</p>
            <p>{spell?.level}</p>

        </div>
    )
}