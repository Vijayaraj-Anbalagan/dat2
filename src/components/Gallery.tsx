"use client";

import Image from "next/image";
import { useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

const imageList = [
  "/solutions/gallery-6.jpg",
  "/solutions/gallery-5.jpg",
];

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

      <Dialog open={!!zoomImage} onOpenChange={() => setZoomImage(null)}>
        <DialogContent className="max-w-6xl w-full h-[80vh] p-0 bg-black border border-white/10" aria-describedby="Zoomed Image">
          <DialogTitle className="sr-only">Zoomed Image</DialogTitle>
          {zoomImage && (
            <div className="relative w-full h-full p-4">
              <Image
                src={zoomImage}
                alt="Zoomed image"
                fill
                className="object-contain"
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};
