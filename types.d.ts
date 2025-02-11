// types.d.ts
import * as THREE from 'three';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      instancedMesh: {
        ref?: React.Ref<THREE.InstancedMesh>;
        args?: [THREE.BufferGeometry?, THREE.Material?, number?];
        position?: [number, number, number];
        material?: THREE.Material | THREE.Material[];
        geometry?: THREE.BufferGeometry;
      };
    }
  }
}
