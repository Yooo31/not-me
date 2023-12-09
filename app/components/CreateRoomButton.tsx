// app/components/CreateRoomButton.tsx

import React, { useState } from 'react';
import { generateRandomCode } from '@/app/utils/codeGenerator';
import { useRouter } from 'next/navigation';
import { io } from 'socket.io-client';

const CreateRoomButton: React.FC = () => {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [roomCode, setRoomCode] = useState('');

  const handleCreateRoom = () => {
    const generatedCode = generateRandomCode();
    const user = prompt('Entrez votre nom d\'utilisateur :');
    
    if (user) {
      setUsername(user);

      const socket = io();
      socket.emit('createRoom', generatedCode, user);

      // Redirection vers la page /party après avoir créé la ROOM
      router.push(`/party?code=${generatedCode}`);
    }
  };

  return (
    <div>
      <h2>Créer une ROOM</h2>
      <button onClick={handleCreateRoom}>Créer une ROOM</button>
    </div>
  );
};

export default CreateRoomButton;
