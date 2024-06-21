"use client"
import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'
import Experince from './Experince'
import { Html, useProgress } from '@react-three/drei'

function Hero() {
    function Loader() {
        const { progress, active } = useProgress()
        return <Html center><p className='text-white font-bold whitespace-nowrap'>{progress.toFixed(1)} % Loaded</p></Html>
    }

    return (
        <Canvas camera={{
            fov: 70,
            position: [2.3, 1.5, 2.3]
        }}>
            <Suspense fallback={<Loader />}>
                <Experince />
            </Suspense>

        </Canvas>
    )
}

export default Hero