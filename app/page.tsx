'use client';

import CreateRoomButton from '@/app/components/CreateRoomButton';
import JoinRoomForm from '@/app/components/JoinRoomForm';

const Home = () => {
  return (
    <div>
      <h1>Accueil</h1>
      <CreateRoomButton />
      <JoinRoomForm />
    </div>
  );
};

export default Home;
