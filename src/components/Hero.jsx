import React from "react";

const Hero = () => {
  return (
    <div
      style={{
        position: "relative",
        height: "100vh",
        backgroundImage:
          "url('https://images.unsplash.com/photo-1593640408182-31c70c8268f5')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        color: "white",
      }}
    >
      {/* Very Dark Overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "rgba(0, 0, 0, 0.6)",
          zIndex: 1,
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: "800px",
          padding: "20px",
          textShadow: "0 2px 10px rgba(0,0,0,0.8)",
        }}
      >
        <p
          style={{
            letterSpacing: "5px",
            color: "#4da6ff",
            fontWeight: "bold",
          }}
        >
          NEW ARRIVALS 2026
        </p>

        <h1
          style={{
            fontSize: "5rem",
            fontWeight: "800",
            margin: "20px 0",
            lineHeight: "1.1",
          }}
        >
          Build Your
          <br />
          Dream Setup
        </h1>

        <p
          style={{
            fontSize: "1.3rem",
            marginBottom: "40px",
          }}
        >
          Premium CPUs, GPUs, RAM and SSDs for gamers, creators and
          professionals.
        </p>

        <div
          style={{
            display: "flex",
            gap: "20px",
            justifyContent: "center",
          }}
        >
          <button
            style={{
              background: "#2563eb",
              color: "white",
              border: "none",
              padding: "15px 35px",
              borderRadius: "10px",
              fontSize: "1rem",
              cursor: "pointer",
            }}
          >
            Shop Components
          </button>

          <button
            style={{
              background: "white",
              color: "#111",
              border: "none",
              padding: "15px 35px",
              borderRadius: "10px",
              fontSize: "1rem",
              cursor: "pointer",
            }}
          >
            Explore Builds
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;