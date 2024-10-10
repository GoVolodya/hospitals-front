'use client';

import { Provider } from 'react-redux';
import { store } from './store';
import { HospitalList } from './components/HospitalList';
import React from 'react';

export default function Home() {
  return (
    <Provider store={store}>
      <HospitalList />
    </Provider>
  );
}
