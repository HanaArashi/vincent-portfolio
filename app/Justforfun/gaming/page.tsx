import Image from "next/image";
import Link from "next/link";

export default function WritingPage() {
  return (
    <main className="relative overflow-hidden min-h-screen bg-gradient-to-b from-[#E8D8FF] via-[#F4EDFF] to-[#EFE7FF]">


      <div className="max-w-7xl mx-auto px-6 py-12">

        {/* Back Button */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-violet-600 hover:text-fuchsia-500 font-semibold transition"
        >
          ← Back to Portfolio
        </Link>

        {/* ================= HERO ================= */}

        <section className="grid lg:grid-cols-2 gap-12 items-center mt-14">          <div>

            <span className="uppercase tracking-[4px] text-violet-500 font-semibold">
              Just For Fun
            </span>

            <h1 className="mt-3 text-5xl md:text-6xl font-black bg-gradient-to-r from-pink-500 via-violet-500 to-cyan-500 bg-clip-text text-transparent">
            Gaming
            </h1>

            <p className="mt-5 text-2xl text-violet-700">
            Story Gamer • Explorer • Completionist
            </p>

            <div className="mt-8 flex flex-wrap gap-3">

              <span className="px-4 py-2 rounded-full bg-violet-100 text-violet-700 font-semibold">
              Story Games
              </span>

              <span className="px-4 py-2 rounded-full bg-violet-100 text-violet-700 font-semibold">
              Indie Games
              </span>

              <span className="px-4 py-2 rounded-full bg-violet-100 text-violet-700 font-semibold">
              Cozy Games
              </span>

            </div>

            <p className="mt-8 text-gray-700 leading-8">
  Beyond coding and design, gaming has always been one of my
  favorite hobbies. I enjoy exploring immersive worlds,
  experiencing memorable stories, and discovering unique
  gameplay mechanics. Whether it's a relaxing indie game or
  a story-rich adventure, gaming continues to inspire my
  creativity and imagination.
</p>

          </div>
          <div className="flex justify-center">

<div
  className="
    bg-white
    p-2
    rounded-[32px]
    shadow-2xl
    w-[520px]
  "
>

  {/* Browser Header */}
            <div className="overflow-hidden rounded-[28px] border-4 border-white bg-white shadow-2xl">

              <div className="h-12 bg-gradient-to-r from-pink-300 via-violet-300 to-cyan-300 flex items-center px-5 gap-2">

                <div className="w-3 h-3 rounded-full bg-pink-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-300"></div>
                <div className="w-3 h-3 rounded-full bg-cyan-300"></div>

              </div>

              <Image
                src="/images/gamings.png"
                alt="GameBlitz"
                width={1200}
                height={700}
                className="w-full"
              />

            </div>

          </div>

</div>
        </section>

        {/* ================= ABOUT ================= */}

        <section className="mt-24">

          <h2 className="text-4xl font-black text-violet-700">
          About My Gaming Hobby
          </h2>

          <p className="mt-6 text-gray-700 leading-8 max-w-4xl">
  Gaming is one of my favorite ways to relax, learn,
  and experience creative storytelling. I enjoy games
  that combine strong narratives, exploration,
  memorable characters, and meaningful choices.
  Many of the storytelling techniques I admire are
  also found in the games I play.
</p>

        </section>

{/* ================= FAVORITE GAMES ================= */}

<section className="mt-24">

  <h2 className="text-4xl font-black text-violet-700">
    Favorite Games
  </h2>

  {/* SIMS 4 */}
  <div className="mt-10 bg-white rounded-[28px] shadow-lg border border-violet-100 overflow-hidden">

    <div className="grid lg:grid-cols-2">

      <Image
        src="/images/simss.png"
        alt="The Sims 4"
        width={800}
        height={1000}
        className="w-full h-full object-cover"
      />

      <div className="p-10">

        <h3 className="text-4xl font-black text-violet-700">
          The Sims 4
        </h3>

        <p className="mt-2 text-violet-500 font-semibold">
          Creativity & Storytelling
        </p>

        <p className="mt-6 text-gray-700 leading-8">
          I enjoy creating unique characters, designing homes,
          and building stories that allow creativity and imagination
          to flourish.
        </p>

        <div className="flex flex-wrap gap-3 mt-8">

          <span className="px-4 py-2 rounded-full bg-violet-100 text-violet-700">
            Simulation
          </span>

          <span className="px-4 py-2 rounded-full bg-violet-100 text-violet-700">
            Sandbox
          </span>

          <span className="px-4 py-2 rounded-full bg-violet-100 text-violet-700">
            Creativity
          </span>

        </div>

      </div>

    </div>

  </div>

  {/* WWE 2K26 */}
  <div className="mt-10 bg-white rounded-[28px] shadow-lg border border-violet-100 overflow-hidden">

    <div className="grid lg:grid-cols-2">

      <Image
        src="/images/wwee.png"
        alt="WWE 2K26"
        width={800}
        height={1000}
        className="w-full h-full object-cover"
      />

      <div className="p-10">

        <h3 className="text-4xl font-black text-violet-700">
          WWE 2K26
        </h3>

        <p className="mt-2 text-violet-500 font-semibold">
          Universe Mode & Booking
        </p>

        <p className="mt-6 text-gray-700 leading-8">
          I enjoy creating rivalries, managing rosters,
          and booking long-term storylines through Universe Mode.
        </p>

        <div className="flex flex-wrap gap-3 mt-8">

          <span className="px-4 py-2 rounded-full bg-violet-100 text-violet-700">
            Wrestling
          </span>

          <span className="px-4 py-2 rounded-full bg-violet-100 text-violet-700">
            Sports
          </span>

          <span className="px-4 py-2 rounded-full bg-violet-100 text-violet-700">
            Simulation
          </span>

        </div>

      </div>

    </div>

  </div>

  {/* Love and Deepspace */}
  <div className="mt-10 bg-white rounded-[28px] shadow-lg border border-violet-100 overflow-hidden">

    <div className="grid lg:grid-cols-2">

      <Image
        src="/images/lad.png"
        alt="Love and Deepspace"
        width={800}
        height={1000}
        className="w-full h-full object-cover"
      />

      <div className="p-10">

        <h3 className="text-4xl font-black text-violet-700">
          Love and Deepspace
        </h3>

        <p className="mt-2 text-violet-500 font-semibold">
          Story & Character Experience
        </p>

        <p className="mt-6 text-gray-700 leading-8">
          I enjoy the immersive storytelling, emotional moments,
          and meaningful interactions with its characters.
        </p>

        <div className="flex flex-wrap gap-3 mt-8">

          <span className="px-4 py-2 rounded-full bg-violet-100 text-violet-700">
            Story Rich
          </span>

          <span className="px-4 py-2 rounded-full bg-violet-100 text-violet-700">
            Romance
          </span>

          <span className="px-4 py-2 rounded-full bg-violet-100 text-violet-700">
            Sci-Fi
          </span>

        </div>

      </div>

    </div>

  </div>

</section>
        

{/* ================= FAVORITE GENRES ================= */}

<section className="mt-24">

  <h2 className="text-4xl font-black text-violet-700">
    Favorite Genres
  </h2>

  <div className="grid md:grid-cols-2 gap-6 mt-10">

    <div className="bg-white rounded-3xl p-8 border border-violet-100 shadow-lg">
      <h3 className="text-3xl font-black text-violet-700">
        Story-Rich Games
      </h3>

      <p className="mt-3 text-gray-700 leading-7">
        I enjoy games with compelling narratives, memorable characters,
        and emotional moments that create meaningful experiences.
      </p>
    </div>

    <div className="bg-white rounded-3xl p-8 border border-violet-100 shadow-lg">
      <h3 className="text-3xl font-black text-violet-700">
        Simulation Games
      </h3>

      <p className="mt-3 text-gray-700 leading-7">
        Simulation games allow me to express creativity through
        customization, storytelling, world-building, and management.
      </p>
    </div>

    <div className="bg-white rounded-3xl p-8 border border-violet-100 shadow-lg">
      <h3 className="text-3xl font-black text-violet-700">
        Wrestling Games
      </h3>

      <p className="mt-3 text-gray-700 leading-7">
        I enjoy creating rivalries, managing rosters, and building
        long-term storylines through WWE Universe Mode.
      </p>
    </div>

    <div className="bg-white rounded-3xl p-8 border border-violet-100 shadow-lg">
      <h3 className="text-3xl font-black text-violet-700">
        Interactive Story Games
      </h3>

      <p className="mt-3 text-gray-700 leading-7">
        Games that focus on relationships, choices, and immersive
        storytelling are among my favorite gaming experiences.
      </p>
    </div>

  </div>

</section>

<section className="mt-24">

  <div className="bg-white rounded-[28px] p-10 shadow-lg border border-violet-100">

    <h2 className="text-4xl font-black text-violet-700">
      Why I Love Gaming
    </h2>

    <p className="mt-6 text-gray-700 leading-8">
      Gaming allows me to explore different worlds, experience memorable
      stories, and connect with unique characters. Whether it's building
      a life in The Sims 4, creating storylines in WWE 2K26, or following
      immersive narratives in Love and Deepspace, gaming continues to be
      one of my favorite creative outlets and sources of inspiration.
    </p>

  </div>

</section>
        
      </div>

    </main>
  );
}