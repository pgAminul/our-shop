"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import {
  FaStar,
  FaBolt,
  FaTruck,
  FaShield,
  FaArrowTrendUp,
} from "react-icons/fa6";
import { HiArrowRight } from "react-icons/hi2";

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const productRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      tl.fromTo(
        badgeRef.current,
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
        }
      )
        .fromTo(
          ".hero-title-line",
          {
            opacity: 0,
            y: 40,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.12,
          },
          "-=0.3"
        )
        .fromTo(
          ".hero-description",
          {
            opacity: 0,
            y: 25,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
          },
          "-=0.4"
        )
        .fromTo(
          ".hero-actions",
          {
            opacity: 0,
            y: 25,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
          },
          "-=0.4"
        )
        .fromTo(
          ".hero-proof",
          {
            opacity: 0,
            y: 20,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
          },
          "-=0.3"
        )
        .fromTo(
          productRef.current,
          {
            opacity: 0,
            x: 100,
            scale: 0.85,
            rotateY: -15,
          },
          {
            opacity: 1,
            x: 0,
            scale: 1,
            rotateY: 0,
            duration: 1.2,
            ease: "power4.out",
          },
          "-=0.9"
        );

      // Floating product animation
      gsap.to(productRef.current, {
        y: -16,
        rotateZ: 1.5,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // Glow animation
      gsap.to(glowRef.current, {
        scale: 1.15,
        opacity: 0.3,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // Floating mini cards
      gsap.to(".floating-card-one", {
        y: -10,
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".floating-card-two", {
        y: 10,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // Small particles
      gsap.to(".hero-particle", {
        y: -20,
        opacity: 0.3,
        duration: 2,
        stagger: 0.4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative  w-full overflow-hidden bg-[#061522] text-white"
    >
      {/* ================= BACKGROUND ================= */}

      {/* Main gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_45%,rgba(249,115,22,0.14),transparent_28%),radial-gradient(circle_at_15%_80%,rgba(20,94,145,0.18),transparent_35%)]" />

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.7) 1px, transparent 1px)",
          backgroundSize: "70px 70px",
        }}
      />

      {/* Orange glow */}
      <div
        ref={glowRef}
        className="absolute right-[5%] top-[15%] h-[450px] w-[450px] rounded-full bg-[#F97316]/20 blur-[120px]"
      />

      <div className="absolute -bottom-32 -left-32 h-[420px] w-[420px] rounded-full bg-blue-500/10 blur-[120px]" />

      {/* Particles */}
      <div className="hero-particle absolute left-[8%] top-[25%] h-1.5 w-1.5 rounded-full bg-orange-400" />
      <div className="hero-particle absolute left-[35%] top-[15%] h-1 w-1 rounded-full bg-white" />
      <div className="hero-particle absolute right-[30%] top-[20%] h-1.5 w-1.5 rounded-full bg-orange-300" />
      <div className="hero-particle absolute right-[8%] bottom-[25%] h-1 w-1 rounded-full bg-white" />

      {/* ================= CONTENT ================= */}

      <div className="container relative z-10 mx-auto flex  max-w-7xl items-center px-5 py-5">
        <div className="grid w-full items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
          {/* ================= LEFT ================= */}

          <div
            ref={contentRef}
            className="relative z-20 max-w-2xl text-center lg:text-left"
          >
            {/* Badge */}
            <div
              ref={badgeRef}
              className="mb-7 inline-flex items-center gap-2 rounded-full border border-orange-400/20 bg-orange-400/10 px-4 py-2 text-sm font-semibold text-orange-300 shadow-[0_0_30px_rgba(249,115,22,0.08)] backdrop-blur-md"
            >
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-orange-500/20">
                <FaBolt className="h-3 w-3 text-orange-400" />
              </span>

              <span>Big Deals • Better Prices</span>

              <span className="h-1 w-1 rounded-full bg-orange-400" />

              <span className="text-white/50">Up to 50% OFF</span>
            </div>

            {/* Heading */}
            <h1 className="text-5xl font-black leading-[1.02] tracking-[-0.04em] sm:text-6xl md:text-7xl lg:text-[76px]">
              <span className="hero-title-line block">Everything You</span>

              <span className="hero-title-line block">
                Need,
                <span className="relative ml-3 inline-block">
                  <span className="relative z-10 bg-gradient-to-r from-[#F97316] via-[#ff8534] to-[#ffb067] bg-clip-text text-transparent">
                    Delivered.
                  </span>

                  {/* underline glow */}
                  <span className="absolute -bottom-1 left-0 h-[5px] w-full rounded-full bg-gradient-to-r from-[#F97316] to-transparent opacity-70 blur-[1px]" />
                </span>
              </span>
            </h1>

            {/* Description */}
            <p className="hero-description mt-7 max-w-xl text-base leading-7 text-white/60 sm:text-lg sm:leading-8 lg:text-xl">
              From everyday essentials to trending gadgets, discover quality
              products at prices you'll love — delivered right to your
              doorstep across Bangladesh.
            </p>

            {/* Actions */}
            <div className="hero-actions mt-9 flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
              <button className="group relative flex w-full items-center justify-center gap-3 overflow-hidden rounded-full bg-black cursor-pointer px-7 py-4 text-base font-bold text-white shadow-[0_12px_40px_rgba(249,115,22,0.25)] transition-all duration-300 hover:-translate-y-1 hover:bg-transparent hover:shadow-[0_18px_50px_rgba(249,115,22,0.35)] sm:w-auto">
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

                <FaShield className="h-3.5 w-3.5 text-orange-400" />

                <span className="relative">Shop Now</span>

                <HiArrowRight className="relative h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              <button className="group flex w-full items-center justify-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-7 py-4 text-base font-semibold text-white backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-orange-400/30 hover:bg-white/[0.08] sm:w-auto cursor-pointer">
                Explore Deals

                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-orange-500/10 transition-all group-hover:bg-orange-500/20">
                  <HiArrowRight className="h-4 w-4 text-orange-400 transition-transform duration-300 group-hover:translate-x-0.5" />
                </span>
              </button>
            </div>

            {/* Trust */}
            <div className="hero-proof mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-4 lg:justify-start">
              <div className="flex items-center gap-2.5">
                <div className="flex h-9 w-9 items-center justify-center rounded-full border border-orange-400/10 bg-orange-400/10">
                  <FaStar className="h-3.5 w-3.5 text-orange-400" />
                </div>

                <div>
                  <p className="text-sm font-bold text-white">4.8/5</p>
                  <p className="text-[11px] text-white/40">2k+ Reviews</p>
                </div>
              </div>

              <div className="hidden h-8 w-px bg-white/10 sm:block" />

              <div className="flex items-center gap-2.5">
                <div className="flex h-9 w-9 items-center justify-center rounded-full border border-orange-400/10 bg-orange-400/10">
                  <FaTruck className="h-3.5 w-3.5 text-orange-400" />
                </div>

                <div>
                  <p className="text-sm font-bold text-white">Fast Delivery</p>
                  <p className="text-[11px] text-white/40">Across Bangladesh</p>
                </div>
              </div>

              <div className="hidden h-8 w-px bg-white/10 sm:block" />

              <div className="flex items-center gap-2.5">
                <div className="flex h-9 w-9 items-center justify-center rounded-full border border-orange-400/10 bg-orange-400/10">
                <FaShield className="h-3.5 w-3.5 text-orange-400" />
                </div>

                <div>
                  <p className="text-sm font-bold text-white">100% Trusted</p>
                  <p className="text-[11px] text-white/40">Quality Products</p>
                </div>
              </div>
            </div>
          </div>

          {/* ================= RIGHT PRODUCT ================= */}

          <div className="relative flex min-h-[450px] items-center justify-center lg:min-h-[620px]">
            {/* Large circular ring */}
            <div className="absolute h-[330px] w-[330px] rounded-full border border-white/[0.05] sm:h-[450px] sm:w-[450px] lg:h-[530px] lg:w-[530px]" />

            <div className="absolute h-[250px] w-[250px] rounded-full border border-orange-400/[0.08] sm:h-[350px] sm:w-[350px] lg:h-[420px] lg:w-[420px]" />

            {/* Rotating ring */}
            <div className="absolute h-[380px] w-[380px] rounded-full border border-dashed border-orange-400/10 animate-[spin_30s_linear_infinite] sm:h-[490px] sm:w-[490px] lg:h-[560px] lg:w-[560px]" />

            {/* Product shadow */}
            <div className="absolute bottom-[15%] h-12 w-[250px] rounded-full bg-black/50 blur-3xl sm:w-[340px]" />

            {/* Product */}
            <div
              ref={productRef}
              className="relative z-10 w-[270px] sm:w-[360px] lg:w-[440px]"
              style={{
                transformStyle: "preserve-3d",
              }}
            >
              {/* Product glow */}
              <div className="absolute left-1/2 top-1/2 -z-10 h-[70%] w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-500/20 blur-[80px]" />

              {/* Product image */}
              <div className="relative aspect-square">
                <img
                  src="/hero-product.png"
                  alt="AfiaMart featured product"
                  className="h-full w-full object-contain drop-shadow-[0_35px_35px_rgba(0,0,0,0.45)]"
                />
              </div>
            </div>

            {/* ================= FLOATING CARD 1 ================= */}

            <div className="floating-card-one absolute left-[0%] top-[17%] z-20  rounded-2xl border border-white/10 bg-[#102638]/80 p-3 shadow-2xl backdrop-blur-xl ">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500/15">
                  <FaBolt className="h-4 w-4 text-orange-400" />
                </div>

                <div>
                  <p className="text-xs text-white/40">Smart Choice</p>
                  <p className="text-sm font-bold text-white">Quality You Can Trust</p>
                </div>
              </div>
            </div>

            {/* ================= FLOATING CARD 2 ================= */}

            <div className="floating-card-two absolute bottom-[17%] right-[0%] z-20  rounded-2xl border border-white/10 bg-[#102638]/80 p-3 shadow-2xl backdrop-blur-xl ">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-400/10">
                  <FaArrowTrendUp className="h-4 w-4 text-emerald-400" />
                </div>

                <div>
                  <p className="text-xs text-white/40">AfiaMart Pick</p>
                  <p className="text-sm font-bold text-white">Recommended for You</p>
                </div>
              </div>
            </div>

            {/* Small floating dots */}
            <div className="absolute right-[15%] top-[15%] h-3 w-3 rounded-full bg-orange-400/70 shadow-[0_0_20px_rgba(249,115,22,0.7)]" />
            <div className="absolute bottom-[18%] left-[15%] h-2 w-2 rounded-full bg-orange-300/60" />
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 h-24 w-full bg-gradient-to-t from-[#061522] to-transparent" />
    </section>
  );
}
