import * as THREE from 'three';

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      instancedMesh: React.DetailedHTMLProps<React.HTMLAttributes<THREE.InstancedMesh>, THREE.InstancedMesh> & {
        ref?: React.Ref<THREE.InstancedMesh>;
        args?: [THREE.BufferGeometry?, THREE.Material?, number?];
        position?: [number, number, number];
        material?: THREE.Material | THREE.Material[];
        geometry?: THREE.BufferGeometry;
      };
      group: React.DetailedHTMLProps<React.HTMLAttributes<THREE.Group>, THREE.Group> & {
        ref?: React.Ref<THREE.Group>;
        position?: [number, number, number];
      };
      mesh: React.DetailedHTMLProps<React.HTMLAttributes<THREE.Mesh>, THREE.Mesh> & {
        ref?: React.Ref<THREE.Mesh>;
        castShadow?: boolean;
        receiveShadow?: boolean;
        geometry?: THREE.BufferGeometry;
        material?: THREE.Material | THREE.Material[];
      };
      meshStandardMaterial: React.DetailedHTMLProps<React.HTMLAttributes<THREE.MeshStandardMaterial>, THREE.MeshStandardMaterial> & {
        ref?: React.Ref<THREE.MeshStandardMaterial>;
        roughness?: number;
        metalness?: number;
        map?: THREE.Texture;
      };
      directionalLight: React.DetailedHTMLProps<React.HTMLAttributes<THREE.DirectionalLight>, THREE.DirectionalLight> & {
        intensity?: number;
        position?: [number, number, number];
      };
    }
  }
}
