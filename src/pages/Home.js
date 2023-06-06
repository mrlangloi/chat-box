import React, { useEffect, useState } from 'react';
import CharacterSheet from '../components/CharacterSheet.js';
import ChatWindow from '../components/ChatWindow.js';

function Home() {

  const [character, setCharacter] = useState({
    myName: '',
    myClass: '',
    myRace: '',
  });

  useEffect( () => {
    console.log(character);
  }, [character])

  return (
    <div>
      <h1>Home</h1>
      <p>asdf1234</p>
      <ChatWindow character={character}/>

      <CharacterSheet setCharacter={setCharacter} />
    </div>
  );
}

export default Home;