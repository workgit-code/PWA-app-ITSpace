import React from 'react';

function PlanetRow({planet, planetIndex, planetClassName}) {
    return (
        <div id={`Planet${planetIndex+1}`} className={`Planet ${planetClassName}`}>
            <img src={planet.img} alt="Planet missing"/>
            <p>{planet.name}</p>
        </div>
    );
}

export default PlanetRow;