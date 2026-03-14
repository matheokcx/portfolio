import {useRef} from "react";
import * as THREE from "three";
import {useFrame} from "@react-three/fiber";

const AnimatedLight = () => {
    const lightRef = useRef<THREE.PointLight>(null);

    useFrame(({clock}) => {
        if (!lightRef.current) {
            return;
        }

        const elapsedTime: number = clock.getElapsedTime();
        lightRef.current.intensity = 2 + Math.sin(elapsedTime * 0.8) * 0.5;
    });

    return (
        <>
            <ambientLight intensity={0.1}/>
            <pointLight ref={lightRef} position={[0, 2, 3]} intensity={2.5} color="#ffffff"/>
            <pointLight position={[-3, -1, -2]} intensity={0.4} color="#8899ff"/>
        </>
    );
};

export default AnimatedLight;
