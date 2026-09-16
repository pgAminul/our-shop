// app/about/page.jsx
"use client"
import Image from 'next/image';
import Link from 'next/link';
import { 
  Shield, 
  Truck, 
  Headphones, 
  RefreshCw,
  
} from 'lucide-react';

export default function AboutPage() {
  const features = [
    {
      icon: Shield,
      title: "Premium Quality",
      description: "We source only the finest materials for our products"
    },
    {
      icon: Truck,
      title: "Fast Delivery",
      description: "Free shipping on orders over $50, delivered within 2-3 days"
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Our team is always here to help you with any questions"
    },
    {
      icon: RefreshCw,
      title: "Easy Returns",
      description: "Hassle-free returns within 30 days of purchase"
    }
  ];

  const teamMembers = [
    {
      name: "John Doe",
      role: "CEO & Founder",
      image: "https://picsum.photos/seed/ceo/200/200",
      bio: "10+ years of experience in e-commerce"
    },
    {
      name: "Jane Smith",
      role: "Head of Design",
      image: "https://picsum.photos/seed/designer/200/200",
      bio: "Passionate about creating beautiful products"
    },
    {
      name: "Mike Johnson",
      role: "Operations Manager",
      image: "https://picsum.photos/seed/ops/200/200",
      bio: "Ensuring smooth delivery operations"
    },
    {
      name: "Sarah Brown",
      role: "Customer Success",
      image: "https://picsum.photos/seed/success/200/200",
      bio: "Making customers happy every day"
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* হিরো সেকশন */}
      <section className="relative bg-gradient-to-br from-orange-50 to-white py-10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1 bg-orange-100 text-orange-600 text-sm font-semibold rounded-full mb-4">
              About Us
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Your Trusted
              <span className="text-orange-600"> Shopping Partner</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              We're passionate about bringing you the best products with exceptional service. 
              Our journey started with a simple idea - make shopping easy, enjoyable, and reliable.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                href="/shop" 
                className="px-6 py-3 bg-orange-600 text-white rounded-lg font-semibold hover:bg-orange-700 transition-colors"
              >
                Shop Now
              </Link>
              <Link 
                href="/contact" 
                className="px-6 py-3 border-2 border-orange-600 text-orange-600 rounded-lg font-semibold hover:bg-orange-50 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* স্ট্যাটস সেকশন */}
      <section className="py-10 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600">50K+</div>
              <div className="text-sm text-gray-600 mt-1">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600">10K+</div>
              <div className="text-sm text-gray-600 mt-1">Products Sold</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600">4.9</div>
              <div className="text-sm text-gray-600 mt-1">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600">99%</div>
              <div className="text-sm text-gray-600 mt-1">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* ফিচার সেকশন */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose <span className="text-orange-600">Us?</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We're committed to providing the best shopping experience possible
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-shadow text-center"
              >
                <div className="w-14 h-14 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-7 w-7 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* টিম সেকশন */}
      <section className="py-10 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our <span className="text-orange-600">Team</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The passionate people behind your favorite shopping experience
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow overflow-hidden"
              >
                <div className="relative h-48 w-full bg-gray-200">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-semibold text-lg text-gray-900">
                    {member.name}
                  </h3>
                  <p className="text-orange-600 text-sm font-medium">
                    {member.role}
                  </p>
                  <p className="text-gray-600 text-sm mt-2">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}