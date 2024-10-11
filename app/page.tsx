'use client';

import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <h1 className="title">Hello, you are on the main page please visit click link below</h1>
      <Link href="/hospitals" className="link">
        Go to Hospitals Page
      </Link>
    </>
  );
}
