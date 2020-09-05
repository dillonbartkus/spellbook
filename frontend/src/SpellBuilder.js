import React from 'react';

export default function SpellBuilder({ spell }) {

    return (

        <div className = 'spell-container'>

            {spell?.name}

        </div>
    )
}