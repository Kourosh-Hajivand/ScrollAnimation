"use client"
import { Canvas } from '@react-three/fiber'
import React from 'react'
import Experince from './Experince'

function Hero() {

    return (
        <Canvas camera={{
            fov: 70,
            position: [2.3, 1.5, 2.3]
        }}>
            <Experince />

        </Canvas>
    )
}

export default Hero