"use client";

import Image from "next/image";
import { motion, useAnimationFrame } from "framer-motion";
import { useRef, useState } from "react";

type OrbitingLogoProps = {
  src: string;
  radius: number;
  speed: number;
  offset: number;
  hovered: boolean;
};

const OrbitingLogo = ({ src, radius, speed, offset, hovered }: OrbitingLogoProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useAnimationFrame((t) => {
    const chaos = hovered ? Math.sin(t / 200 + offset) * 20 : 0;
    const angle = (t * speed + offset) % (Math.PI * 2);
    const x = radius * Math.cos(angle) + chaos;
    const y = radius * Math.sin(angle) + chaos;
    if (ref.current) {
      ref.current.style.transform = `translate(${x}px, ${y}px)`;
    }
  });

  return (
    <motion.div
      ref={ref}
      className="absolute top-1/2 left-1/2 w-12 h-12  p-2 shadow-md rounded-full -translate-x-1/2 -translate-y-1/2 transition-transform"
      whileHover={{ scale: 1.2, rotate: 10 }}
    >
      <Image src={src} alt="logo" fill className="object-contain y" />
    </motion.div>
  );
};

const logos = [
  { src: "/Discord.svg", radius: 120, speed: 0.001, offset: 0 },
  { src: "/spotify.svg", radius: 160, speed: 0.0012, offset: 1 },
  { src: "/ups.svg", radius: 200, speed: 0.0011, offset: 2 },
  { src: "/Shell.svg", radius: 240, speed: 0.0009, offset: 3 },
  { src: "/apple.svg", radius: 180, speed: 0.0013, offset: 4 },
  { src: "/YouTube.svg", radius: 220, speed: 0.001, offset: 5 },
  { src: "/chrome.svg", radius: 260, speed: 0.0008, offset: 6 },
];

export default function OrbitWrapper() {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="orbit-wrapper relative w-full h-screen bg-transparent overflow-hidden "
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {logos.map((logo, i) => (
        <OrbitingLogo key={i} {...logo} hovered={hovered} />
      ))}
    </div>
  );
}
