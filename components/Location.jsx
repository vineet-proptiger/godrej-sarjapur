"use client"
import { useState } from "react"

const F_JOST = "var(--font-jost), Montserrat, sans-serif"
const F_SANS = "var(--font-sans), Open Sans, sans-serif"

const categories = [
  {
    title: "Schools",
    items: [
      { name: "TISB (The International School Bangalore)", dist: "10 mins" },
      { name: "Candor International School", dist: "15 mins" },
      { name: "Oakridge International School", dist: "12 mins" },
    ],
  },
  {
    title: "Entertainment & Shopping",
    items: [
      { name: "Elements Mall", dist: "15 mins" },
      { name: "Rasta Cafe", dist: "10 mins" },
      { name: "Sarjapur Market", dist: "05 mins" },
    ],
  },
  {
    title: "Hospitals",
    items: [
      { name: "Manipal Hospital (Sarjapur)", dist: "10 mins" },
      { name: "Apollo Spectra Hospital", dist: "12 mins" },
      { name: "Cloudnine Hospital", dist: "15 mins" },
    ],
  },
  {
    title: "Workplaces",
    items: [
      { name: "Salarpuria Tech Park", dist: "10 mins" },
      { name: "Wipro Campus", dist: "15 mins" },
      { name: "RGA Tech Park", dist: "12 mins" },
    ],
  },
  {
    title: "Connectivity",
    items: [
      { name: "NICE Road", dist: "20 mins" },
      { name: "Hosur Road (NH-44)", dist: "15 mins" },
      { name: "Silk Board Junction", dist: "25 mins" },
    ],
  },
]


const Location = () => {
  const [open, setOpen] = useState(0)

  const toggle = (i) => setOpen(open === i ? -1 : i)

  return (
    <section id="location" style={{ padding: "72px 0", background: "#1a1a1a" }}>
      <div className="container mx-auto px-4 md:px-8">

        <div data-aos="fade-up" style={{ textAlign: "center", marginBottom: "48px" }}>
          <h2 style={{
            fontFamily: F_JOST, fontWeight: "800",
            fontSize: "clamp(28px,4vw,40px)",
            color: "#ffffff", textTransform: "uppercase",
            letterSpacing: "0.04em", margin: "0 0 14px",
          }}>
            LOCATION ADVANTAGES
          </h2>
          <div style={{ width: "60px", height: "4px", background: "var(--color-gold)", margin: "0 auto", borderRadius: "2px" }} />
        </div>

        <div className="flex flex-col lg:flex-row gap-10 items-start">

          {/* LEFT accordion */}
          <div className="w-full lg:w-[42%]" data-aos="fade-right">
            {categories.map((cat, i) => {
              const isOpen = open === i
              return (
                <div key={i} style={{ borderBottom: "1px solid #2e2e2e" }}>
                  {/* Header */}
                  <button
                    onClick={() => toggle(i)}
                    style={{
                      width: "100%", display: "flex", alignItems: "center",
                      justifyContent: "space-between",
                      padding: "16px 0", background: "transparent", border: "none",
                      cursor: "pointer",
                    }}
                  >
                    <span style={{
                      fontFamily: F_JOST, fontWeight: "700", fontSize: "15px",
                      color: isOpen ? "var(--color-gold)" : "#ffffff",
                      letterSpacing: "0.04em", textTransform: "uppercase",
                      transition: "color 0.25s",
                    }}>
                      {cat.title}
                    </span>
                    <span style={{
                      width: "26px", height: "26px", borderRadius: "50%",
                      border: "1.5px solid",
                      borderColor: isOpen ? "var(--color-gold)" : "#444",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      flexShrink: 0,
                      transition: "border-color 0.25s",
                    }}>
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
                        stroke={isOpen ? "var(--color-gold)" : "#888"}
                        strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                        style={{ transition: "transform 0.3s", transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}>
                        <path d="M2 4l4 4 4-4" />
                      </svg>
                    </span>
                  </button>

                  {/* Body */}
                  {isOpen && (
                    <div style={{ paddingBottom: "16px" }}>
                      {cat.items.map((loc, j) => (
                        <div key={j} style={{
                          display: "flex", justifyContent: "space-between",
                          alignItems: "center",
                          padding: "8px 12px",
                          marginBottom: "4px",
                          background: "rgba(255,255,255,0.03)",
                          borderRadius: "4px",
                          borderLeft: "2px solid var(--color-gold)",
                        }}>
                          <span style={{
                            fontFamily: F_SANS, fontSize: "13px",
                            color: "#cccccc", letterSpacing: "0.01em",
                          }}>
                            {loc.name}
                          </span>
                          <span style={{
                            fontFamily: F_JOST, fontSize: "12px",
                            color: "var(--color-gold)", fontWeight: "600",
                            letterSpacing: "0.04em", flexShrink: 0, marginLeft: "12px",
                          }}>
                            {loc.dist}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )
            })}
          </div>

          {/* RIGHT map */}
          <div className="w-full lg:flex-1" data-aos="fade-left" style={{ minHeight: "420px" }}>
            <div style={{
              borderRadius: "4px", overflow: "hidden",
              border: "1px solid var(--color-gold)",
              height: "100%", minHeight: "420px",
              position: "relative",
            }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12824.298182427116!2d77.78892105!3d12.8539625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae72e11fe62b7f%3A0x90fb58b42c41430f!2sSarjapura%2C%20Bengaluru%2C%20Karnataka%20562125!5e1!3m2!1sen!2sin!4v1778475904951!5m2!1sen!2sin"
                width="100%" height="100%"
                style={{ border: 0, minHeight: "420px", display: "block", filter: "grayscale(20%)" }}
                allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Location