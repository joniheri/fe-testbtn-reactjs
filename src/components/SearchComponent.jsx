import { useState, useEffect } from "react";

const products = [
  { name: "Laptop", price: 1200 },
  { name: "Smartphone", price: 800 },
  { name: "Tablet", price: 600 },
  { name: "Laptop Gaming", price: 1500 },
  { name: "Smartwatch", price: 300 },
];
export default function SearchComponent() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    // SearchProduct
    const results = products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
    // End Search prodict
  }, [searchTerm]);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="container mt-4">
      <h2>Pencarian Produk</h2>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Cari nama produk..."
          value={searchTerm}
          onChange={handleChange}
        />
      </div>

      <h3>Hasil Pencarian:</h3>
      {searchResults.length > 0 ? (
        <ul className="list-group">
          {searchResults.map((product, index) => (
            <li
              key={index}
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              <span>{product.name}</span>
              <span className="badge bg-primary rounded-pill">
                ${product.price}
              </span>
            </li>
          ))}
        </ul>
      ) : (
        <p>
          {searchTerm
            ? "Tidak ada produk yang ditemukan."
            : "Masukkan kata kunci untuk mencari produk."}
        </p>
      )}
    </div>
  );
}
