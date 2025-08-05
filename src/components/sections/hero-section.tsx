import { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PhoneCall } from "lucide-react";
import { useReactiveTheme } from "@/util/reactiveThemeHook";

type HeroSectionProps = {
  images?: string[];
  intervalMs?: number;
};

export default function HeroSection({
  images = [
    "assets/heroBackgroundV10.jpeg",
    "assets/heroBackgroundV9.jpeg",
    "assets/heroBackgroundV22.jpeg",
    "assets/heroBackgroundV3.jpeg",
    "assets/heroBackgroundV4.jpeg",
    "assets/heroBackgroundV5.jpeg",
    "assets/heroBackgroundV6.jpeg",
    "assets/heroBackgroundV7.jpeg",
    "assets/heroBackgroundV8.jpeg",
  ],
  intervalMs = 5000,
}: HeroSectionProps) {
  const { theme } = useReactiveTheme();
  const [index, setIndex] = useState(0);
  const timerRef = useRef<number | null>(null);

  // ---- Preload images once ----
  useEffect(() => {
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, [images]);

  // ---- Auto-advance ----
  useEffect(() => {
    if (images.length <= 1) return;
    timerRef.current = window.setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, intervalMs);

    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current);
    };
  }, [images.length, intervalMs]);

  const container = useMemo(
    () => ({
      hidden: {},
      visible: {
        transition: { staggerChildren: 0.4 },
      },
    }),
    []
  );

  const fadeUp = useMemo(
    () => ({
      hidden: { opacity: 0, y: 40 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 1.0, ease: "easeOut" },
      },
    }),
    []
  );

  return (
    <section
      className="relative h-screen w-full flex items-center justify-center overflow-hidden"
      id="hero"
    >
      {/* Background cross-fade stack */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={images[index]} // key forces a new layer each swap
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('${images[index]}')` }}
          />
        </AnimatePresence>

        {/* Theme overlay preserved */}
        <div
          className="absolute inset-0 h-full w-full"
          style={
            theme === "light"
              ? { backgroundColor: "rgba(0, 0, 0, 0.3)" }
              : {
                  backgroundColor: "rgba(0, 0, 0, 0.85)",
                  backgroundImage: `
                    linear-gradient(to right,
                      rgba(241, 90, 36, 0.15) 0%,
                      rgba(241, 90, 36, 0.07) 5%,
                      transparent 20%,
                      transparent 80%,
                      rgba(241, 90, 36, 0.07) 95%,
                      rgba(241, 90, 36, 0.15) 100%
                    )
                  `,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "100% 100%",
                }
          }
        />
      </div>

      {/* Foreground content */}
      <motion.div
        className="relative z-10 max-w-3xl px-4"
        variants={container}
        initial="hidden"
        animate="visible"
        transition={{ duration: 1.5 }}
      >
        <motion.h3
          className="text-md md:text-l text-white mb-1 italic"
          variants={fadeUp}
        >
          Nazovite nas
        </motion.h3>

        <motion.h2
          className="flex items-center gap-2 text-xl md:text-xl text-white mb-4"
          variants={fadeUp}
        >
          +385 91 505 0350
          <a
            className="text-[#f15a24] hover:text-[#d94e1e] transition-colors"
            href="tel:+385915050350"
            title="Nazovi"
          >
            <PhoneCall className="w-5 h-5 drop-shadow-[0_0_6px_#f15a24]" />
          </a>
        </motion.h2>

        <motion.h1
          className="text-4xl md:text-6xl text-white mb-4"
          variants={fadeUp}
        >
          <span className="font-bold">
            FERO<span className="text-[#f15a24]">KOD</span>
          </span>{" "}
          - izrada ograda, kapija i balkona
        </motion.h1>

        <motion.p className="text-xl text-white mb-8" variants={fadeUp}>
          Ograde koje štite i izgledaju sjajno.
        </motion.p>

        <motion.a
          href="#kontakt"
          className="
            inline-block
            md:w-auto
            py-3 px-6
            bg-[#f15a24] hover:bg-[#d94e1e]
            text-white
            rounded-lg
            shadow-md
            transition-all duration-300
            cursor-pointer
            hover:shadow-[0_0_12px_rgba(241,90,36,0.8)]
            active:shadow-[0_0_20px_rgba(241,90,36,0.9),inset_0_0_10px_rgba(0,0,0,0.3)]
            active:scale-[0.97]
          "
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, ease: "easeOut", delay: 1.2 }}
        >
          Pošaljite upit
        </motion.a>
      </motion.div>
    </section>
  );
}
