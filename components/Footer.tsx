export default function Footer() {
    return (
      <footer className="mt-24 flex flex-col items-center gap-6 pb-12">
  
        <div className="flex flex-wrap items-center justify-center gap-6 text-violet-700 font-semibold">
  
          <a
            href="#about"
            className="hover:text-fuchsia-500 transition-colors"
          >
            about
          </a>
  
          <a
            href="/resume.pdf"
            target="_blank"
            className="hover:text-fuchsia-500 transition-colors"
          >
            résumé
          </a>
  
          <a
            href="https://instagram.com"
            target="_blank"
            className="hover:text-fuchsia-500 transition-colors"
          >
            Instagram
          </a>
  
          <a
            href="https://www.wattpad.com/user/Hanashi"
            target="_blank"
            className="hover:text-fuchsia-500 transition-colors"
          >
            Wattpad
          </a>
  
          <a
            href="https://linkedin.com"
            target="_blank"
            className="hover:text-fuchsia-500 transition-colors"
          >
            LinkedIn
          </a>
  
          <a
            href="mailto:your@email.com"
            className="hover:text-fuchsia-500 transition-colors"
          >
            Email
          </a>
  
        </div>
  
        <svg
          width="360"
          height="30"
          viewBox="0 0 360 30"
          fill="none"
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
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#ff61d8" />
              <stop offset="0.5" stopColor="#8b5cf6" />
              <stop offset="1" stopColor="#22d3ee" />
            </linearGradient>
          </defs>
        </svg>
  
      </footer>
    );
  }