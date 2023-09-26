import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import {Modell} from './Component/Earth';

function MyCanvas() {
  return (
    <Canvas className='canvas hide' id='canvis'>
      <OrbitControls enableZoom={false} enablePan={false} />
      <ambientLight intensity={0.5} />
      <directionalLight position={[-2, 5, 2]} intensity={1} />
      <Modell />
    </Canvas>
  );
}

export default MyCanvas;

