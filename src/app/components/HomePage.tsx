import { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform, useInView } from "motion/react";
import logoImg from "../../imports/crowd-arts-pr-2.png";
import { ArrowRight, ExternalLink, Mail, Phone, ChevronDown } from "lucide-react";

import page2Img1 from "../../imports/pdf_images/page2_img1.jpeg";
import page3Img2 from "../../imports/pdf_images/page3_img2.jpeg";
import page4Img1 from "../../imports/pdf_images/page4_img1.jpeg";
import page5Img1 from "../../imports/pdf_images/page5_img1.jpeg";
import page7Img1 from "../../imports/pdf_images/page7_img1.jpeg";
import page9Img1 from "../../imports/pdf_images/page9_img1.jpeg";
import page10Img1 from "../../imports/pdf_images/page10_img1.jpeg";

const heroImg = page2Img1;
const carnivalImg = page9Img1;
const mexeImg = page5Img1;
const vinaImg = page10Img1;
const latinImg = page7Img1;
const brazilMediaImg = page4Img1;
const chileMexicoImg = page3Img2;

function AnimatedText({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60, filter: "blur(8px)" }}
      animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
      transition={{ duration: 0.8, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function CountUp({ target, suffix = "" }: { target: string; suffix?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [val, setVal] = useState("0");

  useEffect(() => {
    if (!isInView) return;
    const num = parseFloat(target.replace(/[^0-9.]/g, ""));
    const prefix = target.replace(/[0-9.]/g, "").replace(suffix, "");
    let start = 0;
    const duration = 2000;
    const startTime = Date.now();
    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      start = num * eased;
      setVal(prefix + (num >= 100 ? Math.floor(start).toLocaleString() : start.toFixed(1)));
      if (progress < 1) requestAnimationFrame(animate);
    };
    animate();
  }, [isInView, target, suffix]);

  return <span ref={ref}>{val}{suffix}</span>;
}

// Hero
function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div ref={containerRef} className="relative">
    <section className="relative h-screen overflow-hidden flex items-center justify-center pt-20 md:pt-24">
      {/* BG */}
      <motion.div className="absolute inset-0" style={{ y }}>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${heroImg})`,
            filter: "saturate(0.3) contrast(1.3) brightness(0.3)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#080808]/60 via-transparent to-[#080808]" />
      </motion.div>

      {/* Content */}
      <motion.div className="relative z-10 px-6 md:px-12 max-w-[1400px] w-full mt-8" style={{ opacity }}>
        <div className="overflow-hidden">
          <motion.h1
            className="font-[Montserrat] text-[clamp(2.5rem,7vw,6.5rem)] text-white leading-[0.9] tracking-[-0.04em]"
            style={{ fontWeight: 800 }}
            initial={{ y: "110%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            BREAKING
          </motion.h1>
        </div>
        <div className="overflow-hidden">
          <motion.h1
            className="font-[Montserrat] text-[clamp(2.5rem,7vw,6.5rem)] text-white leading-[0.9] tracking-[-0.04em]"
            style={{ fontWeight: 800 }}
            initial={{ y: "110%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1.2, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            BARRIERS.
          </motion.h1>
        </div>
        <div className="overflow-hidden">
          <motion.h1
            className="font-[Montserrat] text-[clamp(2.5rem,7vw,6.5rem)] text-[#FF2D2D] leading-[0.9] tracking-[-0.04em]"
            style={{ fontWeight: 800 }}
            initial={{ y: "110%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            SETTING
          </motion.h1>
        </div>
        <div className="overflow-hidden">
          <motion.h1
            className="font-[Montserrat] text-[clamp(2.5rem,7vw,6.5rem)] text-[#FF2D2D] leading-[0.9] tracking-[-0.04em]"
            style={{ fontWeight: 800 }}
            initial={{ y: "110%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1.2, delay: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            RECORDS.
          </motion.h1>
        </div>

        <motion.p
          className="font-[Space_Grotesk] text-white/50 mt-8 max-w-lg text-[0.95rem] tracking-wide"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
        >
          Boutique PR agency bridging K-pop and Latin American culture.
          <br />Multi-territory 360 campaigns. Cultural strategy. Record-breaking results.
        </motion.p>

        <motion.div
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ChevronDown className="w-6 h-6 text-white/30" />
        </motion.div>
      </motion.div>
    </section>
    </div>
  );
}

// Marquee
function Marquee() {
  return (
    <div className="bg-[#FF2D2D] py-3 overflow-hidden">
      <motion.div
        className="flex whitespace-nowrap gap-12"
        animate={{ x: [0, "-50%"] }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
      >
        {[...Array(2)].map((_, i) => (
          <span key={i} className="font-[Space_Grotesk] text-[#080808] text-sm tracking-[0.3em] uppercase">
            NMIXX &bull; Brazilian Carnival &bull; Vi&ntilde;a del Mar &bull; MEXE &bull; Pabllo Vittar &bull; JYP Entertainment &bull; Billboard Brasil &bull; Blue Valentine &bull; Latin Tour 2025 &bull; Gaviota de Oro &bull;&nbsp;
            NMIXX &bull; Brazilian Carnival &bull; Vi&ntilde;a del Mar &bull; MEXE &bull; Pabllo Vittar &bull; JYP Entertainment &bull; Billboard Brasil &bull; Blue Valentine &bull; Latin Tour 2025 &bull; Gaviota de Oro &bull;&nbsp;
          </span>
        ))}
      </motion.div>
    </div>
  );
}

// About
function About() {
  return (
    <section className="px-6 md:px-12 py-32 max-w-[1400px] mx-auto">
      <div className="grid md:grid-cols-2 gap-16 items-start">
        <AnimatedText>
          <p className="font-[Space_Grotesk] text-white/40 text-xs tracking-[0.4em] uppercase mb-4">The Agency</p>
          <h2 className="font-[Montserrat] text-white text-[clamp(2rem,5vw,4.5rem)] leading-[1.05] tracking-[-0.03em]" style={{ fontWeight: 800 }}>
            THE PRIMARY <span className="text-[#FF2D2D]">LIAISON</span> BETWEEN SOUTH KOREAN MANAGEMENT & LATIN AMERICA
          </h2>
        </AnimatedText>
        <AnimatedText delay={0.2}>
          <p className="font-[Space_Grotesk] text-white/60 leading-relaxed mt-4 text-[0.95rem]">
            Crowd Arts PR acts as the primary liaison between South Korean management (JYP) and Latin American stakeholders to ensure flawless execution. A multi-territory 360 PR campaign combining mainstream media presence, high-stakes festival negotiations, and strategic cultural crossovers.
          </p>
          <p className="font-[Space_Grotesk] text-white/60 leading-relaxed mt-4 text-[0.95rem]">
            Establishing NMIXX as a household name in the diverse markets of Mexico, Chile, and Brazil by bridging the gap between K-pop global standards and local cultural nuances.
          </p>
        </AnimatedText>
      </div>
    </section>
  );
}

// Stats
function Stats() {
  const stats = [
    { value: "2", suffix: "M", label: "Live Audience at Carnival" },
    { value: "100", suffix: "M+", label: "Total Impressions (MEXE)" },
    { value: "4.5", suffix: "M+", label: "Live Viewers (Viña del Mar)" },
    { value: "1000", suffix: "+", label: "Media Articles" },
    { value: "3.2", suffix: "M USD", label: "Earned Media Value" },
    { value: "150", suffix: "+", label: "Organic Placements (Chile)" },
  ];

  return (
    <section className="px-6 md:px-12 py-20 border-t border-b border-white/10">
      <div className="max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
        {stats.map((s, i) => (
          <AnimatedText key={s.label} delay={i * 0.1} className="text-center">
            <div className="font-[Montserrat] text-[clamp(2rem,4vw,3.5rem)] text-[#FF2D2D]" style={{ fontWeight: 800 }}>
              <CountUp target={s.value} suffix={s.suffix} />
            </div>
            <p className="font-[Space_Grotesk] text-white/40 text-xs tracking-wider mt-1 uppercase">{s.label}</p>
          </AnimatedText>
        ))}
      </div>
    </section>
  );
}

// Cases
const cases = [
  {
    id: "carnival",
    tag: "BRAZIL 2026",
    title: "NMIXX @ BRAZILIAN CARNIVAL",
    subtitle: "First K-Pop act in history to perform at Brazilian Carnival",
    img: carnivalImg,
    metrics: ["2M Live Audience", "1.2M+ Mentions", "1,000+ Media Articles", "400% Google Surge"],
  },
  {
    id: "mexe",
    tag: "GLOBAL COLLAB",
    title: "MEXE: NMIXX x PABLLO VITTAR",
    subtitle: "Strategic Cultural Consulting & Curation",
    img: mexeImg,
    metrics: ["100M+ Impressions", "Top Charts LatAm", "4 Countries", "Genre-Bending Hit"],
  },
  {
    id: "vina",
    tag: "CHILE 2025",
    title: "VIÑA DEL MAR MILESTONE",
    subtitle: "The Ultimate Booking Milestone",
    img: vinaImg,
    metrics: ["Gaviota de Oro & Plata", "4.5M+ Live Viewers", "$3.2M USD EMV", "90% Retention"],
  },
  {
    id: "blue-valentine",
    tag: "CAMPAIGN 2025",
    title: '"BLUE VALENTINE" & LATIN AMERICA',
    subtitle: "From Niche to Mainstream Artistic Force",
    img: latinImg,
    metrics: ["100+ Placements", "85% Approval", "+42% Social Surge", "13.2M Creator Reach"],
  },
  {
    id: "brazil-media",
    tag: "BRAZIL MEDIA",
    title: "BRAZIL — MAINSTREAM INTEGRATION",
    subtitle: "Consolidating Influence in South America's Largest Market",
    img: brazilMediaImg,
    metrics: ["Record News Feature", "Billboard Brasil", "MTV Brazil", "Gen Z Focus"],
  },
  {
    id: "chile-mexico",
    tag: "CHILE & MEXICO",
    title: "HISTORY IN THE MAKING",
    subtitle: "From Iconic Festivals to Cultural Crossovers",
    img: chileMexicoImg,
    metrics: ["150+ Placements (CL)", "50M+ Reach", "100+ Placements (MX)", "5M+ Reach (MX)"],
  },
];

function CasesSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section className="py-32">
      <div className="px-6 md:px-12 max-w-[1400px] mx-auto mb-12">
        <AnimatedText>
          <p className="font-[Space_Grotesk] text-[#FF2D2D] text-xs tracking-[0.4em] uppercase mb-4">Case Studies</p>
          <h2 className="font-[Montserrat] text-white text-[clamp(2rem,5vw,4.5rem)] leading-[1.05] tracking-[-0.03em]" style={{ fontWeight: 800 }}>
            THE SOUL
          </h2>
        </AnimatedText>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto px-6 md:px-12 pb-8 snap-x snap-mandatory scrollbar-hide"
        style={{ scrollbarWidth: "none" }}
      >
        {cases.map((c, i) => (
          <CaseCard key={c.id} data={c} index={i} />
        ))}
      </div>
    </section>
  );
}

function CaseCard({ data, index }: { data: typeof cases[0]; index: number }) {
  return (
    <motion.div
      className="snap-start flex-shrink-0 w-[85vw] md:w-[600px] lg:w-[700px] group"
      initial={{ opacity: 0, x: 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, delay: index * 0.1 }}
    >
      <Link to={`/case/${data.id}`}>
        <div className="relative overflow-hidden border border-white/10 bg-[#0c0c0c] hover:border-[#FF2D2D]/30 transition-all duration-300">
          {/* Image */}
          <div className="relative h-[300px] md:h-[380px] overflow-hidden">
            <motion.img
              src={data.img}
              alt={data.title}
              className="w-full h-full object-cover"
              style={{ filter: "saturate(0.4) contrast(1.2) brightness(0.6)" }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.6 }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0c] via-[#0c0c0c]/30 to-transparent" />
            <span className="absolute top-4 left-4 font-[Space_Grotesk] text-[#FF2D2D] text-[0.65rem] tracking-[0.3em] uppercase border border-[#FF2D2D]/30 px-3 py-1 bg-[#080808]/70 backdrop-blur-sm">
              {data.tag}
            </span>
          </div>

          {/* Text */}
          <div className="p-6 md:p-8">
            <h3 className="font-[Montserrat] text-white text-[clamp(1.3rem,3vw,2rem)] leading-tight tracking-[-0.02em]" style={{ fontWeight: 800 }}>
              {data.title}
            </h3>
            <p className="font-[Space_Grotesk] text-white/40 text-sm mt-1">{data.subtitle}</p>

            {/* Metrics */}
            <div className="grid grid-cols-2 gap-3 mt-6">
              {data.metrics.map((m) => (
                <div key={m} className="border border-white/10 px-3 py-2 bg-white/[0.02]">
                  <span className="font-[Space_Grotesk] text-white text-xs tracking-wide">{m}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-2 mt-6 text-[#FF2D2D] group-hover:translate-x-2 transition-transform">
              <span className="font-[Space_Grotesk] text-xs tracking-wider uppercase">
                View Case Study
              </span>
              <ArrowRight className="w-3 h-3" />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

// Services
function Services() {
  const services = [
    {
      num: "01",
      title: "Strategic Booking & Liaison",
      desc: "Primary intermediary between Korean management and Latin American festival organizers, media, and stakeholders. Direct negotiation for historic bookings.",
    },
    {
      num: "02",
      title: "Mass Media Penetration",
      desc: "Securing features on mainstream television (Record News, Globo TV, Band Folia), primetime radio (LOS40), and Tier-1 publications (Billboard Brasil, El Heraldo, Omelete).",
    },
    {
      num: "03",
      title: "Influence Marketing",
      desc: "Expert curation of local influencers across TikTok, Instagram, and YouTube. Bespoke content that resonates with the Gen Z demographic across multiple territories.",
    },
    {
      num: "04",
      title: "Strategic Cultural Consulting",
      desc: "Data-driven curation & cultural alignment. Identifying the perfect match for cross-cultural collaborations. Mediating creative bridges between global artists.",
    },
    {
      num: "05",
      title: "Viral Narrative & PR",
      desc: "Positioning collaborations as milestones in the 'New Global Pop.' High-impact challenges and storytelling that drive organic trending topics worldwide.",
    },
    {
      num: "06",
      title: "360 Campaign Execution",
      desc: "Multi-territory campaigns combining media presence, festival negotiations, influencer strategy, and cultural crossovers. Flawless execution across Mexico, Chile, Brazil, Argentina, and Colombia.",
    },
  ];

  return (
    <section className="px-6 md:px-12 py-32 border-t border-white/10">
      <div className="max-w-[1400px] mx-auto">
        <AnimatedText>
          <p className="font-[Space_Grotesk] text-[#FF2D2D] text-xs tracking-[0.4em] uppercase mb-4">The Edge</p>
          <h2 className="font-[Montserrat] text-white text-[clamp(2rem,5vw,4.5rem)] leading-[1.05] tracking-[-0.03em] mb-16" style={{ fontWeight: 800 }}>
            OUR SERVICES
          </h2>
        </AnimatedText>

        <div className="space-y-0">
          {services.map((s, i) => (
            <AnimatedText key={s.num} delay={i * 0.08}>
              <motion.div
                className="border-t border-white/10 py-8 md:py-10 grid md:grid-cols-[80px_1fr_1.5fr] gap-4 md:gap-8 items-start group cursor-pointer"
                whileHover={{ x: 12 }}
                transition={{ duration: 0.3 }}
              >
                <span className="font-[Space_Grotesk] text-white/20 text-sm">{s.num}</span>
                <h3 className="font-[Montserrat] text-white text-[clamp(1.2rem,2.5vw,1.8rem)] group-hover:text-[#FF2D2D] transition-colors duration-300" style={{ fontWeight: 700 }}>
                  {s.title}
                </h3>
                <p className="font-[Space_Grotesk] text-white/40 text-sm leading-relaxed">{s.desc}</p>
              </motion.div>
            </AnimatedText>
          ))}
          <div className="border-t border-white/10" />
        </div>
      </div>
    </section>
  );
}

// Impact Section
function ImpactSection() {
  return (
    <section className="px-6 md:px-12 py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-[#FF2D2D]" />
      <div className="absolute inset-0" style={{ backgroundImage: `url(${carnivalImg})`, backgroundSize: "cover", backgroundPosition: "center", filter: "saturate(0) contrast(1.5) brightness(0.15)", mixBlendMode: "multiply" }} />
      <div className="relative z-10 max-w-[1400px] mx-auto">
        <AnimatedText>
          <p className="font-[Space_Grotesk] text-[#080808] text-xs tracking-[0.4em] uppercase mb-4">Global Impact</p>
          <h2 className="font-[Montserrat] text-[#080808] text-[clamp(2rem,5vw,4.5rem)] leading-[1.05] tracking-[-0.03em] mb-12" style={{ fontWeight: 800 }}>
            DRIVING GLOBAL VIRALITY THROUGH STRATEGIC INFLUENCE
          </h2>
        </AnimatedText>

        <div className="grid md:grid-cols-2 gap-12">
          <AnimatedText delay={0.2}>
            <div className="space-y-6">
              {[
                { label: "Cross-Border Reach", text: "Curated a premium network of creators across Mexico, Argentina, Chile, and the USA." },
                { label: "Global Resonance", text: "Bespoke content tailored to resonate with diverse fanbases, ensuring the 'MEXE' movement felt local in every territory." },
                { label: "Platform Dominance", text: "High-impact challenges and storytelling across TikTok, Instagram, and YouTube." },
              ].map((item) => (
                <div key={item.label}>
                  <span className="font-[Space_Grotesk] text-[#080808] text-sm tracking-wider" style={{ fontWeight: 700 }}>{item.label}</span>
                  <p className="font-[Space_Grotesk] text-[#080808]/70 text-sm mt-1 leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </AnimatedText>
          <AnimatedText delay={0.3}>
            <div className="space-y-6">
              {[
                { label: "Viral Momentum", text: "100M+ Total Impressions across the Americas." },
                { label: "Chart Power", text: "Top charts entries and massive streaming spikes in key LatAm markets." },
                { label: "Cultural Authority", text: "Solidified NMIXX as a global player by merging K-pop with Western digital culture." },
                { label: "Market Expansion", text: "Active engagement hubs in Brazil, Mexico, Argentina, Colombia, and Chile." },
              ].map((item) => (
                <div key={item.label}>
                  <span className="font-[Space_Grotesk] text-[#080808] text-sm tracking-wider" style={{ fontWeight: 700 }}>{item.label}</span>
                  <p className="font-[Space_Grotesk] text-[#080808]/70 text-sm mt-1 leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </AnimatedText>
        </div>
      </div>
    </section>
  );
}

// Footer
function Footer() {
  return (
    <footer className="px-6 md:px-12 py-32 border-t border-white/10">
      <div className="max-w-[1400px] mx-auto">
        <AnimatedText>
          <p className="font-[Space_Grotesk] text-[#FF2D2D] text-xs tracking-[0.4em] uppercase mb-6">Let's Work Together</p>
          <h2 className="font-[Montserrat] text-white text-[clamp(2.5rem,6vw,6rem)] leading-[0.95] tracking-[-0.04em] max-w-[900px]" style={{ fontWeight: 800 }}>
            JOIN THE MOVEMENT
          </h2>
        </AnimatedText>

        <AnimatedText delay={0.2}>
          <div className="mt-12 flex flex-col md:flex-row gap-8">
            <a
              href="mailto:beatriz@crowdartspr.com"
              className="group flex items-center gap-3 border border-white/20 px-6 py-4 hover:border-[#FF2D2D] hover:bg-[#FF2D2D]/5 transition-all duration-300"
            >
              <Mail className="w-5 h-5 text-[#FF2D2D]" />
              <span className="font-[Space_Grotesk] text-white text-sm">beatriz@crowdartspr.com</span>
              <ArrowRight className="w-4 h-4 text-white/30 group-hover:text-[#FF2D2D] group-hover:translate-x-1 transition-all ml-auto" />
            </a>
            <a
              href="tel:+5511947094768"
              className="group flex items-center gap-3 border border-white/20 px-6 py-4 hover:border-[#FF2D2D] hover:bg-[#FF2D2D]/5 transition-all duration-300"
            >
              <Phone className="w-5 h-5 text-[#FF2D2D]" />
              <span className="font-[Space_Grotesk] text-white text-sm">+55 11 94709-4768</span>
              <ArrowRight className="w-4 h-4 text-white/30 group-hover:text-[#FF2D2D] group-hover:translate-x-1 transition-all ml-auto" />
            </a>
          </div>
        </AnimatedText>

        <div className="mt-24 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <img src={logoImg} alt="Crowd Arts PR" className="w-24 opacity-40" />
          <p className="font-[Space_Grotesk] text-white/20 text-xs tracking-wider">
            CROWD ARTS PR &copy; 2026. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

// Nav
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handle = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handle);
    return () => window.removeEventListener("scroll", handle);
  }, []);

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-4 flex items-center justify-between transition-all duration-500"
      style={{ backgroundColor: scrolled ? "rgba(8,8,8,0.9)" : "transparent", backdropFilter: scrolled ? "blur(12px)" : "none" }}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
    >
      <Link to="/">
        <img src={logoImg} alt="Crowd Arts PR" className="w-20 md:w-28 opacity-80" />
      </Link>
      <Link
        to="/contact"
        className="font-[Space_Grotesk] text-white/60 text-xs tracking-[0.2em] uppercase hover:text-[#FF2D2D] transition-colors flex items-center gap-2"
      >
        <span className="hidden md:inline">Contact</span>
        <ExternalLink className="w-3 h-3" />
      </Link>
    </motion.nav>
  );
}

export function HomePage() {
  return (
    <>
      <Nav />
      <Hero />
      <Marquee />
      <About />
      <Stats />
      <CasesSection />
      <ImpactSection />
      <Services />
      <Footer />
    </>
  );
}
