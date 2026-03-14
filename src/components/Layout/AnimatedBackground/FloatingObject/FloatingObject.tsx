import {useRef, useMemo} from "react";
import * as THREE from "three";
import {useFrame} from "@react-three/fiber";

// Simple 3D hash for pseudo-random noise
const hash = (x: number, y: number, z: number) => {
    const n = Math.sin(x * 127.1 + y * 311.7 + z * 74.7) * 43758.5453;
    return n - Math.floor(n);
};

const FloatingObject = () => {
    const meshRef = useRef<THREE.Mesh>(null);

    const geometry = useMemo(() => {
        // Higher detail base geometry
        const geo = new THREE.IcosahedronGeometry(1, 5);
        const positions = geo.attributes.position;
        const vertex = new THREE.Vector3();

        // Pre-generate crater positions
        const craters: { center: THREE.Vector3; radius: number; depth: number }[] = [];
        for (let c = 0; c < 12; c++) {
            const theta = hash(c, 0, 1) * Math.PI * 2;
            const phi = Math.acos(2 * hash(c, 1, 0) - 1);
            craters.push({
                center: new THREE.Vector3(
                    Math.sin(phi) * Math.cos(theta),
                    Math.sin(phi) * Math.sin(theta),
                    Math.cos(phi)
                ),
                radius: 0.2 + hash(c, 2, 3) * 0.35,
                depth: 0.06 + hash(c, 3, 2) * 0.12
            });
        }

        for (let i = 0; i < positions.count; i++) {
            vertex.fromBufferAttribute(positions, i);
            const dir = vertex.clone().normalize();

            // Multi-octave surface noise for rocky terrain
            let displacement = 0;
            displacement += 0.12 * Math.sin(vertex.x * 4.5) * Math.cos(vertex.y * 3.8) * Math.sin(vertex.z * 5.2);
            displacement += 0.07 * Math.sin(vertex.x * 9.1 + vertex.y * 7.3) * Math.cos(vertex.z * 6.4);
            displacement += 0.04 * Math.cos(vertex.z * 14.4 + vertex.x * 11.7 + vertex.y * 9.2);
            displacement += 0.025 * Math.sin(vertex.x * 22.3 + vertex.z * 18.1) * Math.cos(vertex.y * 20.5);

            // Large-scale shape deformation (non-spherical, elongated)
            displacement += 0.08 * Math.sin(vertex.y * 2.1) * Math.cos(vertex.x * 1.3);
            displacement -= 0.06 * Math.cos(vertex.z * 1.8 + vertex.x * 0.7);

            // Sharp ridges
            const ridgeVal = Math.abs(Math.sin(vertex.x * 6.3 + vertex.y * 4.7 + vertex.z * 5.1));
            displacement += 0.03 * Math.pow(ridgeVal, 4);

            // Impact craters
            for (const crater of craters) {
                const dist = dir.distanceTo(crater.center);
                if (dist < crater.radius) {
                    const t = dist / crater.radius;
                    // Smooth crater bowl with a slight rim
                    const craterShape = -crater.depth * (1 - t * t) + crater.depth * 0.3 * Math.exp(-((t - 0.9) ** 2) / 0.02);
                    displacement += craterShape;
                }
            }

            vertex.multiplyScalar(1 + displacement);
            positions.setXYZ(i, vertex.x, vertex.y, vertex.z);
        }

        geo.computeVertexNormals();
        return geo;
    }, []);

    // Vertex colors for subtle surface variation
    const coloredGeometry = useMemo(() => {
        const geo = geometry.clone();
        const positions = geo.attributes.position;
        const colors = new Float32Array(positions.count * 3);
        const vertex = new THREE.Vector3();

        for (let i = 0; i < positions.count; i++) {
            vertex.fromBufferAttribute(positions, i);
            const variation = hash(
                Math.round(vertex.x * 10),
                Math.round(vertex.y * 10),
                Math.round(vertex.z * 10)
            );
            // Grey rock tones with slight variation
            const base = 0.2 + variation * 0.12;
            colors[i * 3] = base + (variation > 0.7 ? 0.03 : 0);
            colors[i * 3 + 1] = base;
            colors[i * 3 + 2] = base + (variation < 0.3 ? 0.02 : 0);
        }

        geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
        return geo;
    }, [geometry]);

    useFrame(({clock}) => {
        if (!meshRef.current) return;
        const t = clock.getElapsedTime();
        meshRef.current.rotation.x = t * 0.04;
        meshRef.current.rotation.y = t * 0.06;
        meshRef.current.position.y = Math.sin(t * 0.3) * 0.1;
    });

    return (
        <mesh ref={meshRef} geometry={coloredGeometry} scale={1.2} position={[0.3, -0.2, 0]}>
            <meshStandardMaterial
                vertexColors
                roughness={0.82}
                metalness={0.12}
                flatShading
            />
        </mesh>
    );
};

export default FloatingObject;
