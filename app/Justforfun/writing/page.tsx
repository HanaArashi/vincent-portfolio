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
              Writing
            </h1>

            <p className="mt-5 text-2xl text-violet-700">
              Novelist • Storyteller • Author
            </p>

            <div className="mt-8 flex flex-wrap gap-3">

              <span className="px-4 py-2 rounded-full bg-violet-100 text-violet-700 font-semibold">
                Wattpad
              </span>

              <span className="px-4 py-2 rounded-full bg-violet-100 text-violet-700 font-semibold">
                BL Novels
              </span>

              <span className="px-4 py-2 rounded-full bg-violet-100 text-violet-700 font-semibold">
                Hanashi
              </span>

            </div>

            <p className="mt-8 text-gray-700 leading-8">
              Beyond coding and design, writing has been one of my
              biggest passions. Under the pen name <strong>Hanashi</strong>,
              I create character-driven stories that explore love,
              friendship, personal growth, healing, and self-discovery.
              Through storytelling, I aim to create emotional experiences
              that readers can connect with and remember.
            </p>

            <a
              href="https://www.wattpad.com/user/Hanashi_184"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-8 rounded-2xl bg-violet-600 text-white px-8 py-4 font-semibold shadow-lg hover:bg-violet-700 transition"
            >
              Visit Wattpad Profile
            </a>

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
                src="/images/writing.png"
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
            About My Writing
          </h2>

          <p className="mt-6 text-gray-700 leading-8 max-w-4xl">
            My writing focuses on meaningful relationships,
            emotional development, and realistic character journeys.
            I enjoy creating stories that blend romance, drama,
            humor, and life lessons while giving readers
            memorable characters and heartfelt experiences.
          </p>

        </section>

        {/* ================= FEATURED WORK ================= */}

        <section className="mt-24">

          <h2 className="text-4xl font-black text-violet-700">
            Featured Work
          </h2>

          <div className="mt-10 bg-white rounded-[28px] shadow-lg border border-violet-100 overflow-hidden">

            <div className="grid lg:grid-cols-2">

              <Image
                src="/images/ia.png"
                alt=""
                width={800}
                height={1000}
                className="w-full h-full object-cover"
              />

              <div className="p-10">

                <h3 className="text-4xl font-black text-violet-700">
                  Innocent Affections
                </h3>

                <p className="mt-2 text-violet-500 font-semibold">
                  BL University Series #1
                </p>

                <p className="mt-6 text-gray-700 leading-8">
                  Innocent Affections follows university students
                  navigating friendship, love, misunderstandings,
                  personal struggles, and growth. Written under
                  the pen name Hanashi, it serves as the first
                  installment of the BL University Series.
                </p>

                <div className="flex flex-wrap gap-3 mt-8">

                  <span className="px-4 py-2 rounded-full bg-violet-100 text-violet-700">
                    Romance
                  </span>

                  <span className="px-4 py-2 rounded-full bg-violet-100 text-violet-700">
                    Drama
                  </span>

                  <span className="px-4 py-2 rounded-full bg-violet-100 text-violet-700">
                    College Life
                  </span>

                  <span className="px-4 py-2 rounded-full bg-violet-100 text-violet-700">
                    BL
                  </span>

                </div>

              </div>

            </div>

          </div>

        </section>

{/* ================= WRITING JOURNEY ================= */}

<section className="mt-24">

  <h2 className="text-4xl font-black text-violet-700">
    Writing Journey
  </h2>

  <div className="grid md:grid-cols-2 gap-6 mt-10">

    {[
      {
        year: "2022–2023",
        text: "Started drafting original stories and exploring character-driven storytelling through online writing platforms.",
      },
      {
        year: "2024",
        text: "Focused on proofreading, editing, and refining manuscripts to improve narrative quality and reader experience.",
      },
      {
        year: "2025",
        text: "Completed and published major writing projects while officially registering the pen name Hanashi as a writer.",
      },
      {
        year: "2026",
        text: "Reached over 101,000 reads on Innocent Affections, published the novel through Immac Publishing, and showcased the book at the Manila International Book Fair (MIBF) 2026.",
      },
    ].map((item) => (
      <div
        key={item.year}
        className="bg-white rounded-3xl p-8 border border-violet-100 shadow-lg"
      >
        <h3 className="text-3xl font-black text-violet-700">
          {item.year}
        </h3>

        <p className="mt-3 text-gray-700 leading-7">
          {item.text}
        </p>

      </div>
    ))}

  </div>

</section>

        {/* ================= WRITING PHILOSOPHY ================= */}

<section className="mt-24">

<div className="bg-white rounded-[28px] p-10 shadow-lg border border-violet-100">

  <h2 className="text-4xl font-black text-violet-700">
    Writing Philosophy
  </h2>

  <blockquote className="mt-8 text-3xl font-bold italic text-violet-600 leading-relaxed text-center">
    “Stand firm through the storm
    <br />
    and watch the flowers bloom.”
  </blockquote>

  <p className="mt-4 text-center text-xl text-violet-500 font-medium">
    — Hanashi
  </p>

  <p className="mt-8 text-gray-700 leading-8">
    This quote reflects the core message behind many of my stories:
    perseverance, growth, healing, and hope. Through writing, I aim to
    create narratives that remind readers that even during difficult
    moments, meaningful growth can emerge. Every story I write is an
    opportunity to inspire, comfort, and connect with others through
    shared emotions and experiences.
  </p>

</div>

</section>
        {/* ================= CTA ================= */}

        <section className="mt-24 mb-12">

          <div className="bg-white rounded-[28px] p-10 shadow-lg border border-violet-100 text-center">

            <h2 className="text-4xl font-black text-violet-700">
              Read My Stories
            </h2>

            <p className="mt-4 text-gray-700">
              Follow my journey as a writer and discover my published works.
            </p>

            <a
              href="https://www.wattpad.com/user/Hanashi_184"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-8 rounded-2xl bg-violet-600 text-white px-10 py-4 font-semibold shadow-lg hover:bg-violet-700 transition"
            >
              Read on Wattpad
            </a>

          </div>

        </section>

      </div>

    </main>
  );
}