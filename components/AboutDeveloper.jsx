"use client"
import React from "react"

const F_JOST = "var(--font-jost), Montserrat, sans-serif"
const F_SANS = "var(--font-sans), Open Sans, sans-serif"

const stats = [
  { value: "125+", label: "Years of Godrej Legacy" },
  { value: "200+", label: "Projects Delivered" },
  { value: "12+", label: "Cities Across India" },
]

const AboutGodrej = () => (
  <section id="about" style={{ padding: "72px 0", background: "#f5f5f5" }}>
    <div className="max-w-4xl mx-auto px-4 md:px-8" style={{ textAlign: "center" }}>

      <h2
        data-aos="fade-up"
        style={{
          fontFamily: F_JOST, fontWeight: "800",
          fontSize: "clamp(24px,3.5vw,36px)",
          color: "#1a1a1a", textTransform: "uppercase",
          letterSpacing: "0.04em", margin: "0 0 14px",
        }}
      >
        ABOUT GODREJ PROPERTIES
      </h2>
      <div data-aos="fade-up" style={{ width: "60px", height: "4px", background: "var(--color-gold)", margin: "0 auto 28px", borderRadius: "2px" }} />

      <p
        data-aos="fade-up"
        data-aos-delay="80"
        style={{
          fontFamily: F_SANS, fontSize: "14.5px",
          color: "#555555", lineHeight: 1.9,
          margin: "0 0 52px", textAlign: "justify",
        }}
      >
        Godrej Properties Limited is one of India&apos;s most trusted and celebrated real estate developers, backed by the
        125-year legacy of the Godrej Group. Present across 12+ cities in India, Godrej Properties has delivered over
        200+ landmark projects, earning widespread recognition for design excellence, sustainability, and customer
        satisfaction.
        As the developer of Godrej Sarjapur, they bring their signature commitment to quality construction, transparent
        dealings, and timely delivery &mdash; creating not just homes, but communities that enrich lives for generations.
      </p>

      <div
        data-aos="fade-up"
        data-aos-delay="160"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {stats.map((s, i) => (
          <React.Fragment key={i}>
            <div style={{ padding: "0 clamp(24px,5vw,60px)", textAlign: "center" }}>
              <p style={{
                fontFamily: F_JOST, fontWeight: "800",
                fontSize: "clamp(30px,5vw,52px)",
                color: "#1a1a1a", margin: "0 0 6px", lineHeight: 1,
              }}>
                {s.value}
              </p>
              <p style={{
                fontFamily: F_SANS, fontSize: "13px",
                color: "#777", margin: 0, textTransform: "uppercase",
                letterSpacing: "0.06em", fontWeight: "600",
              }}>
                {s.label}
              </p>
            </div>
            {i < stats.length - 1 && (
              <div style={{
                width: "1px", height: "60px",
                background: "var(--color-gold)",
                flexShrink: 0,
              }} />
            )}
          </React.Fragment>
        ))}
      </div>

    </div>
  </section>
)

export default AboutGodrej