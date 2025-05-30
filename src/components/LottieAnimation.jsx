'use client';

import dynamic from 'next/dynamic';

// Dynamically import Player with SSR disabled
const Player = dynamic(
  () => import('@lottiefiles/react-lottie-player').then((mod) => mod.Player),
  {
    ssr: false, // Disable server-side rendering
  }
);

export default function LottieAnimation({ src }) {
  return (
    <div className="lottie-animation" style={{ marginTop: '20px' }}>
      <Player
        autoplay
        loop
        src={src}
        style={{ height: 'auto', width: '99%', maxWidth: '550px' }}
      />
    </div>
  );
}
