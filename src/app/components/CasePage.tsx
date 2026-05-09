import { useParams, Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowLeft, ExternalLink } from "lucide-react";
import logoImg from "../../imports/crowd-arts-pr-2.png";

import page2Img1 from "../../imports/pdf_images/page2_img1.jpeg";
import page3Img1 from "../../imports/pdf_images/page3_img1.jpeg";
import page3Img2 from "../../imports/pdf_images/page3_img2.jpeg";
import page3Img3 from "../../imports/pdf_images/page3_img3.jpeg";
import page4Img1 from "../../imports/pdf_images/page4_img1.jpeg";
import page4Img2 from "../../imports/pdf_images/page4_img2.jpeg";
import page4Img3 from "../../imports/pdf_images/page4_img3.jpeg";
import page4Img4 from "../../imports/pdf_images/page4_img4.jpeg";
import page4Img5 from "../../imports/pdf_images/page4_img5.jpeg";
import page5Img1 from "../../imports/pdf_images/page5_img1.jpeg";
import page6Img1 from "../../imports/pdf_images/page6_img1.jpeg";
import page7Img1 from "../../imports/pdf_images/page7_img1.jpeg";
import page8Img2 from "../../imports/pdf_images/page8_img2.jpeg";
import page9Img1 from "../../imports/pdf_images/page9_img1.jpeg";
import page10Img1 from "../../imports/pdf_images/page10_img1.jpeg";

const casesData: Record<string, any> = {
  carnival: {
    id: "carnival",
    tag: "BRAZIL 2026",
    title: "NMIXX @ BRAZILIAN CARNIVAL",
    subtitle: "First K-Pop act in history to perform at Brazilian Carnival",
    img: page9Img1,
    gallery: [page2Img1],
    metrics: ["2M Live Audience", "1.2M+ Mentions", "1,000+ Media Articles", "400% Google Surge"],
    description: "Performed live for 2 million people at Bloco da Pabllo in Sao Paulo — the largest live audience ever for a K-Pop act. 'NMIXX IN BRAZIL' dominated Global Trending Topics.",
    challenge: "Breaking into Brazilian Carnival — one of the world's most culturally sacred events — as the first K-pop act ever. The challenge was not only securing the booking but ensuring NMIXX could authentically connect with an audience of 2 million live attendees and millions more watching globally.",
    solution: "We positioned NMIXX as cultural pioneers by partnering with Pabllo Vittar for the 'Bloco da Pabllo' performance. This strategic collaboration bridged K-pop precision with Brazilian carnival energy, creating an unprecedented cultural moment.",
    results: [
      { label: "Live Audience", value: "2,000,000", desc: "Largest live audience ever for a K-Pop act" },
      { label: "Social Mentions", value: "1.2M+", desc: "'NMIXX IN BRAZIL' dominated global trending" },
      { label: "Media Coverage", value: "1,000+", desc: "Articles from Billboard to CNN & Globo" },
      { label: "Google Searches", value: "+400%", desc: "Surge in NMIXX searches across Brazil" },
    ],
    details: [
      {
        label: "TIC TIC Performance",
        text: "The performance of 'TIC TIC' at Carnival generated 1.4M+ streams in the first week, establishing the track as a Brazilian anthem and proving K-pop's ability to resonate in Latin markets."
      },
      {
        label: "Influencer Mastery",
        text: "Strategic collaborations with Julia K Barni, Sandrinha, and New Crias generated 2.3M+ views on TikTok and 1M+ views on Instagram per post. Each creator brought their unique audience, ensuring organic virality across multiple demographics."
      },
      {
        label: "Mainstream TV Domination",
        text: "Secured nationwide coverage on Band Folia and Globo TV, bringing K-pop to Brazilian living rooms and establishing NMIXX as a household name beyond digital platforms."
      },
      {
        label: "Cultural Integration",
        text: "Beyond the performance, we facilitated backstage content, interviews, and fan meet moments that showcased NMIXX's genuine appreciation for Brazilian culture, creating lasting emotional connections."
      }
    ],
  },
  mexe: {
    id: "mexe",
    tag: "GLOBAL COLLAB",
    title: "MEXE: NMIXX x PABLLO VITTAR",
    subtitle: "Strategic Cultural Consulting & Curation",
    img: page5Img1,
    gallery: [page6Img1],
    metrics: ["100M+ Impressions", "Top Charts LatAm", "4 Countries", "Genre-Bending Hit"],
    description: "Crowd Arts PR led the strategic matchmaking to identify the ultimate Latin icon for NMIXX's global expansion. The result: 'MEXE' — a genre-bending global hit that broke the internet.",
    challenge: "Identifying the perfect Latin American artist to collaborate with NMIXX for their global expansion. The partnership needed to feel authentic, culturally relevant, and commercially viable across multiple territories.",
    solution: "After extensive market research and cultural analysis, we identified Pabllo Vittar — the world's most-followed drag queen and a Brazilian pop icon — as the perfect match. The collaboration merged K-pop precision with Brazilian 'Balanco', creating a unique sound that resonated globally.",
    results: [
      { label: "Total Impressions", value: "100M+", desc: "Across the Americas and globally" },
      { label: "Chart Performance", value: "Top 10", desc: "In key Latin American markets" },
      { label: "Territory Reach", value: "4", desc: "Countries with major impact" },
      { label: "Creator Network", value: "Premium", desc: "Curated influencers across regions" },
    ],
    details: [
      {
        label: "The Perfect Match",
        text: "Pabllo Vittar brought 30M+ social followers and unparalleled credibility in Latin pop. The synergy between K-pop's global appeal and Pabllo's regional dominance created a collaboration that felt both fresh and authentic."
      },
      {
        label: "Cross-Border Influence Strategy",
        text: "We curated a premium network of creators across Mexico, Argentina, Chile, and the USA. Each territory received bespoke content that resonated locally while maintaining the global campaign's cohesion."
      },
      {
        label: "Viral Narrative Engineering",
        text: "Positioned 'MEXE' as a milestone in the 'New Global Pop' movement. High-impact TikTok challenges and storytelling drove organic trending topics worldwide, with minimal paid amplification."
      },
      {
        label: "Cultural Authority",
        text: "The collaboration solidified NMIXX as serious global players who understand that cultural crossovers require more than just featuring artists — they require strategic alignment, authentic chemistry, and cultural respect."
      }
    ],
  },
  vina: {
    id: "vina",
    tag: "CHILE 2025",
    title: "VIÑA DEL MAR MILESTONE",
    subtitle: "The Ultimate Booking Milestone",
    img: page10Img1,
    metrics: ["Gaviota de Oro & Plata", "4.5M+ Live Viewers", "$3.2M USD EMV", "90% Retention"],
    description: "Secured and managed NMIXX as the first K-pop act ever to perform at the legendary Viña del Mar Festival. First K-Pop act to receive the highest honors in Latin music.",
    challenge: "Viña del Mar Festival is Latin America's most prestigious music event, known for its notoriously tough audience ('The Monster'). No K-pop act had ever performed there, let alone won the festival's highest honors.",
    solution: "We didn't just secure the booking — we architected the entire performance strategy. By including strategic collaborations with Kidd Voodoo (Chile) and Pabllo Vittar (Brazil), we ensured cultural relevance and audience conquest.",
    results: [
      { label: "Historic Awards", value: "Gaviota de Oro & Plata", desc: "Highest honors at Viña del Mar" },
      { label: "Live Viewership", value: "4.5M+", desc: "Across Chile and Latin America" },
      { label: "Earned Media Value", value: "$3.2M USD", desc: "From organic coverage and mentions" },
      { label: "Audience Retention", value: "90%", desc: "Throughout entire performance" },
    ],
    details: [
      {
        label: "Booker & Official Intermediary",
        text: "Crowd Arts PR was directly responsible for negotiation and acted as the bridge between Viña del Mar's organization and JYP Entertainment. This wasn't just PR — this was strategic booking at the highest level."
      },
      {
        label: "Strategic Performance Architecture",
        text: "Masterminded the inclusion of Kidd Voodoo and Pabllo Vittar to ensure 'The Monster' (the famously critical audience) was conquered. Each collaboration was calculated to maximize local resonance while maintaining NMIXX's identity."
      },
      {
        label: "Media Saturation Strategy",
        text: "Led negotiations for a nationwide backstage interview aired across 40+ TV channels. This created 150+ organic placements and 50M+ reach across Chile alone."
      },
      {
        label: "New Blueprint for K-Pop",
        text: "Established a new standard for K-pop international booking: cultural relevance over simple attendance. This performance proved that K-pop acts can compete — and win — in Latin music's most prestigious arenas."
      }
    ],
  },
  "blue-valentine": {
    id: "blue-valentine",
    tag: "CAMPAIGN 2025",
    title: '"BLUE VALENTINE" & LATIN AMERICA',
    subtitle: "From Niche to Mainstream Artistic Force",
    img: page7Img1,
    gallery: [page8Img2],
    metrics: ["100+ Placements", "85% Approval", "+42% Social Surge", "13.2M Creator Reach"],
    description: "Transitioning NMIXX from a 'niche' 4th-gen group to a mature, mainstream artistic force in a Latin market saturated with local pop. Strategic inclusion of Spanish lyrics and localized emotional storytelling.",
    challenge: "Latin American markets are saturated with local pop stars who sing in Spanish and deeply understand regional culture. How could a Korean group singing in Korean compete for attention and emotional connection?",
    solution: "We positioned 'Blue Valentine' not as a K-pop comeback, but as an artistic evolution moment. Strategic inclusion of Spanish lyrics, localized emotional storytelling, and curated influencer partnerships created a campaign that felt Latin-first, not Korean-first.",
    results: [
      { label: "Media Placements", value: "100+", desc: "Across Argentina, Brazil, Chile, Mexico" },
      { label: "Audience Approval", value: "85%", desc: "Positive sentiment in target markets" },
      { label: "Social Growth", value: "+42%", desc: "Surge in Latin American followers" },
      { label: "Creator Reach", value: "13.2M", desc: "Combined influencer audience" },
    ],
    details: [
      {
        label: "Influencer Curation Excellence",
        text: "9 curated creators across Argentina, Brazil, Chile, and Mexico with 13.2M combined reach. High-engagement campaign led by Liryonni (Argentina), who brought authentic emotional storytelling to the campaign."
      },
      {
        label: "Media Authority Building",
        text: "Major features in Omelete (Brazil), Los40 (Chile), El Heraldo (Mexico), and Noticias Caracol (Colombia). Each interview positioned NMIXX as artists, not just performers."
      },
      {
        label: "Market Expansion Strategy",
        text: "Brazil and Mexico solidified as largest hubs. Argentina and Colombia expansion achieved through Tier-1 media interviews like Xiah Pop & Noticias Caracol."
      },
      {
        label: "Emotional Storytelling",
        text: "The campaign focused on universal themes of heartbreak and growth, making NMIXX's story accessible to audiences who had never heard of K-pop. This wasn't cultural export — it was cultural translation."
      }
    ],
  },
  "brazil-media": {
    id: "brazil-media",
    tag: "BRAZIL MEDIA",
    title: "BRAZIL — MAINSTREAM INTEGRATION",
    subtitle: "Consolidating Influence in South America's Largest Market",
    img: page4Img1,
    gallery: [page4Img2, page4Img3, page4Img4, page4Img5],
    metrics: ["Record News Feature", "Billboard Brasil", "MTV Brazil", "Gen Z Focus"],
    description: "Secured a featured segment on Record News (Brazil's 3rd largest news channel), taking K-pop to a mainstream television audience.",
    challenge: "Brazilian media landscape is dominated by local celebrities and soccer. Breaking through as a Korean group required more than digital virality — it required mainstream television legitimacy.",
    solution: "We secured Record News coverage by positioning NMIXX as a cultural phenomenon, not just a music act. By emphasizing their Carnival performance and Pabllo collaboration, we made them newsworthy beyond entertainment sections.",
    results: [
      { label: "Record News", value: "Featured", desc: "Brazil's 3rd largest news channel" },
      { label: "Billboard Brasil", value: "Exclusive", desc: "In-depth feature and interview" },
      { label: "MTV Brazil", value: "Upcoming", desc: "Major interview and performance" },
      { label: "Gen Z Dominance", value: "Leading", desc: "Most-discussed K-pop act" },
    ],
    details: [
      {
        label: "Mass Media Penetration",
        text: "Record News segment reached millions of households who had never heard of NMIXX or K-pop. This positioned them as a mainstream cultural force, not a niche internet phenomenon."
      },
      {
        label: "Strategic Media Curation",
        text: "Exclusive interviews with Billboard Brasil, MTV Brazil (upcoming), and Capricho positioned NMIXX across multiple audience segments — from music industry professionals to teenage fans."
      },
      {
        label: "Artistic Connection Building",
        text: "Facilitated strategic meeting with Isa Buzzi (Multishow Award Winner), fostering a bond between K-pop and the Brazilian pop scene. This created pathways for future collaborations and mutual respect."
      },
      {
        label: "Influence Marketing Precision",
        text: "Expert curation of local influencers to create bespoke content that resonated with Gen Z. Each piece of content felt native to Brazilian digital culture, not like imported K-pop promotion."
      }
    ],
  },
  "chile-mexico": {
    id: "chile-mexico",
    tag: "CHILE & MEXICO",
    title: "HISTORY IN THE MAKING",
    subtitle: "From Iconic Festivals to Cultural Crossovers",
    img: page3Img2,
    gallery: [page3Img1, page3Img3],
    metrics: ["150+ Placements (CL)", "50M+ Reach", "100+ Placements (MX)", "5M+ Reach (MX)"],
    description: "Historic Achievement: First K-pop act ever at Viña del Mar Festival. Led negotiations for a nationwide backstage interview aired across 40+ TV channels.",
    challenge: "Establishing NMIXX in Chile and Mexico — two markets with strong local music industries and limited K-pop infrastructure. Success required more than concerts; it required cultural integration.",
    solution: "Chile: Leveraged Viña del Mar success for massive media saturation. Mexico: Created strategic partnerships bridging sports (Alexa Moreno) and entertainment, expanding NMIXX beyond traditional K-pop audiences.",
    results: [
      { label: "Chile Placements", value: "150+", desc: "Organic media coverage" },
      { label: "Chile Reach", value: "50M+", desc: "Total potential audience" },
      { label: "Mexico Placements", value: "100+", desc: "Organic features and mentions" },
      { label: "Mexico Reach", value: "5M+", desc: "Potential audience reached" },
    ],
    details: [
      {
        label: "Chile: Viña del Mar Dominance",
        text: "150+ organic placements, 50M+ reach, and Twitter Trending Topics. The Viña performance created a media tsunami that positioned NMIXX as the most-discussed international act in Chile."
      },
      {
        label: "Chile: Primetime Saturation",
        text: "Primetime appearance on LOS40 Chile brought NMIXX into mainstream conversation. This wasn't just entertainment news — this was cultural commentary on K-pop's Latin American takeover."
      },
      {
        label: "Mexico: Strategic Sports Partnership",
        text: "Managed partnership with Olympic icon Alexa Moreno, bridging the gap between sports and K-pop fandoms. This collaboration brought NMIXX to audiences who had zero prior K-pop exposure."
      },
      {
        label: "Mexico: Media Integration",
        text: "Organic features in Revista Tu, Revista Marvin, and ADN 40. 100+ organic placements and 5M+ potential reach established NMIXX as a recognized name in Mexican pop culture."
      }
    ],
  },
};

export function CasePage() {
  const { caseId } = useParams<{ caseId: string }>();
  const caseData = caseId ? casesData[caseId] : null;

  if (!caseData) {
    return (
      <div className="min-h-screen bg-[#080808] flex items-center justify-center">
        <p className="text-white">Case not found</p>
      </div>
    );
  }

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
      <section className="relative min-h-[75vh] mt-[72px] overflow-hidden flex items-end pt-20 md:pt-28">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-top"
            style={{
              backgroundImage: `url(${caseData.img})`,
              filter: "saturate(0.4) contrast(1.2) brightness(0.5)",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/50 to-transparent" />
        </div>

        <div className="relative z-10 px-6 md:px-12 pb-16 max-w-[1400px] mx-auto w-full">
          <motion.span
            className="font-[Space_Grotesk] text-[#FF2D2D] text-xs tracking-[0.4em] uppercase border border-[#FF2D2D]/30 px-3 py-1.5 bg-[#080808]/70 backdrop-blur-sm inline-block mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {caseData.tag}
          </motion.span>
          <motion.h1
            className="font-[Montserrat] text-[clamp(2rem,5vw,5rem)] text-white leading-[0.95] tracking-[-0.04em] max-w-4xl"
            style={{ fontWeight: 800 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            {caseData.title}
          </motion.h1>
          <motion.p
            className="font-[Space_Grotesk] text-white/60 text-lg mt-4 max-w-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {caseData.subtitle}
          </motion.p>
        </div>
      </section>

      {/* Overview */}
      <section className="px-6 md:px-12 py-20 border-b border-white/10">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid md:grid-cols-4 gap-6 mb-16">
            {caseData.metrics.map((m: string, i: number) => (
              <motion.div
                key={m}
                className="border border-white/10 px-6 py-5 bg-white/[0.02] hover:border-[#FF2D2D]/30 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <span className="font-[Space_Grotesk] text-white text-sm tracking-wide">{m}</span>
              </motion.div>
            ))}
          </div>

          <motion.p
            className="font-[Space_Grotesk] text-white/70 text-lg leading-relaxed max-w-4xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {caseData.description}
          </motion.p>
        </div>
      </section>

      {/* Challenge, Solution */}
      <section className="px-6 md:px-12 py-20 border-b border-white/10">
        <div className="max-w-[1400px] mx-auto grid md:grid-cols-2 gap-16">
          <div>
            <h3 className="font-[Montserrat] text-[#FF2D2D] text-sm tracking-[0.3em] uppercase mb-4" style={{ fontWeight: 700 }}>
              The Challenge
            </h3>
            <p className="font-[Space_Grotesk] text-white/70 text-base leading-relaxed">
              {caseData.challenge}
            </p>
          </div>
          <div>
            <h3 className="font-[Montserrat] text-[#FF2D2D] text-sm tracking-[0.3em] uppercase mb-4" style={{ fontWeight: 700 }}>
              Our Solution
            </h3>
            <p className="font-[Space_Grotesk] text-white/70 text-base leading-relaxed">
              {caseData.solution}
            </p>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="px-6 md:px-12 py-20 border-b border-white/10 bg-[#0a0a0a]">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="font-[Montserrat] text-white text-[clamp(2rem,4vw,3.5rem)] leading-tight tracking-[-0.03em] mb-12" style={{ fontWeight: 800 }}>
            Results
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {caseData.results.map((r: any, i: number) => (
              <motion.div
                key={r.label}
                className="border border-white/10 p-6 bg-[#080808]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <p className="font-[Space_Grotesk] text-white/40 text-xs tracking-wider uppercase mb-2">{r.label}</p>
                <p className="font-[Montserrat] text-[#FF2D2D] text-[2.5rem] leading-none mb-3" style={{ fontWeight: 800 }}>{r.value}</p>
                <p className="font-[Space_Grotesk] text-white/60 text-sm leading-relaxed">{r.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Details */}
      <section className="px-6 md:px-12 py-20">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="font-[Montserrat] text-white text-[clamp(2rem,4vw,3.5rem)] leading-tight tracking-[-0.03em] mb-12" style={{ fontWeight: 800 }}>
            Deep Dive
          </h2>
          <div className="space-y-12">
            {caseData.details.map((d: any, i: number) => (
              <motion.div
                key={d.label}
                className="border-l-2 border-[#FF2D2D]/30 pl-8"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <h3 className="font-[Montserrat] text-[#FF2D2D] text-xl mb-3" style={{ fontWeight: 700 }}>{d.label}</h3>
                <p className="font-[Space_Grotesk] text-white/70 text-base leading-relaxed max-w-3xl">{d.text}</p>
              </motion.div>
            ))}
          </div>

          {caseData.gallery && caseData.gallery.length > 0 && (
            <div className="mt-20">
              <h2 className="font-[Montserrat] text-white text-[clamp(1.5rem,3vw,2.5rem)] leading-tight tracking-[-0.03em] mb-8" style={{ fontWeight: 800 }}>
                Visual Insights
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {caseData.gallery.map((imgUrl: string, idx: number) => (
                  <motion.div
                    key={idx}
                    className="relative overflow-hidden aspect-[4/3] border border-white/10"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                  >
                    <img src={imgUrl} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" alt="Gallery item" />
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-12 py-20 border-t border-white/10">
        <div className="max-w-[1400px] mx-auto text-center">
          <h2 className="font-[Montserrat] text-white text-[clamp(2rem,5vw,4rem)] leading-tight tracking-[-0.03em] mb-8" style={{ fontWeight: 800 }}>
            Ready to Create History?
          </h2>
          <a
            href="mailto:beatriz@crowdartspr.com"
            className="inline-flex items-center gap-3 border border-[#FF2D2D] bg-[#FF2D2D]/10 px-8 py-4 hover:bg-[#FF2D2D] hover:text-[#080808] transition-all duration-300 group"
          >
            <span className="font-[Space_Grotesk] text-sm tracking-wider uppercase">Let's Talk</span>
            <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </section>
    </div>
  );
}
