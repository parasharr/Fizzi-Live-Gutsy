"use client";

import { useGLTF, useTexture } from "@react-three/drei";
import * as THREE from "three";
import { useEffect, useRef } from "react";
import { extend } from "@react-three/fiber";

// Preload the GLTF model
useGLTF.preload("/Soda-can.gltf");

const flavorTextures = {
  lemonLime: "/labels/lemon-lime.png",
  grape: "/labels/grape.png",
  blackCherry: "/labels/cherry.png",
  strawberryLemonade: "/labels/strawberry.png",
  watermelon: "/labels/watermelon.png",
};

const metalMaterial = new THREE.MeshStandardMaterial({
  roughness: 0.3,
  metalness: 1,
  color: "#bbbbbb",
});

// Extend the mesh element to make it available as a JSX element
extend({ Mesh: THREE.Mesh });

export type SodaCanProps = {
  flavor?: keyof typeof flavorTextures;
  scale?: number;
  rotation?: [number, number, number];
};

export function SodaCan({
  flavor = "blackCherry",
  scale = 2,
  rotation = [0, -Math.PI, 0],
  ...props
}: SodaCanProps) {
  const groupRef = useRef<THREE.Group>(null);
  const { nodes } = useGLTF("/Soda-can.gltf");

  const labels = useTexture(flavorTextures);

  // Fixes upside down labels
  Object.keys(labels).forEach(key => {
    labels[key as keyof typeof flavorTextures].flipY = false;
  });

  const label = labels[flavor as keyof typeof flavorTextures];

  useEffect(() => {
    if (groupRef.current) {
      groupRef.current.scale.set(scale, scale, scale);
      groupRef.current.rotation.set(...rotation);
    }
  }, [scale, rotation]);

  return (
    <group ref={groupRef} {...props}>
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.cylinder as THREE.Mesh).geometry}
        material={metalMaterial}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.cylinder_1 as THREE.Mesh).geometry}
      >
        <meshStandardMaterial roughness={0.15} metalness={0.7} map={label} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.Tab as THREE.Mesh).geometry}
        material={metalMaterial}
      />
    </group>
  );
}
