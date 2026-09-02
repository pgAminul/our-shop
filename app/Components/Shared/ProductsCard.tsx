"use client"
import Image from "next/image";
import Link from "next/link";
import { FiHeart, FiStar } from "react-icons/fi";

export interface Product {
  id: number;
  title: string;
  price: number;
  oldPrice?: number;
  image: string;
  rating?: number;
  reviews?: number;
  discount?: number;
  badge?: string;
}

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-xl">
      {/* Image */}
      <div className="relative aspect-square overflow-hidden bg-slate-100">
        <Image
          src={product.image}
          alt={product.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="300px"
        />

        {/* Badge */}
        {product.badge && (
          <span className="absolute left-3 top-3 rounded-full bg-[#0A1929] px-3 py-1 text-[10px] font-bold text-white">
            {product.badge}
          </span>
        )}

        {/* Discount */}
        {product.discount && (
          <span className="absolute right-3 top-3 rounded-full bg-[#F97316] px-2.5 py-1 text-[10px] font-bold text-white">
            -{product.discount}%
          </span>
        )}

        {/* Wishlist UI only */}
        <button
          type="button"
          className="absolute bottom-3 right-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-slate-600 shadow-md backdrop-blur transition hover:bg-[#F97316] hover:text-white"
        >
          <FiHeart className="h-4 w-4" />
        </button>
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Rating */}
        {product.rating && (
          <div className="mb-2 flex items-center gap-1.5 text-xs">
            <FiStar className="h-3.5 w-3.5 fill-[#F97316] text-[#F97316]" />

            <span className="font-semibold text-slate-700">
              {product.rating}
            </span>

            {product.reviews && (
              <span className="text-slate-400">
                ({product.reviews})
              </span>
            )}
          </div>
        )}

        {/* Title */}
        <Link href={`/product/${product.id}`}>
          <h3 className="line-clamp-2 min-h-[40px] text-sm font-bold leading-5 text-[#0A1929] transition-colors hover:text-[#F97316]">
            {product.title}
          </h3>
        </Link>

        {/* Price */}
        <div className="mt-3 flex items-center gap-2">
          <span className="text-lg font-black text-[#0A1929]">
            ৳{product.price.toLocaleString()}
          </span>

          {product.oldPrice && (
            <span className="text-xs text-slate-400 line-through">
              ৳{product.oldPrice.toLocaleString()}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
