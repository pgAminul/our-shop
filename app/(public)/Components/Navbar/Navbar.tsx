'use client';

import { useRef, useState, useEffect, useCallback } from 'react';
import gsap from 'gsap';
import {
  FiHeart,
  FiShoppingCart,
  FiSearch,
  FiHome,
  FiGrid,
  FiZap,
  FiTag,
  FiPhone,
} from 'react-icons/fi';
/* ─── Types ─── */

interface NavLink {
  label: string;
  href: string;
  icon: React.ReactNode;
}

/* ─── Data ─── */
const navLinks: NavLink[] = [
  { label: 'Home', href: '/', icon: <FiHome className="w-4 h-4" /> },
  { label: 'Shop', href: '/shop', icon: <FiGrid className="w-4 h-4" /> },
  { label: 'New', href: '/new', icon: <FiZap className="w-4 h-4" /> },
  { label: 'Sale', href: '/sale', icon: <FiTag className="w-4 h-4" /> },
  { label: 'Contact', href: '/contact', icon: <FiPhone className="w-4 h-4" /> },
];

function cn(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(' ');
}

export default function Navbar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [wishlistCount] = useState(3);
  const [cartCount] = useState(5);

  const navbarRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const mobileSearchRef = useRef<HTMLDivElement>(null);
  const line1Ref = useRef<HTMLSpanElement>(null);
  const line2Ref = useRef<HTMLSpanElement>(null);
  const line3Ref = useRef<HTMLSpanElement>(null);

  /* Scroll detection */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* Intro animation */
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      tl.from(navbarRef.current, { y: -100, opacity: 0, duration: 0.8, ease: 'power3.out' })
        .from(logoRef.current, { scale: 0.5, opacity: 0, duration: 0.6, ease: 'elastic.out(1, 0.5)' }, '-=0.5')
        .from('.nav-link-desktop', { y: -20, opacity: 0, duration: 0.5, stagger: 0.08, ease: 'back.out(1.7)' }, '-=0.4')
        .from(searchRef.current, { scale: 0.8, opacity: 0, duration: 0.5, ease: 'power2.out' }, '-=0.3')
        .from('.action-btn', { scale: 0, opacity: 0, duration: 0.4, stagger: 0.1, ease: 'back.out(2)' }, '-=0.3');
    });
    return () => ctx.revert();
  }, []);

  /* Hamburger initial positions */
  useEffect(() => {
    gsap.set(line1Ref.current, { y: -6 });
    gsap.set(line3Ref.current, { y: 6 });
  }, []);

  /* Mobile menu animation */
  useEffect(() => {
    if (!mobileMenuRef.current) return;
    if (isMobileOpen) {
      gsap.to(mobileMenuRef.current, { height: 'auto', duration: 0.4, ease: 'power2.inOut' });
      gsap.to('.mobile-link', { x: 0, opacity: 1, duration: 0.4, stagger: 0.06, delay: 0.1, ease: 'power2.out' });
      gsap.to('.mobile-cta', { y: 0, opacity: 1, duration: 0.4, delay: 0.4, ease: 'power2.out' });
      gsap.to(line1Ref.current, { rotate: 45, y: 0, duration: 0.3 });
      gsap.to(line2Ref.current, { opacity: 0, scaleX: 0, duration: 0.2 });
      gsap.to(line3Ref.current, { rotate: -45, y: 0, duration: 0.3 });
    } else {
      gsap.to(mobileMenuRef.current, { height: 0, duration: 0.3, ease: 'power2.inOut' });
      gsap.set('.mobile-link', { x: 16, opacity: 0 });
      gsap.set('.mobile-cta', { y: 16, opacity: 0 });
      gsap.to(line1Ref.current, { rotate: 0, y: -6, duration: 0.3 });
      gsap.to(line2Ref.current, { opacity: 1, scaleX: 1, duration: 0.2, delay: 0.1 });
      gsap.to(line3Ref.current, { rotate: 0, y: 6, duration: 0.3 });
    }
  }, [isMobileOpen]);

  /* Mobile search animation */
  useEffect(() => {
    if (!mobileSearchRef.current) return;
    if (isSearchOpen) {
      gsap.to(mobileSearchRef.current, { height: 'auto', duration: 0.3, ease: 'power2.out' });
    } else {
      gsap.to(mobileSearchRef.current, { height: 0, duration: 0.3, ease: 'power2.inOut' });
    }
  }, [isSearchOpen]);

  const toggleMobile = useCallback(() => {
    setIsMobileOpen((prev) => {
      if (!prev) setIsSearchOpen(false);
      return !prev;
    });
  }, []);

  const toggleSearch = useCallback(() => {
    setIsSearchOpen((prev) => {
      if (!prev) setIsMobileOpen(false);
      return !prev;
    });
  }, []);

  
  return (
    <nav
      ref={navbarRef}
      className={cn(
        'fixed top-0 left-0 w-full z-50 border-b backdrop-blur-xl transition-all duration-300 h-16 lg:h-20 bg-white backdrop-blur-[12px] backdrop-saturate-[100%]  border-white/50  shadow-[0_8px_32px_0_rgba(0,0,0,0.2)]' 
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex items-center justify-between h-full gap-4">
          {/* Logo */}
          <div ref={logoRef} className="flex-shrink-0 cursor-pointer select-none">
          <img
  src="/logo.png"
  alt="AfiaMart Logo"
  className="h-13 w-auto lg:h-15"
/>
          </div>

          {/* Desktop Center Menu */}
        <div className="hidden lg:flex items-center gap-0.5 absolute left-1/2 -translate-x-1/2">
  {navLinks.map((link) => (
    <a
      key={link.label}
      href={link.href}
      className={`nav-link-desktop px-4 py-2 rounded-lg text-sm font-medium transition-colors relative group ${
        scrolled
          ? "text-black hover:text-red-500"
          : "text-black hover:text-red-500"
      }`}
    >
      <span className="relative z-10 flex items-center gap-2">
        {link.icon}
        {link.label}
      </span>

      <span className="absolute bottom-1 left-4 right-4 h-px bg-gradient-to-r from-transparent via-rose-500 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform origin-center" />
    </a>
  ))}
</div>

          {/* Right Actions */}
          <div className="flex items-center gap-1 sm:gap-2">
         <div ref={searchRef} className="relative hidden md:block">
  <div className="relative group">
    <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-black group-focus-within:text-rose-300 transition-colors z-10" />
    <input 
      type="text" 
      placeholder="Search products..." 
      className="w-36 lg:w-44 xl:w-56 
        bg-white/10 
        backdrop-blur-xl 
        backdrop-saturate-150
        border border-white/20 
        rounded-full 
        py-2.5 pl-9 pr-4 
        text-sm text-black
        placeholder-black
        shadow-[0_8px_32px_rgba(0,0,0,0.12)]
        hover:shadow-[0_8px_32px_rgba(0,0,0,0.2)]
        focus:outline-none 
        focus:border-rose-400/60 
        focus:bg-gray-200
        focus:w-48 lg:focus:w-52 xl:focus:w-64 
        focus:shadow-[0_8px_40px_rgba(236,72,153,0.15)]
        transition-all duration-400 ease-out
        ring-1 ring-black/10
        hover:ring-black
        focus:ring-rose-400/30
      " 
    />
    {/* Subtle inner glow */}
    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-white/5 to-transparent pointer-events-none"></div>
  </div>
</div>

         <div className='flex justify-around ml-2 items-center gap-3'>
  {/* Heart */}
  <FiHeart className="w-5 h-5 cursor-pointer text-black md:text-gray-600 hover:text-blue-500 md:hover:text-red-500 transition-colors duration-300" />
  
  {/* Cart with Badge */}
  <div className="relative cursor-pointer group">
    <FiShoppingCart className="w-5 h-5 text-black md:text-gray-600 group-hover:text-blue-500 md:group-hover:text-red-500 transition-colors duration-300" />
    {/* Premium Badge */}
    <span className="absolute -top-2 -right-2 flex items-center justify-center w-4 h-4 bg-red-500 text-white text-[10px] font-bold rounded-full shadow-md">
      2
    </span>
  </div>
</div>
            <button onClick={toggleSearch} className="md:hidden p-2.5 rounded-xl  text-black hover:text-blue-500 transition-all active:scale-90">
              <FiSearch className="w-5 h-5" />
            </button>

            <button onClick={toggleMobile} className="lg:hidden p-2.5 rounded-xl  text-black hover:text-blue-500 transition-all relative w-10 h-10 flex items-center justify-center ml-1">
              <span ref={line1Ref} className="absolute w-5 h-0.5 bg-current rounded-full" />
              <span ref={line2Ref} className="absolute w-5 h-0.5 bg-current rounded-full" />
              <span ref={line3Ref} className="absolute w-5 h-0.5 bg-current rounded-full" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Search */}
    <div
  ref={mobileSearchRef}
  className="md:hidden overflow-hidden h-0"
>
  <div className="px-4 pb-4 pt-1">
    <div className="relative group">
   
      {/* Search Input */}
      <input
        type="text"
        placeholder="Search products..."
        className="
          w-full
          h-12
          rounded-2xl
          border border-neutral-200/80
          bg-white
          pl-4
          pr-12
          text-sm
          font-medium
          text-neutral-800
          placeholder:text-neutral-400
          shadow-[0_8px_30px_rgba(0,0,0,0.08)]
          transition-all
          duration-300
          outline-none

          focus:border-rose-400
          focus:ring-4
          focus:ring-rose-500/10
          focus:shadow-[0_8px_30px_rgba(244,63,94,0.12)]
        "
      />

      {/* Search Button */}
      <button
        type="button"
        className="
          absolute
          right-1.5
          top-1/2
          -translate-y-1/2
          flex
          h-9
          w-9
          items-center
          justify-center
          rounded-xl
          bg-gradient-to-br
          from-rose-500
          to-pink-600
          text-white
          shadow-md
          shadow-rose-500/20
          transition-all
          duration-300
          hover:scale-105
          hover:shadow-lg
          hover:shadow-rose-500/30
          active:scale-95
        "
      >
        <FiSearch className="w-4 h-4" />
      </button>

    </div>
  </div>
</div>

      {/* Mobile Menu */}
      <div ref={mobileMenuRef} className="lg:hidden overflow-hidden h-0">
        <div className="px-4 py-4 space-y-1 bg-white/80 backdrop-blur-[32px] backdrop-saturate-[179%] border border-white/30  shadow-[0_8px_32px_0_rgba(0,0,0,0.99)]">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className="mobile-link flex items-center gap-3 px-4 py-3 rounded-xl text-black font-medium  hover:text-white hover:bg-black transition-all opacity-0 translate-x-4">
              <span className="">{link.icon}</span>{link.label}
            </a>
          ))}
          <div className="pt-4 mt-4 border-t border-white/10 opacity-0 translate-y-4 mobile-cta">
          
          </div>
        </div>
      </div>
    </nav>
  );
}