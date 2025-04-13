/* eslint-disable no-unused-vars */
import { Canvas } from '@react-three/fiber'
import React, { Suspense, useState, useEffect, useRef } from 'react'
import Loader from '../components/Loader'
import Island from '../../models/Island'
import Sky from '../../models/Sky'
import Birds from '../../models/Birds'
import Plane from '../../models/Plane'
import Homeinfo from '../components/Homeinfo'
import sakura from '../assets/sakura.mp3'
import { soundoff, soundon } from '../assets/icons'

const Home = () => {
  const audioRef = useRef(null);
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);
  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(1);
  const [hasInteracted, setHasInteracted] = useState(false);

  // Initialize audio only on client side
  useEffect(() => {
    audioRef.current = new Audio(sakura);
    audioRef.current.volume = 0.3;
  
    audioRef.current.loop = true;

    // Cleanup on unmount
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  // Handle autoplay with user gesture requirement
  useEffect(() => {
    const handleFirstInteraction = () => {
      if (!hasInteracted) {
        setHasInteracted(true);
        setIsPlayingMusic(true);
      }
    };

    // Try to play music immediately (may fail due to browser policies)
    const tryAutoplay = async () => {
      try {
        if (audioRef.current) {
          await audioRef.current.play();
          setIsPlayingMusic(true);
        }
      } catch (err) {
        // Autoplay was prevented, wait for user interaction
        window.addEventListener('click', handleFirstInteraction, { once: true });
        window.addEventListener('keydown', handleFirstInteraction, { once: true });
        window.addEventListener('touchstart', handleFirstInteraction, { once: true });
      }
    };

    tryAutoplay();

    return () => {
      window.removeEventListener('click', handleFirstInteraction);
      window.removeEventListener('keydown', handleFirstInteraction);
      window.removeEventListener('touchstart', handleFirstInteraction);
    };
  }, [hasInteracted]);

  // Handle play/pause when isPlayingMusic changes
  useEffect(() => {
    if (!audioRef.current) return;

    if (isPlayingMusic) {
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(error => {
          console.log("Playback prevented:", error);
          setIsPlayingMusic(false);
        });
      }
    } else {
      audioRef.current.pause();
    }
  }, [isPlayingMusic]);

  const adjustIslandForScreenSize = () => {
    let screenScale = null;
    let screenPosition = [0, -6.5, -40];
    let rotation = [0.1, 4.7, 0];

    if (window.innerWidth > 768) {
      screenScale = [0.9, 0.9, 0.9];
    } else {
      screenScale = [1, 1, 1];
    }

    return [screenScale, screenPosition, rotation];
  };

  const adjustPlaneForScreenSize = () => {
    let screenScale;
    let screenPosition;

    if (window.innerWidth > 768) {
      screenScale = [1.5, 1.5, 1.5];
      screenPosition = [-1, -1, -0];
    } else {
      screenScale = [3, 3, 3];
      screenPosition = [0, -4, -4];
    }

    return [screenScale, screenPosition];
  };

  const [islandScale, islandPosition, islandRotation] = adjustIslandForScreenSize();
  const [planeScale, planePosition] = adjustPlaneForScreenSize();

  return (
    <section className={`w-full h-screen relative ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`}>
      <div className='absolute top-16 h-fit left-0 right-0 flex justify-center items-center z-10'>
        {currentStage && <Homeinfo currentStage={currentStage} />}
      </div>
      <Canvas
        className='w-full h-screen bg-transparent'
        camera={{ near: 0.1, far: 1000, fov: 75 }}
      >
        <Suspense fallback={<Loader />}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[1, 1, 1]} intensity={2} color='white' />
          <hemisphereLight groundColor='black' skyColor="#b1e1ff" intensity={1} />

          <Birds />
          <Sky isRotating={isRotating} />
          <Island
            position={islandPosition}
            scale={islandScale}
            rotation={islandRotation}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
          />
          <Plane
            isRotating={isRotating}
            planeposition={planePosition}
            planescale={planeScale}
            rotation={[0, 20, 0]}
          />
        </Suspense>
      </Canvas>

      <div className='absolute bottom-2 left-2'>
        <img 
          src={isPlayingMusic ? soundon : soundoff}
          alt="sound"
          className='w-10 h-10 cursor-pointer object-contain'
          onClick={() => setIsPlayingMusic(!isPlayingMusic)} 
        />
      </div>
    </section>
  );
};

export default Home;