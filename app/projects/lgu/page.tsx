import Image from "next/image";
import Link from "next/link";


export default function OneLGUPage() {
  return (
<main className="relative overflow-hidden min-h-screen bg-gradient-to-b from-[#E8D8FF] via-[#F4EDFF] to-[#EFE7FF]">
{/* Floating Decorations */}

{/* Hero */}
{/* My Role */}

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
      ONE LGU
    </h1>

    <p className="mt-5 text-2xl text-violet-700">
      Local Government Unit Digital Platform
    </p>

    <div className="mt-8 flex flex-wrap gap-3">

      <span className="px-4 py-2 rounded-full bg-violet-100 text-violet-700 font-semibold">
        UI/UX Designer
      </span>

      <span className="px-4 py-2 rounded-full bg-violet-100 text-violet-700 font-semibold">
        Figma
      </span>

      <span className="px-4 py-2 rounded-full bg-violet-100 text-violet-700 font-semibold">
        Wireframing
      </span>

      <span className="px-4 py-2 rounded-full bg-violet-100 text-violet-700 font-semibold">
        Prototyping
      </span>

      <span className="px-4 py-2 rounded-full bg-violet-100 text-violet-700 font-semibold">
        Responsive Design
      </span>

    </div>

    <p className="mt-8 text-gray-700 leading-8">
      <strong>ONE LGU</strong> is a digital platform designed to support
      local government units by providing citizens with convenient access
      to government services, announcements, public information, and
      community resources through a centralized and user-friendly
      interface.
      <br /><br />
      As the <strong>UI/UX Designer</strong> I was
      responsible for creating wireframes, designing user interfaces,
      developing interactive prototypes, and improving the overall user
      experience. The project focused on accessibility, intuitive
      navigation, responsive design, and clear information architecture
      to ensure a seamless experience for citizens across desktop and
      mobile devices.
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
        src="/images/ONE LGU.png"
        alt="ONE LGU"
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
    As the UI/UX Designer for <strong>ONE LGU</strong>, I was responsible
    for designing a user-centered digital experience that enables citizens
    to easily access local government information, services, and community
    resources. I created wireframes, designed intuitive user interfaces,
    developed interactive prototypes, and established a consistent visual
    design system throughout the platform. My goal was to ensure that the
    application remained accessible, easy to navigate, and responsive
    across desktop, tablet, and mobile devices while maintaining a clean
    and professional government-focused design.
  </p>

  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">

    {[
      "UI/UX Design",
      "Wireframing",
      "Prototyping",
      "Responsive Design",
      "Information Architecture",
      "User Research",
      "Visual Design",
      "Usability Testing",
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
          "Conducted research on citizen needs, government service workflows, and user expectations to identify key platform requirements and improve accessibility.",
      },
      {
        title: "Wireframing",
        icon: "/images/wireframe.png",
        description:
          "Created wireframes and user flows to organize information effectively and establish a clear navigation structure for government services and resources.",
      },
      {
        title: "UI Design",
        icon: "/images/ux.png",
        description:
          "Designed intuitive and visually consistent interfaces focused on clarity, accessibility, and ease of use for citizens across different age groups.",
      },
      {
        title: "Prototyping",
        icon: "/images/3d-model.png",
        description:
          "Developed interactive prototypes to visualize user interactions, validate design decisions, and gather feedback before implementation.",
      },
      {
        title: "Testing",
        icon: "/images/testing.png",
        description:
          "Performed usability testing and design reviews to identify improvements, refine user journeys, and ensure a seamless experience across devices.",
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
    Explore the user interfaces, wireframes, prototypes, and responsive
    designs created for the ONE LGU platform to improve citizen access to
    local government information and services.
  </p>

  <div className="grid md:grid-cols-2 gap-10 mt-12">

    {[
      {
        image: "/images/lgu1.png",
        title: "ONE LGU Login Portal",
        description:
          "Provides secure access to the ONE LGU Digital Ecosystem through a modern and user-friendly authentication interface.",
      },
      {
        image: "/images/lgu2.png",
        title: "Invalid Link Page",
        description:
          "Displays an error message when users access an expired, invalid, or unavailable link and provides quick navigation back to the login page.",
      },
      {
        image: "/images/lgu3.png",
        title: "Maintenance Page",
        description:
          "Informs users about scheduled system maintenance, estimated service restoration, and support contact options through a clear and user-friendly interface.",
      },
      {
        image: "/images/lgu4.png",
        title: "Set Password Page",
        description:
          "Allows users to create a secure password with validation requirements before accessing the ONE LGU Digital Ecosystem.",
      },
      {
        image: "/images/lgu5.png",
        title: "Two-Factor Authentication Setup",
        description:
          "Enhances account security by allowing users to enable two-factor authentication through QR code verification and authentication apps.",
      },
      {
        image: "/images/lgu6.png",
        title: "City Profile Setup",
        description:
          "Allows administrators to customize the city's digital identity by uploading official branding assets and configuring theme colors for the ONE LGU platform.",
      },
      {
        image: "/images/lgu7.png",
        title: "City Branding Configuration",
        description:
          "Previews the city's branding identity by displaying the uploaded logo, selected color palette, and customized interface elements before platform deployment.",
      },
      {
        image: "/images/lgu8.png",
        title: "City Admin Dashboard",
        description:
          "Provides city administrators with a centralized overview of system activity, user engagement, office operations, security logs, and key government services through an intuitive dashboard interface.",
      },
      {
        image: "/images/lgu9.png",
        title: "Multi-Office Management Dashboard",
        description:
          "Allows administrators to switch between offices, manage local government services, and monitor system activity through a centralized and organized dashboard interface.",
      },
      {
        image: "/images/lgu10.png",
        title: "PESO Analytics Dashboard",
        description:
          "Provides employment analytics, job placement statistics, applicant trends, and workforce insights to help PESO offices monitor and improve local employment programs.",
      },
      {
        image: "/images/lgu11.png",
        title: "User Management System",
        description:
          "Enables administrators to manage user accounts, monitor verification status, assign roles, and oversee system access through a centralized management interface.",
      },
      {
        image: "/images/lgu12.png",
        title: "Create User Modal",
        description:
          "Allows administrators to create new user accounts, assign system roles, and configure access permissions through a centralized user registration interface.",
      },
      {
        image: "/images/lgu13.png",
        title: "User Status Management",
        description:
          "Allows administrators to activate or deactivate user accounts, manage access permissions, and maintain system security through a centralized status management interface.",
      },
      {
        image: "/images/lgu14.png",
        title: "System Verification Logs",
        description:
          "Provides administrators with a centralized view of user verification activities, audit logs, and authentication records to monitor system security and compliance.",
      },
      {
        image: "/images/lgu15.png",
        title: "Verification Details Modal",
        description:
          "Displays citizen verification records, authentication results, and completed security checks, providing administrators with detailed identity verification information.",
      },
      {
        image: "/images/lgu16.png",
        title: "Office Management",
        description:
          "Allows administrators to manage government offices, monitor operational status, assign office heads, and maintain organizational records through a centralized management interface.",
      },
      {
        image: "/images/lgu17.png",
        title: "Office Template Selection",
        description:
          "Allows administrators to choose from predefined government office templates, streamlining office setup and ensuring consistency across the ONE LGU platform.",
      },
      {
        image: "/images/lgu18.png",
        title: "Create Office Profile",
        description:
          "Allows administrators to configure office details, upload branding assets, and assign official head accounts when creating a new government office within the ONE LGU platform.",
      },
      {
        image: "/images/lgu19.png",
        title: "System Configuration Panel",
        description:
          "Allows administrators to customize platform branding, manage city information, configure theme colors, upload logos, and adjust system appearance settings through a centralized configuration interface.",
      },
      {
        image: "/images/lgu20.png",
        title: "System Activity Logs",
        description:
          "Provides a centralized audit trail of system events, user activities, security incidents, and administrative actions to support monitoring, transparency, and accountability.",
      },
      {
        image: "/images/lgu21.png",
        title: "City Profile Management",
        description:
          "Allows administrators to manage city information, government contact details, emergency hotlines, and public profile content displayed throughout the ONE LGU platform.",
      },
      {
        image: "/images/lgu22.png",
        title: "School Management System",
        description:
          "Allows administrators to manage school records, monitor educational institutions, track compliance data, and visualize school locations through an integrated management dashboard.",
      },
      {
        image: "/images/lgu23.png",
        title: "School Registration Form",
        description:
          "Allows administrators to register new schools by entering institutional details, contact information, accreditation data, and official branding within the ONE LGU platform.",
      },
      {
        image: "/images/lgu24.png",
        title: "School Data Export",
        description:
          "Allows administrators to export school records and generate reports by selecting specific data fields and file formats for documentation and analysis.",
      },
      {
        image: "/images/lgu25.png",
        title: "Health Facilities Management",
        description:
          "Allows administrators to manage hospitals, clinics, and health centers, monitor facility status, and maintain healthcare records through a centralized management dashboard.",
      },
      {
        image: "/images/lgu26.png",
        title: "Health Facility Approval Management",
        description:
          "Allows administrators to review, approve, or reject health facility registrations while ensuring compliance and maintaining accurate healthcare records within the ONE LGU platform.",
      },
      {
        image: "/images/lgu27.png",
        title: "Health Facility Registration Form",
        description:
          "Allows administrators to register healthcare facilities by managing licensing information, medical services, staffing capacity, contact details, and official facility records within the ONE LGU platform.",
      },
      {
        image: "/images/lgu28.png",
        title: "Municipal Directory Management",
        description:
          "Provides a centralized directory of government offices and officials, allowing administrators to manage office information, contact details, locations, and operating hours across the municipality.",
      },
      {
        image: "/images/lgu29.png",
        title: "Add Municipal Office",
        description:
          "Allows administrators to register municipal offices, assign officials, manage contact information, and configure office locations and operating hours within the ONE LGU platform.",
      },
      {
        image: "/images/lgu30.png",
        title: "Voice of the People Dashboard",
        description:
          "Provides a centralized platform for managing citizen feedback, complaints, suggestions, and inquiries while tracking response times, resolution status, and public satisfaction levels.",
      },
      {
        image: "/images/lgu31.png",
        title: "Transportation Management Dashboard",
        description:
          "Allows administrators to manage transportation routes, fare structures, vehicle information, and fleet operations through a centralized transport management system.",
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
    The ONE LGU platform follows a modern government-focused design
    system centered on accessibility, trust, and digital inclusivity.
    The visual language combines clean layouts, consistent branding,
    intuitive navigation, and clear information hierarchy to help
    citizens easily access local government services, announcements,
    and community resources across all devices.
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
            color: "#1A1899",
            name: "Primary Blue",
            hex: "#1A1899",
          },
          {
            color: "#454545",
            name: "Secondary Gray",
            hex: "#454545",
          },
          {
            color: "#B26E00",
            name: "Accent Gold",
            hex: "#B26E00",
          },
          {
            color: "#22C55E",
            name: "Success Green",
            hex: "#22C55E",
          },
          {
            color: "#F8FAFC",
            name: "Background",
            hex: "#F8FAFC",
          },
          {
            color: "#111827",
            name: "Text",
            hex: "#111827",
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
      One LGU, One Barangay, One Unified Vision.
    </h1>

    <p className="text-sm text-gray-500">
      DM Sans Bold • 36px
    </p>

  </div>

  <div>

    <h2 className="text-3xl font-semibold">
      Digital Government Services
    </h2>

    <p className="text-sm text-gray-500">
      DM Sans SemiBold • 30px
    </p>

  </div>

  <div>

    <p className="text-lg">
      Clean, accessible, and easy-to-read typography designed to
      improve citizen engagement and ensure clear communication
      across government services, announcements, and public
      information platforms.
    </p>

    <p className="text-sm text-gray-500">
      DM Sans Regular • 18px
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

    {/* Component Buttons */}

    <div className="flex flex-wrap gap-4">

      <div className="px-6 py-3 rounded-xl border border-gray-300 text-gray-700 font-semibold bg-white">
        Export
      </div>

      <div className="px-6 py-3 rounded-xl border border-gray-300 text-gray-700 font-semibold bg-white">
        Print
      </div>

      <div className="px-6 py-3 rounded-xl border border-gray-300 text-gray-700 font-semibold bg-white">
        Clear Filters
      </div>

    </div>

    {/* Search Input */}

    <input
      type="text"
      placeholder="Search users, offices, or services..."
      className="
        w-full
        border
        border-gray-300
        rounded-xl
        px-5
        py-3
        focus:outline-none
        focus:ring-2
        focus:ring-indigo-500
      "
    />

    {/* Select */}

    <select
      className="
        w-full
        border
        border-gray-300
        rounded-xl
        px-5
        py-3
        focus:outline-none
        focus:ring-2
        focus:ring-indigo-500
      "
    >
      <option>Select Module</option>
      <option>User Management</option>
      <option>Office Management</option>
      <option>School Management</option>
      <option>Health Facilities</option>
      <option>Municipal Directory</option>
      <option>Transportation</option>
    </select>

    {/* Text Area */}

    <textarea
      placeholder="Enter feedback or citizen concern..."
      rows={4}
      className="
        w-full
        border
        border-gray-300
        rounded-xl
        px-5
        py-3
        resize-none
        focus:outline-none
        focus:ring-2
        focus:ring-indigo-500
      "
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
      Modern Government Services & Digital Citizen Engagement Platform
    </p>

  </div>

  <div>

    <p className="font-semibold">
      Target Users
    </p>

    <p className="text-gray-600">
      Citizens, local government employees, office administrators,
      department heads, and public service providers accessing and
      managing government services through a unified digital platform.
    </p>

  </div>

  <div>

    <p className="font-semibold">
      Design Principles
    </p>

    <div className="flex flex-wrap gap-3 mt-3">

      {[
        "Accessibility",
        "Transparency",
        "Efficiency",
        "Security",
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
    href="https://www.figma.com/proto/Um6vcE0XfWUKE6VHFL70X0/One-Lgu?node-id=1-931&p=f&t=IuZSQoqvd0dKoKGe-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1"
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