"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FiShoppingCart,
  FiHeart,
  FiArrowRight,
  FiStar,
  FiZap,
} from "react-icons/fi";
import Title from "../Shared/Title";

const products = [
  {
    id: 1,
    title: "Wireless Bluetooth Headphones",
    price: 89.99,
    discountPrice: 59.99,
    rating: 4.8,
    reviews: 124,
    badge: "Best Seller",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&h=600&fit=crop",
  },
  {
    id: 2,
    title: "Classic Leather Jacket",
    price: 149.99,
    discountPrice: null,
    rating: 4.7,
    reviews: 86,
    badge: "Popular",
    image:
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&h=600&fit=crop",
  },
  {
    id: 3,
    title: "Smart Watch Series 5",
    price: 249.99,
    discountPrice: 199.99,
    rating: 4.9,
    reviews: 218,
    badge: "Trending",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&h=600&fit=crop",
  },
  {
    id: 4,
    title: "Minimalist Backpack",
    price: 69.99,
    discountPrice: null,
    rating: 4.6,
    reviews: 72,
    badge: "New",
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=600&fit=crop",
  },
  {
    id: 5,
    title: "Premium Cotton T-Shirt",
    price: 29.99,
    discountPrice: 19.99,
    rating: 4.8,
    reviews: 164,
    badge: "Deal",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=600&fit=crop",
  },
  {
    id: 6,
    title: "Mechanical Keyboard",
    price: 129.99,
    discountPrice: 99.99,
    rating: 4.9,
    reviews: 142,
    badge: "Top Rated",
    image:
      "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=600&h=600&fit=crop",
  },
];

const ProductSection = () => {
  return (
    <section className="relative overflow-hidden bg-[#f8fafc] py-5 md:py-8">
      {/* Background decoration */}
      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-orange-500/5 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-blue-500/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ================= HEADER ================= */}

        <div>
           <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#F97316]">
            <FiZap className="h-3.5 w-3.5" />
            AfiaMart Collection
          </div>
          <Title
            title="Explore Our Products"
            highlightedText="Products"
            description="Find Your Perfect Pick From Our Collection."
          />
        </div>
  

        {/* ================= PRODUCT GRID ================= */}
        <div className="grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-3 lg:gap-6">
          {products.map((product) => {
            const discountPercent = product.discountPrice
              ? Math.round(
                  ((product.price - product.discountPrice) / product.price) *
                    100
                )
              : 0;

            return (
              <div
                key={product.id}
                className="group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm transition-all duration-500 hover:-translate-y-1.5 hover:border-orange-200 hover:shadow-[0_20px_50px_rgba(15,23,42,0.10)] sm:rounded-3xl"
              >
                {/* ================= IMAGE ================= */}
                <div className="relative aspect-square overflow-hidden bg-[#f1f5f9]">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />

                  {/* Image gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-60" />

                  {/* Badge */}
                  <div className="absolute left-3 top-3 sm:left-4 sm:top-4">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-[#0A1929]/85 px-2.5 py-1.5 text-[9px] font-bold text-white shadow-lg backdrop-blur-md sm:px-3 sm:text-[10px]">
                      {product.badge === "Deal" && (
                        <FiZap className="h-3 w-3 text-orange-400" />
                      )}

                      {product.badge}
                    </span>
                  </div>

                  {/* Discount */}
                  {product.discountPrice && (
                    <div className="absolute right-3 top-3 sm:right-4 sm:top-4">
                      <span className="rounded-full bg-[#F97316] px-2.5 py-1.5 text-[9px] font-extrabold text-white shadow-lg sm:px-3 sm:text-[10px]">
                        -{discountPercent}%
                      </span>
                    </div>
                  )}

                  {/* Wishlist */}
                  <button
                    aria-label={`Add ${product.title} to wishlist`}
                    className="absolute bottom-3 right-3 flex cursor-pointer h-9 w-9 items-center justify-center rounded-full border border-white/30 bg-white/90 text-slate-600 shadow-lg backdrop-blur-md transition-all duration-300 hover:scale-110 hover:bg-[#F97316] hover:text-white sm:bottom-4 sm:right-4 sm:h-10 sm:w-10"
                  >
                    <FiHeart className="h-4 w-4 sm:h-[17px] sm:w-[17px]" />
                  </button>

                  {/* Hover overlay button */}
                  <div className="absolute bottom-3 left-3 right-14 hidden translate-y-3 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 sm:block mx-3">
                    <Link
                      href={`/product/${product.id}`}
                      className="flex items-center justify-center gap-2 rounded-xl bg-white/95 px-3 py-2.5 text-xs font-bold text-[#0A1929] shadow-lg backdrop-blur-md transition-colors hover:bg-[#F97316] hover:text-white"
                    >
                      Quick View
                      <FiArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>

                {/* ================= CONTENT ================= */}
                <div className="p-3 sm:p-5">
                  {/* Rating */}
                  <div className="mb-2 flex items-center gap-1.5">
                    <div className="flex items-center gap-0.5">
                      <FiStar className="h-3 w-3 fill-[#F97316] text-[#F97316]" />
                      <span className="text-[11px] font-bold text-slate-700">
                        {product.rating}
                      </span>
                    </div>

                    <span className="text-[10px] text-slate-400">
                      ({product.reviews})
                    </span>
                  </div>

                  {/* Product title */}
                  <Link href={`/product/${product.id}`}>
                    <h3 className="min-h-[40px] text-sm font-bold leading-5 text-[#0A1929] transition-colors group-hover:text-[#F97316] sm:min-h-[48px] sm:text-base sm:leading-6">
                      {product.title}
                    </h3>
                  </Link>

                  {/* Price */}
                  <div className="mt-2.5 flex flex-wrap items-baseline gap-2">
                    <span className="text-lg font-black tracking-tight text-[#0A1929] sm:text-xl">
                      ${product.discountPrice || product.price}
                    </span>

                    {product.discountPrice && (
                      <span className="text-xs font-medium text-slate-400 line-through sm:text-sm">
                        ${product.price}
                      </span>
                    )}
                  </div>

                  {/* Divider */}
                  <div className="my-3 border-t border-slate-100" />

                  {/* CTA */}
                  <div className="flex gap-2">
                    {/* Add Cart */}
                    <button className="group/cart flex cursor-pointer flex-1 items-center justify-center gap-1.5 rounded-xl border border-[#0A1929] bg-[#0A1929] px-2 py-2.5 text-[11px] font-bold text-white transition-all duration-300 hover:border-[#F97316] hover:bg-[#F97316] sm:gap-2 sm:px-3 sm:text-xs">
                      <FiShoppingCart className="h-3.5 w-3.5 transition-transform group-hover/cart:scale-110 sm:h-4 sm:w-4" />
                      <span className="hidden md:block">
                        Add to Cart
                      </span>
                      <span className="block md:hidden">Cart</span>
                    </button>

                    {/* Buy Now */}
                    <button className="group/buy flex items-center cursor-pointer justify-center gap-1 rounded-xl border border-[#0A1929] bg-[#0A1929] px-2.5 py-2.5 text-[11px] font-bold text-white transition-all duration-300 hover:border-[#F97316] hover:bg-[#F97316] hover:text-white sm:px-4 sm:text-xs">
                      <span className="hidden md:block">Buy Now</span>
                      <span className="block md:hidden">Buy </span>
                      <FiArrowRight className="h-3 w-3 transition-transform group-hover/buy:translate-x-0.5 sm:h-3.5 sm:w-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ================= VIEW ALL ================= */}
        <div className="mt-10 flex justify-center sm:mt-12">
          <Link
            href="/products"
            className="group inline-flex items-center gap-3 rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-bold text-[#0A1929] shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-orange-200 hover:bg-orange-50 hover:text-[#F97316] hover:shadow-lg sm:px-7 sm:py-3.5"
          >
            View All Products

            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#0A1929] text-white transition-all duration-300 group-hover:bg-[#F97316]">
              <FiArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;