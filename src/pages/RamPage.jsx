import React from "react";

const products = [
  {
    name: "8GB DDR5",
    price: "₹6,999",
    image:
      "https://cdn.idealo.com/folder/Product/205292/7/205292709/s4_produktbild_gross_2/corsair-vengeance-rgb-96gb-kit-ddr5-7200-cl40-cmh96gx5m2b7200c40.jpg",
  },
  {
    name: "16GB DDR5",
    price: "₹9,999",
    image:
      "https://img.modxcomputers.com/modx/1753703155708-Corsair-Vengeance-DDR5-16GB-16GBx1-5200MHz-Black-Desktop-RAM.webp",
  },
  {
    name: "32GB DDR5",
    price: "₹50,000",
    image:
      "https://elitehubs.com/cdn/shop/files/Corsair-Vengeance-RGB-64GB-32GBx2-DDR5-6000MHz-Desktop-Ram-Black-2.jpg?v=1695326662&width=533",
  },
  {
    name: "64GB DDR5",
    price: "₹1,25,000",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1mbiNrzikLM9sPVsl04-BiSAuMr2qh1BMsQ&s",
  },
];

const RAMPage = () => {
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
          ⚡ RAM Collection
        </h1>

        <p style={{ color: "#E5E7EB" }}>
          High-performance DDR5 memory for gaming and productivity.
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

export default RAMPage;