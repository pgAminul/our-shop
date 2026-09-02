"use client";

import Link from "next/link";
import {
  FiArrowRight,
  FiTrendingUp,
} from "react-icons/fi";

import ProductCard, {
  Product,
} from "../Shared/ProductsCard";

import ProductScroller from "../Shared/Scroller";

const products: Product[] = [
  {
    id: 1,
    title: "Premium Wireless Headphones",
    price: 1490,
    oldPrice: 1990,
    rating: 4.9,
    reviews: 128,
    discount: 25,
    badge: "Best Seller",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=700&q=85",
  },
  {
    id: 2,
    title: "Smart Watch Pro Series",
    price: 2490,
    oldPrice: 3290,
    rating: 4.8,
    reviews: 96,
    discount: 24,
    badge: "Trending",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=700&q=85",
  },
  {
    id: 3,
    title: "Minimal Premium Backpack",
    price: 1290,
    oldPrice: 1690,
    rating: 4.7,
    reviews: 74,
    discount: 24,
    badge: "Popular",
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=700&q=85",
  },
  {
    id: 4,
    title: "Mechanical Gaming Keyboard",
    price: 2490,
    oldPrice: 3190,
    rating: 4.9,
    reviews: 143,
    discount: 22,
    badge: "Top Rated",
    image:
      "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=700&q=85",
  },
  {
    id: 5,
    title: "Wireless Gaming Mouse",
    price: 990,
    oldPrice: 1290,
    rating: 4.7,
    reviews: 58,
    discount: 23,
    badge: "Popular",
    image:
      "https://images.unsplash.com/photo-1527814050087-3793815479db?w=700&q=85",
  },
];

export default function BestProducts() {
  return (
    <section className="relative overflow-hidden bg-white py-8 sm:py-10">
      <div className="pointer-events-none absolute -right-40 top-20 h-80 w-80 rounded-full bg-orange-100/60 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-8">
          <div className="mb-3 flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange-100 text-[#F97316]">
              <FiTrendingUp className="h-4 w-4" />
            </span>

            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#F97316]">
              Customer Favorites
            </span>
          </div>

          <h2 className="text-3xl font-black tracking-tight text-[#0A1929] sm:text-4xl lg:text-5xl">
            Best{" "}
            <span className="text-[#F97316]">
              Products
            </span>
          </h2>

          <p className="mt-2 text-sm text-slate-500">
            Discover the products our customers love the most.
          </p>
        </div>

        {/* Products */}
        <ProductScroller>
          {products.map((product) => (
            <div
              key={product.id}
              className="w-[220px] shrink-0 sm:w-[250px] lg:w-[270px]"
            >
              <ProductCard product={product} />
            </div>
          ))}

          {/* View All */}
          <Link
            href="/products"
            className="group flex h-[390px] w-[125px] shrink-0 flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-orange-300 bg-orange-50 text-center transition-all duration-300 hover:border-[#F97316] hover:bg-orange-100"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#F97316] text-white shadow-lg shadow-orange-200 transition-transform duration-300 group-hover:scale-110">
              <FiArrowRight className="h-5 w-5" />
            </span>

            <span className="text-sm font-bold text-[#0A1929]">
              View All
            </span>

            <span className="text-[10px] text-slate-500">
              Explore products
            </span>
          </Link>
        </ProductScroller>
      </div>
    </section>
  );
}