import type { Group } from "three";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { MathUtils } from "three";
import { useSpring, config } from "@react-spring/core";

import { useResponsiveModelScale } from "@/util/responsiveModelScale";

export default function FenceModel({
  rotationProgress = 0,
}: {
  rotationProgress: number;
}) {
  const group = useRef<Group>(null);
  const { scene } = useGLTF("/assets/models/PAINTED_FENCE.glb");
  const scale = useResponsiveModelScale();

  const spring = useSpring({
    rotationZ: MathUtils.clamp(rotationProgress, 0, 1) * (Math.PI / 4),
    config: config.slow,
  });

  const baseRotationX = Math.PI / 2;
  const baseRotationY = Math.PI;

  useFrame(() => {
    if (group.current) {
      group.current.rotation.x = baseRotationX;
      group.current.rotation.y = baseRotationY;
      group.current.rotation.z = spring.rotationZ.get();
    }
  });

  return (
    <primitive ref={group} object={scene} position={[1, 0, 0]} scale={scale} />
  );
}

useGLTF.preload("/assets/models/PAINTED_FENCE.glb");
