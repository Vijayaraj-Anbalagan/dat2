"use client";

import Image from "next/image";
import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const imageList = [
  "/solutions/gallery-6.jpg",
  // "/solutions/gallery-7.jpg",
  // "/solutions/gallery-8.jpg",
  // "/solutions/gallery-1.png",
  "/solutions/gallery-5.jpg",
];

export const StaticGallery = () => {
  const [zoomImage, setZoomImage] = useState<string | null>(null);

  return (
    <>
      <section className="w-full py-16 bg-black text-white">
        <h2 className="mb-12 text-center text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-violet-400 to-pink-600 md:text-5xl">
          Redefining Aerospace Intelligence with Dashagriv Tools
        </h2>

        <div className="max-w-6xl mx-auto px-4">
          {/* First Row: 3 images */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 mb-4">
            {imageList.slice(0, 3).map((src, index) => (
              <div
                key={index}
                className="relative aspect-[4/3] rounded-lg overflow-hidden cursor-pointer"
                onClick={() => setZoomImage(src)}
              >
                <Image
                  src={src}
                  alt={`Gallery image ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>

          {/* Second Row: 2 images, centered on larger screens, stacked on mobile */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            {imageList.slice(3).map((src, index) => (
              <div
                key={index}
                className="relative aspect-[4/3] w-full sm:w-[calc(50%-0.5rem)] md:w-[calc(33%-1rem)] max-w-[300px] mx-auto sm:mx-0 rounded-lg overflow-hidden cursor-pointer"
                onClick={() => setZoomImage(src)}
              >
                <Image
                  src={src}
                  alt={`Gallery image ${index + 4}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Zoom Dialog */}
      <Dialog open={!!zoomImage} onOpenChange={() => setZoomImage(null)}>
        <DialogContent className="w-full h-[90vh] max-w-5xl p-4 bg-black">
          {zoomImage && (
            <div className="relative w-full h-full">
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
