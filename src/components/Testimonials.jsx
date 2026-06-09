import React from "react";

const reviews = [
  {
    name: "Arjun S.",
    review: "Amazing service and fast delivery. My RTX arrived in just 2 days. Packaging was excellent and the product was genuine.",
    rating: "⭐⭐⭐⭐⭐",
    avatar: "https://png.pngtree.com/png-vector/20231019/ourmid/pngtree-user-profile-avatar-png-image_10211471.png"
  },
  {
    name: "Priya M.",
    review: "Best PC components store in India. Great prices, genuine products, and excellent customer support.",
    rating: "⭐⭐⭐⭐⭐",
    avatar: "https://img.magnific.com/premium-vector/young-man-avatar-character-due-avatar-man-vector-icon-cartoon-illustration_1186924-4438.jpg?semt=ais_hybrid&w=740&q=80"
  },
  {
    name: "Rahul K.",
    review: "Highly recommended for gamers. Build quality is top-notch and delivery was faster than expected.",
    rating: "⭐⭐⭐⭐⭐",
    avatar: "https://png.pngtree.com/png-vector/20231019/ourmid/pngtree-user-profile-avatar-png-image_10211469.png"
  }
];

const Testimonials = () => {
  return (
    <section
      style={{
        background: "#050816",
        paddingTop: "30px",
        paddingBottom: "60px"
      }}
    >
      <div className="container">

        <h2
          className="text-center fw-bold mb-5"
          style={{
            color: "#00e5ff",
            fontSize: "2.8rem"
          }}
        >
          💬 Customer Reviews
        </h2>

        <div className="row g-4 justify-content-center">

          {reviews.map((r, i) => (
            <div className="col-lg-4 col-md-6" key={i}>
              <div
                style={{
                  background: "#111827",
                  borderRadius: "20px",
                  padding: "30px",
                  textAlign: "center",
                  border: "1px solid rgba(0,229,255,0.2)",
                  boxShadow: "0 0 20px rgba(0,229,255,0.1)"
                }}
              >
                <img
                  src={r.avatar}
                  alt={r.name}
                  style={{
                    width: "90px",
                    height: "90px",
                    borderRadius: "50%",
                    objectFit: "cover",
                    border: "3px solid #00e5ff",
                    marginBottom: "15px"
                  }}
                />

                <h4
                  style={{
                    color: "#ffffff",
                    fontWeight: "700"
                  }}
                >
                  {r.name}
                </h4>

                <p
                  style={{
                    color: "#00e5ff",
                    marginBottom: "10px"
                  }}
                >
                  ✔ Verified Buyer
                </p>

                <div
                  style={{
                    fontSize: "20px",
                    marginBottom: "15px"
                  }}
                >
                  {r.rating}
                </div>

                <p
                  style={{
                    color: "#d1d5db",
                    lineHeight: "1.8"
                  }}
                >
                  "{r.review}"
                </p>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Testimonials;