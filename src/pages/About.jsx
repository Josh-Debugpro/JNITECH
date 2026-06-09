import React from "react";

const About = () => {
  return (
    <div
      style={{
        background: "#F8F9FA",
        color: "#111",
      }}
    >
      {/* Hero Section */}

      <div
        style={{
          height: "150px",
          backgroundImage:
            "url('https://images.unsplash.com/photo-1632749042303-7f7a18ed6ff0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(0,0,0,0.65)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <h1
            style={{
              fontSize: "4rem",
              fontWeight: "bold",
              color: "white",
            }}
          >
            About JNITECH
          </h1>

          <p
            style={{
              fontSize: "1.4rem",
              maxWidth: "1000px",
              textAlign: "center",
              color: "white",
            }}
          >
            India's Premium Destination for PC Components,
            Gaming Hardware and Custom PC Builds.
          </p>
        </div>
      </div>

      {/* About Content */}

      <div className="container py-5">

        <div
          className="p-5 mb-5 mx-auto"
          style={{
            background: "#FFFFFF",
            borderRadius: "20px",
            boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
            maxWidth: "900px",
            maxHeight: "300px"
          }}
        >
          <h2 className="mb-4 text-info">
            Who We Are
          </h2>

          <p style={{ fontSize: "1.0rem", lineHeight: "1" }}>
            JNITECH is a next-generation PC hardware marketplace
            dedicated to gamers, creators, software developers,
            engineers, students and tech enthusiasts.
          </p>

          <p style={{ fontSize: "1.0rem", lineHeight: "1" }}>
            We provide authentic CPUs, GPUs, RAM, SSDs,
            motherboards, peripherals and complete custom
            PC solutions from the world's most trusted brands.
          </p>

          <p style={{ fontSize: "1.0rem", lineHeight: "1" }}>
            Whether you're building a budget workstation,
            an esports gaming rig or a high-end AI workstation,
            JNITECH helps you choose the right hardware at
            competitive prices.
          </p>
        </div>

        {/* Stats */}

        <div className="row text-center mb-5"
        style={{ maxWidth: "1050px", margin: "0 auto" }}>

          <div className="col-md-2 mx-auto">
            <h1 className="text-info">10K+</h1>
            <p>Happy Customers</p>
          </div>

          <div className="col-md-3">
            <h1 className="text-info">500+</h1>
            <p>PC Components</p>
          </div>

          <div className="col-md-3">
            <h1 className="text-info">100+</h1>
            <p>Brands</p>
          </div>

          <div className="col-md-3">
            <h1 className="text-info">24/7</h1>
            <p>Support</p>
          </div>

        </div>

        {/* Mission & Vision */}

        <div className="row g-4">

          <div className="col-md-6">
            <div
              className="p-4 h-100"
              style={{
                background: "#FFFFFF",
                borderRadius: "15px",
              }}
            >
              <h2 className="text-info">
                🎯 Our Mission
              </h2>

              <p style={{ fontSize: "1.1rem" }}>
                To provide premium-quality computer hardware,
                transparent pricing and exceptional customer
                service to every PC enthusiast.
              </p>
            </div>
          </div>

          <div className="col-md-6">
            <div
              className="p-4 h-100"
              style={{
                background: "#FFFFFF",
                borderRadius: "15px",
              }}
            >
              <h2 className="text-info">
                🚀 Our Vision
              </h2>

              <p style={{ fontSize: "1.1rem" }}>
                To become India's most trusted online
                destination for gaming and professional
                computer hardware.
              </p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default About;