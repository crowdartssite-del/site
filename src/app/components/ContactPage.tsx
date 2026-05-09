import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowLeft, Mail, Phone, MapPin, Send, Instagram, Linkedin } from "lucide-react";
import logoImg from "../../imports/crowd-arts-pr-2.png";

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    window.location.href = `mailto:beatriz@crowdartspr.com?subject=Contact from ${formData.name}&body=${formData.message}`;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-[#080808] text-white">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-4 flex items-center justify-between bg-[#080808]/90 backdrop-blur-xl border-b border-white/10">
        <Link to="/">
          <img src={logoImg} alt="Crowd Arts PR" className="w-20 md:w-28 opacity-80 hover:opacity-100 transition-opacity" />
        </Link>
        <Link
          to="/"
          className="font-[Space_Grotesk] text-white/60 text-xs tracking-[0.2em] uppercase hover:text-[#FF2D2D] transition-colors flex items-center gap-2"
        >
          <ArrowLeft className="w-3 h-3" />
          <span className="hidden md:inline">Back to Home</span>
        </Link>
      </nav>

      {/* Hero */}
      <section className="relative pt-32 pb-20 px-6 md:px-12">
        <div className="max-w-[1400px] mx-auto">
          <motion.span
            className="font-[Space_Grotesk] text-[#FF2D2D] text-xs tracking-[0.4em] uppercase border border-[#FF2D2D]/30 px-3 py-1.5 bg-[#080808]/70 backdrop-blur-sm inline-block mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Get In Touch
          </motion.span>
          <motion.h1
            className="font-[Montserrat] text-[clamp(2.5rem,7vw,6rem)] text-white leading-[0.95] tracking-[-0.04em] max-w-4xl"
            style={{ fontWeight: 800 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            LET'S CREATE HISTORY TOGETHER
          </motion.h1>
          <motion.p
            className="font-[Space_Grotesk] text-white/60 text-lg mt-6 max-w-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Ready to break barriers and set records in Latin America? Reach out to discuss your next groundbreaking campaign.
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-6 md:px-12 py-12">
        <div className="max-w-[1400px] mx-auto grid md:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <h2 className="font-[Montserrat] text-white text-[clamp(1.5rem,3vw,2.5rem)] leading-tight tracking-[-0.03em] mb-8" style={{ fontWeight: 800 }}>
              Contact Information
            </h2>

            <div className="space-y-6">
              <motion.a
                href="mailto:beatriz@crowdartspr.com"
                className="group flex items-start gap-4 border border-white/10 p-6 bg-white/[0.02] hover:border-[#FF2D2D]/30 hover:bg-[#FF2D2D]/5 transition-all duration-300"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Mail className="w-5 h-5 text-[#FF2D2D] flex-shrink-0 mt-1" />
                <div>
                  <p className="font-[Space_Grotesk] text-white/40 text-xs tracking-wider uppercase mb-1">Email</p>
                  <p className="font-[Space_Grotesk] text-white text-base">beatriz@crowdartspr.com</p>
                </div>
              </motion.a>

              <motion.a
                href="tel:+5511947094768"
                className="group flex items-start gap-4 border border-white/10 p-6 bg-white/[0.02] hover:border-[#FF2D2D]/30 hover:bg-[#FF2D2D]/5 transition-all duration-300"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <Phone className="w-5 h-5 text-[#FF2D2D] flex-shrink-0 mt-1" />
                <div>
                  <p className="font-[Space_Grotesk] text-white/40 text-xs tracking-wider uppercase mb-1">Phone</p>
                  <p className="font-[Space_Grotesk] text-white text-base">+55 11 94709-4768</p>
                </div>
              </motion.a>

              <motion.div
                className="flex items-start gap-4 border border-white/10 p-6 bg-white/[0.02]"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <MapPin className="w-5 h-5 text-[#FF2D2D] flex-shrink-0 mt-1" />
                <div>
                  <p className="font-[Space_Grotesk] text-white/40 text-xs tracking-wider uppercase mb-1">Location</p>
                  <p className="font-[Space_Grotesk] text-white text-base">São Paulo, Brazil</p>
                  <p className="font-[Space_Grotesk] text-white/60 text-sm mt-1">Serving Latin America & Global Markets</p>
                </div>
              </motion.div>
            </div>

            <div className="mt-12">
              <h3 className="font-[Montserrat] text-white text-xl mb-4" style={{ fontWeight: 700 }}>Follow Us</h3>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-12 h-12 border border-white/10 flex items-center justify-center hover:border-[#FF2D2D] hover:bg-[#FF2D2D]/10 transition-all duration-300"
                >
                  <Instagram className="w-5 h-5 text-white" />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 border border-white/10 flex items-center justify-center hover:border-[#FF2D2D] hover:bg-[#FF2D2D]/10 transition-all duration-300"
                >
                  <Linkedin className="w-5 h-5 text-white" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="font-[Montserrat] text-white text-[clamp(1.5rem,3vw,2.5rem)] leading-tight tracking-[-0.03em] mb-8" style={{ fontWeight: 800 }}>
              Send us a Message
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="font-[Space_Grotesk] text-white/60 text-xs tracking-wider uppercase mb-2 block">
                  Your Name *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-transparent border border-white/10 px-4 py-3 text-white font-[Space_Grotesk] focus:border-[#FF2D2D] focus:outline-none transition-colors"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="font-[Space_Grotesk] text-white/60 text-xs tracking-wider uppercase mb-2 block">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-transparent border border-white/10 px-4 py-3 text-white font-[Space_Grotesk] focus:border-[#FF2D2D] focus:outline-none transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="font-[Space_Grotesk] text-white/60 text-xs tracking-wider uppercase mb-2 block">
                  Company / Artist Name
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full bg-transparent border border-white/10 px-4 py-3 text-white font-[Space_Grotesk] focus:border-[#FF2D2D] focus:outline-none transition-colors"
                  placeholder="Your Company"
                />
              </div>

              <div>
                <label className="font-[Space_Grotesk] text-white/60 text-xs tracking-wider uppercase mb-2 block">
                  Your Message *
                </label>
                <textarea
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full bg-transparent border border-white/10 px-4 py-3 text-white font-[Space_Grotesk] focus:border-[#FF2D2D] focus:outline-none transition-colors resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full md:w-auto inline-flex items-center justify-center gap-3 border border-[#FF2D2D] bg-[#FF2D2D]/10 px-8 py-4 hover:bg-[#FF2D2D] hover:text-[#080808] transition-all duration-300 group"
              >
                <span className="font-[Space_Grotesk] text-sm tracking-wider uppercase">Send Message</span>
                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="px-6 md:px-12 py-20 border-t border-white/10 mt-20">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="font-[Montserrat] text-white text-[clamp(2rem,4vw,3.5rem)] leading-tight tracking-[-0.03em] mb-12 text-center" style={{ fontWeight: 800 }}>
            Why Work With Us?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Cultural Expertise",
                desc: "Deep understanding of both K-pop global standards and Latin American cultural nuances. We speak both languages — literally and culturally.",
              },
              {
                title: "Proven Track Record",
                desc: "First-ever achievements, record-breaking results, and mainstream media penetration across Brazil, Chile, Mexico, Argentina, and Colombia.",
              },
              {
                title: "360° Approach",
                desc: "From festival bookings to influencer strategy, from mass media to cultural crossovers — we handle every aspect of your Latin American expansion.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                className="border border-white/10 p-8 bg-white/[0.02] hover:border-[#FF2D2D]/30 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <h3 className="font-[Montserrat] text-[#FF2D2D] text-xl mb-3" style={{ fontWeight: 700 }}>
                  {item.title}
                </h3>
                <p className="font-[Space_Grotesk] text-white/60 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
