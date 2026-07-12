import Image from "next/image";
import {
  FaInstagram,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";
import { SiWattpad } from "react-icons/si";

export default function Navbar() {
  return (
    <nav className="px-4 md:px-10 pt-2">

      <div className="flex items-center justify-between">

        {/* Logo */}
        <Image
          src="/images/logo (2).png"
          alt="Vincent Tibor Logo"
          width={170}
          height={160}
          priority
          className="w-28 md:w-[170px] h-auto"
        />

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">

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
            <FaInstagram size={24} />
          </a>

          <a
            href="https://www.wattpad.com/user/Hanashi_184"
            target="_blank"
            className="text-indigo-400 hover:text-fuchsia-500 transition"
          >
            <SiWattpad size={24} />
          </a>

          <a
            href="https://www.linkedin.com/in/vincent-tibor-b3b5a0399"
            target="_blank"
            className="text-indigo-400 hover:text-fuchsia-500 transition"
          >
            <FaLinkedin size={24} />
          </a>

          <a
            href="mailto:vincenttibor184@gmail.com"
            className="text-violet-500 hover:text-fuchsia-500 transition"
          >
            <FaEnvelope size={24} />
          </a>

        </div>

      </div>

      {/* Curved Line */}
      <div className="relative w-full max-w-[360px] md:max-w-[360px] ml-auto mt-2">

        <svg
          className="w-full h-auto"
          viewBox="0 0 360 30"
          preserveAspectRatio="none"
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