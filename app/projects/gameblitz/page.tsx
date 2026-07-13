import Image from "next/image";
import Link from "next/link";


export default function GameBlitzPage() {
  return (
<main className="relative overflow-hidden min-h-screen bg-gradient-to-b from-[#E8D8FF] via-[#F4EDFF] to-[#EFE7FF]">
{/* Floating Decorations */}

<Image
  src="/images/1.png"
  alt=""
  width={55}
  height={55}
  className="absolute top-20 left-10 opacity-80 animate-float pointer-events-none"
/>

<Image
  src="/images/2.png"
  alt=""
  width={42}
  height={42}
  className="absolute top-[520px] right-16 animate-float delay-300 pointer-events-none"
/>

<Image
  src="/images/butterfly.png"
  alt=""
  width={60}
  height={60}
  className="absolute top-[1300px] left-12 rotate-[-12deg] animate-float pointer-events-none"
/>

<Image
  src="/images/cloud.png"
  alt=""
  width={40}
  height={40}
  className="absolute top-[2200px] right-10 animate-float pointer-events-none"
/>

<Image
  src="/images/clover.png"
  alt=""
  width={90}
  height={90}
  className="absolute bottom-24 right-10 animate-float pointer-events-none"
/>
      <div className="max-w-7xl mx-auto px-6 py-12">

        {/* Back */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-violet-600 hover:text-fuchsia-500 font-semibold transition"
        >
          ← Back to Portfolio
        </Link>

        {/* ================= HERO ================= */}

        <section className="grid lg:grid-cols-2 gap-14 items-center mt-14">

          <div>

            <span className="uppercase tracking-[4px] text-violet-500 font-semibold">
              Featured Project
            </span>

            <h1 className="mt-3 text-6xl md:text-7xl font-black bg-gradient-to-r from-pink-500 via-violet-500 to-cyan-500 bg-clip-text text-transparent">
              GameBlitz
            </h1>

            <p className="mt-5 text-2xl text-violet-700">
              Online Game Store Platform
            </p>

            <div className="mt-8 flex flex-wrap gap-3">

              <span className="px-4 py-2 rounded-full bg-violet-100 text-violet-700 font-semibold">
                UI/UX Designer
              </span>

              <span className="px-4 py-2 rounded-full bg-violet-100 text-violet-700 font-semibold">
                Figma
              </span>

              <span className="px-4 py-2 rounded-full bg-violet-100 text-violet-700 font-semibold">
                Photoshop
              </span>

            </div>

            <p className="mt-8 text-gray-700 leading-8">
  GameBlitz is a concept for an online game store inspired by Epic Games,
  designed to provide a seamless and enjoyable experience for discovering,
  purchasing, and managing PC games. As the UI/UX Designer, I focused on
  creating a modern, responsive, and user-friendly interface that combines
  visual appeal with intuitive navigation.
</p>

          </div>

          <div>

            <div className="overflow-hidden rounded-[28px] border-4 border-white bg-white shadow-2xl">

              <div className="h-12 bg-gradient-to-r from-pink-300 via-violet-300 to-cyan-300 flex items-center px-5 gap-2">

                <div className="w-3 h-3 rounded-full bg-pink-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-300"></div>
                <div className="w-3 h-3 rounded-full bg-cyan-300"></div>

              </div>

              <Image
                src="/images/gameblitzs.png"
                alt="GameBlitz"
                width={1200}
                height={700}
                className="w-full"
              />

            </div>

          </div>

        </section>

        {/* ================= MY ROLE ================= */}

        <section className="mt-24">

          <h2 className="text-4xl font-black text-violet-700">
            My Role
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">

            {[
              "User Research",
              "Wireframing",
              "UI Design",
              "Prototype",
              "Design System",
              "Responsive Design",
              "Usability Testing",
              "Developer Handoff",
            ].map((item) => (

              <div
                key={item}
                className="rounded-2xl bg-white p-6 shadow-lg border border-violet-100"
              >
                <p className="font-semibold text-violet-700">
                  {item}
                </p>
              </div>

            ))}

          </div>

        </section>

{/* ================= DESIGN PROCESS ================= */}

<section className="mt-24">

  <h2 className="text-4xl font-black text-violet-700">
    Design Process
  </h2>

  <div className="grid md:grid-cols-5 gap-6 mt-10">

    {[
      {
        title: "Research",
        icon: "/images/research.png",
        description:
          "Analyzed game store platforms and identified user needs.",
      },
      {
        title: "Wireframes",
        icon: "/images/wireframe.png",
        description:
          "Created low-fidelity layouts to define page structure.",
      },
      {
        title: "UI Design",
        icon: "/images/ux.png",
        description:
          "Designed modern and engaging high-fidelity interfaces.",
      },
      {
        title: "Prototype",
        icon: "/images/3d-model.png",
        description:
          "Built an interactive prototype to simulate user flow.",
      },
      {
        title: "Final Design",
        icon: "/images/testing.png",
        description:
          "Refined the design into a polished final concept.",
      },
    ].map((step) => (

      <div
        key={step.title}
        className="bg-white rounded-3xl p-6 shadow-lg border border-violet-100 hover:-translate-y-2 hover:shadow-xl transition duration-300"
      >

        <div className="flex justify-center">
          <div className="w-20 h-20 rounded-full bg-[#F3E8FF] flex items-center justify-center">
            <Image
              src={step.icon}
              alt={step.title}
              width={48}
              height={48}
            />
          </div>
        </div>

        <h3 className="mt-6 text-center text-xl font-bold text-violet-700">
          {step.title}
        </h3>

        <p className="mt-3 text-center text-sm leading-6 text-gray-600">
          {step.description}
        </p>

      </div>

    ))}

  </div>

</section>

{/* ================= PROTOTYPE DEMO ================= */}

<section className="mt-24">

  <h2 className="text-4xl font-black text-violet-700">
    Prototype Walkthrough
  </h2>

  <p className="mt-4 text-gray-700">
    Watch a short walkthrough of the GameBlitz interface and user experience.
  </p>

  <video
  src="/images/Gameblitz.mp4"
  controls
  autoPlay
  muted
  playsInline
  preload="metadata"
  className="w-full rounded-3xl"
>
  Your browser does not support the video tag.
</video>

</section>

{/* ================= SCREEN GALLERY ================= */}

<section className="mt-24">

  <h2 className="text-4xl font-black text-violet-700">
    Interface Gallery
  </h2>

  <p className="mt-4 text-gray-700">
    Explore the different interfaces designed for the GameBlitz platform.
  </p>

  <div className="grid md:grid-cols-2 gap-10 mt-12">

    {[
      {
        image: "/images/gameblitz1.png",
        title: "Landing Page",
        description: "The homepage welcomes users with featured games, intuitive navigation, and quick access to categories, providing a seamless game discovery experience.",
      },
      {
        image: "/images/gameblitz2.png",
        title: "Game Catalog",
        description: "Explore top-selling and most-played games through a clean, organized catalog that helps users quickly discover and browse popular titles.",
      },
      {
        image: "/images/gameblitz3.png",
        title: "Featured Game",
        description: "Showcases featured games with engaging visuals and essential details, making it easy for users to discover and purchase highlighted titles.",
      },
      {
        image: "/images/gameblitz4.png",
        title: "Game Collections",
        description: "Displays curated lists of top-selling and most-played games, helping users easily discover trending titles and explore the game library.",
      },
      {
        image: "/images/gameblitz5.png",
        title: "Community Hub",
        description: "The Community Hub encourages player engagement through discussion forums, gaming news, and user-generated content, allowing gamers to connect, share experiences, and stay updated with the latest trends.",
      },
      {
        image: "/images/gameblitz6.png",
        title: "Clips & Highlights",
        description: "The Clips & Highlights section showcases community-created gameplay videos, giving users a platform to discover memorable moments, share achievements, and engage with gaming content.",
      },
      {
        image: "/images/gameblitz7.png",
        title: "Game Details",
        description: "The Game Details page provides comprehensive information about a selected game, including media previews, pricing, ratings, and essential product details to help users make informed purchasing decisions.",
      },
      {
        image: "/images/gameblitz8.png",
        title: "Image Gallery",
        description: "An interactive image gallery allows users to preview gameplay screenshots, giving them a better understanding of the game's visuals and overall experience before purchasing.",
      },
      {
        image: "/images/gameblitz9.png",
        title: "System Requirements",
        description: "Displays the minimum and recommended system specifications, enabling users to verify hardware compatibility before downloading or purchasing the game.",
      },
      {
        image: "/images/gameblitz10.png",
        title: "Reviews",
        description: "The Reviews section highlights community feedback and ratings, allowing users to read player experiences and share their own opinions to support informed purchasing decisions.",
      },
      {
        image: "/images/gameblitz11.png",
        title: "Game Categories",
        description: "Organizes games into different genres and themes, allowing users to easily browse and discover titles based on their interests and preferences.",
      },
      {
        image: "/images/gameblitz12.png",
        title: "Search Results",
        description: "The search feature delivers relevant game suggestions in real time, enabling users to quickly discover titles through an intuitive and efficient search experience.",
      },
      {
        image: "/images/gameblitz13.png",
        title: "About GameBlitz",
        description: "Presents an overview of GameBlitz, introducing the platform's purpose, vision, and the variety of games available for players to explore and enjoy.",
      },
      {
        image: "/images/gameblitz14.png",
        title: "Meet the Team",
        description: "Introduces the team behind GameBlitz, highlighting the members and their roles to build credibility and showcase the people involved in the project.",
      },
      {
        image: "/images/gameblitz15.png",
        title: "Support Center",
        description: "The Support Center provides users with quick access to help articles, account assistance, and common support topics through an organized search interface.",
      },
      {
        image: "/images/gameblitz16.png",
        title: "Sign In",
        description: "Save games for future purchases.The Sign In page provides users with a secure and convenient way to access their GameBlitz account using their credentials or supported third-party authentication options.",
      },
      {
        image: "/images/gameblitz17.png",
        title: "Sign Up",
        description: "CThe Sign Up page enables new users to create a GameBlitz account with a simple registration process and optional social sign-in integrations.",
      },
      {
        image: "/images/gameblitz18.png",
        title: "Forgot Password",
        description: "The Forgot Password page allows users to request a password reset by entering their registered email address to receive a verification code.",
      },
      {
        image: "/images/gameblitz19.png",
        title: "Verification Code",
        description: "The Verification page securely validates the password reset request by requiring users to enter the one-time verification code sent to their email.",
      },
      {
        image: "/images/gameblitz20.png",
        title: "Create New Password",
        description: "The Create New Password page allows users to securely reset their account password by entering and confirming a new password before returning to the sign-in page.",
      },
      {
        image: "/images/gameblitz21.png",
        title: "Password Reset Complete",
        description: "Displays a confirmation message after a successful password reset and guides users back to the login page to access their account.",
      },
    ].map((screen, index) => (

      <div
        key={index}
        className="rounded-3xl bg-white border border-violet-100 shadow-lg overflow-hidden hover:shadow-xl transition duration-300"
      >

        <Image
          src={screen.image}
          alt={screen.title}
          width={1200}
          height={700}
          className="w-full hover:scale-105 transition duration-500"
        />

        <div className="p-6">

          <h3 className="text-2xl font-bold text-violet-700">
            {screen.title}
          </h3>

          <p className="mt-2 text-gray-600 leading-7">
            {screen.description}
          </p>

        </div>

      </div>

    ))}

  </div>

</section>
{/* ================= DESIGN SYSTEM ================= */}

<section className="mt-24">

  <h2 className="text-4xl font-black text-violet-700">
    Design System
  </h2>

  <p className="mt-4 text-gray-700 max-w-3xl">
    A consistent design system was created to ensure visual harmony,
    usability, and scalability across the GameBlitz interface.
  </p>

  <div className="grid lg:grid-cols-2 gap-8 mt-12">

    {/* Color Palette */}
    <div className="bg-white rounded-3xl p-8 shadow-lg border border-violet-100">

    <div className="flex items-center gap-3 mb-6">
  <Image
    src="/images/palette.png"
    alt="Color Palette"
    width={30}
    height={30}
  />

  <h3 className="text-2xl font-bold text-violet-700">
    Color Palette
  </h3>
</div>

<div className="grid grid-cols-2 gap-6">

  {[
    { color: "#2F00FF", name: "Primary", hex: "#2F00FF" },
    { color: "#121212", name: "Background", hex: "#121212" },
    { color: "#1E1E1E", name: "Surface", hex: "#1E1E1E" },
    { color: "#FFD600", name: "Accent", hex: "#FFD600" },
    { color: "#FFFFFF", name: "Text", hex: "#FFFFFF" },
  ].map((item) => (

    <div
      key={item.name}
      className="flex items-center gap-4"
    >

      <div
        className="w-14 h-14 rounded-xl border border-gray-300 shrink-0"
        style={{ backgroundColor: item.color }}
      />

      <div>
        <h4 className="font-bold text-gray-900">
          {item.name}
        </h4>

        <p className="text-sm text-gray-500">
          {item.hex}
        </p>
      </div>

    </div>

  ))}

</div>

    </div>

    {/* Typography */}
    <div className="bg-white rounded-3xl p-8 shadow-lg border border-violet-100">

    <div className="flex items-center gap-3 mb-6">
  <Image
    src="/images/type.png"
    alt="Typography"
    width={30}
    height={30}
  />

  <h3 className="text-2xl font-bold text-violet-700">
    Typography
  </h3>
</div>

      <div className="space-y-5">

        <div>
          <h1 className="text-4xl font-bold">Heading 1</h1>
          <p className="text-sm text-gray-500">Poppins Bold • 36px</p>
        </div>

        <div>
          <h2 className="text-3xl font-semibold">Heading 2</h2>
          <p className="text-sm text-gray-500">Poppins SemiBold • 30px</p>
        </div>

        <div>
          <p className="text-lg">
            Body text used throughout the interface.
          </p>
          <p className="text-sm text-gray-500">Poppins Regular • 18px</p>
        </div>

      </div>

    </div>

    {/* Components */}
    <div className="bg-white rounded-3xl p-8 shadow-lg border border-violet-100">

    <div className="flex items-center gap-3 mb-6">
  <Image
    src="/images/components.png"
    alt="Components"
    width={30}
    height={30}
  />

  <h3 className="text-2xl font-bold text-violet-700">
    Components
  </h3>
</div>

<div className="space-y-6">

  <div className="flex gap-4">

    <button className="bg-[#2F00FF] text-white px-8 py-3 rounded-xl font-semibold">
      Buy Now
    </button>

    <button className="border border-gray-300 px-8 py-3 rounded-xl font-semibold">
      Add to Cart
    </button>

  </div>

  <input
    type="text"
    placeholder="Search games..."
    className="w-full border rounded-xl px-5 py-3"
  />

</div>
    </div>

    {/* Style Guide */}
    <div className="bg-white rounded-3xl p-8 shadow-lg border border-violet-100">

    <div className="flex items-center gap-3 mb-6">
  <Image
    src="/images/effect.png"
    alt="Style Guide"
    width={30}
    height={30}
  />

  <h3 className="text-2xl font-bold text-violet-700">
    Style Guide
  </h3>
</div>

      <div className="space-y-5">

        <div>
          <p className="font-semibold">Design Style</p>
          <p className="text-gray-600">
            Modern Dark Gaming Interface
          </p>
        </div>

        <div>
          <p className="font-semibold">Target Users</p>
          <p className="text-gray-600">
            PC gamers and digital game buyers.
          </p>
        </div>

        <div>
          <p className="font-semibold">Design Principles</p>

          <div className="flex flex-wrap gap-3 mt-3">

            {[
              "Consistency",
              "Accessibility",
              "Usability",
              "Visual Hierarchy",
              "Responsiveness",
            ].map((item) => (

              <span
                key={item}
                className="px-4 py-2 rounded-full bg-violet-100 text-violet-700 text-sm font-medium"
              >
                {item}
              </span>

            ))}

          </div>

        </div>

      </div>

    </div>

  </div>

</section>
       

<section className="mt-24">

  <a
    href="https://www.figma.com/proto/xUo6FWlJvn8sTJp8jt3RVh/Gameblitz?node-id=1-228&t=Hp33Dh2XR24XQe50-1&scaling=scale-down-width&content-scaling=fixed&page-id=0%3A1"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block rounded-2xl bg-violet-600 text-white px-10 py-4 font-semibold shadow-lg transition hover:bg-violet-700"
  >
    View Prototype
  </a>

</section>

      </div>

    </main>
  );
}