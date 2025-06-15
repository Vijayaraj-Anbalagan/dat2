"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const imageList = [
  "/solutions/gallery-1.png",
  "/solutions/gallery-2.png",
  "/solutions/gallery-3.jpg",
  "/solutions/gallery-4.png",
  "/solutions/gallery-5.jpg",
  "/solutions/gallery-6.jpg",
  "/solutions/gallery-7.jpg",
  "/solutions/gallery-8.jpg",
];

export const Case1 = () => {
  const [api, setApi] = useState<CarouselApi | null>(null);
  const [current, setCurrent] = useState(0);
  const [zoomImage, setZoomImage] = useState<string | null>(null);

  useEffect(() => {
    if (!api) return;

    const timer = setTimeout(() => {
      const next = api.selectedScrollSnap() + 1;
      if (next >= api.scrollSnapList().length) {
        api.scrollTo(0);
        setCurrent(0);
      } else {
        api.scrollTo(next);
        setCurrent(next);
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, [api, current]);

  return (
    <>
      <div className="w-full py-10 lg:py-20 scale-[0.90] bg-black text-white">
        <div className="container mx-auto">
          <div className="flex flex-col gap-10">
           <h2 className="mb-4 text-center text-4xl font-bold leading-[1.2] bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-violet-400 to-pink-600  tracking-tighter md:text-5xl">
                Redefining Aerospace Intelligence with Dashagriv Tools
                </h2>
            <Carousel setApi={setApi} className="w-full">
              <CarouselContent>
                {imageList.map((src, index) => (
                  <CarouselItem className="basis-1/4 lg:basis-1/6" key={index}>
                    <div
                      className="relative w-full aspect-square rounded-md bg-gray-100 p-4 cursor-pointer"
                      onClick={() => setZoomImage(src)}
                    >
                      <Image
                        src={src}
                        alt={`Logo ${index + 1}`}
                        fill
                        className="object-contain bg-black"
                        sizes="(max-width: 768px) 100vw, 25vw"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </div>

      {/* Fullscreen Zoom */}
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
