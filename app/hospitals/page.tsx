'use client';

import { HospitalList } from '../components/HospitalList';
import React from 'react';
import { store } from '@/app/store';
import { Provider } from 'react-redux';

export default function Home() {
  return (
    <Provider store={store}>
      <HospitalList />
    </Provider>
  );
}
