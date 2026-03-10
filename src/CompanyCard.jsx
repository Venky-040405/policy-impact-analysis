import React from "react";

function CompanyCard({company}){

const color = company.profit === "Increase" ? "green" : "red";

return(

<div className="company-card">

<h3>{company.name}</h3>

<p>Price: {company.price}</p>

<p>Market Change: {company.change}</p>

<p style={{color:color}}>
Profit Trend: {company.profit}
</p>

</div>

);

}

export default CompanyCard;