const products = [
  { id: 1, name: "Ryzen 7 9800X 3D", category: "CPU", desc: "AMD Gaming Processor", price: "51,999", image: "https://i.pcmag.com/imagery/reviews/07f5t8ScFJsO1VhW4NJU6xW-1.fit_lim.size_1050x591.v1730756768.jpg" },
  { id: 2, name: "RTX 5070", category: "GPU", desc: "Latest NVIDIA Graphics Card", price: "₹72,999", image: "https://cdn.wccftech.com/wp-content/uploads/2025/01/geforce-rtx-5070-3840x2160-Custom.jpg" },
  { id: 3, name: "Corsair Vengeance", category: "RAM", desc: "32GB RGB DDR5 Performance RAM", price: "₹50,000", image: "https://www.corsair.com/wp-content/uploads/2024/11/CUDIMM_VENGEANCE_Image1.png" },
  { id: 4, name: "Samsung 990 Pro", category: "SSD", desc: "Fast NVMe 1TB SSD ", price: "₹24,999", image: "https://i.extremetech.com/imagery/content-types/01jZE0nrkvcbzqjgSLrZMTV/hero-image.fit_lim.v1678673134.jpg?w=400&h=400&fit=crop" },
]

const Products = () => {
  return (
    <div style={{ backgroundColor: '#f9f9f9', padding: '80px 48px' }}>
      <div style={{ textAlign: 'center', marginBottom: '48px' }}>
        <h2 style={{ color: '#111', fontWeight: '800', fontSize: '2rem', letterSpacing: '-1px', marginBottom: '8px' }}>Trending Now</h2>
        <p style={{ color: '#888', fontSize: '0.95rem' }}>The components everyone is talking about.</p>
      </div>

      <div className="row g-4">
        {products.map(product => (
          <div className="col-md-3" key={product.id}>
            <div
              style={{ backgroundColor: '#fff', borderRadius: '12px', overflow: 'hidden', cursor: 'pointer', transition: 'box-shadow 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.boxShadow = '0 8px 30px rgba(0,0,0,0.1)'}
              onMouseLeave={e => e.currentTarget.style.boxShadow = 'none'}
            >
              <div style={{ overflow: 'hidden' }}>
                <img
                  src={product.image}
                  alt={product.name}
                  style={{ width: '100%', height: '260px', objectFit: 'contain', transition: 'transform 0.3s' }}
                  onMouseEnter={e => e.target.style.transform = 'scale(1.04)'}
                  onMouseLeave={e => e.target.style.transform = 'scale(1)'}
                />
              </div>
              <div style={{ padding: '16px' }}>
                <p style={{ color: '#e91e8c', fontSize: '0.75rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '4px' }}>{product.category}</p>
                <h6 style={{ color: '#111', fontWeight: '700', marginBottom: '4px', fontSize: '1rem' }}>{product.name}</h6>
                <p style={{ color: '#888', fontSize: '0.85rem', marginBottom: '8px' }}>{product.desc}</p>
                <p style={{ color: '#111', fontWeight: '700', fontSize: '1.05rem', marginBottom: '12px' }}>{product.price}</p>
                <button style={{ width: '100%', backgroundColor: '#111', color: '#fff', border: 'none', borderRadius: '6px', padding: '10px', fontWeight: '600', fontSize: '0.85rem', cursor: 'pointer' }}>
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Products