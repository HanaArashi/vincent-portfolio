import Image from "next/image";
import {
  FaInstagram,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";
import { SiWattpad } from "react-icons/si";

export default function Navbar() {
  return (
<nav className="px-10 pt-2">

<div className="w-full flex items-center justify-between px-10 -mt-2">
<Image
  src="/images/logo (2).png"
  alt="Vincent Tibor Logo"
  width={170}
  height={160}
  priority
  className="mt-2 -ml-6"
/>
        <div className="flex items-center gap-6">

          <a
            href="#about"
            className="font-bold text-cyan-500 hover:text-fuchsia-500 transition"
          >
            about
          </a>

          <a
  href="/images/Vincent_Tibor_Resume.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="font-bold text-cyan-500 hover:text-fuchsia-500 transition"
>
  résumé
</a>

          <a
            href="https://www.instagram.com/vncnt_08"
            target="_blank"
            className="text-indigo-400 hover:text-fuchsia-500 transition"
          >
            <FaInstagram size={26} />
          </a>

          <a
            href="https://www.wattpad.com/user/Hanashi_184"
            target="_blank"
            className="text-indigo-400 hover:text-fuchsia-500 transition"
          >
            <SiWattpad size={26} />
          </a>

          <a
            href="https://www.linkedin.com/in/vincent-tibor-b3b5a0399"
            target="_blank"
            className="text-indigo-400 hover:text-fuchsia-500 transition"
          >
            <FaLinkedin size={26} />
          </a>

          <a
            href="vincenttibor184@.com"
            className="text-violet-500 hover:text-fuchsia-500 transition"
          >
            <FaEnvelope size={26} />
          </a>

        </div>

      </div>

      <div className="relative w-[360px] ml-auto mr-10 -mt-10">

{/* Heart */}
<Image
  src="/images/heart pixel.png"
  alt=""
  width={60}
  height={60}
  className="absolute -left-138 -top-6 animate-float pointer-events-none"
/>


{/* Sparkle */}
<Image
  src="/images/2.png"
  alt=""
  width={40}
  height={40}
  className="absolute -left-[340px] -top-6 animate-float pointer-events-none"
/>

{/* Flower */}
<Image
  src="/images/flower.png"
  alt=""
  width={100}
  height={100}
  className="absolute -left-[180px] -top-6 animate-float pointer-events-none"
/>

<svg
  width="360"
  height="30"
>
  <path
    d="M0 15 C40 0,80 30,120 15 S200 0,240 15 S320 30,360 15"
    stroke="url(#waveGradient)"
    strokeWidth="2"
    fill="none"
  />

  <defs>
    <linearGradient
      id="waveGradient"
      x1="0"
      y1="0"
      x2="360"
      y2="0"
    >
      <stop offset="0%" stopColor="#ff61d8" />
      <stop offset="50%" stopColor="#8b5cf6" />
      <stop offset="100%" stopColor="#22d3ee" />
    </linearGradient>
  </defs>
</svg>

</div>

    </nav>
  );
}