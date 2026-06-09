import React from "react";

const products = [
  {
    name: "256GB SSD",
    price: "₹2,499",
    image:
      "https://elitehubs.com/cdn/shop/products/mz-v7s250bw-image-main-600x600-1-2.jpg?v=1683969629&width=533",
  },
  {
    name: "512GB SSD",
    price: "₹6,999",
    image:
      "https://elitehubs.com/cdn/shop/products/samsung-970-pro-nvme-m2-ssd-01-600x600-1-1.webp?v=1683969641&width=533",
  },
  {
    name: "1TB SSD",
    price: "₹24,999",
    image:
      "https://www.pcstudio.in/wp-content/uploads/2025/01/Samsung-990-Pro-Nvme-M2-Ssd-1TB-1-1.webp",
  },
  {
    name: "2TB SSD",
    price: "₹64,999",
    image:
      "https://m.media-amazon.com/images/I/71ByVZ1x2vL.jpg",
  },
];

const SSDPage = () => {
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
          💾 SSD Collection
        </h1>

        <p style={{ color: "#E5E7EB" }}>
          High-speed NVMe and SATA SSD storage solutions.
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

export default SSDPage;