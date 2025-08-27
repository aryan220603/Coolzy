import React from "react";
import { motion } from "framer-motion";
import {
  Sparkles,
  Droplets,
  Leaf,
  Instagram,
  Facebook,
  Youtube,
  Store,
  Mail,
  Phone,
  MapPin,
  Star,
} from "lucide-react";


const Section = ({ id, className = "", children }) => (
  <section id={id} className={`max-w-7xl mx-auto px-4 md:px-6 ${className}`}>
    {children}
  </section>
);


const img = (q) =>
  `https://images.unsplash.com/photo-1524592094714-0f0654e20314?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&${q}`;

const FLAVORS = [
  {
    name: "Cranberry",
    desc: "Sweet, floral, and super refreshing.",
    img: "/Screenshot 2025-08-26 142924.png",
    badge: "Top Pick",
    rating: 5,
  },
  {
    name: "Guava",
    desc: "Tropical burst with a silky finish.",
    img: "/Screenshot 2025-08-26 143951.png",
    badge: "New",
    rating: 5,
  },
  {
    name: "Blueberry",
    desc: "Juicy berries with a playful tang.",
    img: "/Screenshot 2025-08-26 142716.png",
    rating: 4,
  },
  {
    name: "Pineapple",
    desc: "Crisp, bright, lightly tart.",
    img: "/Screenshot 2025-08-26 142502.png",
    rating: 4,
  },
];

const TESTIMONIALS = [
  {
    name: "Ananya",
    text:
      "Coolzy is my chill pill after practice—tastes amazing and feels clean.",
    rating: 5,
  },
  { name: "Samar", text: "Guava slaps. Not too sweet, just right.", rating: 5 },
  {
    name: "Jayant",
    text: "Love the low-cal vibe and the fizz. Perfect for study breaks!",
    rating: 4,
  },
];

// ---------- UI ----------
const Nav = () => (
  <nav className="fixed top-0 left-0 w-full z-50 bg-gray-900/80 backdrop-blur border-b border-gray-800">
    <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 flex items-center justify-between">
      <a
        href="#home"
        className="flex items-center gap-2 font-extrabold text-xl text-white hover:text-cyan-400 transition-colors"
      >
        <Droplets className="w-6 h-6 text-cyan-400" />
        <span>Coolzy</span>
      </a>
      <div className="hidden md:flex items-center gap-8 text-sm">
        {[
          { name: "Flavors", href: "#flavors" },
          { name: "Our Story", href: "#story" },
          { name: "Benefits", href: "#benefits" },
          { name: "Find Us", href: "#find" },
          { name: "Contact", href: "#contact" },
        ].map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="text-gray-300 hover:text-cyan-400 transition-colors relative group"
          >
            {item.name}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all group-hover:w-full"></span>
          </a>
        ))}
      </div>
      <div className="flex gap-3 text-gray-300">
        <Instagram className="w-5 h-5 hover:text-cyan-400" />
        <Facebook className="w-5 h-5 hover:text-cyan-400" />
        <Youtube className="w-5 h-5 hover:text-cyan-400" />
      </div>
    </div>
  </nav>
);

const Hero = () => (
  <div id="home" className="bg-gradient-to-b from-gray-900 via-gray-800 to-gray-700 pt-24">
    <Section className="grid md:grid-cols-2 gap-10 items-center py-16 md:py-24">
      <div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-black leading-tight text-white"
        >
          <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
            Dare
          </span>{" "}
          to drink{" "}
          <span className="bg-gradient-to-r from-purple-400 to-pink-300 bg-clip-text text-transparent">
            different
          </span>
          .
        </motion.h1>
        <p className="mt-4 text-gray-300 text-lg md:text-xl max-w-prose">
          Meet <strong className="text-white">Coolzy</strong>—a high-performance
          energy drink with bold fruit flavors and electrifying fizz. For those
          who fuel differently.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href="#flavors"
            className="px-5 py-3 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-400 text-white shadow-lg hover:opacity-90 flex items-center gap-2 transition-all hover:shadow-cyan-200/30"
          >
            <Sparkles className="w-4 h-4" />
            Explore Menu
          </a>
        </div>

        <div className="mt-6 flex items-center gap-6 text-sm text-gray-400">
          <div className="flex items-center gap-2">
            <Leaf className="w-4 h-4 text-cyan-300" /> Natural Energy Boost
          </div>
          <div className="flex items-center gap-2">
            <Droplets className="w-4 h-4 text-blue-300" /> Electrolyte Enhanced
          </div>
        </div>
      </div>
      <motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6, delay: 0.1 }}
  className="relative"
>
  {/* Glowing background accents */}
  <div className="absolute -top-6 -left-6 w-24 h-24 rounded-full bg-blue-900/80 blur-2xl opacity-80" />
  <div className="absolute -bottom-8 -right-8 w-24 h-24 rounded-full bg-purple-900/80 blur-2xl opacity-80" />

  {/* Bottle container */}
  <div className="aspect-[3/4] rounded-3xl bg-gray-800 shadow-2xl border border-gray-700 p-6 flex items-center justify-center overflow-hidden">
    <div className="relative flex justify-center items-center w-full h-full">
      {/* Glow behind bottle */}
      <div className="absolute w-64 h-64 rounded-full bg-blue-900/70 blur-3xl -top-10 -left-10" />

      {/* Bottle image */}
      <img
        src="/Screenshot 2025-08-26 162606.png" 
        alt="Coolzy Bottle"
        className="max-h-full max-w-full object-contain drop-shadow-[0_0_30px_rgba(96,165,250,0.5)]"
      />
    </div>
  </div>
</motion.div>

     
    </Section>
  </div>
);

const Flavors = () => (
  <Section id="flavors" className="py-16 md:py-24 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-700 rounded-none">
    <div className="flex items-end justify-between gap-4 mb-12">
      <div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-black text-white"
        >
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Power
          </span>{" "}
          Flavors
        </motion.h2>
        <p className="text-gray-400 mt-2">
          Charge up with our electrifying selections
        </p>
      </div>
    </div>

    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {FLAVORS.map((flavor, index) => (
        <motion.div
          key={flavor.name}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: index * 0.05 }}
          className="group rounded-2xl border border-gray-700 overflow-hidden bg-gray-800 shadow-lg hover:shadow-cyan-500/20 transition-all hover:-translate-y-1"
        >
          <div className="relative h-48 overflow-hidden">
            {flavor.badge && (
              <span className="absolute top-3 left-3 z-10 text-xs px-3 py-1 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-medium">
                {flavor.badge}
              </span>
            )}
            <img
              src={flavor.img}
              alt={flavor.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="p-5">
            <div className="flex justify-between items-start">
              <h3 className="font-bold text-lg text-white">{flavor.name}</h3>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < flavor.rating
                        ? "fill-yellow-400 text-yellow-400"
                        : "text-gray-600"
                    }`}
                  />
                ))}
              </div>
            </div>
            <p className="text-sm text-gray-400 mt-1">{flavor.desc}</p>
          </div>
        </motion.div>
      ))}
    </div>

    <div className="mt-12 text-center">
      <motion.button
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
        className="px-8 py-3 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold shadow-lg hover:shadow-cyan-500/30 transition-all"
      >
        View All Flavors
      </motion.button>
    </div>
  </Section>
);

const Story = () => (
  <Section id="story" className="py-16 md:py-24 bg-gradient-to-b from-gray-800 to-gray-900">
    <div className="grid md:grid-cols-2 gap-10 items-center">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Our
          </span>{" "}
          Energy Journey
        </h2>
        <p className="text-gray-300 text-lg leading-relaxed mb-6">
          Born in the labs of passionate flavor scientists, Coolzy was created
          to disrupt the energy drink market. We combine clean focus with
          explosive tropical flavors.
        </p>
        <div className="space-y-4">
          <div className="flex items-start gap-4 p-4 bg-gray-800/50 rounded-xl border border-gray-700">
            <div className="p-2 bg-gray-900 rounded-lg border border-gray-700">
              <Leaf className="w-6 h-6 text-cyan-400" />
            </div>
            <div>
              <h3 className="font-bold text-white">Clean Energy Formula</h3>
              <p className="text-sm text-gray-400 mt-1">
                No crash, no jitters — just pure focus.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4 p-4 bg-gray-800/50 rounded-xl border border-gray-700">
            <div className="p-2 bg-gray-900 rounded-lg border border-gray-700">
              <Sparkles className="w-6 h-6 text-blue-400" />
            </div>
            <div>
              <h3 className="font-bold text-white">Flavor Revolution</h3>
              <p className="text-sm text-gray-400 mt-1">
                Real fruit vibes with cooling electrolytes.
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative"
      >
        <div className="absolute -top-6 -left-6 w-24 h-24 rounded-full bg-blue-900/70 blur-xl opacity-70" />
        <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full bg-cyan-900/70 blur-xl opacity-70" />
        <div className="rounded-2xl overflow-hidden border-2 border-gray-700 shadow-[0_0_30px_-10px_rgba(34,211,238,0.3)]">
          <img
            src="/Screenshot 2025-08-26 143522.png"
            alt="Coolzy lab team"
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>
    </div>
  </Section>
);

const Benefits = () => (
  <Section id="benefits" className="py-16 md:py-24 bg-gradient-to-b from-gray-900 to-gray-800">
    <div className="text-center mb-16">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-black text-white mb-4"
      >
        <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Performance
        </span>{" "}
        Boosters
      </motion.h2>
      <p className="text-gray-400 max-w-2xl mx-auto">
        Engineered for athletes, gamers, and night owls who demand more.
      </p>
    </div>

    <div className="grid md:grid-cols-3 gap-8">
      {[
        {
          icon: <Leaf className="w-6 h-6" />,
          title: "Sustained Energy",
          desc: "Smooth focus without crashes",
          pill: "Natural Caffeine",
          color: "from-green-500 to-cyan-400",
        },
        {
          icon: <Sparkles className="w-6 h-6" />,
          title: "Mental Clarity",
          desc: "Enhanced focus with L-Theanine",
          pill: "Nootropic Blend",
          color: "from-purple-500 to-blue-400",
        },
        {
          icon: <Droplets className="w-6 h-6" />,
          title: "Hydration+",
          desc: "Electrolyte-enhanced absorption",
          pill: "5 Minerals",
          color: "from-blue-500 to-cyan-400",
        },
      ].map((b, i) => (
        <motion.div
          key={b.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.15 }}
          className="group relative overflow-hidden rounded-xl border border-gray-700 bg-gray-800/50 hover:bg-gray-800 transition-all"
        >
          <div
            className={`absolute -top-10 -right-10 w-32 h-32 rounded-full bg-gradient-to-r ${b.color} opacity-20 group-hover:opacity-30 transition-opacity`}
          />
          <div className="p-6 relative z-10">
            <div
              className={`w-12 h-12 rounded-lg mb-4 flex items-center justify-center bg-gradient-to-r ${b.color} text-white`}
            >
              {b.icon}
            </div>
            <h3 className="text-xl font-bold text-white mb-2">{b.title}</h3>
            <p className="text-gray-400 text-sm mb-4">{b.desc}</p>
            <div className="px-3 py-2 bg-gray-900/50 rounded-lg border border-gray-700 inline-block">
              <span
                className={`text-xs font-mono font-bold bg-gradient-to-r ${b.color} bg-clip-text text-transparent`}
              >
                {b.pill}
              </span>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </Section>
);

const Testimonials = () => (
  <Section className="py-16 md:py-24 bg-gradient-to-b from-gray-800 to-gray-900">
    <div className="flex items-end justify-between mb-12">
      <div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-black text-white"
        >
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Real
          </span>{" "}
          Energy, Real Results
        </motion.h2>
        <p className="text-gray-400 mt-2">
          Hear from our community of high-performers
        </p>
      </div>
      <div className="flex gap-3">
        <a
          aria-label="Instagram"
          href="#"
          className="p-2 rounded-xl border border-gray-700 hover:bg-gray-800"
        >
          <Instagram className="w-5 h-5" />
        </a>
        <a
          aria-label="Facebook"
          href="#"
          className="p-2 rounded-xl border border-gray-700 hover:bg-gray-800"
        >
          <Facebook className="w-5 h-5" />
        </a>
        <a
          aria-label="YouTube"
          href="#"
          className="p-2 rounded-xl border border-gray-700 hover:bg-gray-800"
        >
          <Youtube className="w-5 h-5" />
        </a>
      </div>
    </div>

    <div className="grid md:grid-cols-3 gap-6">
      {TESTIMONIALS.map((t, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          className="relative rounded-2xl border border-gray-700 bg-gray-800/50 p-6 shadow-lg hover:shadow-cyan-500/10 transition-all"
        >
          <div className="flex mb-4">
            {[...Array(5)].map((_, index) => (
              <Star
                key={index}
                className={`w-4 h-4 ${
                  index < t.rating
                    ? "fill-yellow-400 text-yellow-400"
                    : "text-gray-700"
                }`}
              />
            ))}
          </div>
          <p className="text-gray-300 italic mb-6">"{t.text}"</p>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 flex items-center justify-center text-white font-bold">
              {t.name.charAt(0)}
            </div>
            <div>
              <h4 className="font-bold text-white">{t.name}</h4>
              <p className="text-xs text-cyan-400">Verified User</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </Section>
);

const FindUs = () => (
  <Section id="find" className="py-16 md:py-24 bg-gradient-to-b from-gray-900 to-gray-800">
    <div className="grid md:grid-cols-2 gap-10 items-center">
      <div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-black text-white mb-6"
        >
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Fuel Up
          </span>{" "}
          Near You
        </motion.h2>
        <div className="grid sm:grid-cols-2 gap-6">
          <div className="rounded-xl border border-gray-700 bg-gray-800/50 p-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 text-white">
                <Store className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-white">Retail Stores</h3>
            </div>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2 text-cyan-400">
                <MapPin className="w-4 h-4" /> Reliance Smart
              </li>
              <li className="flex items-center gap-2 text-cyan-400">
                <MapPin className="w-4 h-4" /> BigBazaar
              </li>
              <li className="flex items-center gap-2 text-cyan-400">
                <MapPin className="w-4 h-4" /> More MegaStore
              </li>
            </ul>
          </div>

          <div className="rounded-xl border border-gray-700 bg-gray-800/50 p-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 rounded-lg bg-gradient-to-r from-purple-600 to-blue-500 text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </div>
              <h3 className="font-bold text-white">Online Delivery *coming soon*</h3>
            </div>
            <ul className="space-y-2 text-sm text-blue-400">
              <li>Amazon India</li>
              <li>Flipkart</li>
              <li>Zepto</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="relative h-full min-h-[400px] rounded-2xl overflow-hidden border-2 border-gray-700">
        <div className="absolute inset-0 bg-gray-800 flex items-center justify-center">
          <div className="text-center p-6">
            <MapPin className="w-12 h-12 mx-auto text-cyan-400 mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">
              Find Nearest Store
            </h3>
            <p className="text-gray-400 mb-4">
              Enter your location to find Coolzy energy near you
            </p>
            <div className="relative max-w-md mx-auto">
              <input
                type="text"
                placeholder="Enter your city or PIN code"
                className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-3 py-1 rounded-md text-sm">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Section>
);

const Contact = () => (
  <Section id="contact" className="py-16 md:py-24 bg-gradient-to-b from-gray-800 to-gray-900">
    <div className="grid md:grid-cols-2 gap-10">
      <div>
        <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Get in
          </span>{" "}
          Touch
        </h2>
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 text-white">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-white">Email Us</h3>
              <a href="mailto:hello@coolzy.com" className="text-cyan-400 hover:underline">
                hello@coolzy.com
              </a>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 text-white">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-white">Call Us</h3>
              <a href="tel:+919990683273" className="text-cyan-400 hover:underline">
                +91 999 068 3273
              </a>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 text-white">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-white">Visit Us</h3>
              <p className="text-gray-400">
                123 Energy Lane, Tech Park
                <br />
                Greater Noida, India
              </p>
            </div>
          </div>
        </div>
      </div>

      <form className="rounded-2xl border border-gray-700 bg-gray-800/50 p-6 shadow-lg">
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-gray-400 mb-1">Name</label>
            <input
              type="text"
              className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-1">Email</label>
            <input
              type="email"
              className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
              placeholder="your@email.com"
            />
          </div>
        </div>
        <div className="mt-4">
          <label className="block text-sm text-gray-400 mb-1">Message</label>
          <textarea
            className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 h-32"
            placeholder="Your message..."
          />
        </div>
        <button
          type="submit"
          className="mt-6 w-full py-3 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold shadow-lg hover:shadow-cyan-500/30 transition-all"
        >
          Send Message
        </button>
      </form>
    </div>
  </Section>
);

const Footer = () => (
  <footer className="border-t border-gray-800 bg-gray-900">
    <Section className="py-10">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Droplets className="w-6 h-6 text-cyan-400" />
          <span className="text-white font-bold text-lg">Coolzy</span>
        </div>
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} Coolzy Energy. All rights reserved.
        </p>
        <div className="flex gap-4 text-gray-400">
          <a href="#" className="hover:text-cyan-400 text-sm">Privacy</a>
          <a href="#" className="hover:text-cyan-400 text-sm">Terms</a>
          <a href="#" className="hover:text-cyan-400 text-sm">FAQs</a>
        </div>
      </div>
    </Section>
  </footer>
);

// ---------- App ----------
export default function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <Nav />
      <Hero />
      <Flavors />
      <Story />
      <Benefits />
      <Testimonials />
      <FindUs />
      <Contact />
      <Footer />
    </div>
  );
}
