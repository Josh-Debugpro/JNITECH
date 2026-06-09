import React from "react";

const products = [
  {
    name: "AMD Ryzen 7 9800X3D",
    price: "₹51,999",
    image: "https://www.amd.com/content/dam/amd/en/images/products/processors/ryzen/2900400-ryzen-7-9800x3d-product.jpg"
  },
  {
    name: "AMD Ryzen 9 9950X3D",
    price: "₹76,999",
    image: "https://www.amd.com/content/dam/amd/en/images/products/processors/ryzen/4270752-amd-ryzen-9000-series-x3d2/4270752-amd-ryzen-9000-series-x3d2-product-1.jpg"
  },
  {
    name: "Intel Core i7-14700K",
    price: "₹45,999",
    image: "https://elitehubs.com/cdn/shop/files/intel-core-i7-14700kf-1_result_cc55683d-9863-4536-b444-1c1a05ccf527.jpg?v=1697563142"
  },
  {
    name: "Intel Core i9-14900KS",
    price: "₹71,999",
    image: "https://vishalperipherals.com/cdn/shop/files/61jRMCAX4CL._SL1500__1_3f6ab9e2-fc44-4e34-a77a-6ee8585bd89f.jpg?v=1756536240"
  }
];

const CpuPage = () => {
  return (
    <>
      {/* Dark Banner */}
      <div
        style={{
          background: "#0B1120",
          padding: "80px 0",
          textAlign: "center"
        }}
      >
        <h1
          style={{
            color: "#00E5FF",
            fontWeight: "bold",
            fontSize: "3rem"
          }}
        >
          CPU Collection
        </h1>

        <p style={{ color: "#E5E7EB" }}>
          Discover the latest AMD and Intel processors.
        </p>
      </div>

      {/* Product Section */}
      <div
        className="container-fluid py-5"
        style={{
          background: "#F8F9FA",
          minHeight: "100vh"
        }}
      >
        <div className="row g-4 justify-content-center">
          {products.map((item, index) => (
            <div className="col-md-3" key={index}>
              <div
                className="card h-100"
                style={{
                  background: "#FFFFFF",
                  border: "none",
                  borderRadius: "15px",
                  overflow: "hidden",
                  boxShadow: "0 4px 15px rgba(0,0,0,0.08)"
                }}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  style={{
                    height: "300px",
                    objectFit: "contain",
                    padding: "15px",
                    background: "#fff"
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

export default CpuPage;