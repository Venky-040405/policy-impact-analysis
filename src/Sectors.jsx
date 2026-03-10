import React from 'react'
import PolicyCard from "./PolicyCard";
import CompanyCard from "./CompanyCard";
import MarketStatus from "./MarketStatus";

import "./Appss.css";

const Sectors = () => {
const policy = {
name: "RBI Repo Rate Cut",
sector: "Banking",
impact: "Positive"
};

const companies = [
{
name: "HDFC Bank",
price: "₹1680",
change: "+2.1%",
profit: "Increase"
},
{
name: "ICICI Bank",
price: "₹1102",
change: "+1.5%",
profit: "Increase"
}
];

return (

<div className="container">

<h1>Policy Impact Dashboard</h1>

<PolicyCard policy={policy}/>

<div className="company-section">

{companies.map((company,index)=>(
<CompanyCard key={index} company={company}/>
))}

</div>

<MarketStatus/>

</div>

);



}

export default Sectors