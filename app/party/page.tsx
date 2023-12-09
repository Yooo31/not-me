'use client';
import React, { useEffect, useState } from 'react';
import { io } from 'socket.io-client';

const PartyPage: React.FC = () => {
  const [socket, setSocket] = useState<any>(null); // Utilisez le type correct pour Socket.io

  useEffect(() => {
    // Utilisez le code de la ROOM à partir de l'URL
    const roomCode = window.location.search.split('=')[1];

    // Initialisez le socket une fois que le composant est monté
    const newSocket = io();
    setSocket(newSocket);

    // Écoutez les événements nécessaires
    newSocket.on('connect', () => {
      console.log('Connected to WebSocket');
    });

    newSocket.on('disconnect', () => {
      console.log('Disconnected from WebSocket');
    });

    newSocket.on('playerJoined', (data: any) => {
      console.log('Player joined:', data);
      // Mettez à jour l'état des joueurs
    });

    newSocket.on('setMaster', (data: any) => {
      console.log('Set master:', data);
      // Mettez à jour l'état du maître
    });

    // Retournez une fonction de nettoyage pour déconnecter le socket lors du démontage du composant
    return () => {
      newSocket.disconnect();
    };
  }, []); // Assurez-vous de ne pas déclencher ce useEffect lors de chaque mise à jour

  return (
    <div>
      <h1>Party Page</h1>
      {/* Le contenu de la page */}
    </div>
  );
};

export default PartyPage;
