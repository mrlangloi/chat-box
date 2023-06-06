import React from "react";

function CharacterSheet(props) {

    const setCharacter = props.setCharacter;

    const handleNameChange = (e) => {
        e.preventDefault();
        setCharacter({myName: `${e.target.value}`});
    }

    const characterRaces = ['Human', 'Elf', 'Dwarf', 'Lizard'];
    const characterRacesMap = characterRaces.map( (charRace) => (
        <React.Fragment key={`race-${charRace}`}>
            <label>
                <input type='radio' name='characterRace' onClick={() => setCharacter({myRace: charRace})}/>
                <span>{charRace}</span>
            </label>
        </React.Fragment>
    ));

    const characterClass = ['Barbarian', 'Cleric', 'Fighter', 'Ranger', 'Rogue', 'Wizard'];
    const characterClassMap = characterClass.map( (charClass) => (
        <React.Fragment key={`class-${charClass}`}>
            <label>
                <input type='radio' name='characterClass' onClick={() => setCharacter({myClass: charClass})}/>
                <span>{charClass}</span>
            </label>
        </React.Fragment>
    ));

    return (
        <div className="charSheetDiv">
            <div className="row charNameDiv">
                <div className="input-field col s6">
                <input id="icon_prefix" type="text" className="validate" onChange={handleNameChange}/>
                <label htmlFor="icon_prefix">Character Name</label>
                </div>
            </div>

            <div className="charRaceDiv">
                {characterRacesMap}
            </div>

            <div className="charClassDiv">
                {characterClassMap}
            </div>
            
        </div>
    );
}

export default CharacterSheet;