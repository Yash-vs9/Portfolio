"use client";
import dynamic from "next/dynamic";
import { useCapabilities } from "@/lib/useCapabilities";

const Scene = dynamic(() => import("./Scene"), { ssr: false });

// Fixed full-viewport 3D backdrop. Falls back to a CSS gradient when WebGL
// is unavailable, keeping the page fully functional.
export default function SceneMount() {
  const caps = useCapabilities();

  return (
    <div
      aria-hidden
      className="fixed inset-0 z-0"
      style={{ contain: "strict" }}
    >
      {caps.ready && caps.webgl ? (
        <Scene caps={caps} />
      ) : (
        <div
          className="h-full w-full"
          style={{
            background:
              "radial-gradient(120% 90% at 70% 20%, rgba(214,255,63,0.14), transparent 55%), radial-gradient(90% 80% at 20% 80%, rgba(255,77,46,0.12), transparent 55%), #0b0b0d",
          }}
        />
      )}
      {/* Legibility scrim so text stays readable over the scene */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(11,11,13,0.15) 0%, rgba(11,11,13,0.55) 45%, rgba(11,11,13,0.8) 100%)",
        }}
      />
    </div>
  );
}
