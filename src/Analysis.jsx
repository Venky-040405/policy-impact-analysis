import React,{useState}from 'react'
import "./Analysis.css"


const Analysis = () => {
    const [query, setQuery] = useState("");
    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(false);
  
    const analyzePolicy = async () => {
      setLoading(true);
  
      const response = await fetch("http://localhost:5000/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query }),
      });
  
      const data = await response.json();
      setResult(data);
      setLoading(false);
    };
  
    const getImpactColor = (level) => {
      if (level === "High") return "red";
      if (level === "Medium") return "orange";
      if (level === "Low") return "green";
      return "gray";
    };
  
    return (
      <div className="container">
        <h1>📊 AI Policy Impact Predictor</h1>
  
        <div className="search-box">
          <input
            type="text"
            placeholder="Enter policy topic (e.g. GST increase on fuel)"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button onClick={analyzePolicy}>Analyze</button>
        </div>
  
        {loading && <p className="loading">Analyzing Policy...</p>}
  
        {result && (
          <div className="card">
  
            <h2>{result.policy_title}</h2>
            <p className="category">
              {result.policy_category} | {result.sub_category}
            </p>
  
            <div className="grid">
  
              <div className="info-box">
                <strong>Authority:</strong> {result.authority}
              </div>
  
              <div className="info-box">
                <strong>Date:</strong> {result.announcement_date}
              </div>
  
              <div className="info-box">
                <strong>Indicator:</strong> {result.main_economic_indicator}
              </div>
  
              <div className="info-box">
                <strong>Change:</strong> {result.key_numeric_change}
              </div>
  
            </div>
  
            <div className="impact-section">
              <span
                className="impact-badge"
                style={{ backgroundColor: getImpactColor(result.impact_level) }}
              >
                {result.impact_level} Impact
              </span>
  
              <span className="market-direction">
                📈 Market: {result.market_direction}
              </span>
            </div>
            <div className="analysis-row">
  
              <div className="analysis-box">
                <h4>Market Improvement</h4>
                <span
                  className={`badge ${result["improvement increase or decrease"] === "Increase"
                      ? "positive"
                      : result["improvement increase or decrease"] === "Decrease"
                        ? "negative"
                        : "neutral"
                    }`}
                >
                  {result["improvement increase or decrease"]}
                </span>
              </div>
  
              <div className="analysis-box">
                <h4>Overall Sentiment</h4>
                <span
                  className={`badge ${result.sentiment === "Positive"
                      ? "positive"
                      : result.sentiment === "Negative"
                        ? "negative"
                        : "neutral"
                    }`}
                >
                  {result.sentiment}
                </span>
              </div>
  
            </div>
  
            <div className="progress-section">
              <p>Economic Strength Score</p>
              <div className="progress-bar">
                <div
                  className="progress"
                  style={{ width: `${result.economic_strength_score}%` }}
                ></div>
              </div>
  
              <p>Confidence Score</p>
              <div className="progress-bar">
                <div
                  className="progress blue"
                  style={{ width: `${result.confidence_score}%` }}
                ></div>
              </div>
            </div>
  
            <div className="sector-section">
              <h3>Affected Sectors</h3>
              {result.affected_sectors.map((sector, index) => (
                <div key={index} className="sector-item">
                  {sector.sector} → {sector.impact_type}
                </div>
              ))}
            </div>
  
            <div className="explanation">
              <h3>Short Term Impact</h3>
              <p>{result.short_term_impact}</p>
  
              <h3>Long Term Impact</h3>
              <p>{result.long_term_impact}</p>
  
              <h3>Simple Explanation</h3>
              <p>{result.simple_explanation}</p>
            </div>
  
  
  
          </div>
        )}
      </div>
    );
}



export default Analysis