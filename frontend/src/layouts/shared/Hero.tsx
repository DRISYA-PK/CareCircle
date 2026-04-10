import React from "react";


type HeroProps = {
  Content: React.ComponentType;
};

export const Hero: React.FC<HeroProps> = ({ Content }) => {
  return (
    <section
      className="relative overflow-hidden bg-[#dde8e6]"
      style={{
        minHeight: "calc(100vh - 70px)",
      }}
    >
      {/* Teal Shape */}
      <div
        className="absolute top-0 left-0"
        style={{
          width: "25%",
          height: "180px",
          background:
            "linear-gradient(135deg,#2d8c84 0%,#3a9e95 60%,transparent 100%)",
          borderBottomRightRadius: "60% 80%",
        }}
      />

      {/* Secondary Shape */}
      <div
        className="absolute top-0 left-0 opacity-40"
        style={{
          width: "27%",
          height: "200px",
          background:
            "linear-gradient(135deg,#2d8c84 0%,#3a9e95 60%,transparent 100%)",
          borderBottomRightRadius: "60% 80%",
        }}
      />

      {/* Right Shape */}
      <div
        className="absolute"
        style={{
          right: "10%",
          top: "18%",
          width: 480,
          height: 420,
          background:
            "radial-gradient(ellipse at 40% 40%, #e8b5a2 0%, #e8b5a2 60%, transparent 100%)",
          borderRadius: "30% 30% 65% 65% / 50% 40% 45% 60%",
          opacity: 0.85,
        }}
      />

      {/* Content */}
      <section className="py-20">
        {/* <HeroSlide /> */}
        <Content />
      </section>
    </section>
  );
};