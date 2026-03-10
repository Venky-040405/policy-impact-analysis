import express from "express";

const router = express.Router();

router.post("/", async (req, res) => {
  console.log(req.body);

  try {
    const { query } = req.body;
    if (!query) {
      return res.status(400).json({ error: "Query required" });
    }

    const requestOptions = {
      method: "POST",
      headers: {
        "X-API-KEY": process.env.SERPER_KEY,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        q: query,
        gl: "in"
      })
    };

    const response = await fetch("https://google.serper.dev/search", requestOptions);
    const serperData = await response.json();
    /*     console.log(serperData); */


    const policyText = `
Title: ${serperData?.organic?.[0]?.title || ""}
Snippet: ${serperData?.organic?.[0]?.snippet || ""}
`;
    /* res.send(policyText)  */

    const groqResponse = await fetch(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${process.env.GROQ_KEY}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          model: "llama-3.3-70b-versatile",
          response_format: { type: "json_object" },
          messages: [
            {
              role: "user",
              content: `
              Policy Text: ${policyText}
Return ONLY valid JSON. No explanation. No extra text.

JSON Format:
{
  "policy_title": "",
  "policy_category": "",
  "sub_category": "",
  "authority": "",
  "announcement_date": "",
  "main_economic_indicator": "",
  "key_numeric_change": "",
  "impact_level": "",
  "improvement increase or decrease":"",
  "sentiment":"",
  "market_direction": "",
  "economic_strength_score": "",
  "confidence_score": "",
  "short_term_impact": "",
  "long_term_impact": "",
  "affected_sectors": [
    {"sector": "", "impact_type": ""}
  ],
  "overall_sentiment": "",
  "simple_explanation": ""
}

`}]
        })
      })

    const data = await groqResponse.json();

    const result = JSON.parse(data.choices[0].message.content);
    res.status(200).json(result);

  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

/* router.get("/newsapi", async (req, res) => {

  try {
    const API_KEY = "d78E-2GvW8ILDcLmKguH_QWQHmUQEW4crpr6B7SQ4jUd3459"
    const news = await fetch(`https://api.currentsapi.services/v1/search?keywords=policy&apiKey=${API_KEY}`)
    const val = await news.json()
    res.json(val)

  } catch (error) {
    console.log("error")
  }

}) */

//"https://www.nseindia.com/api/quote-equity?symbol=RELIANCE"
router.get("/stocks", async (req, res) => {
  try {
    const response = await fetch("https://www.nseindia.com/api/equity-stockIndices?index=NIFTY%2050"
      , {
        headers: {
          "User-Agent": "Mozilla/5.0",
        },
      }
    );

    const data = await response.json();
    res.send(data)
    /* res.send({
      company: "Reliance",
      price: data.priceInfo.lastPrice,
      change: data.priceInfo.change
    }); */


  } catch (error) {
    console.log(error);

  }
})

router.get("/newsapi", async (req, res) => {
  const requestOptions = {
    method: "GET",
    redirect: "follow"
  };

  try {
    const response = await fetch("https://google.serper.dev/news?q=India+government+policy+OR+RBI+policy+OR+GST+announcement&gl=in&tbs=qdr%3Aw&apiKey=480f9a61855ea08e5e91e31847b8959336605162", requestOptions);
    const result = await response.json();
    res.json(result)
  } catch (error) {
    console.error(error);
  };
  /*  const { query } = req.body
   const requestOptions = {
     method: "POST",
     headers: {
       "X-API-KEY": process.env.SERPER_KEY,
       "Content-Type": "application/json"
     },
     body: JSON.stringify({
       "q": query,
       "gl": "in",
       "tbs": "qdr:w"
     })
   };
 
   const response = await fetch("https://google.serper.dev/news", requestOptions);
   const serperData = await response.json();
   res.send(serperData) */
})
export default router;

