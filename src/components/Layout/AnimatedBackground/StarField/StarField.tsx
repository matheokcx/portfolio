import {useRef, useMemo} from "react";
import * as THREE from "three";
import {useFrame} from "@react-three/fiber";

const STAR_COUNT = 300;

const StarField = () => {
    const pointsRef = useRef<THREE.Points>(null);

    const [positions, sizes] = useMemo(() => {
        const pos = new Float32Array(STAR_COUNT * 3);
        const sz = new Float32Array(STAR_COUNT);

        for (let i = 0; i < STAR_COUNT; i++) {
            pos[i * 3] = (Math.random() - 0.5) * 20;
            pos[i * 3 + 1] = (Math.random() - 0.5) * 20;
            pos[i * 3 + 2] = (Math.random() - 0.5) * 15 - 2;
            sz[i] = Math.random() * 2 + 0.5;
        }

        return [pos, sz];
    }, []);

    useFrame(({clock}) => {
        if (!pointsRef.current) return;
        pointsRef.current.rotation.y = clock.getElapsedTime() * 0.005;
        pointsRef.current.rotation.x = clock.getElapsedTime() * 0.003;
    });

    const geometry = useMemo(() => {
        const geo = new THREE.BufferGeometry();
        geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        geo.setAttribute('size', new THREE.BufferAttribute(sizes, 1));
        return geo;
    }, [positions, sizes]);

    return (
        <points ref={pointsRef} geometry={geometry}>
            <pointsMaterial
                color="#ffffff"
                size={0.04}
                sizeAttenuation
                transparent
                opacity={0.7}
                depthWrite={false}
            />
        </points>
    );
};

export default StarField;
