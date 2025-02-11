import * as THREE from 'three';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      instancedMesh: React.DetailedHTMLProps<React.HTMLAttributes<THREE.InstancedMesh>, THREE.InstancedMesh> & {
        ref?: React.Ref<THREE.InstancedMesh>;
        args?: [THREE.BufferGeometry?, THREE.Material?, number?];
        position?: [number, number, number];
        material?: THREE.Material | THREE.Material[];
        geometry?: THREE.BufferGeometry;
      };
    }
  }
}

