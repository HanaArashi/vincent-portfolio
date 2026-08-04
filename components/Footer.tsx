import {
  FaInstagram,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";
import { SiWattpad } from "react-icons/si";

export default function Footer() {
  return (
<footer
  id="contact"
  className="mt-32 border-t border-violet-200 bg-[#F7F3FF]"
>
      <div className="max-w-6xl mx-auto px-6 py-10">

        {/* Links */}
        <div className="flex flex-wrap justify-center items-center gap-8 text-[17px] font-semibold">

          <a
            href="https://www.wattpad.com/user/Hanashi_184"
            target="_blank"
            className="text-violet-600 hover:text-fuchsia-500 transition"
          >
            Wattpad
          </a>

          <a
            href="https://www.instagram.com/vncnt_08"
            target="_blank"
            className="text-violet-600 hover:text-fuchsia-500 transition"
          >
            Instagram
          </a>

          <a
            href="https://www.linkedin.com/in/vincent-tibor-b3b5a0399"
            target="_blank"
            className="text-violet-600 hover:text-fuchsia-500 transition"
          >
            LinkedIn
          </a>

          <a
            href="mailto:vincenttibor184@gmail.com"
            className="text-violet-600 hover:text-fuchsia-500 transition"
          >
            Email
          </a>

        </div>

        {/* Icons */}
        <div className="flex justify-center gap-6 mt-6 text-[22px] text-violet-500">

          <a
            href="https://www.wattpad.com/user/Hanashi_184"
            target="_blank"
          >
            <SiWattpad className="hover:text-fuchsia-500 transition" />
          </a>

          <a
            href="https://www.instagram.com/vncnt_08"
            target="_blank"
          >
            <FaInstagram className="hover:text-fuchsia-500 transition" />
          </a>

          <a
            href="https://www.linkedin.com/in/vincent-tibor-b3b5a0399"
            target="_blank"
          >
            <FaLinkedin className="hover:text-fuchsia-500 transition" />
          </a>

          <a href="mailto:vincenttibor184@gmail.com">
            <FaEnvelope className="hover:text-fuchsia-500 transition" />
          </a>

        </div>

        {/* Copyright */}
        <p className="mt-8 text-center text-sm text-violet-500">
          © {new Date().getFullYear()} Vincent Tibor. All rights reserved.
        </p>

      </div>
    </footer>
  );
}