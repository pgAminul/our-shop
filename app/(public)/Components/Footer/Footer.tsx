"use client";

import Link from "next/link";
import {
  FiFacebook,
  FiInstagram,
  FiTwitter,
  FiYoutube,
  FiPhone,
  FiMail,
  FiMapPin,
} from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="bg-[#061A3A] text-white md:mt-10  mt-8 ">

      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:px-10">

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div>
            <Link
              href="/"
              className="text-2xl font-bold"
            >
              Afia<span className="text-orange-500">Mart</span>
            </Link>

            <p className="mt-4 max-w-xs text-sm leading-6 text-slate-400">
              Shop quality products at the best prices.
              Fast delivery and trusted service across Bangladesh.
            </p>

            {/* Social */}
            <div className="mt-5 flex gap-3">
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 text-slate-400 transition hover:bg-orange-500 hover:text-white"
              >
                <FiFacebook />
              </a>

              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 text-slate-400 transition hover:bg-orange-500 hover:text-white"
              >
                <FiInstagram />
              </a>

              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 text-slate-400 transition hover:bg-orange-500 hover:text-white"
              >
                <FiTwitter />
              </a>

              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 text-slate-400 transition hover:bg-orange-500 hover:text-white"
              >
                <FiYoutube />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold">
              Quick Links
            </h3>

            <ul className="space-y-3 text-sm text-slate-400">
              <li>
                <Link
                  href="/"
                  className="transition hover:text-orange-500"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/shop"
                  className="transition hover:text-orange-500"
                >
                  Shop
                </Link>
              </li>

              <li>
                <Link
                  href="/categories"
                  className="transition hover:text-orange-500"
                >
                  Categories
                </Link>
              </li>

              <li>
              <Link href="/about" className="transition hover:text-orange-500">
  About Us
</Link>
              </li>

              <li>
                <Link
                  href="/contact"
                  className="transition hover:text-orange-500"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer */}
          <div>
            <h3 className="mb-4 text-sm font-semibold">
              Customer Service
            </h3>

            <ul className="space-y-3 text-sm text-slate-400">
              <li>
                <Link
                  href="/track-order"
                  className="transition hover:text-orange-500"
                >
                  Track Order
                </Link>
              </li>

              <li>
                <Link
                  href="/delivery"
                  className="transition hover:text-orange-500"
                >
                  Delivery Information
                </Link>
              </li>

              <li>
                <Link
                  href="/return-policy"
                  className="transition hover:text-orange-500"
                >
                  Return Policy
                </Link>
              </li>

              <li>
                <Link
                  href="/faq"
                  className="transition hover:text-orange-500"
                >
                  FAQ
                </Link>
              </li>

              <li>
                <Link
                  href="/privacy-policy"
                  className="transition hover:text-orange-500"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-sm font-semibold">
              Contact Us
            </h3>

            <div className="space-y-4 text-sm text-slate-400">

              <div className="flex items-center gap-3">
                <FiMapPin className="text-orange-500" />
                <span>Dhaka, Bangladesh</span>
              </div>

              <div className="flex items-center gap-3">
                <FiPhone className="text-orange-500" />
                <span>+880 1000-000000</span>
              </div>

              <div className="flex items-center gap-3">
                <FiMail className="text-orange-500" />
                <span>support@afiamart.co</span>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 py-5 text-xs text-slate-500 sm:px-8 md:flex-row lg:px-10">

          <p>
            © {new Date().getFullYear()} AfiaMart. All rights reserved.
          </p>

          <div className="flex gap-5">
            <Link
              href="/terms"
              className="hover:text-orange-500"
            >
              Terms
            </Link>

            <Link
              href="/privacy-policy"
              className="hover:text-orange-500"
            >
              Privacy
            </Link>

            <Link
              href="/refund-policy"
              className="hover:text-orange-500"
            >
              Refund Policy
            </Link>
          </div>

        </div>
      </div>

    </footer>
  );
}
