import {useRef} from "react";
import * as THREE from "three";
import {useFrame} from "@react-three/fiber";

const AnimatedLight = () => {
    const mainLightRef = useRef<THREE.SpotLight>(null);

    useFrame(({clock}) => {
        if (!mainLightRef.current) return;
        const t = clock.getElapsedTime();
        mainLightRef.current.intensity = 8 + Math.sin(t * 0.5) * 2;
    });

    return (
        <>
            <ambientLight intensity={0.08}/>
            {/* Key spotlight from top-right aimed at asteroid */}
            <spotLight
                ref={mainLightRef}
                position={[1, 4, 4]}
                intensity={10}
                color="#ffffff"
                angle={0.5}
                penumbra={0.6}
                distance={20}
                decay={1.2}
                target-position={[0.3, -0.2, 0]}
            />
            {/* Secondary top light for halo spread */}
            <pointLight
                position={[-1, 3, 2]}
                intensity={3}
                color="#e0daf0"
                distance={12}
                decay={1.5}
            />
            {/* Front fill to reveal surface detail */}
            <pointLight
                position={[2, 0.5, 5]}
                intensity={2}
                color="#c8c8d8"
                distance={12}
            />
            {/* Rim light - cool blue */}
            <pointLight
                position={[-3, 0.5, -2]}
                intensity={1.2}
                color="#7788cc"
                distance={10}
            />
            {/* Bottom subtle fill */}
            <pointLight
                position={[1, -3, 1]}
                intensity={0.2}
                color="#5a4f7b"
                distance={8}
            />
        </>
    );
};

export default AnimatedLight;
