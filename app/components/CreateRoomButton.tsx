// app/components/CreateRoomButton.tsx

import React, { useState, useEffect } from 'react';
import { generateRandomCode } from '@/app/utils/codeGenerator';
import { useRouter } from 'next/navigation';
import { io } from 'socket.io-client';

const CreateRoomButton: React.FC = () => {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [roomCode, setRoomCode] = useState('');

  const handleCreateRoom = () => {
    const generatedCode = generateRandomCode();
    setRoomCode(generatedCode);
  };

  useEffect(() => {
    if (roomCode) {
      const user = prompt('Entrez votre nom d\'utilisateur :');
      if (user) {
        setUsername(user);
        const socket = io();

        socket.on('connect', () => {
          socket.emit('createRoom', roomCode, user);
          router.push(`/party?code=${roomCode}`);
        });

        return () => {
          socket.disconnect();
        };
      }
    }
  }, [roomCode, router]);

  return (
    <div>
      <h2>Créer une ROOM</h2>
      <button onClick={handleCreateRoom}>Créer une ROOM</button>
    </div>
  );
};

export default CreateRoomButton;
