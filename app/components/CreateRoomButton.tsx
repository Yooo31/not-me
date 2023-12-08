// app/components/CreateRoomButton.tsx

import React from 'react';
import { generateRandomCode } from '@/app/utils/codeGenerator';


const CreateRoomButton: React.FC = () => {
  const handleCreateRoom = () => {
    const generatedCode = generateRandomCode(); // Utilise une fonction pour générer un code aléatoire
    console.log(`/party?code=${generatedCode}`);
  };

  return (
    <div>
      <h2>Créer une ROOM</h2>
      <button onClick={handleCreateRoom}>Créer une ROOM</button>
    </div>
  );
};

export default CreateRoomButton;
