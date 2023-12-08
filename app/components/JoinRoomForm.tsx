import React, { useState } from 'react';

const JoinRoomForm: React.FC = () => {
  const [code, setCode] = useState('');

  const handleJoinRoom = () => {
    if (code.trim() !== '') {
      console.log(`/party?code=${code}`);
    }
  };

  return (
    <div>
      <h2>Rejoindre une ROOM</h2>
      <input
        type="text"
        placeholder="Code de la ROOM"
        value={code}
        onChange={(e) => setCode(e.target.value)}
      />
      <button onClick={handleJoinRoom}>Rejoindre la ROOM</button>
    </div>
  );
};

export default JoinRoomForm;
