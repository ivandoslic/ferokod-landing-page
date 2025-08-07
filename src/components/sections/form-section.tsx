import { MapPin, Phone, Mail, Clock, ExternalLink, PhoneCall, Send } from "lucide-react";

import { AnimatedReveal } from "../animated-reveal";

import { useReactiveTheme } from "@/util/reactiveThemeHook";

export default function FormSection() {
  const { theme } = useReactiveTheme();

  const isLight = theme === "light";

  return (
    <section
      className={`py-24 px-6 ${isLight ? "" : "bg-[#080808]"}`}
      id="contact-form"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left side - Contact info & map */}
        <AnimatedReveal>
          <div
            className={`
              relative overflow-hidden
              p-6 rounded-[20px]
              ${
                theme === "light"
                  ? "bg-[rgba(255,255,255,0.12)]"
                  : "bg-[rgba(0,0,0,0.3)]"
              }
              backdrop-blur-[5px]
              border border-[rgba(241,90,36,0.3)]
              shadow-[0_8px_32px_rgba(0,0,0,0.1),
                      inset_0_1px_0_rgba(241,90,36,0.5),
                      inset_0_-1px_0_rgba(241,90,36,0.1),
                      inset_0_0_28px_14px_rgba(241,90,36,0.14)]
              before:content-['']
              before:absolute before:top-0 before:left-0 before:right-0 before:h-px
              before:bg-[linear-gradient(90deg,transparent,rgba(241,90,36,0.8),transparent)]
              after:content-['']
              after:absolute after:top-0 after:left-0 after:w-px after:h-full
              after:bg-[linear-gradient(180deg,rgba(241,90,36,0.8),transparent,rgba(241,90,36,0.3))]
            `}
          >
            <div className="space-y-6">
              <h2 className="text-3xl font-bold mb-4">Kontaktirajte nas</h2>
              <p className="text-lg">
                Imate pitanja ili trebate ponudu? Slobodno nas kontaktirajte.
              </p>

              <div className="space-y-3 text-gray-800 dark:text-gray-300">
                {/* Address */}
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-6 h-6 text-[#f15a24] drop-shadow-[0_0_6px_#f15a24]" />
                    <span>Ulica Vladimira Nazora 122, Rešetari</span>
                  </div>
                  <a
                    className="text-[#f15a24] hover:text-[#d94e1e] transition-colors"
                    href="https://www.google.com/maps/place/Ulica+Vladimira+Nazora+122,+Re%C5%A1etari"
                    rel="noopener noreferrer"
                    target="_blank"
                    title="Otvori u Google Maps"
                  >
                    <ExternalLink className="w-5 h-5 drop-shadow-[0_0_6px_#f15a24]" />
                  </a>
                </div>

                {/* Phone */}
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <Phone className="w-6 h-6 text-[#f15a24] drop-shadow-[0_0_6px_#f15a24]" />
                    <span>+385 91 505 0350</span>
                  </div>
                  <a
                    className="text-[#f15a24] hover:text-[#d94e1e] transition-colors"
                    href="tel:+385915050350"
                    title="Nazovi"
                  >
                    <PhoneCall className="w-5 h-5 drop-shadow-[0_0_6px_#f15a24]" />
                  </a>
                </div>

                {/* Email */}
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <Mail className="w-6 h-6 text-[#f15a24] drop-shadow-[0_0_6px_#f15a24]" />
                    <span>info@ferokod.hr</span>
                  </div>
                  <a
                    className="text-[#f15a24] hover:text-[#d94e1e] transition-colors"
                    href="mailto:info@ferokod.hr"
                    title="Pošalji email"
                  >
                    <Send className="w-5 h-5 drop-shadow-[0_0_6px_#f15a24]" />
                  </a>
                </div>

                {/* Working hours */}
                <div className="flex items-center gap-3">
                  <Clock className="w-6 h-6 text-[#f15a24] drop-shadow-[0_0_6px_#f15a24]" />
                  <span>Pon - Pet: 8 - 16h</span>
                </div>
              </div>

              {/* Google Maps Embed */}
              <a
                className="block rounded-lg overflow-hidden shadow-lg hover:opacity-90 transition-opacity"
                href="https://www.google.com/maps/place/Ul.+Vladimira+Nazora+122,+35403,+Re%C5%A1etari/@45.2732741,17.4244436,17z/data=!3m1!4b1!4m6!3m5!1s0x4767626e1f011d57:0xc954479fd0353d2f!8m2!3d45.2732741!4d17.4270239!16s%2Fg%2F11y30vh46r?entry=ttu&g_ep=EgoyMDI1MDczMC4wIKXMDSoASAFQAw%3D%3D"
                rel="noopener noreferrer"
                target="_blank"
              >
                <iframe
                  allowFullScreen
                  height="250"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2807.739615721925!2d17.42444361314445!3d45.273274070950954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4767626e1f011d57%3A0xc954479fd0353d2f!2sUl.%20Vladimira%20Nazora%20122%2C%2035403%2C%20Re%C5%A1etari!5e0!3m2!1shr!2shr!4v1754167862378!5m2!1shr!2shr"
                  style={{ border: 0 }}
                  title="Google Maps Location"
                  width="100%"
                />
              </a>
            </div>
          </div>
        </AnimatedReveal>

        {/* Right side - Contact form */}
        <AnimatedReveal delay={0.2}>
          <form
            className={`
              relative overflow-hidden
              p-6 rounded-[20px]
              ${
                theme === "light"
                  ? "bg-[rgba(255,255,255,0.12)]"
                  : "bg-[rgba(0,0,0,0.3)]"
              }
              backdrop-blur-[5px]
              border border-[rgba(241,90,36,0.3)]
              shadow-[0_8px_32px_rgba(0,0,0,0.1),
                      inset_0_1px_0_rgba(241,90,36,0.5),
                      inset_0_-1px_0_rgba(241,90,36,0.1),
                      inset_0_0_28px_14px_rgba(241,90,36,0.14)]
              before:content-['']
              before:absolute before:top-0 before:left-0 before:right-0 before:h-px
              before:bg-[linear-gradient(90deg,transparent,rgba(241,90,36,0.8),transparent)]
              after:content-['']
              after:absolute after:top-0 after:left-0 after:w-px after:h-full
              after:bg-[linear-gradient(180deg,rgba(241,90,36,0.8),transparent,rgba(241,90,36,0.3))]
            `}
            id="kontakt"
            name="kontakt-forma"
            data-netlify="true"
          >
            {[
              { id: "name", label: "Ime i prezime", type: "text" },
              { id: "email", label: "Email", type: "email" },
            ].map((field) => (
              <div key={field.id} className="mb-4">
                <label className="block mb-2" htmlFor={field.id}>
                  {field.label}
                </label>
                <input
                  required
                  className="
                    w-full px-4 py-2 rounded-lg
                    bg-[rgba(255,255,255,0.05)]
                    backdrop-blur-sm
                    border border-[rgba(241,90,36,0.4)]
                    shadow-[inset_0_1px_0_rgba(241,90,36,0.5),inset_0_-1px_0_rgba(241,90,36,0.1)]
                    focus:outline-none
                    focus:border-[#f15a24]
                    focus:shadow-[0_0_8px_rgba(241,90,36,0.7),inset_0_1px_0_rgba(241,90,36,0.5)]
                    transition-all duration-200
                  "
                  id={field.id}
                  type={field.type}
                />
              </div>
            ))}

            <div className="mb-4">
              <label className="block mb-2" htmlFor="message">
                Poruka
              </label>
              <textarea
                required
                className="
                  w-full px-4 py-2 rounded-lg
                  bg-[rgba(255,255,255,0.05)]
                  backdrop-blur-sm
                  border border-[rgba(241,90,36,0.4)]
                  shadow-[inset_0_1px_0_rgba(241,90,36,0.5),inset_0_-1px_0_rgba(241,90,36,0.1)]
                  focus:outline-none
                  focus:border-[#f15a24]
                  focus:shadow-[0_0_8px_rgba(241,90,36,0.7),inset_0_1px_0_rgba(241,90,36,0.5)]
                  transition-all duration-200
                "
                id="message"
                rows={5}
              />
            </div>

            <button
              className="
                w-full py-3 px-6
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
              type="submit"
            >
              Pošalji poruku
            </button>
          </form>
        </AnimatedReveal>
      </div>
    </section>
  );
}
