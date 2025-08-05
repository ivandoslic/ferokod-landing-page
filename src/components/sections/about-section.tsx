import { Canvas } from "@react-three/fiber";
import { Suspense, useRef, useState, useEffect } from "react";

import FenceModel from "../3d/fence-model";
import { AnimatedReveal } from "../animated-reveal";

import { useReactiveTheme } from "@/util/reactiveThemeHook";

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0);
  const { theme } = useReactiveTheme();

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = window.scrollY;
      const maxScroll = document.body.scrollHeight - window.innerHeight;
      const progress = totalScroll / maxScroll;

      setProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-screen overflow-hidden"
    >
      {/* Background 3D */}
      <div
        className={
          theme === "light"
            ? "absolute inset-0 -z-10"
            : "absolute inset-0 -z-10 bg-[#080808]"
        }
      >
        <Canvas
          shadows
          camera={{ position: [0, 0, 5], fov: 50 }}
          className="hidden lg:block"
          vr="webgl2"
        >
          {/* Minimal fill to soften shadows */}
          <ambientLight intensity={0.3} />

          {theme !== "light" ? (
            <>
              <directionalLight
                color="#f15a24"
                position={[7, 1.5, -1.5]}
                intensity={2.5}
                castShadow={true}
                shadow-mapSize-width={2048}
                shadow-mapSize-height={2048}
              />

              <directionalLight
                color="#ffffff"
                position={[-1, 0, -1]}
                intensity={1.2  }
              />

              <directionalLight
                color="#ffffff"
                position={[-6, -2, 4]}
                intensity={2}
              />

              <directionalLight
                color="#ffffff"
                position={[7, -1.5, 2]}
                intensity={0.1}
                castShadow={true}
                shadow-mapSize-width={2048}
                shadow-mapSize-height={2048}
              />

              <spotLight
                angle={Math.PI / 3}
                color="#ffffff"
                intensity={3}
                position={[4, -2, 1]}
                target-position={[1.5, 0, 0]} // aiming up at fence
              />
            </>
          ) : (
            <>
              <directionalLight
                color="#f15a24"
                position={[7, 0, 0]}
                intensity={1.5}
                castShadow={true}
                shadow-mapSize-width={2048}
                shadow-mapSize-height={2048}
              />

              <directionalLight
                color="#ffffff"
                position={[-1, 0, -1]}
                intensity={1.2  }
              />

              <directionalLight
                color="#ffffff"
                position={[-6, -2, 4]}
                intensity={2}
              />

              <directionalLight
                castShadow={true}
                color="#ffffff"
                intensity={0.1}
                position={[7, -1.5, 2]}
                shadow-mapSize-height={2048}
                shadow-mapSize-width={2048}
              />
            </>
          )}

          <Suspense fallback={null}>
            <group position={[1.5, 0, 0]} scale={[1.3, 1.3, 1.3]}>
              <FenceModel rotationProgress={progress} />
            </group>
          </Suspense>
        </Canvas>
      </div>

      {/* Foreground text */}
      <div className="relative z-10 h-full flex flex-col justify-start items-start px-8 pt-12 md:px-16">
        <AnimatedReveal>
          <h2 className="text-4xl font-bold mb-6">O nama</h2>
        </AnimatedReveal>

        <AnimatedReveal delay={0.2}>
          <p className="text-lg max-w-lg mb-6">
            Specijalizirani smo za izradu i montažu dvorišnih ograda, balkonskih
            ograda i kapija po mjeri. Svaki naš proizvod izrađujemo s pažnjom na
            detalje, birajući kvalitetne materijale i kombinirajući tradiciju s
            modernim dizajnom.
            <br />
            <br />
            Bez obzira tražite li elegantnu metalnu ogradu, sigurnu balkonsku
            zaštitu ili impozantnu ulaznu kapiju, pobrinuti ćemo se da rješenje
            savršeno odgovara vašem prostoru i stilu.
          </p>
        </AnimatedReveal>

        <AnimatedReveal delay={0.4}>
          <a
            className="
              inline-block
              w-full md:w-auto
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
            href="#kontakt"
          >
            Zatraži ponudu
          </a>
        </AnimatedReveal>
      </div>
    </section>
  );
}
