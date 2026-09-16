"use client";

import Link from "next/link";
import {
  FiArrowRight,
  FiClock,
  FiZap,
} from "react-icons/fi";

import ProductCard, {
  Product,
} from "../Shared/ProductsCard";

import ProductScroller from "../Shared/Scroller";

const saleProducts: Product[] = [
  {
    id: 11,
    title: "Premium Wireless Headphones",
    price: 990,
    oldPrice: 1590,
    rating: 4.9,
    reviews: 128,
    discount: 38,
    badge: "Flash Deal",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=700&q=85",
  },
  {
    id: 12,
    title: "Smart Watch Pro",
    price: 1490,
    oldPrice: 2290,
    rating: 4.8,
    reviews: 96,
    discount: 35,
    badge: "Flash Deal",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=700&q=85",
  },
  {
    id: 13,
    title: "Mechanical Gaming Keyboard",
    price: 1990,
    oldPrice: 2990,
    rating: 4.9,
    reviews: 143,
    discount: 33,
    badge: "Flash Deal",
    image:
      "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=700&q=85",
  },
  {
    id: 14,
    title: "Wireless Gaming Mouse",
    price: 790,
    oldPrice: 1190,
    rating: 4.7,
    reviews: 58,
    discount: 34,
    badge: "Flash Deal",
    image:
      "https://images.unsplash.com/photo-1527814050087-3793815479db?w=700&q=85",
  },
];

export default function FlashSale() {
  return (
    <section className="pt-10 sm:pt-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="relative overflow-hidden rounded-[30px] bg-[#071522] px-5 py-7 sm:px-8 sm:py-9 lg:px-10">

          {/* Glow */}
          <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-orange-500/20 blur-3xl" />

          <div className="pointer-events-none absolute -bottom-40 left-1/3 h-80 w-80 rounded-full bg-orange-500/10 blur-3xl" />

          {/* Header */}
          <div className="relative mb-8 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-orange-400/20 bg-orange-400/10 px-3 py-1.5">
                <FiZap className="h-3.5 w-3.5 fill-orange-400 text-orange-400" />

                <span className="text-[10px] font-bold uppercase tracking-wider text-orange-300">
                  Limited Time Deals
                </span>
              </div>

              <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl">
                Flash{" "}
                <span className="text-orange-400">
                  Sale
                </span>
              </h2>

              <p className="mt-2 max-w-lg text-sm leading-6 text-slate-400">
                Big savings on selected products.
                Don't miss these limited-time offers.
              </p>
            </div>

            {/* Countdown */}
            <div className="flex items-center gap-3">
              <FiClock className="h-5 w-5 text-orange-400" />

              <div className="flex gap-1.5">
                {[
                  ["02", "HRS"],
                  ["18", "MIN"],
                  ["45", "SEC"],
                ].map(([number, label]) => (
                  <div
                    key={label}
                    className="text-center"
                  >
                    <div className="flex h-11 min-w-[46px] items-center justify-center rounded-xl border border-white/10 bg-white/10 px-2 backdrop-blur">
                      <span className="text-sm font-black text-white">
                        {number}
                      </span>
                    </div>

                    <span className="mt-1 block text-[8px] font-bold tracking-wider text-slate-500">
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Products */}
          <ProductScroller>
            {saleProducts.map((product) => (
              <div
                key={product.id}
                className="w-[220px] shrink-0 sm:w-[250px] lg:w-[270px]"
              >
                <ProductCard product={product} />
              </div>
            ))}

            {/* View All */}
            <Link
              href="/products?type=flash-sale"
              className="group flex h-[390px] w-[125px] shrink-0 flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-orange-400/40 bg-orange-400/10 text-center transition-all duration-300 hover:border-orange-400 hover:bg-orange-400/20"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-500 text-white shadow-lg shadow-orange-500/20 transition-transform duration-300 group-hover:scale-110">
                <FiArrowRight className="h-5 w-5" />
              </span>

              <span className="text-sm font-bold text-white">
                View All
              </span>

              <span className="text-[10px] text-slate-400">
                More flash deals
              </span>
            </Link>
          </ProductScroller>
        </div>
      </div>
    </section>
  );
}
