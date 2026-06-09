import { useState } from "react";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const inputStyle = {
    backgroundColor: "#ffffff",
    border: "1px solid #D1D5DB",
    borderRadius: "8px",
    color: "#111111",
    padding: "12px",
    width: "100%",
    outline: "none",
  };

  return (
    <>
      {/* Hero Banner */}
      <div
        style={{
          height: "150px",
          backgroundImage:
            "url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop')",
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
              color: "#00E5FF",
            }}
          >
            Contact Us
          </h1>

          <p
            style={{
              color: "white",
              fontSize: "1.2rem",
              textAlign: "center",
              maxWidth: "800px",
            }}
          >
            Have questions about products, orders, or custom PC builds?
            We'd love to hear from you.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div
        style={{
          backgroundColor: "#F8F9FA",
          minHeight: "100vh",
          padding: "35px 0",
        }}
      >
        <div className="container" style={{ maxWidth: "700px" }}>
          {submitted ? (
            <div
              className="text-center p-5"
              style={{
                background: "#fff",
                borderRadius: "16px",
                boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
              }}
            >
              <div style={{ fontSize: "4rem" }}>✅</div>
              <h3 className="mt-3">Message Sent!</h3>
              <p style={{ color: "#666" }}>
                We'll get back to you within 24 hours.
              </p>
            </div>
          ) : (
            <div
              className="p-4"
              style={{
                backgroundColor: "#E5E7EB",
                marginTop: "-10px",
                borderRadius: "16px",
                boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
              }}
            >
              <div className="mb-3">
                <label style={{ color: "#555" }}>Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  style={inputStyle}
                />
              </div>

              <div className="mb-3">
                <label style={{ color: "#555" }}>Email</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  style={inputStyle}
                />
              </div>

              <div className="mb-4">
                <label style={{ color: "#555" }}>Message</label>
                <textarea
                  rows={5}
                  placeholder="Write your message here..."
                  style={{
                    ...inputStyle,
                    resize: "none",
                  }}
                />
              </div>

              <button
                className="w-100 fw-bold py-2"
                style={{
                  backgroundColor: "#00E5FF",
                  color: "#111",
                  border: "none",
                  borderRadius: "8px",
                  fontSize: "1rem",
                  cursor: "pointer",
                }}
                onClick={() => setSubmitted(true)}
              >
                Send Message 🚀
              </button>
            </div>
          )}

          <div
            className="text-center mt-3"
            style={{
              color: "#555",
            }}
          >
            <h4 style={{ color: "#111" }}>Contact Information</h4>
            <p>Email: support@JNITECH.com</p>
            <p>Phone: +91 98765 43210</p>
            <p>Mumbai, Maharashtra, India</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;