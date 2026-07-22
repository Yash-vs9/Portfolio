"use client";
import { useMemo, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  MeshDistortMaterial,
  Icosahedron,
  Float,
} from "@react-three/drei";
import * as THREE from "three";
import { view } from "@/lib/store";

const lerp = (a, b, t) => a + (b - a) * t;

// The morphing crystal core — distorts with time + mouse, reacts to scroll.
function Crystal({ caps }) {
  const group = useRef();
  const inner = useRef();
  const shell = useRef();
  const mat = useRef();
  const distort = caps.reduced || caps.lowPower ? 0.18 : 0.42;

  useFrame((state, dt) => {
    view.mx = lerp(view.mx, view.tmx, 0.05);
    view.my = lerp(view.my, view.tmy, 0.05);
    const s = view.scroll;
    const g = group.current;
    if (!g) return;

    // Base rotation from time + pointer parallax
    g.rotation.y += dt * 0.12;
    g.rotation.x = lerp(g.rotation.x, view.my * 0.35, 0.05);
    g.rotation.z = lerp(g.rotation.z, view.mx * 0.15, 0.05);

    // Scroll drives the object off-center and downward, shrinking as you read
    const targetX = lerp(0, 2.1, s) + view.mx * 0.4;
    const targetY = lerp(0.1, -1.4, s) - view.my * 0.3;
    const scale = lerp(1, 0.55, Math.min(1, s * 1.4));
    g.position.x = lerp(g.position.x, targetX, 0.06);
    g.position.y = lerp(g.position.y, targetY, 0.06);
    g.scale.setScalar(lerp(g.scale.x || 1, scale, 0.06));

    if (shell.current) shell.current.rotation.y -= dt * 0.05;
    if (mat.current && !caps.reduced) {
      // pulse the distortion subtly with scroll
      mat.current.distort = distort + Math.sin(state.clock.elapsedTime * 0.6) * 0.06;
    }
  });

  return (
    <group ref={group} position={[0, 0.1, 0]}>
      <Float
        speed={caps.reduced ? 0 : 1.4}
        rotationIntensity={caps.reduced ? 0 : 0.4}
        floatIntensity={caps.reduced ? 0 : 0.6}
      >
        {/* Solid distorting core */}
        <Icosahedron ref={inner} args={[1.15, caps.lowPower ? 6 : 24]}>
          <MeshDistortMaterial
            ref={mat}
            color="#14140f"
            emissive="#3a4a12"
            emissiveIntensity={0.35}
            roughness={0.15}
            metalness={0.9}
            distort={distort}
            speed={caps.reduced ? 0 : 1.6}
            flatShading={caps.lowPower}
          />
        </Icosahedron>

        {/* Wireframe shell */}
        <Icosahedron ref={shell} args={[1.55, 1]}>
          <meshBasicMaterial
            color="#d6ff3f"
            wireframe
            transparent
            opacity={0.22}
          />
        </Icosahedron>
      </Float>
    </group>
  );
}

// Slow-drifting particle field with mouse parallax.
function Particles({ caps }) {
  const ref = useRef();
  const count = caps.mobile ? 260 : caps.lowPower ? 500 : 1100;

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 6 + Math.random() * 9;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      arr[i * 3 + 2] = r * Math.cos(phi);
    }
    return arr;
  }, [count]);

  useFrame((state, dt) => {
    if (!ref.current) return;
    ref.current.rotation.y += dt * 0.015;
    ref.current.rotation.x = lerp(ref.current.rotation.x, view.my * 0.1, 0.03);
    ref.current.position.x = lerp(
      ref.current.position.x,
      view.mx * 0.6,
      0.03
    );
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.028}
        color="#ece7dd"
        transparent
        opacity={0.55}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}

function CameraRig() {
  const { camera } = useThree();
  useFrame(() => {
    // gentle dolly + drift as you scroll
    const s = view.scroll;
    camera.position.z = lerp(camera.position.z, 5 - s * 0.8, 0.05);
    camera.position.y = lerp(camera.position.y, view.my * -0.25, 0.04);
    camera.lookAt(0, 0, 0);
  });
  return null;
}

export default function Scene({ caps }) {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 42 }}
      dpr={caps.mobile ? [1, 1.4] : [1, 1.8]}
      gl={{
        antialias: !caps.lowPower,
        powerPreference: "high-performance",
        alpha: true,
      }}
      style={{ pointerEvents: "none" }}
    >
      <color attach="background" args={["#0b0b0d"]} />
      <fog attach="fog" args={["#0b0b0d", 6, 16]} />

      <ambientLight intensity={0.35} />
      <pointLight position={[4, 3, 4]} intensity={40} color="#d6ff3f" />
      <pointLight position={[-5, -2, 2]} intensity={30} color="#ff4d2e" />
      <pointLight position={[0, 2, -5]} intensity={18} color="#4a6cff" />

      <Crystal caps={caps} />
      <Particles caps={caps} />
      <CameraRig />
    </Canvas>
  );
}
