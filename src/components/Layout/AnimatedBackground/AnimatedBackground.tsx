import {Canvas} from '@react-three/fiber'
import FloatingObject from "./FloatingObject/FloatingObject.tsx";
import AnimatedLight from "./AnimatedLight/AnimatedLight.tsx";
import StarField from "./StarField/StarField.tsx";
import styles from "./animated-background.module.css";

const AnimatedBackground = () => {
    const prefersReduced: boolean = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    return (
        <div className={styles.animatedBackground}>
            <Canvas camera={{position: [0, 0, 5], fov: 45}}
                    gl={{
                        antialias: true,
                        alpha: true,
                        powerPreference: 'low-power'
                    }}
                    onCreated={({gl}) => {
                        gl.setPixelRatio(Math.min(window.devicePixelRatio, 1.5))
                    }}
                    frameloop={prefersReduced ? 'never' : 'always'}
            >
                <fog attach="fog" args={['#0a0a0a', 5, 18]}/>
                <AnimatedLight/>
                <FloatingObject/>
                <StarField/>
            </Canvas>
        </div>
    );
};

export default AnimatedBackground;
