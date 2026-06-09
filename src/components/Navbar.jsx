import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/jnitech-logo.png";

const Navbar = () => {
  return (
    <nav
      style={{
        background: "#0B1120",
        borderBottom: "1px solid #1E293B",
        padding: "8px 40px",
        position: "sticky",
        top: "0",
        zIndex: "1000"
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          position: "relative"
        }}
      >
        {/* Logo */}
        <Link
          to="/"
          style={{
            textDecoration: "none",
            width: "170px",
            display: "flex",
            alignItems: "center"
          }}
        >
          <img
            src={logo}
            alt="JNITECH Logo"
            style={{
              width: "170px",
              height: "auto",
              display: "block"
            }}
          />
        </Link>

        {/* Center Navigation */}
        <div
          style={{
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            gap: "35px"
          }}
        >
          <Link
            to="/"
            style={{
              color: "white",
              textDecoration: "none",
              fontWeight: "500"
            }}
          >
            Home
          </Link>

          <Link
            to="/products"
            style={{
              color: "white",
              textDecoration: "none",
              fontWeight: "500"
            }}
          >
            Products
          </Link>

          <Link
            to="/about"
            style={{
              color: "white",
              textDecoration: "none",
              fontWeight: "500"
            }}
          >
            About
          </Link>

          <Link
            to="/contact"
            style={{
              color: "white",
              textDecoration: "none",
              fontWeight: "500"
            }}
          >
            Contact
          </Link>
        </div>

        {/* Search + Cart */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "15px",
            width: "350px",
            justifyContent: "flex-end"
          }}
        >
          <input
            type="text"
            placeholder="Search Components..."
            style={{
              width: "250px",
              padding: "10px",
              borderRadius: "8px",
              border: "1px solid #334155",
              outline: "none"
            }}
          />

          <button
            style={{
              background: "#00D4FF",
              color: "#0B1120",
              border: "none",
              padding: "10px 20px",
              borderRadius: "10px",
              fontWeight: "bold",
              cursor: "pointer"
            }}
          >
            🛒 Cart
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;