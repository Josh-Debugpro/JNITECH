import React from "react";

const products = [
  {
    name: "GeForce RTX 5070",
    price: "₹72,999",
    image:
      "https://5.imimg.com/data5/SELLER/Default/2025/6/522753788/MS/LM/NT/221201186/nvidia-geforce-rtx-5070-gpu-12gb-gddr7-graphics-card-500x500.jpg",
  },
  {
    name: "MSI RTX 5070 Ti",
    price: "₹1,46,799",
    image:
      "https://www.nvidia.com/content/dam/en-zz/Solutions/geforce/graphic-cards/50-series/5070-family/geforce-rtx-5070-ti-og-image.jpg",
  },
  {
    name: "GeForce RTX 5080",
    price: "₹2,10,000",
    image:
      "https://www.nvidia.com/content/dam/en-zz/Solutions/geforce/graphic-cards/50-series/rtx-5080/geforce-rtx-5080-og-1200x630.jpg",
  },
  {
    name: "MSI GeForce RTX 5090",
    price: "₹8,74,000",
    image:
      "https://www.nvidia.com/content/dam/en-zz/Solutions/geforce/graphic-cards/50-series/rtx-5090/geforce-rtx-5090-learn-more-og-1200x630.jpg",
  },
];

const GPUPage = () => {
  return (
    <>
      {/* Banner */}
      <div
        style={{
          background: "#0B1120",
          padding: "80px 0",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            color: "#00E5FF",
            fontWeight: "bold",
            fontSize: "3rem",
          }}
        >
          🎮 GPU Collection
        </h1>

        <p style={{ color: "#E5E7EB" }}>
          Explore the latest NVIDIA GeForce RTX graphics cards.
        </p>
      </div>

      {/* Products */}
      <div
        style={{
          background: "#F8F9FA",
          minHeight: "100vh",
          padding: "50px",
        }}
      >
        <div className="row g-4">
          {products.map((item) => (
            <div className="col-md-3" key={item.name}>
              <div
                className="card h-100"
                style={{
                  background: "#FFFFFF",
                  border: "none",
                  borderRadius: "15px",
                  overflow: "hidden",
                  boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
                }}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  style={{
                    height: "250px",
                    objectFit: "contain",
                    background: "#fff",
                    padding: "15px",
                  }}
                />

                <div className="card-body text-center">
                  <h5 style={{ color: "#111" }}>
                    {item.name}
                  </h5>

                  <h4 style={{ color: "#00B8D9" }}>
                    {item.price}
                  </h4>

                  <button className="btn btn-info mt-2">
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default GPUPage;