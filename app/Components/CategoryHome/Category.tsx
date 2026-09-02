"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import {
  FaArrowRight,
  FaLaptop,
  FaMobileScreenButton,
  FaHeadphones,
  FaClock,
  FaHeartPulse,
  FaHouse,
  FaShirt,
  FaGift,
} from "react-icons/fa6";

const categories = [
  {
    id: 1,
    name: "Electronics",
    count: "120+ Products",
    icon: FaLaptop,
    image:
      "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=300&q=75",
  },
  {
    id: 2,
    name: "Mobiles",
    count: "85+ Products",
    icon: FaMobileScreenButton,
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=300&q=75",
  },
  {
    id: 3,
    name: "Audio",
    count: "60+ Products",
    icon: FaHeadphones,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&q=75",
  },
  {
    id: 4,
    name: "Watches",
    count: "45+ Products",
    icon: FaClock,
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&q=75",
  },
  {
    id: 5,
    name: "Beauty",
    count: "90+ Products",
    icon: FaHeartPulse,
    image:
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=300&q=75",
  },
  {
    id: 6,
    name: "Home",
    count: "70+ Products",
    icon: FaHouse,
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=300&q=75",
  },
  {
    id: 7,
    name: "Fashion",
    count: "150+ Products",
    icon: FaShirt,
    image:
      "https://images.unsplash.com/photo-1445205170230-053b83016050?w=300&q=75",
  },
  {
    id: 8,
    name: "Gifts",
    count: "50+ Products",
    icon: FaGift,
    image:
      "https://images.unsplash.com/photo-1512909006721-3d6018887383?w=300&q=75",
  },
];

export default function ShopByCategory() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;

    const amount = direction === "left" ? -330 : 330;

    gsap.to(scrollRef.current, {
      scrollLeft: scrollRef.current.scrollLeft + amount,
      duration: 0.55,
      ease: "power3.out",
    });
  };

  return (
    <section className="relative overflow-hidden bg-[#f8fafc] py-10 sm:py-8">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* ================= HEADER ================= */}
        <div className="mb-7">
          <div className="mb-2 flex items-center gap-2">
            <span className="h-px w-7 bg-[#F97316]" />

            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#F97316]">
              Explore
            </span>
          </div>

          <h2 className="text-2xl font-black tracking-tight text-[#0A1929] sm:text-3xl">
            Shop by{" "}
            <span className="bg-gradient-to-r from-[#F97316] to-[#ff9a55] bg-clip-text text-transparent">
              Category
            </span>
          </h2>
        </div>

        {/* ================= CAROUSEL WRAPPER ================= */}
        <div className="group relative">
          {/* LEFT ARROW */}
          <button
            onClick={() => scroll("left")}
            aria-label="Previous categories"
            className="absolute left-0 top-1/2 z-20 hidden h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-lg transition-all duration-300 hover:scale-110 hover:border-orange-200 hover:bg-[#F97316] hover:text-white sm:flex"
          >
            <FaArrowRight className="h-3.5 w-3.5 rotate-180" />
          </button>

          {/* RIGHT ARROW */}
          <button
            onClick={() => scroll("right")}
            aria-label="Next categories"
            className="absolute right-0 top-1/2 z-20 hidden h-10 w-10 translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-lg transition-all duration-300 hover:scale-110 hover:border-orange-200 hover:bg-[#F97316] hover:text-white sm:flex"
          >
            <FaArrowRight className="h-3.5 w-3.5" />
          </button>

          {/* LEFT FADE */}
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-10 bg-gradient-to-r from-[#f8fafc] to-transparent" />

          {/* RIGHT FADE */}
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-10 bg-gradient-to-l from-[#f8fafc] to-transparent" />

          {/* ================= SCROLL ROW ================= */}
          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto px-1 py-2 pb-4 scrollbar-hide snap-x snap-mandatory"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {categories.map((category) => {
              const Icon = category.icon;

              return (
                <div
                  key={category.id}
                  className="group/card flex w-[175px] shrink-0 snap-start cursor-pointer items-center gap-3 rounded-2xl border border-slate-200/80 bg-white p-2.5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-[0_15px_35px_rgba(15,23,42,0.09)] sm:w-[190px]"
                >
                  {/* IMAGE */}
                  <div className="relative h-[62px] w-[62px] shrink-0 overflow-hidden rounded-xl bg-slate-100">
                    <img
                      src={category.image}
                      alt={category.name}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover/card:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-br from-black/5 to-black/25" />

                    {/* Icon */}
                    <div className="absolute bottom-1 right-1 flex h-5 w-5 items-center justify-center rounded-md bg-white/95 shadow-sm">
                      <Icon className="h-2.5 w-2.5 text-[#F97316]" />
                    </div>
                  </div>

                  {/* CONTENT */}
                  <div className="min-w-0">
                    <h3 className="truncate text-sm font-bold text-[#0A1929] transition-colors group-hover/card:text-[#F97316]">
                      {category.name}
                    </h3>

                    <p className="mt-1 text-[10px] font-medium text-slate-400">
                      {category.count}
                    </p>

                    <div className="mt-1.5 flex items-center gap-1 text-[10px] font-semibold text-[#F97316]">
                      Explore
                      <FaArrowRight className="h-2 w-2 transition-transform group-hover/card:translate-x-1" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile hint */}
        <div className="mt-2 flex items-center justify-center gap-2 text-[10px] text-slate-400 sm:hidden">
          <span>Swipe to explore</span>
          <FaArrowRight className="h-2.5 w-2.5" />
        </div>
      </div>
    </section>
  );
}
