"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, X, ArrowRight } from "lucide-react";
import Nav from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";

interface Position {
  id: string;
  title: string;
  type: "fulltime" | "internship";
  location: string;
  mode: string;
  department: string;
  description: string;
  requirements: string[];
  formLink: string;
}

const CareersPage = () => {
  const [selectedPosition, setSelectedPosition] = useState<Position | null>(
    null,
  );
  const [activeFilter, setActiveFilter] = useState<
    "all" | "fulltime" | "internship"
  >("all");

  const positions: Position[] = [
    {
      id: "cad-intern",
      title: "CAD Intern",
      type: "internship",
      location: "Chennai",
      mode: "Hybrid",
      department: "Engineering",
      description:
        "Support the engineering team in creating and refining 3D models, assemblies, and detailed drawings for product design and manufacturing.",
      requirements: [
        "Basic experience with CAD software such as SolidWorks, CATIA, or Autodesk Inventor.",
        "Understanding of engineering drawings, tolerances, and manufacturing processes.",
        "Ability to convert conceptual sketches into accurate 3D models.",
        "Familiarity with PLM systems is a plus.",
        "Strong attention to detail and willingness to learn.",
      ],
      formLink: "https://forms.gle/ZTL7oGpZyJZ1EAjh8",
    },
    {
      id: "cfd/feq-analysis-intern",
      title: "CFD/FEA Analysis Intern",
      type: "internship",
      location: "Chennai",
      mode: "Hybrid",
      department: "Engineering",
      description:
        "Assist in performing Computational Fluid Dynamics (CFD) and Finite Element Analysis (FEA) to evaluate and optimize product designs.",
      requirements: [
        "Basic knowledge of simulation tools such as ANSYS, COMSOL, or Abaqus.",
        "Understanding of fluid mechanics, thermodynamics, and structural analysis fundamentals.",
        "Ability to set up and run simulations for flow, heat transfer, and stress analysis.",
        "Familiarity with pre-processing (meshing) and post-processing of simulation results.",
        "Strong analytical and problem-solving skills.",
      ],
      formLink: "https://forms.gle/ZTL7oGpZyJZ1EAjh8",
    },
  ];

  const collaborationTypes = [
    {
      title: "Knowledge Partnership",
      description:
        "Partner with us for groundbreaking research in aerospace technology. Join our network of academic institutions and research centers.",
      email: "info@dashagriv.in",
      subject: "[Dashagriv Website] - Knowledge Partnership Inquiry",
    },
    {
      title: "Educational Alliance",
      description:
        "Create opportunities for students through internships, workshops, and collaborative projects. Help shape the future workforce.",
      email: "info@dashagriv.in",
      subject: "[Dashagriv Website] - Educational Alliance Inquiry",
    },
    {
      title: "Industry Collaboration",
      description:
        "Form strategic partnerships to develop innovative aerospace solutions. Leverage our expertise and infrastructure for mutual growth.",
      email: "info@dashagriv.in",
      subject: "[Dashagriv Website] - Industry Collaboration Inquiry",
    },
  ];

  const filteredPositions = positions.filter((position) =>
    activeFilter === "all" ? true : position.type === activeFilter,
  );

  return (
    <div className="min-h-screen bg-black text-white">
      <Nav />

      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center pt-32 pb-20 border-b border-white/10">
        <div className="absolute inset-0 z-0">
          <Image
            src="/Career_bg.png"
            alt="Hero background"
            fill
            className="object-cover opacity-40 grayscale"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
        </div>

        <div className="container mx-auto px-6 relative z-10 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="max-w-3xl"
          >
            <p className="eyebrow mb-4 tracking-[0.25em] text-zinc-400 font-medium">
              Careers
            </p>
            <h1 className="text-4xl md:text-6xl font-display uppercase font-bold tracking-tight leading-tight text-white mb-6">
              Join Our Mission To
              <br />
              The Stratosphere
            </h1>
            <p className="text-base md:text-lg text-zinc-400 mb-10 font-body">
              Be part of India&apos;s pioneering aerospace innovation.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                className="solid-btn"
                onClick={() =>
                  document
                    .getElementById("positions")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                View Positions
              </button>
              <button
                className="ghost-btn"
                onClick={() =>
                  document
                    .getElementById("collaborate")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Collaborate
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Open Positions */}
      <section
        id="positions"
        className="py-32 bg-black border-b border-white/10"
      >
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div>
              <p className="eyebrow mb-4">Opportunities</p>
              <h2 className="text-4xl md:text-5xl font-display uppercase tracking-tight">
                Open Positions
              </h2>
            </div>

            <div className="flex gap-4">
              {[
                { id: "all", label: "All" },
                { id: "fulltime", label: "Full-time" },
                { id: "internship", label: "Internships" },
              ].map((filter) => (
                <button
                  key={filter.id}
                  onClick={() =>
                    setActiveFilter(filter.id as typeof activeFilter)
                  }
                  className={`px-4 py-2 font-display uppercase tracking-widest text-xs transition-colors border-b-2 ${
                    activeFilter === filter.id
                      ? "border-white text-white"
                      : "border-transparent text-zinc-500 hover:text-white"
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <AnimatePresence mode="wait">
              {filteredPositions.length > 0 ? (
                filteredPositions.map((position) => (
                  <motion.div
                    key={position.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="group flex flex-col md:flex-row justify-between items-start md:items-center p-8 border border-white/10 bg-zinc-950 hover:bg-zinc-900 cursor-pointer transition-colors"
                    onClick={() => setSelectedPosition(position)}
                  >
                    <div>
                      <h3 className="text-2xl font-display uppercase tracking-wide mb-2 group-hover:text-white transition-colors">
                        {position.title}
                      </h3>
                      <div className="flex gap-4 eyebrow text-zinc-500">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3" /> {position.location}
                        </span>
                        <span>{position.mode}</span>
                        <span>
                          {position.type === "internship"
                            ? "Internship"
                            : "Full-time"}
                        </span>
                      </div>
                    </div>
                    <div className="mt-6 md:mt-0 opacity-50 group-hover:opacity-100 transition-opacity">
                      <ArrowRight className="w-6 h-6" />
                    </div>
                  </motion.div>
                ))
              ) : (
                <div className="p-12 text-center border border-white/10">
                  {activeFilter === "fulltime" ? (
                    <>
                      <p className="text-zinc-500 font-display uppercase tracking-widest text-sm mb-4">
                        No open full-time roles right now.
                      </p>
                      <p className="text-zinc-700 text-xs leading-relaxed">
                        We hire for exceptional talent even when roles
                        aren&apos;t listed.{" "}
                        <a
                          href="mailto:info@dashagriv.in?subject=Open Application — Full-time"
                          className="underline hover:text-white transition-colors"
                        >
                          Send us your profile.
                        </a>
                      </p>
                    </>
                  ) : activeFilter === "internship" ? (
                    <>
                      <p className="text-zinc-500 font-display uppercase tracking-widest text-sm mb-4">
                        No open internships right now.
                      </p>
                      <p className="text-zinc-700 text-xs leading-relaxed">
                        Check back soon — or write to us at{" "}
                        <a
                          href="mailto:info@dashagriv.in?subject=Internship Inquiry"
                          className="underline hover:text-white transition-colors"
                        >
                          info@dashagriv.in
                        </a>
                      </p>
                    </>
                  ) : (
                    <>
                      <p className="text-zinc-500 font-display uppercase tracking-widest text-sm mb-4">
                        No open positions right now.
                      </p>
                      <p className="text-zinc-700 text-xs leading-relaxed">
                        We hire for exceptional talent even when roles
                        aren&apos;t listed.{" "}
                        <a
                          href="mailto:info@dashagriv.in?subject=Open Application"
                          className="underline hover:text-white transition-colors"
                        >
                          Send us your profile.
                        </a>
                      </p>
                    </>
                  )}
                </div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Collaborate */}
      <section
        id="collaborate"
        className="py-32 bg-zinc-950 border-b border-white/10"
      >
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-24">
            <p className="eyebrow mb-4">Partnerships</p>
            <h2 className="text-4xl md:text-5xl font-display uppercase tracking-tight">
              Collaborate With Us
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {collaborationTypes.map((collab, index) => (
              <div
                key={index}
                className="p-10 border border-white/10 bg-black flex flex-col hover:bg-zinc-900 transition-colors"
              >
                <h3 className="text-xl font-display uppercase tracking-wide mb-6 text-white">
                  {collab.title}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-10 flex-1">
                  {collab.description}
                </p>
                <a
                  href={`mailto:${collab.email}?subject=${encodeURIComponent(collab.subject)}`}
                  className="ghost-btn w-max self-start"
                >
                  Connect
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Details Modal */}
      <AnimatePresence>
        {selectedPosition && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          >
            <div className="bg-zinc-950 border border-white/10 p-8 max-w-3xl w-full max-h-[90vh] overflow-y-auto relative">
              <button
                onClick={() => setSelectedPosition(null)}
                className="absolute top-6 right-6 text-zinc-500 hover:text-white"
              >
                <X className="w-6 h-6" />
              </button>

              <h3 className="text-3xl font-display uppercase tracking-wide mb-4 pr-12">
                {selectedPosition.title}
              </h3>

              <div className="flex gap-6 mb-8 eyebrow text-zinc-500 border-b border-white/10 pb-6">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3 h-3" /> {selectedPosition.location}
                </span>
                <span>{selectedPosition.mode}</span>
                <span>
                  {selectedPosition.type === "internship"
                    ? "Internship"
                    : "Full-time"}
                </span>
              </div>

              <div className="mb-8">
                <h4 className="eyebrow mb-4">About the Role</h4>
                <p className="text-zinc-300 text-sm leading-relaxed">
                  {selectedPosition.description}
                </p>
              </div>

              <div className="mb-12">
                <h4 className="eyebrow mb-4">Requirements</h4>
                <ul className="space-y-3">
                  {selectedPosition.requirements.map((req, index) => (
                    <li
                      key={index}
                      className="text-zinc-300 text-sm flex gap-3"
                    >
                      <span className="text-white mt-1 opacity-50">-</span>
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href={selectedPosition.formLink}
                target="_blank"
                rel="noopener noreferrer"
                className="solid-btn text-center block w-full py-4"
              >
                Apply Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
};

export default CareersPage;
