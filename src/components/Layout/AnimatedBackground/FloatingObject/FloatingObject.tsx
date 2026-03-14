import {useRef} from "react";
import * as THREE from "three";
import {useFrame} from "@react-three/fiber";
import {MeshDistortMaterial} from "@react-three/drei";

const FloatingObject = () => {
    const meshRef = useRef<THREE.Mesh>(null);

    useFrame(({clock}) => {
        if (!meshRef.current) {
            return;
        }

        const elapsedTime: number = clock.getElapsedTime();
        meshRef.current.rotation.x = elapsedTime * 0.08;
        meshRef.current.rotation.y = elapsedTime * 0.12;
        meshRef.current.position.y = Math.sin(elapsedTime * 0.5) * 0.15;
    })

    return (
        <mesh ref={meshRef} scale={1.8}>
            <icosahedronGeometry args={[1, 4]}/>
            <MeshDistortMaterial color="#1a1a1a"
                                 roughness={0.15}
                                 metalness={0.9}
                                 distort={0.25}
                                 speed={1.5}
                                 envMapIntensity={0.8}
            />
        </mesh>
    );
};

export default FloatingObject;
