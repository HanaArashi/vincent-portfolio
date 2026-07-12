import Image from "next/image";
import { Code2, Palette, Rocket } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pb-24">

{/* ================= Floating Decorations ================= */}

{/* Clouds */}
<Image
  src="/images/cloud.png"
  alt=""
  width={300}
  height={300}
  className="absolute left-0 top-0 animate-float pointer-events-none select-none"
/>

{/* Top Left Heart */}
<Image
  src="/images/1.png"
  alt=""
  width={58}
  height={58}
  className="absolute left-25 top-27 animate-float pointer-events-none select-none"
/>

{/* sparkle */}
<Image
  src="/images/2.png"
  alt=""
  width={50}
  height={50}
  className="absolute left-7 top-[380px] animate-float pointer-events-none select-none"
/>

{/* Left Butterfly */}
<Image
  src="/images/butterfly.png"
  alt=""
  width={112}
  height={112}
  className="absolute left-12 top-[250px] animate-float pointer-events-none select-none"
/>

{/* Bottom Left Bow */}
<Image
  src="/images/ribbon.png"
  alt=""
  width={104}
  height={104}
  className="absolute left-9 top-[460px] animate-float pointer-events-none select-none"
/>

{/* sparkle */}
<Image
  src="/images/2.png"
  alt=""
  width={50}
  height={50}
  className="absolute left-24 top-[560px] animate-float pointer-events-none select-none"
/>

{/* Small Bottom Left Heart */}
<Image
  src="/images/heart pixel.png"
  alt=""
  width={34}
  height={34}
  className="absolute left-15 bottom-10 animate-float-delayed pointer-events-none select-none"
/>




{/* Top Center Sparkle */}
<Image
  src="/images/star pixel.png"
  alt=""
  width={100}
  height={100}
  className="absolute left-1/2 -translate-x-1/2 top-20 animate-float pointer-events-none select-none"
/>

{/* Top Right Flower */}
<Image
  src="/images/flower.png"
  alt=""
  width={150}
  height={150}
  className="absolute right-6 top-10 animate-float pointer-events-none select-none"
/>

{/* Top Right cloud*/}
<Image
  src="/images/cloud.png"
  alt=""
  width={300}
  height={300}
  className="absolute right-8 top-50 animate-float pointer-events-none select-none"
/>


{/* Top Right sparkle*/}
<Image
  src="/images/2.png"
  alt=""
  width={50}
  height={50}
  className="absolute right-6 top-40 animate-float pointer-events-none select-none"
/>

{/* Top Right moon*/}
<Image
  src="/images/moon.png"
  alt=""
  width={100}
  height={100}
  className="absolute right-10 top-80 animate-float pointer-events-none select-none"
/>

{/* Right Middle flower */}
<Image
  src="/images/flower.png"
  alt=""
  width={150}
  height={150}
  className="absolute right-4 top-[470px] animate-float pointer-events-none select-none"
/>


<div className="relative w-full max-w-[1160px] mx-auto px-4 md:px-10 mt-6">
          {/* Hero Window Container */}
          <div
  className="
    relative
    overflow-hidden
    rounded-[32px]
    bg-white/30
    backdrop-blur-2xl
    shadow-[0_40px_120px_rgba(139,92,246,.20)]
    ring-4
    ring-white/80
    max-w-[1000px]
    mx-auto
  "
>
  {/* Glass Glow */}
<div className="absolute inset-0 bg-gradient-to-br from-pink-200/20 via-transparent to-cyan-200/20" />

{/* Grid Pattern */}
<div
  className="absolute inset-0 opacity-[0.05]"
  style={{
    backgroundImage:
      "linear-gradient(#8b5cf6 1px,transparent 1px),linear-gradient(90deg,#8b5cf6 1px,transparent 1px)",
    backgroundSize: "40px 40px",
  }}
/>

<Image
  src="/images/cat-left.png"
  alt="Pixel Cat"
  width={210}
  height={210}
  className="absolute -left-4 bottom-0 animate-float z-30 drop-shadow-2xl pointer-events-none"
/>

<Image
  src="/images/cat-right.png"
  alt="Pixel Cat"
  width={210}
  height={210}
  className="absolute -right-10 bottom-0 animate-float z-30 drop-shadow-2xl pointer-events-none"
/>

          {/* Window */}
          <div className="relative overflow-hidden rounded-[28px] bg-white/55 backdrop-blur-xl shadow-[0_30px_80px_rgba(124,58,237,.18)]">            
 {/* Window Header */}
<div className="h-14 rounded-t-[28px] bg-gradient-to-r from-pink-300 via-violet-300 to-cyan-300 flex items-center px-8">

<div className="flex items-center gap-3">
  <div className="w-4 h-4 rounded-full bg-pink-400"></div>
  <div className="w-4 h-4 rounded-full bg-yellow-300"></div>
  <div className="w-4 h-4 rounded-full bg-cyan-300"></div>
</div>

</div>

{/* Hero Content */}
<div className="relative text-center pt-10 pb-6 px-8">
  
  {/* Floating Badge */}
  <div className="flex justify-center mb-8">
  <div className="flex items-center gap-2 rounded-full border border-violet-200 bg-white/80 backdrop-blur-md px-7 py-3 shadow-[0_10px_30px_rgba(124,58,237,.18)]">
    <Image
      src="/images/sparkle.png"
      alt="Sparkle"
      width={18}
      height={18}
      className="animate-float"
    />

    <span className="text-violet-700 text-[15px] font-medium">
      Building beautiful & functional web experiences
    </span>
  </div>
</div>



  {/* Name */}
  <h1
    className="
      text-6xl
      md:text-8xl
      font-black
      tracking-tight
      bg-gradient-to-r
      from-pink-500
      via-violet-500
      to-cyan-500
      bg-clip-text
      text-transparent
      drop-shadow-[0_8px_22px_rgba(168,85,247,.45)]
      [-webkit-text-stroke:2px_rgba(255,255,255,.75)]
    "
  >
    VINCENT TIBOR
  </h1>

  {/* Subtitle */}
  <div className="mt-6 flex items-center justify-center gap-4">

    <span className="text-pink-400 text-xl">✦</span>

    <p className="text-2xl md:text-3xl font-medium text-violet-700">
      Frontend Developer × UI/UX Designer
    </p>

    <span className="text-pink-400 text-xl">✦</span>

  </div>

  {/* Buttons */}
  <div className="mt-10 flex justify-center gap-5">

    <button
      className="
      rounded-2xl
      bg-gradient-to-r
      from-violet-600
      to-fuchsia-500
      px-10
      py-4
      text-white
      font-semibold
      shadow-[0_15px_30px_rgba(124,58,237,.35)]
      hover:-translate-y-1
      transition
      "
    >
      View Projects →
    </button>

    <button
      className="
      rounded-2xl
      border
      border-violet-200
      bg-white/80
      backdrop-blur
      px-10
      py-4
      font-semibold
      text-violet-700
      hover:bg-white
      transition
      "
    >
      Contact Me
    </button>

  </div>

  {/* Feature Cards */}
<div className="mt-10 flex flex-wrap justify-center gap-5">

<div className="flex items-center gap-3 rounded-2xl bg-[#F6F0FF] border border-[#EADFFF] px-5 py-3 shadow-[0_8px_24px_rgba(168,85,247,0.15)]">
  <span className="text-2xl text-[#7C3AED]">&lt;/&gt;</span>

  <div>
    <h4 className="text-sm font-semibold text-[#6D28D9]">
      Clean Code
    </h4>

    <p className="text-xs text-[#6B5E8E]">
      Performance
    </p>
  </div>
</div>

<div className="flex items-center gap-3 rounded-2xl bg-[#F6F0FF] border border-[#EADFFF] px-5 py-3 shadow-[0_8px_24px_rgba(168,85,247,0.15)]">
<Palette size={24} className="text-[#7C3AED]" />
  <div>
    <h4 className="text-sm font-semibold text-violet-700">
      UI/UX Focused
    </h4>

    <p className="text-xs text-[#6B5E8E]">
      User Centered
    </p>
  </div>
</div>

<div className="flex items-center gap-3 rounded-2xl bg-[#F6F0FF] border border-[#EADFFF] px-5 py-3 shadow-[0_8px_24px_rgba(168,85,247,0.15)]">
<Rocket size={24} className="text-[#7C3AED]" />
  <div>
    <h4 className="text-sm font-semibold text-violet-700">
      Always Learning
    </h4>

    <p className="text-xs text-[#6B5E8E]">
      Forever Improving
    </p>
  </div>
</div>

</div>

            </div>

          </div>

        </div>

{/* Tech Stack */}
<div className="relative w-full max-w-5xl mx-auto mt-10 mb-20">

{/* Left Heart */}
<Image
  src="/images/heart pixel.png"
  alt=""
  width={56}
  height={56}
  className="absolute left-[3%] top-1/2 -translate-y-1/2 animate-float z-20 pointer-events-none"
/>

{/* Right Star */}
<Image
  src="/images/star pixel.png"
  alt=""
  width={64}
  height={64}
  className="absolute right-[3%] top-1/2 -translate-y-1/2 animate-float z-20 pointer-events-none"
/>

  {/* Glass Card */}
  <div className="mx-auto w-[82%] rounded-[22px] border border-violet-200 bg-white/70 backdrop-blur-xl px-8 py-3 shadow-[0_15px_45px_rgba(168,85,247,0.15)]">

    <div className="flex flex-wrap items-center justify-center">

      <div className="flex items-center gap-3 px-6 py-1">
        <img src="/images/reactt.png" className="w-7 h-7" alt="React" />
        <span className="font-semibold text-violet-700">React</span>
      </div>

      <div className="hidden md:block h-7 w-px bg-violet-200" />

      <div className="flex items-center gap-3 px-6 py-1">
        <img src="/images/nextjs.png" className="w-7 h-7" alt="Next.js" />
        <span className="font-semibold text-violet-700">Next.js</span>
      </div>

      <div className="hidden md:block h-7 w-px bg-violet-200" />

      <div className="flex items-center gap-3 px-6 py-1">
        <img src="/images/tailwind.png" className="w-7 h-7" alt="Tailwind CSS" />
        <span className="font-semibold text-violet-700">Tailwind CSS</span>
      </div>

      <div className="hidden md:block h-7 w-px bg-violet-200" />

      <div className="flex items-center gap-3 px-6 py-1">
        <img src="/images/typescript.png" className="w-7 h-7" alt="TypeScript" />
        <span className="font-semibold text-violet-700">TypeScript</span>
      </div>

      <div className="hidden md:block h-7 w-px bg-violet-200" />

      <div className="flex items-center gap-3 px-6 py-1">
        <img src="/images/figmaa.png" className="w-7 h-7" alt="Figma" />
        <span className="font-semibold text-violet-700">Figma</span>
      </div>

    </div>

  </div>

</div>

{/* Projects Section */}
<div className="relative w-full max-w-6xl mx-auto px-6 mt-28">

{/* Left Cloud */}
<Image
  src="/images/cloud.png"
  alt=""
  width={240}
  height={150}
  className="absolute -left-30 top-28 opacity-35 animate-float pointer-events-none"
/>

{/* Left Butterfly (moved & bigger) */}
<Image
  src="/images/butterfly.png"
  alt=""
  width={72}
  height={72}
  className="absolute -left-11 top-30 animate-float rotate-[-20deg] pointer-events-none"
/>

{/* Left Ribbon (+ position) */}
<Image
  src="/images/ribbon.png"
  alt=""
  width={68}
  height={68}
  className="absolute -left-20 top-[320px] animate-float rotate-[-18deg] pointer-events-none"
/>




{/* Right Butterfly (moved & bigger) */}
<Image
  src="/images/butterfly.png"
  alt=""
  width={72}
  height={72}
  className="absolute -right-4 top-31 animate-float rotate-[20deg] pointer-events-none"
/>

{/* Right Flower (+ position) */}
<Image
  src="/images/flower.png"
  alt=""
  width={85}
  height={85}
  className="absolute -right-25 top-[280px] animate-float rotate-[18deg] pointer-events-none"
/>

{/* Right Sparkle */}
<Image
  src="/images/2.png"
  alt=""
  width={40}
  height={40}
  className="absolute -right-15 top-[400px] animate-float opacity-75 pointer-events-none"
/>

<div className="relative text-center mb-16 pt-4 pb-4 overflow-visible">



  {/* Left Sparkle */}
  <Image
    src="/images/2.png"
    alt=""
    width={40}
    height={40}
    className="absolute left-[1%] top-22 animate-float opacity-80"
  />

   {/* Left Sparkle */}
   <Image
    src="/images/2.png"
    alt=""
    width={40}
    height={40}
    className="absolute -left-[7%] top-15 animate-float opacity-80"
  />

 {/* Left Sparkle */}
 <Image
    src="/images/2.png"
    alt=""
    width={40}
    height={40}
    className="absolute left-[5%] top-35 animate-float opacity-80"
  />



  {/* Right Sparkle */}
  <Image
    src="/images/sparkle.png"
    alt=""
    width={18}
    height={18}
    className="absolute right-[26%] top-10 animate-float opacity-80"
  />


<h2
  className="
    text-6xl
    md:text-7xl
    font-black
    leading-[1.2]
    tracking-tight
    text-transparent
    bg-clip-text
    bg-gradient-to-r
    from-[#2F1FAE]
    via-[#4B2DD9]
    to-[#6B39FF]
    drop-shadow-[0_6px_12px_rgba(95,63,255,.18)]
  "
>
  Projects
</h2>

  <div className="mt-3 flex justify-center items-center gap-2">

    <Image
      src="/images/heart.png"
      alt=""
      width={50}
      height={50}
      className="animate-float"
    />

    <p className="text-[18px] font-medium text-[#5B5675]">
      Here are some of the things I've built.
    </p>

    <Image
      src="/images/flower.png"
      alt=""
      width={50}
      height={50}
      className="animate-float"
    />

  </div>

</div>

<div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 -mt-8 items-start">

{/* Project 1 */}
<div
  className="
    group
    overflow-hidden
    rounded-[22px]
    bg-white
    border
    border-violet-100
    shadow-lg
    transition-all
    duration-300
    hover:-translate-y-2
    hover:shadow-xl
  "
>
  {/* Thumbnail */}
  <div className="relative">
    <Image
      src="/images/gameblitzs.png"
      alt="GameBlitz"
      width={700}
      height={400}
      className="w-full h-[155px] object-cover"
    />

    {/* External Link */}
    <button
      className="
        absolute
        top-3
        right-3
        w-8
        h-8
        rounded-full
        bg-white
        shadow-md
        flex
        items-center
        justify-center
        text-violet-600
        hover:scale-110
        transition
      "
    >
      ↗
    </button>
  </div>

  {/* Content */}
  <div className="px-5 pt-4 pb-4">

    <h3 className="text-[30px] font-bold text-violet-700">
      GameBlitz
    </h3>

    <p className="mt-2 text-[15px] leading-7 text-gray-600">
      An online game store platform for PC games and gaming enthusiasts.
    </p>

    {/* Tech Stack */}
    <div className="flex flex-wrap gap-2 mt-4">

    <span className="px-3 py-1 rounded-full bg-[#F3E8FF] text-[#6D28D9] text-[12px] font-semibold">
  Next.js
</span>

<span className="px-3 py-1 rounded-full bg-[#F3E8FF] text-[#6D28D9] text-[12px] font-semibold">
  Tailwind CSS
</span>

<span className="px-3 py-1 rounded-full bg-[#F3E8FF] text-[#6D28D9] text-[12px] font-semibold">
  MongoDB
</span>

    </div>

  </div>

</div>

{/* Project 2 */}
<div
  className="
    group
    self-start
    overflow-hidden
    rounded-[22px]
    bg-white
    border
    border-violet-100
    shadow-lg
    transition-all
    duration-300
    hover:-translate-y-2
    hover:shadow-xl
  "
>
  {/* Thumbnail */}
  <div className="relative">
    <Image
      src="/images/SORAEA.png"
      alt="SORAEA"
      width={700}
      height={400}
      className="w-full h-[155px] object-cover"
    />

    {/* External Link */}
    <button
      className="
        absolute
        top-3
        right-3
        w-8
        h-8
        rounded-full
        bg-white
        shadow-md
        flex
        items-center
        justify-center
        text-violet-600
        hover:scale-110
        transition
      "
    >
      ↗
    </button>
  </div>

  {/* Content */}
  <div className="px-5 pt-4 pb-4">

    <h3 className="text-[30px] font-bold text-violet-700">
      SORAEA
    </h3>

    <p className="mt-2 text-[15px] leading-7 text-gray-600">
  AI-powered psoriasis detection system using EfficientNet.
</p>

    {/* Tech Stack */}
    <div className="flex items-center gap-2 mt-4 overflow-x-auto whitespace-nowrap scrollbar-hide">

<span className="px-3 py-1 rounded-full bg-[#F3E8FF] text-[#6D28D9] text-[12px] font-semibold">
  React
</span>

<span className="px-3 py-1 rounded-full bg-[#F3E8FF] text-[#6D28D9] text-[12px] font-semibold">
  FastAPI
</span>

<span className="px-3 py-1 rounded-full bg-[#F3E8FF] text-[#6D28D9] text-[12px] font-semibold">
  EfficientNet
</span>

</div>

  </div>

</div>

{/* Project 3 */}
<div
  className="
    group
    self-start
    overflow-hidden
    rounded-[22px]
    bg-white
    border
    border-violet-100
    shadow-lg
    transition-all
    duration-300
    hover:-translate-y-2
    hover:shadow-xl
  "
>
  {/* Thumbnail */}
  <div className="relative">
    <Image
      src="/images/STMM.png"
      alt="Student Management System"
      width={700}
      height={400}
      className="w-full h-[155px] object-cover"
    />

    {/* External Link */}
    <button
      className="
        absolute
        top-3
        right-3
        w-8
        h-8
        rounded-full
        bg-white
        shadow-md
        flex
        items-center
        justify-center
        text-violet-600
        hover:scale-110
        transition
      "
    >
      ↗
    </button>
  </div>

  {/* Content */}
  <div className="px-5 pt-4 pb-4">

  <h3 className="text-[21px] font-bold leading-tight text-violet-700">
  Student Management System
</h3>

    <p className="mt-2 text-[15px] leading-6 text-gray-600">
      Web-based student records and grade management system.
    </p>

    {/* Tech Stack */}
    <div className="flex items-center gap-2 mt-4 overflow-x-auto whitespace-nowrap scrollbar-hide">

<span className="px-3 py-1 rounded-full bg-[#F3E8FF] text-[#6D28D9] text-[12px] font-semibold">
  Flask
</span>

<span className="px-3 py-1 rounded-full bg-[#F3E8FF] text-[#6D28D9] text-[12px] font-semibold">
  MySQL
</span>

<span className="px-3 py-1 rounded-full bg-[#F3E8FF] text-[#6D28D9] text-[12px] font-semibold">
  Bootstrap
</span>

</div>

  </div>

</div>

{/* Project 4 */}
<div
  className="
    group
    self-start
    overflow-hidden
    rounded-[22px]
    bg-white
    border
    border-violet-100
    shadow-lg
    transition-all
    duration-300
    hover:-translate-y-2
    hover:shadow-xl
  "
>
  {/* Thumbnail */}
  <div className="relative">
    <Image
      src="/images/JLUM.png"
      alt="JLUM"
      width={700}
      height={400}
      className="w-full h-[155px] object-cover"
    />

    {/* External Link */}
    <button
      className="
        absolute
        top-3
        right-3
        w-8
        h-8
        rounded-full
        bg-white
        shadow-md
        flex
        items-center
        justify-center
        text-violet-600
        hover:scale-110
        transition
      "
    >
      ↗
    </button>
  </div>

  {/* Content */}
  <div className="px-5 pt-4 pb-4">

    <h3 className="text-[30px] font-bold text-violet-700">
      JLUM
    </h3>

    <p className="mt-2 text-[15px] leading-6 text-gray-600">
      Company website showcasing services and business information.
    </p>

    {/* Tech Stack */}
    <div className="flex items-center gap-2 mt-4 overflow-x-auto whitespace-nowrap scrollbar-hide">

<span className="px-3 py-1 rounded-full bg-[#F3E8FF] text-[#6D28D9] text-[12px] font-semibold">
  React
</span>

<span className="px-3 py-1 rounded-full bg-[#F3E8FF] text-[#6D28D9] text-[12px] font-semibold">
  Tailwind CSS
</span>

<span className="px-3 py-1 rounded-full bg-[#F3E8FF] text-[#6D28D9] text-[12px] font-semibold">
  Firebase
</span>

</div>

  </div>

</div>

{/* Project 5 */}
<div
  className="
    group
    self-start
    overflow-hidden
    rounded-[22px]
    bg-white
    border
    border-violet-100
    shadow-lg
    transition-all
    duration-300
    hover:-translate-y-2
    hover:shadow-xl
  "
>
  {/* Thumbnail */}
  <div className="relative">
    <Image
      src="/images/ONE LGU.png"
      alt="ONE LGU"
      width={700}
      height={400}
      className="w-full h-[155px] object-cover"
    />

    {/* External Link */}
    <button
      className="
        absolute
        top-3
        right-3
        w-8
        h-8
        rounded-full
        bg-white
        shadow-md
        flex
        items-center
        justify-center
        text-violet-600
        hover:scale-110
        transition
      "
    >
      ↗
    </button>
  </div>

  {/* Content */}
  <div className="px-5 pt-4 pb-4">

    <h3 className="text-[30px] font-bold text-violet-700">
      ONE LGU
    </h3>

    <p className="mt-2 text-[15px] leading-6 text-gray-600">
      Web platform for accessing local government services and information.
    </p>

    {/* Tech Stack */}
    <div className="flex items-center gap-2 mt-4 overflow-x-auto whitespace-nowrap scrollbar-hide">

<span className="px-3 py-1 rounded-full bg-[#F3E8FF] text-[#6D28D9] text-[12px] font-semibold">
  React
</span>

<span className="px-3 py-1 rounded-full bg-[#F3E8FF] text-[#6D28D9] text-[12px] font-semibold">
  Tailwind CSS
</span>

<span className="px-3 py-1 rounded-full bg-[#F3E8FF] text-[#6D28D9] text-[12px] font-semibold">
  Firebase
</span>

</div>

  </div>

</div>

{/* Project 6 */}
<div
  className="
    group
    self-start
    overflow-hidden
    rounded-[22px]
    bg-white
    border
    border-violet-100
    shadow-lg
    transition-all
    duration-300
    hover:-translate-y-2
    hover:shadow-xl
  "
>
  {/* Thumbnail */}
  <div className="relative">
    <Image
      src="/images/Sweetdazzle.png"
      alt="Sweetdazzle"
      width={700}
      height={400}
      className="w-full h-[155px] object-cover"
    />

    {/* External Link */}
    <button
      className="
        absolute
        top-3
        right-3
        w-8
        h-8
        rounded-full
        bg-white
        shadow-md
        flex
        items-center
        justify-center
        text-violet-600
        hover:scale-110
        transition
      "
    >
      ↗
    </button>
  </div>

  {/* Content */}
  <div className="px-5 pt-4 pb-4">

    <h3 className="text-[30px] font-bold text-violet-700">
      Sweetdazzle
    </h3>

    <p className="mt-2 text-[15px] leading-6 text-gray-600">
  Online dessert shop for showcasing products and customer orders.
</p>

    {/* Tech Stack */}
    <div className="flex items-center gap-2 mt-4 overflow-x-auto whitespace-nowrap scrollbar-hide">

<span className="px-3 py-1 rounded-full bg-[#F3E8FF] text-[#6D28D9] text-[12px] font-semibold">
  React
</span>

<span className="px-3 py-1 rounded-full bg-[#F3E8FF] text-[#6D28D9] text-[12px] font-semibold">
  Tailwind CSS
</span>

<span className="px-3 py-1 rounded-full bg-[#F3E8FF] text-[#6D28D9] text-[12px] font-semibold">
  Firebase
</span>

</div>

  </div>

</div>

{/* Bottom Left Cat */}
<Image
  src="/images/cat1.png"
  alt="Pixel Cat"
  width={170}
  height={170}
  className="
    absolute
    -left-35
    bottom-0
    z-20
    pointer-events-none
    select-none
  "
/>

{/* Bottom Right Cat */}
<Image
  src="/images/cat 2.png"
  alt="Pixel Cat"
  width={170}
  height={170}
  className="
    absolute
    -right-35
    bottom-0
    z-20
    pointer-events-none
    select-none
  "
/>


          </div>

        </div>

        </div>

{/* Just For Fun Section */}
<div className="relative w-full max-w-6xl mx-auto px-6 mt-28">

  <Image
    src="/images/moon.png"
    alt=""
    width={120}
    height={120}
    className="absolute -left-20 top-18 opacity-75 animate-float"
  />

  <Image
    src="/images/butterfly.png"
    alt=""
    width={70}
    height={70}
    className="absolute -right-17 bottom-8 animate-float"
  />



{/* Section Heading */}
<div className="text-center mb-14">


  {/* Title */}
  <h2
    className="
      text-5xl
      md:text-6xl
      font-black
      tracking-tight
      bg-gradient-to-r
      from-[#4B2DD9]
      via-[#6B39FF]
      to-[#FF5DB1]
      bg-clip-text
      text-transparent
    "
  >
    Just For Fun
  </h2>

  {/* Subtitle */}
  <div className="mt-3 flex items-center justify-center gap-2">

<Image
  src="/images/flower.png"
  alt=""
  width={48}
  height={48}
  className="animate-float"
/>

<p className="text-lg font-medium text-[#7B6E9D]">
  Things I enjoy doing in my free time.
</p>

<Image
  src="/images/flower.png"
  alt=""
  width={48}
  height={48}
  className="animate-float"
/>

</div>

</div>

  <div className="grid md:grid-cols-3 gap-12">

{/* Writing */}
<div
  className="
    group
    self-start
    overflow-hidden
    rounded-[22px]
    bg-white
    border
    border-violet-100
    shadow-lg
    transition-all
    duration-300
    hover:-translate-y-2
    hover:shadow-xl
  "
>
  {/* Thumbnail */}
  <div className="relative">
    <Image
      src="/images/Innocent Affections.png"
      alt="Writing"
      width={700}
      height={400}
      className="w-full h-[155px] object-cover"
    />

    {/* External Link */}
    <button
      className="
        absolute
        top-3
        right-3
        w-8
        h-8
        rounded-full
        bg-white
        shadow-md
        flex
        items-center
        justify-center
        text-violet-600
        hover:scale-110
        transition
      "
    >
      ↗
    </button>
  </div>

  {/* Content */}
  <div className="px-5 pt-4 pb-4">

    <h3 className="text-[30px] font-bold text-violet-700">
      Writing
    </h3>

    <p className="mt-2 text-[15px] leading-6 text-gray-600">
      Author of BL novels on Wattpad under the pen name Hanashi.
    </p>

    {/* Tags */}
    <div className="flex items-center gap-2 mt-4 overflow-x-auto whitespace-nowrap scrollbar-hide">

<span className="px-3 py-1 rounded-full bg-[#F3E8FF] text-[#6D28D9] text-[12px] font-semibold">
  Wattpad
</span>

<span className="px-3 py-1 rounded-full bg-[#F3E8FF] text-[#6D28D9] text-[12px] font-semibold">
  BL Novels
</span>

<span className="px-3 py-1 rounded-full bg-[#F3E8FF] text-[#6D28D9] text-[12px] font-semibold">
  Hanashi
</span>

</div>

  </div>

</div>

{/* Gaming */}
<div
  className="
    group
    self-start
    overflow-hidden
    rounded-[22px]
    bg-white
    border
    border-violet-100
    shadow-lg
    transition-all
    duration-300
    hover:-translate-y-2
    hover:shadow-xl
  "
>
  {/* Thumbnail */}
  <div className="relative">
    <Image
      src="/images/gamings.png"
      alt="Gaming"
      width={700}
      height={400}
      className="w-full h-[155px] object-cover"
    />

    {/* External Link */}
    <button
      className="
        absolute
        top-3
        right-3
        w-8
        h-8
        rounded-full
        bg-white
        shadow-md
        flex
        items-center
        justify-center
        text-violet-600
        hover:scale-110
        transition
      "
    >
      ↗
    </button>
  </div>

  {/* Content */}
  <div className="px-5 pt-4 pb-4">

    <h3 className="text-[30px] font-bold text-violet-700">
      Gaming
    </h3>

    <p className="mt-2 text-[15px] leading-6 text-gray-600">
      I enjoy exploring story-driven games and indie titles.
    </p>

    {/* Tags */}
    <div className="flex items-center gap-2 mt-4 overflow-x-auto whitespace-nowrap scrollbar-hide">

<span className="px-3 py-1 rounded-full bg-[#F3E8FF] text-[#6D28D9] text-[12px] font-semibold">
  Story Games
</span>

<span className="px-3 py-1 rounded-full bg-[#F3E8FF] text-[#6D28D9] text-[12px] font-semibold">
  Indie
</span>

<span className="px-3 py-1 rounded-full bg-[#F3E8FF] text-[#6D28D9] text-[12px] font-semibold">
  Cozy
</span>

</div>

  </div>

</div>

{/* Photography */}
<div
  className="
    group
    self-start
    overflow-hidden
    rounded-[22px]
    bg-white
    border
    border-violet-100
    shadow-lg
    transition-all
    duration-300
    hover:-translate-y-2
    hover:shadow-xl
  "
>
  {/* Thumbnail */}
  <div className="relative">
    <Image
      src="/images/photographys.png"
      alt="Photography"
      width={700}
      height={400}
      className="w-full h-[155px] object-cover"
    />

    <button
      className="
        absolute
        top-3
        right-3
        w-8
        h-8
        rounded-full
        bg-white
        shadow-md
        flex
        items-center
        justify-center
        text-violet-600
        hover:scale-110
        transition
      "
    >
      ↗
    </button>
  </div>

  <div className="px-5 pt-4 pb-4">

    <h3 className="text-[30px] font-bold text-violet-700">
      Photography
    </h3>

    <p className="mt-2 text-[15px] leading-6 text-gray-600">
      I love capturing landscapes, cafés, and aesthetic places.
    </p>

    <div className="flex items-center gap-2 mt-4 overflow-x-auto whitespace-nowrap scrollbar-hide">

<span className="px-3 py-1 rounded-full bg-[#F3E8FF] text-[#6D28D9] text-[12px] font-semibold">
  Landscape
</span>

<span className="px-3 py-1 rounded-full bg-[#F3E8FF] text-[#6D28D9] text-[12px] font-semibold">
  Café
</span>

<span className="px-3 py-1 rounded-full bg-[#F3E8FF] text-[#6D28D9] text-[12px] font-semibold">
  Aesthetic
</span>

</div>

  </div>

</div>

</div> {/* End of grid */}

</div> {/* End of Just For Fun Section */}

{/* Certificates Section */}
<div className="relative w-full max-w-6xl mx-auto px-6 mt-28">

  <Image
    src="/images/cloud.png"
    alt=""
    width={260}
    height={170}
    className="absolute -right-24 top-20 opacity-35 animate-float"
  />

<Image
    src="/images/cloud.png"
    alt=""
    width={260}
    height={170}
    className="absolute -left-24 top-20 opacity-35 animate-float"
  />
  <Image
    src="/images/ribbon.png"
    alt=""
    width={75}
    height={75}
    className="absolute -left-16 bottom-0 animate-float"
  />


  <Image
    src="/images/flower.png"
    alt=""
    width={75}
    height={75}
    className="absolute -right-16 bottom-12 animate-float"
  />

<div className="relative text-center mb-16">



<h2
  className="
    text-5xl
    md:text-6xl
    font-black
    tracking-tight
    bg-gradient-to-r
    from-[#4B2DD9]
    via-[#6B39FF]
    to-[#FF5DB1]
    bg-clip-text
    text-transparent
  "
>
  Certifications & Learning
</h2>

  <div className="mt-3 flex justify-center items-center gap-2">

    <Image
      src="/images/heart.png"
      alt=""
      width={45}
      height={45}
      className="animate-float"
    />

    <p className="text-[18px] font-medium text-[#5B5675]">
      Courses, workshops, certifications, and continuous learning.
    </p>

    <Image
      src="/images/heart.png"
      alt=""
      width={45}
      height={45}
      className="animate-float"
    />

  </div>

</div>

  <div className="grid md:grid-cols-3 gap-12">

{/* Certificate 1 */}
<div
  className="
    group
    self-start
    overflow-hidden
    rounded-[22px]
    bg-white
    border
    border-violet-100
    shadow-lg
    transition-all
    duration-300
    hover:-translate-y-2
    hover:shadow-xl
  "
>
  {/* Thumbnail */}
  <div className="relative">
    <Image
      src="/images/cert1.jpg"
      alt="NVIDIA AI Academy"
      width={700}
      height={400}
      className="w-full h-[155px] object-cover"
    />

    {/* External Link */}
    <button
      className="
        absolute
        top-3
        right-3
        w-8
        h-8
        rounded-full
        bg-white
        shadow-md
        flex
        items-center
        justify-center
        text-violet-600
        hover:scale-110
        transition
      "
    >
      ↗
    </button>
  </div>

  {/* Content */}
  <div className="px-5 pt-4 pb-4">

    <h3 className="text-[24px] font-bold text-violet-700">
      NVIDIA AI Academy
    </h3>

    <p className="mt-2 text-[15px] leading-6 text-gray-600">
      Artificial Intelligence Fundamentals.
    </p>

    {/* Tags */}
    <div className="flex items-center gap-2 mt-4 overflow-x-auto whitespace-nowrap scrollbar-hide">

      <span className="px-3 py-1 rounded-full bg-[#F3E8FF] text-[#6D28D9] text-[12px] font-semibold">
        NVIDIA
      </span>

      <span className="px-3 py-1 rounded-full bg-[#F3E8FF] text-[#6D28D9] text-[12px] font-semibold">
        AI
      </span>

      <span className="px-3 py-1 rounded-full bg-[#F3E8FF] text-[#6D28D9] text-[12px] font-semibold">
        Academy
      </span>

    </div>

  </div>

</div>

{/* Certificate 2 */}
<div
  className="
    group
    self-start
    overflow-hidden
    rounded-[22px]
    bg-white
    border
    border-violet-100
    shadow-lg
    transition-all
    duration-300
    hover:-translate-y-2
    hover:shadow-xl
  "
>
  {/* Thumbnail */}
  <div className="relative">
    <Image
      src="/images/cert2.jpg"
      alt="PSITE NCR"
      width={700}
      height={400}
      className="w-full h-[155px] object-cover"
    />

    <button
      className="
        absolute
        top-3
        right-3
        w-8
        h-8
        rounded-full
        bg-white
        shadow-md
        flex
        items-center
        justify-center
        text-violet-600
        hover:scale-110
        transition
      "
    >
      ↗
    </button>
  </div>

  <div className="px-5 pt-4 pb-4">

    <h3 className="text-[24px] font-bold text-violet-700">
      PSITE NCR
    </h3>

    <p className="mt-2 text-[15px] leading-6 text-gray-600">
      IT Seminar & Workshop.
    </p>

    <div className="flex items-center gap-2 mt-4 overflow-x-auto whitespace-nowrap scrollbar-hide">

      <span className="px-3 py-1 rounded-full bg-[#F3E8FF] text-[#6D28D9] text-[12px] font-semibold">
        PSITE
      </span>

      <span className="px-3 py-1 rounded-full bg-[#F3E8FF] text-[#6D28D9] text-[12px] font-semibold">
        Seminar
      </span>

      <span className="px-3 py-1 rounded-full bg-[#F3E8FF] text-[#6D28D9] text-[12px] font-semibold">
        Workshop
      </span>

    </div>

  </div>

</div>

{/* Certificate 3 */}
<div
  className="
    group
    self-start
    overflow-hidden
    rounded-[22px]
    bg-white
    border
    border-violet-100
    shadow-lg
    transition-all
    duration-300
    hover:-translate-y-2
    hover:shadow-xl
  "
>
  {/* Thumbnail */}
  <div className="relative">
    <Image
      src="/images/cert3.jpg"
      alt="NBDB Registered Author"
      width={700}
      height={400}
      className="w-full h-[155px] object-cover"
    />

    <button
      className="
        absolute
        top-3
        right-3
        w-8
        h-8
        rounded-full
        bg-white
        shadow-md
        flex
        items-center
        justify-center
        text-violet-600
        hover:scale-110
        transition
      "
    >
      ↗
    </button>
  </div>

  <div className="px-5 pt-4 pb-4">

    <h3 className="text-[22px] font-bold text-violet-700">
      NBDB Registered Author
    </h3>

    <p className="mt-2 text-[15px] leading-6 text-gray-600">
      Republic Act No. 8047.
    </p>

    <div className="flex items-center gap-2 mt-4 overflow-x-auto whitespace-nowrap scrollbar-hide">

      <span className="px-3 py-1 rounded-full bg-[#F3E8FF] text-[#6D28D9] text-[12px] font-semibold">
        NBDB
      </span>

      <span className="px-3 py-1 rounded-full bg-[#F3E8FF] text-[#6D28D9] text-[12px] font-semibold">
        Author
      </span>

      <span className="px-3 py-1 rounded-full bg-[#F3E8FF] text-[#6D28D9] text-[12px] font-semibold">
        RA 8047
      </span>

    </div>

  </div>

</div>

{/* Certificate 4 */}
<div
  className="
    group
    self-start
    overflow-hidden
    rounded-[22px]
    bg-white
    border
    border-violet-100
    shadow-lg
    transition-all
    duration-300
    hover:-translate-y-2
    hover:shadow-xl
  "
>
  <div className="relative">
    <Image
      src="/images/cert4.jpg"
      alt="AI & Automation in MSMEs"
      width={700}
      height={400}
      className="w-full h-[155px] object-cover"
    />

    <button
      className="
        absolute
        top-3
        right-3
        w-8
        h-8
        rounded-full
        bg-white
        shadow-md
        flex
        items-center
        justify-center
        text-violet-600
        hover:scale-110
        transition
      "
    >
      ↗
    </button>
  </div>

  <div className="px-5 pt-4 pb-4">

    <h3 className="text-[22px] font-bold text-violet-700">
      AI & Automation in MSMEs
    </h3>

    <p className="mt-2 text-[15px] leading-6 text-gray-600">
      ROC.PH • March 18, 2025
    </p>

    <div className="flex items-center gap-2 mt-4 overflow-x-auto whitespace-nowrap scrollbar-hide">

      <span className="px-3 py-1 rounded-full bg-[#F3E8FF] text-[#6D28D9] text-[12px] font-semibold">
        AI
      </span>

      <span className="px-3 py-1 rounded-full bg-[#F3E8FF] text-[#6D28D9] text-[12px] font-semibold">
        Automation
      </span>

      <span className="px-3 py-1 rounded-full bg-[#F3E8FF] text-[#6D28D9] text-[12px] font-semibold">
        ROC.PH
      </span>

    </div>

  </div>

</div>

{/* Certificate 5 */}
<div
  className="
    group
    self-start
    overflow-hidden
    rounded-[22px]
    bg-white
    border
    border-violet-100
    shadow-lg
    transition-all
    duration-300
    hover:-translate-y-2
    hover:shadow-xl
  "
>
  <div className="relative">
    <Image
      src="/images/cert5.jpg"
      alt="Leading with Code"
      width={700}
      height={400}
      className="w-full h-[155px] object-cover"
    />

    <button
      className="
        absolute
        top-3
        right-3
        w-8
        h-8
        rounded-full
        bg-white
        shadow-md
        flex
        items-center
        justify-center
        text-violet-600
        hover:scale-110
        transition
      "
    >
      ↗
    </button>
  </div>

  <div className="px-5 pt-4 pb-4">

    <h3 className="text-[22px] font-bold text-violet-700">
      Leading with Code
    </h3>

    <p className="mt-2 text-[15px] leading-6 text-gray-600">
        Web Development • March 6, 2025
    </p>

    <div className="flex items-center gap-2 mt-4 overflow-x-auto whitespace-nowrap scrollbar-hide">

      <span className="px-3 py-1 rounded-full bg-[#F3E8FF] text-[#6D28D9] text-[12px] font-semibold">
        Web Dev
      </span>

      <span className="px-3 py-1 rounded-full bg-[#F3E8FF] text-[#6D28D9] text-[12px] font-semibold">
        Leadership
      </span>

      <span className="px-3 py-1 rounded-full bg-[#F3E8FF] text-[#6D28D9] text-[12px] font-semibold">
        Teams
      </span>

    </div>

  </div>

</div>


{/* Certificate 6 */}
<div
  className="
    group
    self-start
    overflow-hidden
    rounded-[22px]
    bg-white
    border
    border-violet-100
    shadow-lg
    transition-all
    duration-300
    hover:-translate-y-2
    hover:shadow-xl
  "
>
  <div className="relative">
    <Image
      src="/images/cert6.jpg"
      alt="Strategy & Implementation"
      width={700}
      height={400}
      className="w-full h-[155px] object-cover"
    />

    <button
      className="
        absolute
        top-3
        right-3
        w-8
        h-8
        rounded-full
        bg-white
        shadow-md
        flex
        items-center
        justify-center
        text-violet-600
        hover:scale-110
        transition
      "
    >
      ↗
    </button>
  </div>

  <div className="px-5 pt-4 pb-4">

    <h3 className="text-[22px] font-bold text-violet-700">
      Strategy & Implementation
    </h3>

    <p className="mt-2 text-[15px] leading-6 text-gray-600">
      ROC.PH • March 3, 2025
    </p>

    <div className="flex items-center gap-2 mt-4 overflow-x-auto whitespace-nowrap scrollbar-hide">

      <span className="px-3 py-1 rounded-full bg-[#F3E8FF] text-[#6D28D9] text-[12px] font-semibold">
        Strategy
      </span>

      <span className="px-3 py-1 rounded-full bg-[#F3E8FF] text-[#6D28D9] text-[12px] font-semibold">
        Business
      </span>

      <span className="px-3 py-1 rounded-full bg-[#F3E8FF] text-[#6D28D9] text-[12px] font-semibold">
        ROC.PH
      </span>

    </div>

  </div>

</div>

{/* Certificate 7 */}
<div
  className="
    group
    self-start
    overflow-hidden
    rounded-[22px]
    bg-white
    border
    border-violet-100
    shadow-lg
    transition-all
    duration-300
    hover:-translate-y-2
    hover:shadow-xl
  "
>
  <div className="relative">
    <Image
      src="/images/cert7.jpg"
      alt="Cisco Certified Support Technician"
      width={700}
      height={400}
      className="w-full h-[155px] object-cover"
    />

    <button
      className="
        absolute
        top-3
        right-3
        w-8
        h-8
        rounded-full
        bg-white
        shadow-md
        flex
        items-center
        justify-center
        text-violet-600
        hover:scale-110
        transition
      "
    >
      ↗
    </button>
  </div>

  <div className="px-5 pt-4 pb-4">

    <h3 className="text-[17px] font-bold text-violet-700">
      Cisco Certified Support Technician
    </h3>

    <p className="mt-2 text-[15px] leading-6 text-gray-600">
      Cybersecurity • Cisco
    </p>

    <div className="flex items-center gap-2 mt-4 overflow-x-auto whitespace-nowrap scrollbar-hide">

      <span className="px-3 py-1 rounded-full bg-[#F3E8FF] text-[#6D28D9] text-[12px] font-semibold">
        Cisco
      </span>

      <span className="px-3 py-1 rounded-full bg-[#F3E8FF] text-[#6D28D9] text-[12px] font-semibold">
        Cybersecurity
      </span>

      <span className="px-3 py-1 rounded-full bg-[#F3E8FF] text-[#6D28D9] text-[12px] font-semibold">
        CCST
      </span>

    </div>

  </div>

</div>

{/* Certificate 8 */}
<div
  className="
    group
    self-start
    overflow-hidden
    rounded-[22px]
    bg-white
    border
    border-violet-100
    shadow-lg
    transition-all
    duration-300
    hover:-translate-y-2
    hover:shadow-xl
  "
>
  <div className="relative">
    <Image
      src="/images/cert8.jpg"
      alt="OJT Certificate of Completion"
      width={700}
      height={400}
      className="w-full h-[155px] object-cover"
    />

    <button
      className="
        absolute
        top-3
        right-3
        w-8
        h-8
        rounded-full
        bg-white
        shadow-md
        flex
        items-center
        justify-center
        text-violet-600
        hover:scale-110
        transition
      "
    >
      ↗
    </button>
  </div>

  <div className="px-5 pt-4 pb-4">

    <h3 className="text-[20px] font-bold text-violet-700">
      OJT Certificate of Completion
    </h3>

    <p className="mt-2 text-[15px] leading-6 text-gray-600">
      IT Internship • JLUM
    </p>

    <div className="flex items-center gap-2 mt-4 overflow-x-auto whitespace-nowrap scrollbar-hide">

      <span className="px-3 py-1 rounded-full bg-[#F3E8FF] text-[#6D28D9] text-[12px] font-semibold">
        Internship
      </span>

      <span className="px-3 py-1 rounded-full bg-[#F3E8FF] text-[#6D28D9] text-[12px] font-semibold">
        OJT
      </span>

      <span className="px-3 py-1 rounded-full bg-[#F3E8FF] text-[#6D28D9] text-[12px] font-semibold">
        JLUM
      </span>

    </div>

  </div>

</div>

{/* Certificate 9 */}
<div
  className="
    group
    self-start
    overflow-hidden
    rounded-[22px]
    bg-white
    border
    border-violet-100
    shadow-lg
    transition-all
    duration-300
    hover:-translate-y-2
    hover:shadow-xl
  "
>
  <div className="relative">
    <Image
      src="/images/cert9.jpg"
      alt="Data Analytics Fundamentals"
      width={700}
      height={400}
      className="w-full h-[155px] object-cover"
    />

    <button
      className="
        absolute
        top-3
        right-3
        w-8
        h-8
        rounded-full
        bg-white
        shadow-md
        flex
        items-center
        justify-center
        text-violet-600
        hover:scale-110
        transition
      "
    >
      ↗
    </button>
  </div>

  <div className="px-5 pt-4 pb-4">

    <h3 className="text-[20px] font-bold text-violet-700">
      Data Analytics Fundamentals
    </h3>

    <p className="mt-2 text-[15px] leading-6 text-gray-600">
      DataSense Analytics
    </p>

    <div className="flex items-center gap-2 mt-4 overflow-x-auto whitespace-nowrap scrollbar-hide">

      <span className="px-3 py-1 rounded-full bg-[#F3E8FF] text-[#6D28D9] text-[12px] font-semibold">
        Data
      </span>

      <span className="px-3 py-1 rounded-full bg-[#F3E8FF] text-[#6D28D9] text-[12px] font-semibold">
        Analytics
      </span>

      <span className="px-3 py-1 rounded-full bg-[#F3E8FF] text-[#6D28D9] text-[12px] font-semibold">
        Training
      </span>

    </div>

  </div>

</div>

</div>

</div>

{/* ================= ABOUT ME ================= */}
<div className="relative w-full max-w-6xl mx-auto px-6 mt-28">

  {/* Decorations */}
  <Image
    src="/images/butterfly.png"
    alt=""
    width={70}
    height={70}
    className="absolute -left-15 top-20 opacity-70 animate-float"
  />

  <Image
    src="/images/flower.png"
    alt=""
    width={85}
    height={85}
    className="absolute -right-18 bottom-10 opacity-75 animate-float"
  />


<Image
  src="/images/2.png"
  alt=""
  width={34}
  height={34}
  className="absolute right-24 top-12 animate-float opacity-80 pointer-events-none"
/>

<Image
  src="/images/flower.png"
  alt=""
  width={58}
  height={58}
  className="absolute -left-15 top-1/2 -translate-y-1/2 animate-float pointer-events-none"
/>

<Image
  src="/images/butterfly.png"
  alt=""
  width={58}
  height={58}
  className="absolute -right-15 top-1/3 animate-float pointer-events-none"
/>

<Image
  src="/images/ribbon.png"
  alt=""
  width={56}
  height={56}
  className="absolute right-24 -bottom-4 animate-float rotate-12 pointer-events-none"
/>

  <h2 className="text-center text-4xl md:text-5xl font-black text-violet-700 mb-12">
    About Me
  </h2>

  <div className="relative">

    {/* Corner Decorations */}
    <div className="absolute -top-4 -right-4 w-14 h-14 border-r-2 border-t-2 border-cyan-400 z-10"></div>
    <div className="absolute -bottom-4 -left-4 w-14 h-14 border-l-2 border-b-2 border-violet-600 z-10"></div>

    {/* Browser Window */}
    <div className="border-[4px] border-white bg-white/40 backdrop-blur-md rounded-[32px] overflow-hidden shadow-2xl">

      {/* Browser Header */}
      <div className="h-12 bg-gradient-to-r from-pink-300 via-purple-300 to-cyan-300 flex items-center gap-2 px-4">

        <div className="w-4 h-4 rounded-full bg-pink-400"></div>
        <div className="w-4 h-4 rounded-full bg-yellow-300"></div>
        <div className="w-4 h-4 rounded-full bg-cyan-300"></div>

        <span className="ml-4 text-white font-semibold tracking-wide">
          about.tsx
        </span>

      </div>

      {/* Content */}
      <div className="grid lg:grid-cols-2 gap-12 p-10">

        {/* Left Side */}
        <div className="flex justify-center">

          <div className="relative">

            {/* Glow */}
            <div className="absolute inset-0 rounded-full bg-violet-300 blur-3xl opacity-30"></div>

            <Image
              src="/images/mee.jpg"
              alt="Vincent Tibor"
              width={360}
              height={430}
              className="relative rounded-3xl border-4 border-white shadow-xl object-cover"
            />

          </div>

        </div>

        {/* Right Side */}
        <div className="flex flex-col justify-center">

          <span className="text-violet-500 font-semibold uppercase tracking-[4px]">
            Hello There 👋
          </span>

          <h2 className="mt-3 text-5xl font-black text-violet-700">
            Vincent Tibor
          </h2>

          <p className="mt-3 text-xl text-violet-500 font-semibold">
            Frontend Developer × UI/UX Designer
          </p>

          <p className="mt-8 text-gray-700 leading-8">
            I'm a Computer Science graduate passionate about building
            modern, responsive, and user-friendly web applications.
            I enjoy transforming ideas into engaging digital experiences
            through clean code, thoughtful design, and attention to detail.
          </p>

          <p className="mt-5 text-gray-700 leading-8">
            Beyond coding, I explore UI/UX design, graphic design,
            photography, and creative writing under my pen name
            <span className="font-semibold text-violet-700">
              {" "}Hanashi
            </span>.
            I believe creativity and technology go hand in hand to create
            meaningful digital products.
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mt-8">

<span className="px-3 py-1 rounded-full bg-[#F3E8FF] text-[#6D28D9] text-[12px] font-semibold">
  React
</span>

<span className="px-3 py-1 rounded-full bg-[#F3E8FF] text-[#6D28D9] text-[12px] font-semibold">
  Next.js
</span>

<span className="px-3 py-1 rounded-full bg-[#F3E8FF] text-[#6D28D9] text-[12px] font-semibold">
  Tailwind CSS
</span>

<span className="px-3 py-1 rounded-full bg-[#F3E8FF] text-[#6D28D9] text-[12px] font-semibold">
  TypeScript
</span>

<span className="px-3 py-1 rounded-full bg-[#F3E8FF] text-[#6D28D9] text-[12px] font-semibold">
  Figma
</span>

</div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mt-10">

            <div className="text-center">
              <h3 className="text-3xl font-black text-violet-700">10+</h3>
              <p className="text-sm text-gray-600 mt-1">Projects</p>
            </div>

            <div className="text-center">
              <h3 className="text-3xl font-black text-violet-700">9</h3>
              <p className="text-sm text-gray-600 mt-1">Certificates</p>
            </div>

            <div className="text-center">
              <h3 className="text-3xl font-black text-violet-700">2026</h3>
              <p className="text-sm text-gray-600 mt-1">Graduate</p>
            </div>

          </div>

        </div>

      </div>

    </div>

  </div>

</div>

</section>

  );
}