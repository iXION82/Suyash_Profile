"use client";

import dynamic from "next/dynamic";

const LoadingScreen = dynamic(
  () => import("@/components/ui/LoadingScreen"),
  { ssr: false }
);
const Navbar = dynamic(() => import("@/components/ui/Navbar"), { ssr: false });
const HeroSection = dynamic(
  () => import("@/components/sections/HeroSection"),
  { ssr: false }
);
const AboutSection = dynamic(
  () => import("@/components/sections/AboutSection"),
  { ssr: false }
);
const VisionSection = dynamic(
  () => import("@/components/sections/VisionSection"),
  { ssr: false }
);
const AgendaSection = dynamic(
  () => import("@/components/sections/AgendaSection"),
  { ssr: false }
);
const ExperienceSection = dynamic(
  () => import("@/components/sections/ExperienceSection"),
  { ssr: false }
);
const WorksSection = dynamic(
  () => import("@/components/sections/WorksSection"),
  { ssr: false }
);
const PosterSection = dynamic(
  () => import("@/components/sections/PosterSection"),
  { ssr: false }
);
// const TestimonialsSection = dynamic(
//   () => import("@/components/sections/TestimonialsSection"),
//   { ssr: false }
// );
// const GallerySection = dynamic(
//   () => import("@/components/sections/GallerySection"),
//   { ssr: false }
// );
const JoinSection = dynamic(
  () => import("@/components/sections/JoinSection"),
  { ssr: false }
);
const ContactSection = dynamic(
  () => import("@/components/sections/ContactSection"),
  { ssr: false }
);

export default function Home() {
  return (
    <main className="relative">
      <LoadingScreen />
      <Navbar />
      <HeroSection />
      <div className="section-divider" />
      <AboutSection />

      <div className="section-divider" />
      <VisionSection />

      <div className="section-divider" />
      <AgendaSection />

      <div className="section-divider" />
      <ExperienceSection />

      <div className="section-divider" />
      <WorksSection />

      <div className="section-divider" />
      <PosterSection />

      {/* <div className="section-divider" />
      <TestimonialsSection />

      <div className="section-divider" />
      <GallerySection /> */}

      <div className="section-divider" />
      <JoinSection />

      <div className="section-divider" />
      <ContactSection />
    </main>
  );
}
