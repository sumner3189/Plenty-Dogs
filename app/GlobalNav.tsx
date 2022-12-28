'use client';

import { useSelectedLayoutSegments } from 'next/navigation';
import Link from 'next/link';

export default function GlobalNav() {
  const [selectedLayoutSegments] = useSelectedLayoutSegments();

  return (
    <nav className="flex justify-center">
      <ul className="flex">
        <li className="mr-6">
          <Link href="/">Home</Link>
        </li>
        <li className="mr-6">
          <Link href="/about">About</Link>
        </li>
        <li className="mr-6">
          <Link href="/discover">Discover</Link>
        </li>
        <li className="mr-6">
          <Link href="/search">Search</Link></li>
      </ul>
    </nav>
  );
}
