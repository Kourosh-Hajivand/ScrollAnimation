import { OrbitControls, ScrollControls } from '@react-three/drei'
import React from 'react'
import { Office } from './Office'
import { Overlay } from './ovarlay'
import { useMediaQuery } from 'react-responsive'

function Experince() {
    const isMobile = useMediaQuery({ query: '(max-width: 767px)' })
    return (
        <>
            <ambientLight intensity={1.8} />
            {!isMobile &&
                <OrbitControls enableZoom={false} />
            }
            <ScrollControls pages={3} damping={.5}>
                <Office />
                <Overlay />
            </ScrollControls>
        </>
    )
}

export default Experince