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

    <h1 className="mt-3 text-5xl md:text-6xl font-black bg-gradient-to-r from-pink-500 via-violet-500 to-cyan-500 bg-clip-text text-transparent leading-tight">
      Student Management System
    </h1>

    <p className="mt-5 text-2xl text-violet-700">
      Web-Based Student Records & Grade Management Platform
    </p>

    <div className="mt-8 flex flex-wrap gap-3">

      <span className="px-4 py-2 rounded-full bg-violet-100 text-violet-700 font-semibold">
        Full Stack Developer
      </span>

      <span className="px-4 py-2 rounded-full bg-violet-100 text-violet-700 font-semibold">
        UI/UX Designer
      </span>

      <span className="px-4 py-2 rounded-full bg-violet-100 text-violet-700 font-semibold">
        Flask
      </span>

      <span className="px-4 py-2 rounded-full bg-violet-100 text-violet-700 font-semibold">
        MySQL
      </span>

      <span className="px-4 py-2 rounded-full bg-violet-100 text-violet-700 font-semibold">
        Bootstrap
      </span>

    </div>

    <p className="mt-8 text-gray-700 leading-8">
      <strong>Student Management System</strong> is a web-based academic
      management platform designed to simplify the administration of student
      information, grades, and class sections. The system allows administrators
      to securely manage student records through an intuitive dashboard with
      powerful CRUD functionality, search features, and automated grade
      computation. Built using Flask and MySQL, it provides an efficient,
      organized, and user-friendly solution for managing school data while
      reducing manual paperwork and improving data accuracy.
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
        src="/images/STMM.png"
        alt="Student Management System"
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
    I independently designed and developed the Student Management System from
    planning to implementation. I was responsible for designing the user
    interface, developing both the frontend and backend, creating the database
    structure, implementing authentication, and building CRUD functionality for
    managing students, sections, and grades. The project focused on creating an
    intuitive, efficient, and organized platform for academic record management.
  </p>

  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">

    {[
      "UI/UX Design",
      "Frontend Development",
      "Backend Development",
      "Database Design",
      "Authentication",
      "CRUD Operations",
      "Responsive Design",
      "Testing",
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
        title: "Planning",
        icon: "/images/research.png",
        description:
          "Defined the system requirements, identified user needs, and planned the database structure and application workflow.",
      },
      {
        title: "UI Design",
        icon: "/images/wireframe.png",
        description:
          "Designed a clean and user-friendly interface for administrators to efficiently manage students and academic records.",
      },
      {
        title: "Development",
        icon: "/images/ux.png",
        description:
          "Built the web application using Flask, Bootstrap, HTML, CSS, JavaScript, and MySQL while implementing authentication and CRUD operations.",
      },
      {
        title: "Database",
        icon: "/images/3d-model.png",
        description:
          "Designed relational database tables for accounts, students, sections, and grades to ensure accurate and organized data management.",
      },
      {
        title: "Testing",
        icon: "/images/testing.png",
        description:
          "Tested the system's functionality, validated user inputs, resolved bugs, and improved the overall user experience before deployment.",
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
        image: "/images/sms1.png",
        title: "Admin Login",
        description: "Securely access the Student Management System using your administrator credentials.",
      },
      {
        image: "/images/sms2.png",
        title: "Create Account",
        description: "Create a new administrator account to access the Student Management System.",
      },
      {
        image: "/images/sms3.png",
        title: "Password Validation",
        description: "Displays an error message when the password and confirmation password do not match.",
      },
      {
        image: "/images/sms4.png",
        title: "Reset Password",
        description: "Enter your registered email address to receive a verification code for password recovery.",
      },
      {
        image: "/images/sms5.png",
        title: "Verify Code",
        description: "Enter the verification code sent to your registered email to continue the password reset process.",
      },
      {
        image: "/images/sms6.png",
        title: "Password Reset Email",
        description: "An automated email containing a verification code used to securely verify a user's identity during the password recovery process..",
      },
      {
        image: "/images/sms7.png",
        title: "Create New Password",
        description: "Set a new password to securely regain access to your Student Management System account.",
      },
      {
        image: "/images/sms8.png",
        title: "Main Dashboard Overview",
        description: "Access real-time academic insights, manage student enrollments, and track class performance at a glance.",
      },
      {
        image: "/images/sms9.png",
        title: "Quick Administrative Actions",
        description: "Easily register new students, navigate entire student rosters, or configure new class sections directly from your dashboard.",
      },
      {
        image: "/images/sms10.png",
        title: "Section Actions Focus",
        description: "Quickly view comprehensive student rosters or update specific class section details directly from the interactive cards on your dashboard.",
      },
      {
        image: "/images/sms11.png",
        title: "Section Performance & Reporting",
        description: "Analyze detailed subject-wise grades for specific sections, search for individual student records, and generate exportable reports in Excel or PDF formats for administrative use.",
      },
      {
        image: "/images/sms12.png",
        title: "Student Record Search Focus",
        description: "Quickly locate specific student profiles and academic records within a section by searching for their unique student number or name.",
      },
      {
        image: "/images/sms13.png",
        title: "Report Export Focus",
        description: "Download comprehensive student performance data directly to your device as an Excel spreadsheet for easy offline sharing, analysis, and backup.",
      },
      {
        image: "/images/sms14.png",
        title: "Excel Data View Focus",
        description: "Open your downloaded spreadsheet in Microsoft Excel to review complete class lists, individual student grades, and subject-specific metrics offline.",
      },
      {
        image: "/images/sms15.png",
        title: "PDF Export Focus",
        description: "Generate and download clean, print-ready PDF summaries of class performance and grades for official documentation, easy emailing, and offline sharing.",
      },
      {
        image: "/images/sms16.png",
        title: "PDF Document Review Focus",
        description: "Review structured, print-ready class lists and student grade sheets directly in your PDF viewer for easy reading, seamless printing, or local offline reference.",
      },
      {
        image: "/images/sms17.png",
        title: "Section Customization Focus",
        description: "Update specific class section details by renaming the cohort, customizing its card color for visual organization, or managing individual student records assigned to the section.",
      },
      {
        image: "/images/sms18.png",
        title: "Student Records Management",
        description: "Displays student records, subject grades, and computed averages with options to add, update, and manage student information.",
      },
      {
        image: "/images/sms19.png",
        title: "Update Student Record",
        description: "Allows administrators to edit and update student information and grades while displaying confirmation messages for successful changes.",
      },
      {
        image: "/images/sms20.png",
        title: "Delete Student Confirmation",
        description: "Prompts administrators to confirm the permanent deletion of a student record before removing it from the system.",
      },
      {
        image: "/images/sms21.png",
        title: "Add New Student",
        description: "Allows administrators to enter student information and subject grades to create a new student record within a selected section.",
      },
      {
        image: "/images/sms22.png",
        title: "Add Student",
        description: "Allows administrators to assign a student to a section and record their personal information and academic grades.",
      },
      {
        image: "/images/sms23.png",
        title: "View Students",
        description: "Displays all available sections and allows administrators to access and manage student records within a selected section.",
      },
      {
        image: "/images/sms24.png",
        title: "Add New Section",
        description: "Allows administrators to create and organize new class sections for managing student records and academic data.",
      },
    
      {
        image: "/images/sms26.png",
        title: "Administrator Profile",
        description: "Displays administrator account details, including username, role, and registered email information.",
      },
      {
        image: "/images/sms27.png",
        title: "System Information",
        description: "Provides a summary of key system statistics, including total students, active sections, and recent administrator activity.",
      },
      {
        image: "/images/sms28.png",
        title: "Change Password",
        description: "Allows administrators to securely update their account password by verifying their current credentials and setting a new password.",
      },
      {
        image: "/images/sms29.png",
        title: "Dark Mode Dashboard",
        description: "Provides a dark-themed overview of student statistics, academic performance, and section management for improved visibility and user experience.",
      },
      {
        image: "/images/sms30.png",
        title: "Dark Mode Student Performance Report",
        description: "Displays student grades, academic performance, and pass/fail status in a dark-themed interface with search and report export functionality.",
      },
      {
        image: "/images/sms31.png",
        title: "Dark Mode Add Student",
        description: "Allows administrators to add new student records and assign them to a section through a dark-themed interface with grade input fields.",
      },
      {
        image: "/images/sms32.png",
        title: "Dark Mode View Students",
        description: "Displays all available class sections in a dark-themed interface, allowing administrators to access and manage student records by section.",
      },
      {
        image: "/images/sms33.png",
        title: "Dark Mode Administrator Profile",
        description: "Displays administrator account information and profile details through a dark-themed interface for account management and system access.",
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
    The Student Management System follows a clean and user-friendly design
    system focused on efficient student record management, academic
    monitoring, and administrative productivity. The interface emphasizes
    clarity, accessibility, and consistency to help administrators perform
    tasks quickly and effectively.
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
            color: "#1D4ED8",
            name: "Primary Blue",
            hex: "#1D4ED8",
          },
          {
            color: "#2563EB",
            name: "Secondary Blue",
            hex: "#2563EB",
          },
          {
            color: "#22C55E",
            name: "Success",
            hex: "#22C55E",
          },
          {
            color: "#EF4444",
            name: "Danger",
            hex: "#EF4444",
          },
          {
            color: "#F8FAFC",
            name: "Background",
            hex: "#F8FAFC",
          },
          {
            color: "#1E293B",
            name: "Text",
            hex: "#1E293B",
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
      Dashboard Heading
    </h1>

    <p className="text-sm text-gray-500">
      Poppins Bold • 36px
    </p>

  </div>

  <div>

    <h2 className="text-3xl font-semibold">
      Section Title
    </h2>

    <p className="text-sm text-gray-500">
      Poppins SemiBold • 30px
    </p>

  </div>

  <div>

    <p className="text-lg">
      Clean and readable typography designed for student records,
      academic reports, and administrative dashboards.
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

      <button className="bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-blue-700 transition">
        Add Student
      </button>

      <button className="border border-blue-300 px-8 py-3 rounded-xl font-semibold hover:bg-blue-50 transition">
        View Records
      </button>

    </div>

    <input
      type="text"
      placeholder="Search student..."
      className="w-full border border-gray-300 rounded-xl px-5 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
    />

    <select
      className="w-full border border-gray-300 rounded-xl px-5 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      <option>Select Section</option>
      <option>Grade 7 Bulgaria</option>
      <option>Grade 8 France</option>
      <option>Grade 9 Cameroon</option>
      <option>Grade 10 Georgia</option>
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
      Modern Student Information Management Dashboard
    </p>

  </div>

  <div>

    <p className="font-semibold">
      Target Users
    </p>

    <p className="text-gray-600">
      School administrators, teachers, and academic staff.
    </p>

  </div>

  <div>

    <p className="font-semibold">
      Design Principles
    </p>

    <div className="flex flex-wrap gap-3 mt-3">

      {[
        "Usability",
        "Consistency",
        "Efficiency",
        "Accessibility",
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
    href="https://github.com/HanaArashi/student-management-system"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block rounded-2xl bg-violet-600 text-white px-10 py-4 font-semibold shadow-lg transition hover:bg-violet-700"
  >
    View Source Code
  </a>

</section>

      </div>

    </main>
  );
}