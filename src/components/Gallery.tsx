"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

const imageList = ["/solutions/gallery-6.jpg", "/solutions/gallery-5.jpg"];

export const StaticGallery = () => {
  const [zoomImage, setZoomImage] = useState<string | null>(null);

  return (
    <>
      <section className="w-full py-32 bg-black border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-20 text-center">
            <p className="eyebrow mb-4">Gallery</p>
            <h2 className="text-4xl md:text-5xl font-display uppercase tracking-tight text-white">
              Visuals
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {imageList.map((src, index) => (
              <div
                key={index}
                className="relative aspect-video overflow-hidden cursor-pointer group bg-zinc-900 border border-white/10"
                onClick={() => setZoomImage(src)}
              >
                <Image
                  src={src}
                  alt={`Gallery image ${index + 1}`}
                  fill
                  className="object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/*
       * ── FIX: Custom overlay instead of Radix Dialog.
       *
       * Problem: Radix DialogContent has z-50. Our Navbar is z-[100] and
       * the AnnouncementTicker is z-[200]. So the navbar overlapped the
       * dialog's built-in X button at top-4 right-4, making it unclickable.
       *
       * Solution: Use the same manual overlay pattern as TimeLine.tsx.
       * z-[300] sits above ticker (z-200) and navbar (z-100).
       * The close button is positioned relative to the IMAGE, not the
       * top of the viewport — so it's always visible and reachable.
       */}
      <AnimatePresence>
        {zoomImage && (
          <motion.div
            key="gallery-zoom"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            /* Clicking the dark backdrop closes the zoom */
            className="fixed inset-0 z-[300] flex items-center justify-center bg-black/95 p-6"
            onClick={() => setZoomImage(null)}
          >
            <div
              className="relative max-w-6xl w-full"
              /* Stop clicks on the image block from propagating to the backdrop */
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button — sits just above the image, always visible */}
              <button
                onClick={() => setZoomImage(null)}
                aria-label="Close image"
                className="absolute -top-10 right-0 flex items-center gap-2 text-white/50 hover:text-white transition-colors group"
              >
                <span className="text-[10px] font-display uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                  Close
                </span>
                <X className="w-5 h-5" />
              </button>

              {/* Image */}
              <div className="relative aspect-video w-full overflow-hidden">
                <Image
                  src={zoomImage}
                  alt="Enlarged view"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
