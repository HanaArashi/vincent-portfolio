import Image from "next/image";
import Link from "next/link";


export default function SweetDazzlePage() {
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
      SweetDazzle
    </h1>

    <p className="mt-5 text-2xl text-violet-700">
      Bakery E-Commerce & Online Ordering Platform
    </p>

    <div className="mt-8 flex flex-wrap gap-3">

      <span className="px-4 py-2 rounded-full bg-violet-100 text-violet-700 font-semibold">
        Frontend Developer
      </span>

      <span className="px-4 py-2 rounded-full bg-violet-100 text-violet-700 font-semibold">
        UI/UX Designer
      </span>

      <span className="px-4 py-2 rounded-full bg-violet-100 text-violet-700 font-semibold">
        React
      </span>

      <span className="px-4 py-2 rounded-full bg-violet-100 text-violet-700 font-semibold">
        Tailwind CSS
      </span>

      <span className="px-4 py-2 rounded-full bg-violet-100 text-violet-700 font-semibold">
        Firebase
      </span>

    </div>

    <p className="mt-8 text-gray-700 leading-8">
      <strong>SweetDazzle</strong> is a modern bakery e-commerce platform
      designed to showcase cakes, pastries, and specialty desserts through
      a visually engaging online experience. The website enables customers
      to browse products, explore featured collections, view detailed
      product information, and place orders conveniently. Built with a
      responsive and user-friendly interface, SweetDazzle helps businesses
      strengthen their online presence while providing customers with a
      seamless and delightful shopping experience.
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
        src="/images/Sweetdazzle.png"
        alt="SweetDazzle"
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
    As the UI/UX Designer and Frontend Developer for SweetDazzle, I was
    responsible for designing the overall user experience and developing the
    website's frontend interface. I created user-friendly layouts, designed
    visually appealing product pages, and implemented responsive components
    to ensure a seamless browsing experience across different devices. My
    focus was on creating an engaging and intuitive platform that effectively
    showcases bakery products while providing a smooth and enjoyable customer
    journey.
  </p>

  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">

    {[
      "UI/UX Design",
      "Wireframing",
      "Frontend Development",
      "Responsive Design",
      "User Research",
      "Prototyping",
      "Design System",
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
          "Conducted research on bakery websites, customer preferences, and e-commerce trends to identify the features and user experience needed for the platform.",
      },
      {
        title: "UI Design",
        icon: "/images/wireframe.png",
        description:
          "Created wireframes, layouts, and visual designs focused on showcasing products effectively while maintaining a clean and engaging user interface.",
      },
      {
        title: "Frontend Development",
        icon: "/images/ux.png",
        description:
          "Developed responsive pages and interactive user interfaces using React and Tailwind CSS to ensure a seamless browsing experience across devices.",
      },
      {
        title: "Optimization",
        icon: "/images/3d-model.png",
        description:
          "Improved navigation, product presentation, and overall usability while maintaining consistent branding and visual hierarchy throughout the website.",
      },
      {
        title: "Testing",
        icon: "/images/testing.png",
        description:
          "Tested responsiveness, functionality, and user interactions to ensure a smooth experience and resolve any interface-related issues before deployment.",
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
    Explore the different interfaces designed for the SweetDazzle web application.
  </p>

  <div className="grid md:grid-cols-2 gap-10 mt-12">

    {[
      {
        image: "/images/sweetdazzle1.png",
        title: "SweetDazzle",
        description: "Web platform for browsing bakery products and placing online orders."
      },
      {
        image: "/images/sweetdazzle2.png",
        title: "Custom Cake Orders & Customer Feedback",
        description: "Allows customers to request personalized cake designs and share feedback to help improve their SweetDazzle experience."
      },
      {
        image: "/images/sweetdazzle3.png",
        title: "Customer Testimonials",
        description: "Displays customer reviews and feedback highlighting their experiences with SweetDazzle's products, custom cakes, and customer service."
      },
      {
        image: "/images/sweetdazzle4.png",
        title: "Visit Our Shop",
        description: "Provides information about SweetDazzle's physical bakery location, inviting customers to visit and explore a wide selection of cakes, pastries, and custom creations."
      },
      {
        image: "/images/sweetdazzle6.png",
        title: "Footer & Contact Information",
        description: "Provides essential contact details and social media links, allowing customers to connect with SweetDazzle, make inquiries, and stay updated with the latest products and promotions."
      },
      {
        image: "/images/sweetdazzle7.png",
        title: "Product Catalog Page",
        description: "Displays SweetDazzle's collection of freshly baked cakes and pastries, allowing customers to browse available products and explore different dessert selections."
      },
      {
        image: "/images/sweetdazzle8.png",
        title: "Product Catalog & Category Filtering",
        description: "Allows customers to browse bakery products by category, search for specific items, sort products, and conveniently add desserts to their basket for purchase."
      },
      {
        image: "/images/sweetdazzle9.png",
        title: "Customer Reviews",
        description: "Displays testimonials and feedback from customers, showcasing their experiences with SweetDazzle's products, custom cakes, and customer service."
      },
      {
        image: "/images/sweetdazzle10.png",
        title: "Product Details & Shopping Cart",
        description: "Displays detailed product information, quantity controls, and add-to-basket functionality, allowing customers to customize their order before purchase."
      },
      {
        image: "/images/sweetdazzle11.png",
        title: "Product Details with Customer Reviews",
        description: "Provides detailed product information, quantity selection, and customer reviews to help users make informed purchasing decisions before adding items to their basket."
      },
      {
        image: "/images/sweetdazzle12.png",
        title: "Add to Basket Confirmation",
        description: "Displays a confirmation message after a customer successfully adds a product to their basket, providing immediate feedback and improving the shopping experience."
      },
      {
        image: "/images/sweetdazzle13.png",
        title: "Shopping Basket",
        description: "Allows customers to review selected products, adjust quantities, remove items, view the total cost, and proceed to checkout for order completion."
      },
      {
        image: "/images/sweetdazzle14.png",
        title: "Checkout & Order Scheduling",
        description: "Allows customers to review their order, select a preferred payment method, choose a pickup or delivery schedule, and provide contact information before completing their purchase."
      },
      {
        image: "/images/sweetdazzle15.png",
        title: "Receiving Preferences & Order Confirmation",
        description: "Allows customers to choose between pickup or delivery, provide location details, review order information, and finalize their purchase through the checkout process."
      },
      {
        image: "/images/sweetdazzle16.png",
        title: "Shopping Basket",
        description: "Allows customers to review selected products, update quantities, remove items, view order totals, and proceed to checkout for a seamless purchasing experience."
      },
      {
        image: "/images/sweetdazzle17.png",
        title: "Order Tracking",
        description: "Allows customers to monitor the status of their orders in real time, from preparation to pickup, delivery, or completion."
      },
      {
        image: "/images/sweetdazzle18.png",
        title: "Order History",
        description: "Displays completed customer orders, allowing users to review previous purchases, order details, and fulfillment status for future reference."
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
    SweetDazzle follows a warm and visually inviting design system that
    reflects the bakery's brand identity. The interface combines soft colors,
    clean layouts, and intuitive navigation to create an enjoyable browsing
    and ordering experience. Consistent visual elements help customers easily
    discover products, customize orders, and complete purchases with ease.
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
        color: "#5A4568",
        name: "Primary Purple",
        hex: "#5A4568",
      },
      {
        color: "#F4D7DC",
        name: "Soft Pink",
        hex: "#F4D7DC",
      },
      {
        color: "#FFF8F4",
        name: "Cream",
        hex: "#FFF8F4",
      },
      {
        color: "#D4A373",
        name: "Accent Gold",
        hex: "#D4A373",
      },
      {
        color: "#FAF7F8",
        name: "Background",
        hex: "#FAF7F8",
      },
      {
        color: "#2D2435",
        name: "Text",
        hex: "#2D2435",
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
      SweetDazzle
    </h1>

    <p className="text-sm text-gray-500">
      Josefin Sans Bold • 36px
    </p>

  </div>

  <div>

    <h2 className="text-3xl font-semibold">
      Freshly Baked Treats
    </h2>

    <p className="text-sm text-gray-500">
      Josefin Sans SemiBold • 30px
    </p>

  </div>

  <div>

    <p className="text-lg">
      Elegant and readable typography designed to showcase bakery
      products, highlight promotions, and provide a delightful
      online shopping experience.
    </p>

    <p className="text-sm text-gray-500">
      Josefin Sans Regular • 18px
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

    <button className="border border-[#5A4568] px-8 py-3 rounded-xl font-semibold hover:bg-violet-50 transition">
    Add to Basket
      </button>

      <button className="border border-[#5A4568] px-8 py-3 rounded-xl font-semibold hover:bg-violet-50 transition">
        Check Out
      </button>

    </div>

    <input
      type="text"
      placeholder="Search products..."
      className="w-full border border-gray-300 rounded-xl px-5 py-3 focus:outline-none focus:ring-2 focus:ring-violet-500"
    />

    <select
      className="w-full border border-gray-300 rounded-xl px-5 py-3 focus:outline-none focus:ring-2 focus:ring-violet-500"
    >
      <option>Select Category</option>
      <option>Cakes</option>
      <option>Cupcakes</option>
      <option>Cookies</option>
      <option>Brownies</option>
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
      Modern Bakery E-Commerce Website
    </p>

  </div>

  <div>

    <p className="font-semibold">
      Target Users
    </p>

    <p className="text-gray-600">
      Customers looking to browse, customize, and order bakery products online.
    </p>

  </div>

  <div>

    <p className="font-semibold">
      Design Principles
    </p>

    <div className="flex flex-wrap gap-3 mt-3">

      {[
        "Visual Appeal",
        "Usability",
        "Consistency",
        "Responsiveness",
        "User Experience",
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
    href="https://www.figma.com/proto/0pfFXol2f2ni5LCBrQ8jEJ/Sweet-Dazzle?node-id=1-950&t=esZamzvHxTLp8c3o-1"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block rounded-2xl bg-violet-600 text-white px-10 py-4 font-semibold shadow-lg transition hover:bg-violet-700"
  >
    View Figma Prototype
  </a>

</section>

      </div>

    </main>
  );
}