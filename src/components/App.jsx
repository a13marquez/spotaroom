import React from 'react';
import { Header } from './header/Header';
import { RoomsList } from './rooms-list';

import './app.scss';

export const App = () => (
  <>
    <Header headerTitle="SPOTAROOM" />
    <RoomsList></RoomsList>
  </>
)