import React, { useState } from "react";
import "./Appss.css";

function Sectors() {

  const [sector, setSector] = useState("");
  const [stocks, setStocks] = useState([]);
  const [loading, setLoading] = useState(false);

  const searchSector = async () => {

    if (!sector) {
      alert("Please select a sector");
      return;
    }

    try {

      setLoading(true);

      const response = await fetch(
        `http://localhost:5000/sector/${sector}`
      );

      const data = await response.json();

      setStocks(data.data);

    } catch (error) {

      console.log("Error fetching data:", error);

    } finally {

      setLoading(false);

    }
  };

  return (

    <div className="sector-page">

      <h1>Sector Stock Analyzer</h1>

      <div className="search-box">

        <select
          value={sector}
          onChange={(e) => setSector(e.target.value)}
        >
          <option value="">Select Sector</option>
          <option value="banking">Banking</option>
          <option value="it">IT</option>
          <option value="energy">Energy</option>
          <option value="automobile">Automobile</option>
        </select>

        <button
          onClick={searchSector}
          disabled={loading}
        >
          {loading ? "Loading..." : "Search"}
        </button>

      </div>

      {/* Loading */}

      {loading && <p className="loading">Fetching market data...</p>}

      {/* No Data */}

      {!loading && stocks.length === 0 && (
        <p>No stock data available</p>
      )}

      {/* Stock Cards */}

      <div className="stock-container">

        {stocks.map((stock, index) => (

          <div key={index} className="stock-card">

            <h3>{stock.company}</h3>

            <p className="price">₹ {stock.price}</p>

            <p>Change: {stock.change}</p>

            <span className={`badge ${stock.suggestion}`}>
              {stock.suggestion}
            </span>

          </div>

        ))}

      </div>

    </div>
  );
}

export default Sectors;