import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'


const Three = () => {

    return <>
        <div className='threeCanvas' style={{ width: "50vw", height: "50vh" }}>
            <Canvas flat linear>
                <mesh>
                    <boxGeometry args={[3.3, 3.3, 3.3]}/>
                    <meshNormalMaterial args={[{wireframe: true}]} />
                </mesh>
                <OrbitControls/>
            </Canvas>
        </div>
    </>
}

export default Three