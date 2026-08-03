"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";

import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

export default function PhotographyPage() {
  const albums = [
    {
      title: "Dumagat",
      location: "📍 Manila, Philippines",
      photos: [
        "/images/dumagatt1.png",
        "/images/dumagatt2.png",
        "/images/dumagatt3.png",
        "/images/dumagatt4.png",
      ],
    },
  
    {
      title: "National Museum",
      location: "📍 Manila, Philippines",
      photos: [
        "/images/national1.png",
        "/images/national2.png",
        "/images/national3.png",
        "/images/national4.png",
        "/images/national5.png",
        "/images/national6.png",
        "/images/national7.png",
        "/images/national8.png",
        "/images/national9.png",
        "/images/national10.png",
      ],
    },
  
    {
      title: "Baguio",
      location: "📍 Baguio City",
      photos: [
        "/images/cubao1.png",
        "/images/cubao2.png",
        "/images/cubao3.png",
        "/images/cubao4.png",
      ],
    },

        {
      title: "Fatima",
      location: "📍 Quezon City",
      photos: [
        "/images/fatima1.png",
        "/images/fatima2.png",
        "/images/fatima3.png",
        "/images/fatimaa4.png",
      ],
    },

    {
      title: "UP",
      location: "📍 Quezon City",
      photos: [
        "/images/upp1.png",
        "/images/up2.png",
        "/images/up3.png",
        "/images/up4.png",
        "/images/up5.png",
        "/images/up6.png",
      ],
    },

    {
      title: "Cubao",
      location: "📍 Quezon City",
      photos: [
        "/images/c1.png",
        "/images/c2.png",
        "/images/c3.png",
        "/images/c4.png",
      ],
    },

    {
      title: "Guadalupe",
      location: "📍 Makati City",
      photos: [
        "/images/guada1.png",
        "/images/guada2.png",
        "/images/guada3.png",
        "/images/guada4.png",
      ],
    },
  ];
  
  const [index, setIndex] = useState(-1);
  const [currentAlbum, setCurrentAlbum] = useState(0);

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

<section className="grid lg:grid-cols-2 gap-12 items-center mt-14">

<div>

  <span className="uppercase tracking-[4px] text-violet-500 font-semibold">
    Just For Fun
  </span>

  <h1 className="mt-3 text-5xl md:text-6xl font-black bg-gradient-to-r from-pink-500 via-violet-500 to-cyan-500 bg-clip-text text-transparent">
    Photography
  </h1>

  <p className="mt-5 text-2xl text-violet-700">
    Landscape • Café • Travel
  </p>

  <div className="mt-8 flex flex-wrap gap-3">

    <span className="px-4 py-2 rounded-full bg-violet-100 text-violet-700 font-semibold">
      Landscape
    </span>

    <span className="px-4 py-2 rounded-full bg-violet-100 text-violet-700 font-semibold">
      Café
    </span>

    <span className="px-4 py-2 rounded-full bg-violet-100 text-violet-700 font-semibold">
      Aesthetic
    </span>

  </div>

  <p className="mt-8 text-gray-700 leading-8">
    Photography is one of my favorite creative hobbies outside of web
    development and UI/UX design. I enjoy capturing landscapes,
    cozy cafés, city streets, and everyday moments that tell a story
    through light, composition, and perspective. Every photograph
    reminds me to slow down, appreciate my surroundings, and preserve
    memories from the places I visit.
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
        src="/images/photography.png"
        alt="Photography"
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
  About My Photography
</h2>

<p className="mt-6 text-gray-700 leading-8 max-w-4xl">
  Photography is one of my favorite creative outlets outside of web
  development and UI/UX design. I enjoy capturing landscapes, cozy cafés,
  architecture, and everyday moments that often go unnoticed. Through each
  photograph, I aim to preserve memories, highlight unique perspectives,
  and showcase the beauty found in both nature and urban environments.
</p>

</section>

{/* ================= PHOTO JOURNAL ================= */}
<section className="mt-24">

 {/* ================= DUMAGAT ================= */}

<div className="mt-16">

  <h3 className="text-5xl font-black text-violet-700">
    Dumagat
  </h3>

  <p className="mt-2 text-violet-600 font-medium">
    📍 Manila, Philippines
  </p>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">

  {albums[0].photos.map((photo, i) => (

<div
  key={photo}
  onClick={() => {
    setCurrentAlbum(0);
    setIndex(i);
  }}
  className="
  h-[300px]
  overflow-hidden
  rounded-[28px]
  shadow-xl
  cursor-pointer
  bg-white
"
>
  <Image
    src={photo}
    alt="Dumagat"
    width={1200}
    height={900}
    className="
    w-full
    h-full
    object-cover
    transition
    duration-300
    hover:scale-105
  "
  />
</div>

    ))}

  </div>

</div>

{/* ================= NATIONAL MUSEUM ================= */}

<div className="mt-32">

  <h3 className="text-5xl font-black text-violet-700">
    National Museum
  </h3>

  <p className="mt-2 text-violet-600 font-medium">
    📍 Manila, Philippines
  </p>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">

    {albums[1].photos.map((photo, i) => (

      <div
        key={photo}
        onClick={() => {
          setCurrentAlbum(1);
          setIndex(i);
        }}
        className="h-[300px] overflow-hidden rounded-[28px] shadow-xl cursor-pointer bg-white"
      >
        <Image
          src={photo}
          alt="National Museum"
          width={1200}
          height={900}
          className="w-full h-full object-cover transition duration-300 hover:scale-105"
        />
      </div>

    ))}

  </div>

</div>

{/* ================= Cubao Expo ================= */}

<div className="mt-32">

  <h3 className="text-5xl font-black text-violet-700">
    Cubao Expo
  </h3>

  <p className="mt-2 text-violet-600 font-medium">
    📍 Manila, Philippines
  </p>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">

    {albums[2].photos.map((photo, i) => (

      <div
        key={photo}
        onClick={() => {
          setCurrentAlbum(2);
          setIndex(i);
        }}
        className="h-[300px] overflow-hidden rounded-[28px] shadow-xl cursor-pointer bg-white"
      >
        <Image
          src={photo}
          alt="Cubao Expo"
          width={1200}
          height={900}
          className="w-full h-full object-cover transition duration-300 hover:scale-105"
        />
      </div>

    ))}

  </div>

</div>

{/* ================= Fatima ================= */}

<div className="mt-32">

  <h3 className="text-5xl font-black text-violet-700">
    Our Lady of Fatima University
  </h3>

  <p className="mt-2 text-violet-600 font-medium">
    📍 Quezon, Philippines
  </p>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">

    {albums[3].photos.map((photo, i) => (

      <div
        key={photo}
        onClick={() => {
          setCurrentAlbum(3);
          setIndex(i);
        }}
        className="h-[300px] overflow-hidden rounded-[28px] shadow-xl cursor-pointer bg-white"
      >
        <Image
          src={photo}
          alt="Fatima"
          width={1200}
          height={900}
          className="w-full h-full object-cover transition duration-300 hover:scale-105"
        />
      </div>

    ))}

  </div>

</div>

{/* ================= Fatima ================= */}

<div className="mt-32">

  <h3 className="text-5xl font-black text-violet-700">
    University of the Philippines
  </h3>

  <p className="mt-2 text-violet-600 font-medium">
    📍 Quezon, Philippines
  </p>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">

    {albums[4].photos.map((photo, i) => (

      <div
        key={photo}
        onClick={() => {
          setCurrentAlbum(4);
          setIndex(i);
        }}
        className="h-[300px] overflow-hidden rounded-[28px] shadow-xl cursor-pointer bg-white"
      >
        <Image
          src={photo}
          alt="Fatima"
          width={1200}
          height={900}
          className="w-full h-full object-cover transition duration-300 hover:scale-105"
        />
      </div>

    ))}

  </div>

</div>


{/* ================= Cubao ================= */}

<div className="mt-32">

  <h3 className="text-5xl font-black text-violet-700">
    Cubao
  </h3>

  <p className="mt-2 text-violet-600 font-medium">
    📍 Quezon, Philippines
  </p>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">

    {albums[5].photos.map((photo, i) => (

      <div
        key={photo}
        onClick={() => {
          setCurrentAlbum(5);
          setIndex(i);
        }}
        className="h-[300px] overflow-hidden rounded-[28px] shadow-xl cursor-pointer bg-white"
      >
        <Image
          src={photo}
          alt="Fatima"
          width={1200}
          height={900}
          className="w-full h-full object-cover transition duration-300 hover:scale-105"
        />
      </div>

    ))}

  </div>

</div>


{/* ================= Cubao ================= */}

<div className="mt-32">

  <h3 className="text-5xl font-black text-violet-700">
    Guadalupe
  </h3>

  <p className="mt-2 text-violet-600 font-medium">
    📍 Makati, Philippines
  </p>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">

    {albums[6].photos.map((photo, i) => (

      <div
        key={photo}
        onClick={() => {
          setCurrentAlbum(6);
          setIndex(i);
        }}
        className="h-[300px] overflow-hidden rounded-[28px] shadow-xl cursor-pointer bg-white"
      >
        <Image
          src={photo}
          alt="Fatima"
          width={1200}
          height={900}
          className="w-full h-full object-cover transition duration-300 hover:scale-105"
        />
      </div>

    ))}

  </div>

</div>

</section>

</div>

<Lightbox
  open={index >= 0}
  close={() => setIndex(-1)}
  index={index}
  slides={albums[currentAlbum].photos.map((photo) => ({
    src: photo,
  }))}
  plugins={[Zoom, Thumbnails]}
/>

</main>
);
}