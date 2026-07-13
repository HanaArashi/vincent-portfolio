import Image from "next/image";
import Link from "next/link";


export default function SoraeaPage() {
  return (
<main className="relative overflow-hidden min-h-screen bg-gradient-to-b from-[#E8D8FF] via-[#F4EDFF] to-[#EFE7FF]">
{/* Floating Decorations */}

{/* Hero */}
<Image
  src="/images/flower.png"
  alt=""
  width={55}
  height={55}
  className="absolute top-20 left-[6%] rotate-[-12deg] opacity-90 animate-float pointer-events-none"
/>

<Image
  src="/images/heart pixel.png"
  alt=""
  width={48}
  height={48}
  className="absolute top-[540px] right-[8%] rotate-[18deg] animate-float delay-300 pointer-events-none"
/>

{/* My Role */}
<Image
  src="/images/clover.png"
  alt=""
  width={70}
  height={70}
  className="absolute top-[820px] right-[10%] rotate-[15deg] animate-float delay-200 pointer-events-none"
/>

{/* Design Process */}
<Image
  src="/images/butterfly.png"
  alt=""
  width={65}
  height={65}
  className="absolute top-[1600px] right-[10%] rotate-[-18deg] animate-float pointer-events-none"
/>


<Image
  src="/images/heart.png"
  alt=""
  width={85}
  height={85}
  className="absolute bottom-28 right-[8%] rotate-[25deg] animate-float pointer-events-none"
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
      SORAEA
    </h1>

    <p className="mt-5 text-2xl text-violet-700">
      AI-Powered Psoriasis Detection System
    </p>

    <div className="mt-8 flex flex-wrap gap-3">

      <span className="px-4 py-2 rounded-full bg-violet-100 text-violet-700 font-semibold">
        UI/UX Designer
      </span>

      <span className="px-4 py-2 rounded-full bg-violet-100 text-violet-700 font-semibold">
        Researcher
      </span>

      <span className="px-4 py-2 rounded-full bg-violet-100 text-violet-700 font-semibold">
        Figma
      </span>

      <span className="px-4 py-2 rounded-full bg-violet-100 text-violet-700 font-semibold">
        Front end Developer
      </span>

    </div>

    <p className="mt-8 text-gray-700 leading-8">
      <strong>SORAEA</strong> (Smart Optical Recognition and Analysis using
      EfficientNet Assessment) is a web-based healthcare application designed
      to assist in the early detection and severity assessment of psoriasis.
      Using the EfficientNet deep learning model, the system analyzes uploaded
      skin images and generates AI-assisted diagnostic results, helping
      healthcare professionals and patients obtain fast, accurate, and
      accessible preliminary assessments through an intuitive user interface.
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
        src="/images/SORAEA.png"
        alt="SORAEA"
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

  <p className="mt-4 text-gray-700 max-w-3xl leading-8">
    As one of the proponents of the capstone project, I was primarily
    responsible for the UI/UX design, frontend development, and project
    documentation. I designed the user interface, developed the frontend of
    the web application, created interactive prototypes, and contributed to
    the research, system documentation, and thesis presentation.
  </p>

  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">

    {[
      "Research",
      "UI/UX Design",
      "Frontend Development",
      "Wireframing",
      "Interactive Prototype",
      "Responsive Design",
      "Documentation",
      "Capstone Defense",
    ].map((item) => (

      <div
        key={item}
        className="rounded-2xl bg-white p-6 shadow-lg border border-violet-100 hover:-translate-y-1 hover:shadow-xl transition duration-300"
      >
        <p className="font-semibold text-violet-700 text-center">
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
          "Conducted research on psoriasis, AI-assisted diagnosis, and user requirements for healthcare applications.",
      },
      {
        title: "Wireframes",
        icon: "/images/wireframe.png",
        description:
          "Created low-fidelity wireframes to establish the application's layout and user flow.",
      },
      {
        title: "UI Design",
        icon: "/images/ux.png",
        description:
          "Designed a clean, accessible, and responsive interface tailored for patients and healthcare professionals.",
      },
      {
        title: "Frontend",
        icon: "/images/3d-model.png",
        description:
          "Developed the frontend interface and integrated the UI with the system's core features.",
      },
      {
        title: "Testing",
        icon: "/images/testing.png",
        description:
          "Evaluated usability, refined the interface, and prepared the final version for capstone presentation.",
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


{/* ================= SCREEN GALLERY ================= */}

<section className="mt-24">

  <h2 className="text-4xl font-black text-violet-700">
    Interface Gallery
  </h2>

  <p className="mt-4 text-gray-700">
    Explore the different interfaces designed for the SORAEA web application.
  </p>

  <div className="grid md:grid-cols-2 gap-10 mt-12">

    {[
      {
        image: "/images/soraea1!.png",
        title: "Landing Page",
        description:
          "Introduces SORAEA and provides users with quick access to sign in or create a new account.",
      },
      {
        image: "/images/soraea2!.png",
        title: "Login",
        description:
          "Allows registered users to securely access the SORAEA system using their account credentials.",
      },
      {
        image: "/images/soraea3!.png",
        title: "Create Account",
        description:
          "Enables new users to register and create an account to access the psoriasis detection platform.",
      },
      {
        image: "/images/soraea4!.png",
        title: "Reset Password",
        description:
          "Allows users to request a password reset if they forget their login credentials.",
      },
      {
        image: "/images/soraea5!.png",
        title: "Patient Symptoms",
        description:
          "Displays recorded patient symptoms, confidence scores, analysis results, and provides quick access to detailed reports.",
      },
      {
        image: "/images/soraea6!.png",
        title: "Patient Cases",
        description:
          "Displays a list of registered patients, allowing doctors to quickly access individual medical records and analysis history.",
      },
      {
        image: "/images/soraea7!.png",
        title: "Patient Details",
        description:
          "Shows patient information, medical responses, and previous AI analyses in one organized dashboard.",
      },
      {
        image: "/images/soraea8!.png",
        title: "Patient Analysis",
        description:
          "View patient details, questionnaire responses, and AI-generated diagnosis results with confidence and severity scores.",
      },
      {
        image: "/images/soraea9!.png",
        title: "Source Suggestions",
        description:
          "Upload references or browse trusted sources for psoriasis information.",
      },
      {
        image: "/images/soraea10!.png",
        title: "Profile Management",
        description:
          "View and manage your account information and security settings.",
      },
      {
        image: "/images/soraea11!.png",
        title: "Create Schedule",
        description:
          "Set the date, time, and type for a new appointment schedule.",
      },
      {
        image: "/images/soraea12!.png",
        title: "Doctor Profile",
        description:
          "View and update your professional profile and account information.",
      },
      {
        image: "/images/soraea13!.png",
        title: "Account Settings",
        description:
          "Manage your account details, password, and support options.",
      },
      {
        image: "/images/soraea14!.png",
        title: "Patient Dashboard",
        description:
          "View your analyses, appointments, and recent activity at a glance.",
      },
      {
        image: "/images/soraea15.png",
        title: "Analysis Results",
        description:
          "View your uploaded analyses and diagnosis history.",
      },
      {
        image: "/images/soraea16.png",
        title: "My Appointments",
        description:
          "View and track your upcoming, completed, and canceled appointments.",
      },
      {
        image: "/images/soraea17.png",
        title: "Upload Analysis",
        description:
          "Upload your skin images to begin AI-powered psoriasis analysis.",
      },
      {
        image: "/images/soraea18.png",
        title: "Image Validation",
        description:
          "Review validated images before starting the AI analysis.",
      },

      {
        image: "/images/soraea20.png",
        title: "Book Appointment",
        description:
          "Select an available schedule and book an appointment with your dermatologist.",
      },
      {
        image: "/images/soraea21.png",
        title: "User Profile",
        description:
          "View and manage your personal information and account details.",
      },
      {
        image: "/images/soraea22.png",
        title: "Account Settings",
        description:
          "Manage your account information, password, and support options.",
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
    SORAEA follows a modern healthcare design system that emphasizes
    accessibility, usability, and consistency while providing a seamless
    experience for dermatologists and patients.
  </p>

  <div className="grid lg:grid-cols-2 gap-8 mt-12">

    {/* ================= Color Palette ================= */}

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
          {
            color: "#0B1220",
            name: "Background",
            hex: "#0B1220",
          },
          {
            color: "#1A2332",
            name: "Surface",
            hex: "#1A2332",
          },
          {
            color: "#3B82F6",
            name: "Primary Action",
            hex: "#3B82F6",
          },
          {
            color: "#22C55E",
            name: "Success",
            hex: "#22C55E",
          },
          {
            color: "#FFFFFF",
            name: "Text",
            hex: "#FFFFFF",
          },
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

    {/* ================= Typography ================= */}

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

          <h1 className="text-4xl font-bold">
            Heading 1
          </h1>

          <p className="text-sm text-gray-500">
            Poppins Bold • 36px
          </p>

        </div>

        <div>

          <h2 className="text-3xl font-semibold">
            Heading 2
          </h2>

          <p className="text-sm text-gray-500">
            Poppins SemiBold • 30px
          </p>

        </div>

        <div>

          <p className="text-lg">
            Clear and readable text for medical dashboards and AI reports.
          </p>

          <p className="text-sm text-gray-500">
            Poppins Regular • 18px
          </p>

        </div>

      </div>

    </div>

    {/* ================= Components ================= */}

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

        <div className="flex gap-4 flex-wrap">

          <button className="bg-violet-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-violet-700 transition">
            Analyze Image
          </button>

          <button className="border border-violet-300 px-8 py-3 rounded-xl font-semibold hover:bg-violet-50 transition">
            View Report
          </button>

        </div>

        <input
          type="text"
          placeholder="Search patient..."
          className="w-full border border-gray-300 rounded-xl px-5 py-3 focus:outline-none focus:ring-2 focus:ring-violet-500"
        />

        <select
          className="w-full border border-gray-300 rounded-xl px-5 py-3 focus:outline-none focus:ring-2 focus:ring-violet-500"
        >
          <option>Select Severity</option>
          <option>Mild</option>
          <option>Moderate</option>
          <option>Severe</option>
        </select>

      </div>

    </div>

    {/* ================= Style Guide ================= */}

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

          <p className="font-semibold">
            Design Style
          </p>

          <p className="text-gray-600">
            Modern AI Healthcare Dashboard
          </p>

        </div>

        <div>

          <p className="font-semibold">
            Target Users
          </p>

          <p className="text-gray-600">
            Dermatologists, healthcare professionals, and patients.
          </p>

        </div>

        <div>

          <p className="font-semibold">
            Design Principles
          </p>

          <div className="flex flex-wrap gap-3 mt-3">

            {[
              "Accessibility",
              "Consistency",
              "Clarity",
              "Trust",
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
    href="https://soraea-dev.onrender.com/"
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