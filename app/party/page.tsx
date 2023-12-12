'use client';
import React, { useEffect, useState } from 'react';
import { io } from 'socket.io-client';

const PartyPage: React.FC = () => {
  const [socket, setSocket] = useState<any>(null); 
  const [players, setPlayers] = useState<any[]>([]); 

  useEffect(() => {
    const roomCode = window.location.search.split('=')[1];

    // Spécifiez l'URL du serveur socket.io
    const newSocket = io('http://localhost:3000'); // Assurez-vous de mettre l'URL correcte

    newSocket.on('connect', () => {
      console.log('Connected to server');
    });

    newSocket.on('playerJoined', (data: any) => {
      console.log('Player joined:', data);
      setPlayers((prevPlayers) => [...prevPlayers, data]);
    });

    newSocket.on('setMaster', (data: any) => {
      console.log('Set master:', data);
      // Mettez à jour l'état du maître
    });

    setSocket(newSocket);

    return () => {
      newSocket.disconnect();
    };
  }, []);

  return (
    <div>
      <h1>Party Page</h1>
      <h2>Liste des joueurs :</h2>
      <ul>
        {players.map((player) => (
          <li key={player.playerId}>{player.username}</li>
        ))}
      </ul>
    </div>
  );
};

export default PartyPage;
