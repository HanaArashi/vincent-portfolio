import Image from "next/image";
import Link from "next/link";


export default function StudentManagementPage() {
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

    <h1 className="mt-3 text-5xl md:text-6xl font-black bg-gradient-to-r from-pink-500 via-violet-500 to-cyan-500 bg-clip-text text-transparent leading-tight">
      JLUM Website
    </h1>

    <p className="mt-5 text-2xl text-violet-700">
      Modern Business & Corporate Web Platform
    </p>

    <div className="mt-8 flex flex-wrap gap-3">

      <span className="px-4 py-2 rounded-full bg-violet-100 text-violet-700 font-semibold">
        Frontend Developer
      </span>

      <span className="px-4 py-2 rounded-full bg-violet-100 text-violet-700 font-semibold">
        UI/UX Designer
      </span>

      <span className="px-4 py-2 rounded-full bg-violet-100 text-violet-700 font-semibold">
        React.js
      </span>

      <span className="px-4 py-2 rounded-full bg-violet-100 text-violet-700 font-semibold">
        Tailwind CSS
      </span>

      <span className="px-4 py-2 rounded-full bg-violet-100 text-violet-700 font-semibold">
        Responsive Design
      </span>

    </div>

    <p className="mt-8 text-gray-700 leading-8">
      <strong>JLUM Website</strong> is a modern corporate web platform
      designed to strengthen the company’s digital presence and provide
      visitors with a seamless browsing experience. The project focused on
      creating a clean, responsive, and visually engaging interface that
      effectively showcases the company’s services, brand identity, and
      business information. As the Frontend Developer and UI/UX Designer,
      I was responsible for designing the user interface, developing the
      frontend components, ensuring responsiveness across devices, and
      enhancing the overall user experience through intuitive navigation
      and modern design principles.
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
        src="/images/JLUM.png"
        alt="JLUM Website"
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
    As the Frontend Developer and UI/UX Designer for the JLUM Website,
    I was responsible for creating the overall user experience and
    visual interface of the platform. I designed responsive layouts,
    developed interactive frontend components, and ensured a consistent
    design system across all pages. My goal was to create a modern,
    professional, and user-friendly website that effectively presents
    the company's services while providing a seamless experience across
    desktop, tablet, and mobile devices.
  </p>

  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">

    {[
      "UI/UX Design",
      "Wireframing",
      "Frontend Development",
      "Responsive Design",
      "Component Design",
      "User Experience",
      "Visual Design",
      "Quality Testing",
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

{/* ================= DEVELOPMENT PROCESS ================= */}

<section className="mt-24">

  <h2 className="text-4xl font-black text-violet-700">
    Development Process
  </h2>

  <div className="grid md:grid-cols-5 gap-6 mt-10">

    {[
      {
        title: "Research",
        icon: "/images/research.png",
        description:
          "Analyzed the company's goals, target audience, and website requirements to determine the most effective content structure and user journey.",
      },
      {
        title: "UI Design",
        icon: "/images/wireframe.png",
        description:
          "Created wireframes and visual layouts focused on clean design, intuitive navigation, and a professional brand presence.",
      },
      {
        title: "Frontend",
        icon: "/images/ux.png",
        description:
          "Developed responsive pages and reusable components while ensuring smooth interactions and consistent styling throughout the website.",
      },
      {
        title: "Optimization",
        icon: "/images/3d-model.png",
        description:
          "Improved responsiveness, accessibility, loading performance, and cross-device compatibility for a seamless user experience.",
      },
      {
        title: "Testing",
        icon: "/images/testing.png",
        description:
          "Conducted usability and responsive testing, fixed interface issues, and refined the design to ensure quality before deployment.",
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
    Explore the various pages, user interfaces, and responsive layouts
    designed and developed for the JLUM corporate website.
  </p>

  <div className="grid md:grid-cols-2 gap-10 mt-12">

    {[
      {
        image: "/images/jlum1.png",
        title: "Safety Training Homepage",
        description:
          "Showcases JLUM's safety training programs, certifications, and workplace safety solutions through a clean and responsive design.",
      },
      {
        image: "/images/jlum2.png",
        title: "OSH Training Programs",
        description:
          "Displays DOLE-accredited safety training courses with program details and enrollment options in a user-friendly card layout.",
      },
      {
        image: "/images/jlum3.png",
        title: "Training Events",
        description:
          "Highlights upcoming safety training events, seminars, and workshops with schedules and registration details.",
      },
      {
        image: "/images/jlum4.png",
        title: "Why Choose JLUM",
        description:
          "Highlights JLUM's expertise, industry-focused training programs, and commitment to delivering quality workplace safety education.",
      },
      {
        image: "/images/jlum5.png",
        title: "Website Footer & Contact Information",
        description:
          "Provides company contact details, course links, social media access, and quick navigation through a clean and organized footer design.",
      },
      {
        image: "/images/jlum6.png",
        title: "BOSH SO1 Course Page",
        description:
          "Provides detailed information about the BOSH SO1 training program, including course objectives, safety topics, and training schedules.",
      },
      {
        image: "/images/jlum7.png",
        title: "Course Benefits & Training Schedule",
        description:
          "Highlights course benefits, certification details, expert instructors, and available training schedules for participants.",
      },
      {
        image: "/images/jlum8.png",
        title: "Seminar Highlights & Feedback",
        description:
          "Showcases previous BOSH SO1 seminars, participant experiences, and training satisfaction results.",
      },
      {
        image: "/images/jlum9.png",
        title: "Training Schedule Modal",
        description:
          "Displays detailed training schedule information, course duration, learning mode, and enrollment options through an interactive modal window.",
      },
      {
        image: "/images/jlum10.png",
        title: "Training Schedule Selection",
        description:
          "Allows users to browse and select available training schedules through an interactive schedule selection modal.",
      },
      {
        image: "/images/jlum11.png",
        title: "Seminar Highlights & Participant Feedback",
        description:
          "Showcases key seminar activities, learning highlights, and participant testimonials from the BOSH SO1 training program.",
      },
      {
        image: "/images/jlum12.png",
        title: "Seminar Gallery Modal",
        description:
          "Provides an enlarged view of seminar photos through an interactive image preview modal for a better viewing experience.",
      },
      {
        image: "/images/jlum13.png",
        title: "Participant Feedback Modal",
        description:
          "Displays participant testimonials and training feedback through an interactive modal for reviewing seminar experiences and satisfaction.",
      },
      {
        image: "/images/jlum14.png",
        title: "Seminar Archive",
        description:
          "Provides access to previous BOSH SO1 seminar sessions with archived highlights, schedules, and paginated navigation for easy browsing.",
      },
      {
        image: "/images/jlum15.png",
        title: "Training Event Details",
        description:
          "Displays complete event information, schedules, location details, and enrollment options for upcoming safety training programs.",
      },
      {
        image: "/images/jlum16.png",
        title: "Why Choose JLUM",
        description:
          "Highlights JLUM's training advantages, industry-recognized certifications, participant testimonials, and customized training solutions.",
      },
      {
        image: "/images/jlum17.png",
        title: "Events Directory",
        description:
          "Displays upcoming training events with filtering, search functionality, and organized event listings for easy discovery and registration.",
      },
      {
        image: "/images/jlum18.png",
        title: "Event Listings",
        description:
          "Displays upcoming safety training events with schedules, locations, and quick access to detailed event information.",
      },
      {
        image: "/images/jlum19.png",
        title: "Extended Event Listings",
        description:
          "Showcases additional training events with schedules, locations, pagination controls, and quick access to event details and inquiries.",
      },
      {
        image: "/images/jlum20.png",
        title: "About JLUM & Company History",
        description:
          "Introduces JLUM's mission, background, and growth journey through a visual timeline showcasing key milestones and achievements.",
      },
      {
        image: "/images/jlum21.png",
        title: "Awards & Recognition",
        description:
          "Highlights JLUM's industry awards, accreditations, and key strengths that demonstrate excellence in safety training and consulting services.",
      },
      {
        image: "/images/jlum22.png",
        title: "Company Statistics & Partners",
        description:
          "Showcases JLUM's key achievements, industry accreditations, and trusted partnerships through statistics and partner organizations.",
      },
      {
        image: "/images/jlum23.png",
        title: "Contact Us Page",
        description:
          "Provides multiple contact options and an inquiry form, allowing visitors to easily connect with JLUM for training and consulting services.",
      },
      {
        image: "/images/jlum24.png",
        title: "Contact Form & Location Map",
        description:
          "Features a contact form, business information, operating hours, and an integrated map for easy communication and location access.",
      },
      {
        image: "/images/jlum25.png",
        title: "Location Map & Support Section",
        description:
          "Provides an interactive location map, office information, and quick support options to help visitors easily reach JLUM.",
      },
    ].map((screen, index) => (

      <div
        key={index}
        className="
          rounded-3xl
          bg-white
          border
          border-violet-100
          shadow-lg
          overflow-hidden
          hover:shadow-xl
          hover:-translate-y-2
          transition
          duration-300
        "
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
    The JLUM website follows a professional and trustworthy design system
    focused on safety training, corporate credibility, and user accessibility.
    The visual language combines clean layouts, consistent branding, and
    intuitive navigation to create a seamless experience for visitors seeking
    training programs, events, and company information.
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
            color: "#1E4F8A",
            name: "Primary Blue",
            hex: "#1E4F8A",
          },
          {
            color: "#60A5FA",
            name: "Light Blue",
            hex: "#60A5FA",
          },
          {
            color: "#5BAA5B",
            name: "Success Green",
            hex: "#5BAA5B",
          },
          {
            color: "#FACC15",
            name: "Accent Yellow",
            hex: "#FACC15",
          },
          {
            color: "#F8FAFC",
            name: "Background",
            hex: "#F8FAFC",
          },
          {
            color: "#1F2937",
            name: "Text",
            hex: "#1F2937",
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
      Safety Training Programs
    </h1>

    <p className="text-sm text-gray-500">
      Poppins Bold • 36px
    </p>

  </div>

  <div>

    <h2 className="text-3xl font-semibold">
      Upcoming Events
    </h2>

    <p className="text-sm text-gray-500">
      Poppins SemiBold • 30px
    </p>

  </div>

  <div>

    <p className="text-lg">
      Professional and easy-to-read typography designed to clearly
      present training programs, event schedules, certifications,
      and company information.
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

      <button className="bg-green-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-green-700 transition">
        Enroll Now
      </button>

      <button className="border border-blue-300 px-8 py-3 rounded-xl font-semibold hover:bg-blue-50 transition">
        View Details
      </button>

    </div>

    <input
      type="text"
      placeholder="Search training programs..."
      className="w-full border border-gray-300 rounded-xl px-5 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
    />

    <select
      className="w-full border border-gray-300 rounded-xl px-5 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      <option>Select Training Program</option>
      <option>BOSH SO1</option>
      <option>BOSH SO2</option>
      <option>COSH SO2</option>
      <option>LCM + HIRAC</option>
    </select>

    <textarea
      placeholder="Send us your inquiry..."
      rows={4}
      className="w-full border border-gray-300 rounded-xl px-5 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
    />

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
      Professional Corporate Training & Safety Services Website
    </p>

  </div>

  <div>

    <p className="font-semibold">
      Target Users
    </p>

    <p className="text-gray-600">
      Professionals, organizations, HR teams, safety officers, and
      businesses seeking workplace safety training and consulting services.
    </p>

  </div>

  <div>

    <p className="font-semibold">
      Design Principles
    </p>

    <div className="flex flex-wrap gap-3 mt-3">

      {[
        "Professionalism",
        "Trust",
        "Accessibility",
        "Responsiveness",
        "Usability",
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

<div className="flex flex-wrap gap-4 mt-12">

  <a
    href="https://learnatjlum.vercel.app"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block rounded-2xl bg-violet-600 text-white px-10 py-4 font-semibold shadow-lg transition hover:bg-violet-700"
  >
    Visit Website
  </a>

  <a
    href="https://www.figma.com/proto/Gt01uYVOyW8uP6wbAP1cAb/JLUM?node-id=576-1159&starting-point-node-id=576%3A1159&t=izT9R2E6JNWTssya-1"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block rounded-2xl border border-violet-300 bg-white text-violet-700 px-10 py-4 font-semibold shadow-lg transition hover:bg-violet-50"
  >
    View Figma Prototype
  </a>

</div>

</section>

</div>

</main>
);
}