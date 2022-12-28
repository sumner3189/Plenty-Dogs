import { demos } from '@/lib/demos';
import Link from 'next/link';

export default function Page() {
  return (
    <div>
      <div
        className="flex h-screen justify-center bg-cover bg-center"
        style={{
          backgroundImage: `url(${'https://picsum.photos/id/237/600/400'})`,
        }}
      >
        <div className=" flex h-full w-full items-center justify-center">
          <div className="px-4 py-2 text-center text-white">
            <h1 className="text-4xl font-bold">Welcome to my Dogs Profile</h1>
            <p className="text-xl font-light">
              Puppys for sale!!!
            </p>
            <button className="mt-4 rounded border border-blue-700 bg-transparent py-2 px-4 font-semibold text-white hover:border-transparent hover:bg-blue-700 hover:text-white">
              Learn more
            </button>
          </div>
        </div>
      </div>
      <h1>hi</h1>
      <p>thest</p>
    </div>
  );
}
