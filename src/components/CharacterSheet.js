import React, { useEffect } from "react";

//this component is a character sheet that the user can update to their liking

function CharacterSheet(props) {

    const myCharacter = props.myCharacter;
    const setMyCharacter = props.setMyCharacter;

    //handles updating the character name
    const handleNameChange = (e) => {
        e.preventDefault();

        setMyCharacter( (prevCharacter) => {
            return [{ ...prevCharacter[0], myName: e.target.value}];
        });
    };

    //handles updating existing character properties
    const updateCharacter = (property, value) => {
        setMyCharacter( (prevCharacter) => {
            return [{ ...prevCharacter[0], [property]: value}];
        });
    };


    //character classes
    const classOptions = ['Barbarian', 'Cleric', 'Fighter', 'Ranger', 'Rogue', 'Wizard'];

    const classOptionsMap = classOptions.map( (charClass) => (
        <React.Fragment key={`class-${charClass}`}>
            <label>
                <input 
                    type='radio' 
                    name='characterClass' 
                    checked={myCharacter[0].myClass === charClass}
                    onChange={() => updateCharacter('myClass', charClass)}
                />
                <span>{charClass}</span>
            </label>
        </React.Fragment>
    ));

    //character races
    const raceOptions = ['Human', 'Elf', 'Dwarf', 'Lizard'];

    const raceOptionsMap = raceOptions.map( (charRace) => (
        <React.Fragment key={`race-${charRace}`}>
            <label>
                <input 
                    type='radio' 
                    name='characterRace' 
                    checked={myCharacter[0].myRace === charRace}
                    onChange={() => updateCharacter('myRace', charRace)}
                />
                <span>{charRace}</span>
            </label>
        </React.Fragment>
    ));

    //for debugging purposes
    useEffect( () => {
        console.log(`I am a ${myCharacter[0].myRace} ${myCharacter[0].myClass} under the name ${myCharacter[0].myName}.`);
    }, [myCharacter]);

    
    return (
        <div className="charSheetDiv">
            <div className="row charNameDiv">
                <div className="input-field col s6">
                <input id="icon_prefix" type="text" className="validate" onChange={handleNameChange}/>
                <label htmlFor="icon_prefix">Character Name</label>
                </div>
            </div>

            <div className="charClass">
                {classOptionsMap}
            </div>

            <div className="charRace">
                {raceOptionsMap}
            </div>

            <button
                onClick={props.handleSendMessage}
            >
                Generate!
            </button>
            
        </div>
    );
}

export default CharacterSheet;