import React from "react";
import { Link } from "react-router-dom";

const categories = [
  { name: "CPU", icon: "⚙️", desc: "Processors" },
  { name: "GPU", icon: "🎯", desc: "Graphics Cards" },
  { name: "RAM", icon: "🔋", desc: "Memory" },
  { name: "SSD", icon: "💽", desc: "Storage" },
];

const Categories = () => {
  return (
    <section
      style={{
        background: "#050816",
        padding: "40px 20px",
      }}
    >
      <h2
        className="text-center fw-bold mb-4"
        style={{
          color: "#00D4FF",
          fontSize: "2.2rem",
        }}
      >
        Shop by Category
      </h2>

      <div className="container">
        <div className="row justify-content-center g-3">

          {categories.map((cat) => (
            <div
              className="col-lg-2 col-md-3 col-sm-6 col-6"
              key={cat.name}
            >
              <Link
                to={`/${cat.name.toLowerCase()}`}
                style={{ textDecoration: "none" }}
              >
                <div
                  style={{
                    background: "#111827",
                    borderRadius: "14px",
                    padding: "20px 10px",
                    textAlign: "center",
                    border: "1px solid rgba(0,212,255,0.15)",
                    transition: "0.3s",
                    height: "130px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform =
                      "translateY(-5px)";
                    e.currentTarget.style.boxShadow =
                      "0 0 20px rgba(0,212,255,0.25)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform =
                      "translateY(0)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <div
                    style={{
                      fontSize: "1.8rem",
                      marginBottom: "8px",
                    }}
                  >
                    {cat.icon}
                  </div>

                  <h5
                    style={{
                      color: "white",
                      fontWeight: "700",
                      marginBottom: "4px",
                      fontSize: "1rem",
                    }}
                  >
                    {cat.name}
                  </h5>

                  <p
                    style={{
                      color: "#9CA3AF",
                      fontSize: "0.75rem",
                      margin: 0,
                    }}
                  >
                    {cat.desc}
                  </p>
                </div>
              </Link>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Categories;