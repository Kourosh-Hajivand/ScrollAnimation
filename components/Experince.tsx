import { OrbitControls, ScrollControls } from '@react-three/drei'
import React from 'react'
import { Office } from './Office'
import { Overlay } from './ovarlay'

function Experince() {
    return (
        <>
            <ambientLight intensity={1.8} />
            <OrbitControls enableZoom={false} />
            <ScrollControls pages={3} damping={.5}>
                <Office />
                <Overlay />
            </ScrollControls>
        </>
    )
}

export default Experince